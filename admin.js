const categories = [
  "分类打包机",
  "混杂打包机",
  "矿车堆分类",
  "分盒器",
  "整流器",
  "矿车分流",
  "多物品分类",
  "大宗单品",
  "普通单品",
  "编码单品",
  "仓库成品",
  "编码器",
  "解码器",
  "编码处理",
  "盒流处理",
  "合成站",
  "自动合成",
];

let token = localStorage.getItem("redstoneAdminToken") || "";
let works = [];
let activeId = "";

const uploadLimits = {
  images: 10 * 1024 * 1024,
  downloads: 50 * 1024 * 1024,
};

const loginPanel = document.querySelector("#loginPanel");
const adminPanel = document.querySelector("#adminPanel");
const loginButton = document.querySelector("#loginButton");
const tokenInput = document.querySelector("#tokenInput");
const loginMessage = document.querySelector("#loginMessage");
const workList = document.querySelector("#workList");
const workForm = document.querySelector("#workForm");
const formMessage = document.querySelector("#formMessage");
const editorTitle = document.querySelector("#editorTitle");
const deleteButton = document.querySelector("#deleteButton");
const newButton = document.querySelector("#newButton");
const categoryInput = document.querySelector("#category");

const fields = {
  id: document.querySelector("#workId"),
  title: document.querySelector("#title"),
  category: categoryInput,
  tags: document.querySelector("#tags"),
  summary: document.querySelector("#summary"),
  intro: document.querySelector("#intro"),
  stats: document.querySelector("#stats"),
  image: document.querySelector("#image"),
  download: document.querySelector("#download"),
  imageFile: document.querySelector("#imageFile"),
  downloadFile: document.querySelector("#downloadFile"),
};

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "未知大小";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

categoryInput.innerHTML = categories.map((name) => `<option value="${name}">${name}</option>`).join("");
tokenInput.value = token;

function setMessage(target, message) {
  target.textContent = message;
}

function setUploadProgress(kind, percent, detail = "") {
  const bar = document.querySelector(`#${kind}Progress`);
  const fill = document.querySelector(`#${kind}ProgressFill`);
  const text = document.querySelector(`#${kind}ProgressText`);
  if (!bar || !fill || !text) return;

  bar.hidden = false;
  fill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  text.textContent = detail || `${Math.round(percent)}%`;
}

function resetUploadProgress(kind) {
  const bar = document.querySelector(`#${kind}Progress`);
  const fill = document.querySelector(`#${kind}ProgressFill`);
  const text = document.querySelector(`#${kind}ProgressText`);
  if (!bar || !fill || !text) return;

  bar.hidden = true;
  fill.style.width = "0%";
  text.textContent = "";
}

function headers() {
  return {
    "content-type": "application/json",
    "x-admin-token": token,
  };
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "请求失败。");
  }
  return data;
}

function showAdmin() {
  loginPanel.hidden = true;
  adminPanel.hidden = false;
}

function showLogin() {
  loginPanel.hidden = false;
  adminPanel.hidden = true;
}

function renderList() {
  workList.innerHTML = works.length
    ? works.map((work) => `
      <button class="admin-work-item ${work.id === activeId ? "active" : ""}" data-id="${work.id}">
        <strong>${work.title}</strong>
        <span>${work.category}</span>
      </button>
    `).join("")
    : `<p class="empty">还没有作品，先新建一个。</p>`;
}

function clearForm() {
  activeId = "";
  editorTitle.textContent = "新建作品";
  fields.id.value = "";
  fields.title.value = "";
  fields.category.value = categories[0];
  fields.tags.value = "";
  fields.summary.value = "";
  fields.intro.value = "";
  fields.stats.value = "";
  fields.image.value = "";
  fields.download.value = "";
  fields.imageFile.value = "";
  fields.downloadFile.value = "";
  deleteButton.hidden = true;
  renderList();
}

function fillForm(work) {
  activeId = work.id;
  editorTitle.textContent = work.title;
  fields.id.value = work.id;
  fields.title.value = work.title || "";
  fields.category.value = work.category || categories[0];
  fields.tags.value = (work.tags || []).join(", ");
  fields.summary.value = work.summary || "";
  fields.intro.value = work.intro || "";
  fields.stats.value = (work.stats || []).join(", ");
  fields.image.value = work.image || "";
  fields.download.value = work.download || "";
  fields.imageFile.value = "";
  fields.downloadFile.value = "";
  deleteButton.hidden = false;
  renderList();
}

function formToWork() {
  return {
    id: fields.id.value,
    title: fields.title.value,
    category: fields.category.value,
    tags: fields.tags.value.split(/[,，]/).map((item) => item.trim()).filter(Boolean),
    summary: fields.summary.value,
    intro: fields.intro.value,
    stats: fields.stats.value.split(/[,，]/).map((item) => item.trim()).filter(Boolean),
    image: fields.image.value,
    download: fields.download.value,
  };
}

async function loadWorks() {
  const data = await requestJson("/api/admin/works", {
    headers: { "x-admin-token": token },
  });
  works = data.works || [];
  showAdmin();
  if (works[0]) fillForm(works[0]);
  else clearForm();
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("图片压缩失败，请换一张图片试试。"));
    }, type, quality);
  });
}

async function compressImage(file) {
  if (!file.type.startsWith("image/") || file.type === "image/gif" || file.size <= 2 * 1024 * 1024) {
    return file;
  }

  const imageUrl = URL.createObjectURL(file);
  const image = new Image();
  image.src = imageUrl;
  await image.decode();
  URL.revokeObjectURL(imageUrl);

  const maxSide = 1800;
  const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const blob = await canvasToBlob(canvas, "image/jpeg", 0.82);
  if (blob.size >= file.size) return file;

  const cleanName = file.name.replace(/\.[^.]+$/, "");
  return new File([blob], `${cleanName}.jpg`, { type: "image/jpeg" });
}

function uploadWithProgress({ file, kind, onProgress }) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("kind", kind);
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/admin/upload");
    xhr.timeout = 120000;
    xhr.setRequestHeader("x-admin-token", token);
    xhr.upload.addEventListener("progress", (event) => {
      if (!event.lengthComputable) {
        onProgress(8, `正在上传 ${formatBytes(file.size)}`);
        return;
      }
      onProgress((event.loaded / event.total) * 92, `${Math.round((event.loaded / event.total) * 100)}%`);
    });
    xhr.addEventListener("load", () => {
      let data = {};
      try {
        data = JSON.parse(xhr.responseText || "{}");
      } catch (_error) {
        reject(new Error("服务器返回了无法识别的上传结果。"));
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        onProgress(100, "上传完成");
        resolve(data);
      } else {
        reject(new Error(data.error || `上传失败，状态码 ${xhr.status}`));
      }
    });
    xhr.addEventListener("timeout", () => reject(new Error("上传超时，请检查网络或换一个更小的文件。")));
    xhr.addEventListener("error", () => reject(new Error("上传连接失败，请稍后重试。")));
    xhr.send(formData);
  });
}

async function uploadFile(input, kind) {
  let file = input.files?.[0];
  if (!file) throw new Error("请先选择一个文件。");

  resetUploadProgress(kind);

  if (kind === "images") {
    setUploadProgress(kind, 3, "正在压缩图片...");
    file = await compressImage(file);
  }

  const limit = uploadLimits[kind];
  if (file.size > limit) {
    throw new Error(`${kind === "images" ? "封面图" : "下载文件"}不能超过 ${formatBytes(limit)}，当前文件 ${formatBytes(file.size)}。`);
  }

  setUploadProgress(kind, 5, `准备上传 ${formatBytes(file.size)}`);
  return uploadWithProgress({
    file,
    kind,
    onProgress: (percent, detail) => setUploadProgress(kind, percent, detail),
  });
}

loginButton.addEventListener("click", async () => {
  token = tokenInput.value.trim();
  localStorage.setItem("redstoneAdminToken", token);
  setMessage(loginMessage, "正在进入后台...");
  try {
    await loadWorks();
    setMessage(loginMessage, "");
  } catch (error) {
    showLogin();
    setMessage(loginMessage, error.message);
  }
});

workList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-work-item");
  if (!button) return;
  const work = works.find((item) => item.id === button.dataset.id);
  if (work) fillForm(work);
});

newButton.addEventListener("click", clearForm);

workForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage(formMessage, "正在保存...");
  try {
    const data = await requestJson("/api/admin/works", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(formToWork()),
    });
    works = data.works || [];
    fillForm(data.work);
    setMessage(formMessage, "已保存，前台会自动读取最新内容。");
  } catch (error) {
    setMessage(formMessage, error.message);
  }
});

deleteButton.addEventListener("click", async () => {
  if (!activeId || !confirm("确定删除这个作品吗？")) return;
  setMessage(formMessage, "正在删除...");
  try {
    const data = await requestJson(`/api/admin/works?id=${encodeURIComponent(activeId)}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    });
    works = data.works || [];
    if (works[0]) fillForm(works[0]);
    else clearForm();
    setMessage(formMessage, "已删除。");
  } catch (error) {
    setMessage(formMessage, error.message);
  }
});

document.querySelector("#uploadImageButton").addEventListener("click", async () => {
  setMessage(formMessage, "正在上传封面...");
  try {
    const data = await uploadFile(fields.imageFile, "images");
    fields.image.value = data.url;
    setMessage(formMessage, `封面已上传：${data.fileName}（${formatBytes(data.size)}），记得保存作品。`);
  } catch (error) {
    setMessage(formMessage, error.message);
  }
});

document.querySelector("#uploadDownloadButton").addEventListener("click", async () => {
  setMessage(formMessage, "正在上传下载文件...");
  try {
    const data = await uploadFile(fields.downloadFile, "downloads");
    fields.download.value = data.url;
    setMessage(formMessage, `下载文件已上传：${data.fileName}（${formatBytes(data.size)}），记得保存作品。`);
  } catch (error) {
    setMessage(formMessage, error.message);
  }
});

if (token) {
  loadWorks().catch(() => showLogin());
} else {
  showLogin();
}
