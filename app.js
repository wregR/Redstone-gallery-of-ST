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
  "自动合成"
];

let works = [
  {
    id: "sorter-packer-a1",
    title: "16速分类打包机 A1",
    category: "分类打包机",
    tags: ["16速", "可堆叠", "箱盒输出"],
    summary: "适合主仓入口的稳定分类打包单元。",
    intro: "单片模块化分类打包机，面向常规仓库入口设计。输入端预留缓冲，输出端支持直接接入盒流或箱盒存储，适合扩展成多列阵列。",
    stats: ["体积 11x8x7", "版本 1.20+", "速率 16x"],
    download: "downloads/sorter-packer-a1.zip",
    color: "linear-gradient(90deg, #787d76 0 30%, #c14639 30% 38%, #8b9384 38% 70%, #c99c44 70%)"
  },
  {
    id: "sorter-packer-compact",
    title: "紧凑分类打包机",
    category: "分类打包机",
    tags: ["紧凑", "入门", "低材料"],
    summary: "小体积方案，适合生存前期快速部署。",
    intro: "这套方案牺牲部分维护空间换取更小体积，适合资源有限时使用。分类、合盒、输出在同一侧完成，方便贴墙安装。",
    stats: ["体积 8x7x6", "版本 1.20+", "速率 8x"],
    download: "downloads/sorter-packer-compact.zip",
    color: "linear-gradient(90deg, #8b9384, #5f675d 24%, #d93b35 24% 32%, #9f7543 32% 100%)"
  },
  {
    id: "mixed-packer-core",
    title: "混杂输入打包核心",
    category: "混杂打包机",
    tags: ["混杂输入", "自动分流", "防堵"],
    summary: "处理多来源物品流的打包核心。",
    intro: "用于主线输入不可控的混杂物品流。内置防堵逻辑和溢出保护，适合作为农场群到仓库之间的缓冲处理层。",
    stats: ["体积 13x10x8", "版本 1.20+", "输入 2路"],
    download: "downloads/mixed-packer-core.zip",
    color: "linear-gradient(90deg, #6b6f68 0 20%, #aa7c3c 20% 44%, #cf3030 44% 52%, #7c8477 52%)"
  },
  {
    id: "cart-stack-sorter",
    title: "矿车堆分类阵列",
    category: "矿车堆分类",
    tags: ["矿车堆", "高吞吐", "阵列"],
    summary: "面向矿车堆运输线的分类处理阵列。",
    intro: "使用矿车堆作为高速运输载体，分类模块按列扩展。适合大规模农场输出或远距离物品汇入仓库。",
    stats: ["体积 15x9x9", "版本 1.20+", "吞吐 高"],
    download: "downloads/cart-stack-sorter.zip",
    color: "linear-gradient(90deg, #555b55 0 18%, #202322 18% 30%, #b8b8ad 30% 52%, #e33a31 52% 58%, #73786f 58%)"
  },
  {
    id: "box-splitter-slim",
    title: "薄片分盒器",
    category: "分盒器",
    tags: ["薄片", "盒流", "可堆叠"],
    summary: "从盒流中分离指定盒子的薄片模块。",
    intro: "适合编码仓、合成站、批量缓存之前的盒流分离。模块间隔小，维护面在正面，便于排查。",
    stats: ["体积 7x6x4", "版本 1.20+", "可堆叠"],
    download: "downloads/box-splitter-slim.zip",
    color: "linear-gradient(90deg, #7e857b 0 35%, #a67945 35% 47%, #d83232 47% 55%, #596259 55%)"
  },
  {
    id: "rectifier-basic",
    title: "双路整流器",
    category: "整流器",
    tags: ["双路", "稳定", "低延迟"],
    summary: "把不稳定输入整理成稳定节拍输出。",
    intro: "用于盒流和散装物品流的节拍整形。输入波动较大时，可减少后级误触发和拥堵。",
    stats: ["体积 6x5x5", "版本 1.20+", "延迟 低"],
    download: "downloads/rectifier-basic.zip",
    color: "linear-gradient(90deg, #707770 0 26%, #d1b357 26% 34%, #4c534b 34% 70%, #e13232 70%)"
  },
  {
    id: "cart-router-x",
    title: "四向矿车分流器",
    category: "矿车分流",
    tags: ["四向", "矿车", "可锁定"],
    summary: "把矿车按信号分配到不同处理线。",
    intro: "四向矿车路由模块，支持信号锁定和空车回收。适合多农场共线运输或仓库入口分区。",
    stats: ["体积 12x8x6", "版本 1.20+", "方向 4"],
    download: "downloads/cart-router-x.zip",
    color: "linear-gradient(90deg, #2f3432 0 18%, #9a9a90 18% 38%, #bc8b45 38% 50%, #d93131 50% 58%, #676d66 58%)"
  },
  {
    id: "multi-item-library",
    title: "多物品分类库",
    category: "多物品分类",
    tags: ["多物品", "仓库", "省空间"],
    summary: "适合中型仓库的多物品分类单元。",
    intro: "同一存储列可容纳多种物品，适合杂物区和装饰方块区。提供可视化标签位，方便玩家维护。",
    stats: ["体积 18x12x9", "版本 1.20+", "容量 中"],
    download: "downloads/multi-item-library.zip",
    color: "linear-gradient(90deg, #8f948d 0 24%, #5c644f 24% 45%, #d23731 45% 52%, #bd9b50 52% 66%, #777d74 66%)"
  },
  {
    id: "bulk-single-64",
    title: "64箱大宗单品列",
    category: "大宗单品",
    tags: ["大宗", "单品", "高容量"],
    summary: "石头、泥土、作物等大宗物品专用。",
    intro: "以高容量和稳定取放为目标的大宗单品存储列。适合刷石机、树场、农场等大吞吐来源。",
    stats: ["容量 64箱", "版本 1.20+", "维护 正面"],
    download: "downloads/bulk-single-64.zip",
    color: "linear-gradient(90deg, #80603d 0 30%, #a17844 30% 48%, #747a70 48% 82%, #e03531 82%)"
  },
  {
    id: "single-item-normal",
    title: "普通单品存储",
    category: "普通单品",
    tags: ["单品", "标准", "易扩展"],
    summary: "标准仓库单品列，适合大多数物品。",
    intro: "通用单品存储结构，材料成本低，展示和维护直观。可直接复制扩展成整排仓库。",
    stats: ["体积 5x8x5", "版本 1.20+", "容量 可扩展"],
    download: "downloads/single-item-normal.zip",
    color: "linear-gradient(90deg, #7a8078 0 38%, #9b713c 38% 60%, #d83532 60% 66%, #676e64 66%)"
  },
  {
    id: "coded-single-line",
    title: "编码单品列",
    category: "编码单品",
    tags: ["编码", "单品", "寻址"],
    summary: "支持编码寻址的单品存储单元。",
    intro: "用于需要按编码访问的仓库系统。输入编码后，单品列可被后级调度逻辑准确唤醒。",
    stats: ["编码 8bit", "版本 1.20+", "接口 标准"],
    download: "downloads/coded-single-line.zip",
    color: "linear-gradient(90deg, #3b4439 0 22%, #d33a33 22% 30%, #747d72 30% 62%, #c5a354 62% 72%, #555f52 72%)"
  },
  {
    id: "warehouse-finished",
    title: "成品仓库样机",
    category: "仓库成品",
    tags: ["完整仓库", "展示", "生存可用"],
    summary: "整合分类、存储、盒流和取货的完整仓库。",
    intro: "一个可直接参观和拆解学习的完整仓库样机。包含分类入口、常用物品区、大宗区、编码取货和盒流缓存。",
    stats: ["区域 5个", "版本 1.20+", "状态 成品"],
    download: "downloads/warehouse-finished.zip",
    color: "linear-gradient(90deg, #655041 0 18%, #8d9488 18% 46%, #d93a34 46% 53%, #a48645 53% 72%, #455841 72%)"
  },
  {
    id: "encoder-8bit",
    title: "8位编码器",
    category: "编码器",
    tags: ["8位", "输入面板", "可扩展"],
    summary: "把玩家输入转换成仓库可读编码。",
    intro: "面向编码仓库的输入端，支持按钮矩阵或外部信号接入。输出节拍清晰，便于连接解码器。",
    stats: ["位宽 8bit", "版本 1.20+", "输出 串行"],
    download: "downloads/encoder-8bit.zip",
    color: "linear-gradient(90deg, #4e5948 0 20%, #d43131 20% 28%, #303833 28% 42%, #bda255 42% 62%, #747b70 62%)"
  },
  {
    id: "decoder-8bit",
    title: "8位解码器",
    category: "解码器",
    tags: ["8位", "寻址", "稳定"],
    summary: "把编码信号转换为指定输出线。",
    intro: "用于仓库选址、合成站配方选择和盒流路线选择。布局偏向可读性，适合后期维护。",
    stats: ["位宽 8bit", "版本 1.20+", "输出 256路"],
    download: "downloads/decoder-8bit.zip",
    color: "linear-gradient(90deg, #737a71 0 26%, #d83a34 26% 34%, #586153 34% 56%, #222925 56% 70%, #c2a153 70%)"
  },
  {
    id: "code-processor-buffer",
    title: "编码缓存处理器",
    category: "编码处理",
    tags: ["缓存", "防抖", "队列"],
    summary: "处理多次请求和编码信号抖动。",
    intro: "当玩家连续发起取货请求时，这个模块会把编码按队列处理，减少丢码和重复触发。",
    stats: ["队列 4组", "版本 1.20+", "接口 编码线"],
    download: "downloads/code-processor-buffer.zip",
    color: "linear-gradient(90deg, #626b5d 0 24%, #984b38 24% 40%, #e03030 40% 46%, #80867d 46% 76%, #c49e4b 76%)"
  },
  {
    id: "box-flow-hub",
    title: "盒流处理枢纽",
    category: "盒流处理",
    tags: ["盒流", "调度", "回收"],
    summary: "负责盒子路线调度、缓存和回收。",
    intro: "连接仓库、合成站和输出口的盒流处理中心。支持空盒回收、满盒缓存和异常溢出出口。",
    stats: ["接口 6路", "版本 1.20+", "缓存 12盒"],
    download: "downloads/box-flow-hub.zip",
    color: "linear-gradient(90deg, #84613b 0 18%, #6f766c 18% 48%, #d73632 48% 56%, #353c36 56% 70%, #a98745 70%)"
  },
  {
    id: "crafting-station-v2",
    title: "通用合成站 V2",
    category: "合成站",
    tags: ["合成", "配方", "盒流"],
    summary: "可接入仓库供料的通用合成站。",
    intro: "合成站包含配方输入、材料调度、失败回收和成品输出。适合作为自动合成系统的核心工作区。",
    stats: ["配方 9格", "版本 1.21+", "状态 测试"],
    download: "downloads/crafting-station-v2.zip",
    color: "linear-gradient(90deg, #977447 0 28%, #484f47 28% 44%, #d83332 44% 51%, #858b82 51% 78%, #c4a04d 78%)"
  },
  {
    id: "auto-crafting-line",
    title: "自动合成流水线",
    category: "自动合成",
    tags: ["自动合成", "流水线", "可扩展"],
    summary: "多配方自动合成与成品回仓流水线。",
    intro: "整合编码请求、材料提取、盒流供料、合成站执行和成品回仓。适合大型生存服务器的后期自动化。",
    stats: ["配方 多组", "版本 1.21+", "扩展 高"],
    download: "downloads/auto-crafting-line.zip",
    color: "linear-gradient(90deg, #3f4a3b 0 18%, #d83232 18% 25%, #8f968a 25% 50%, #bd9650 50% 66%, #5a6256 66%)"
  }
];

const categoryNav = document.querySelector("#categoryNav");
const gallery = document.querySelector("#gallery");
const searchInput = document.querySelector("#searchInput");
const pageTitle = document.querySelector("#pageTitle");
const resultCount = document.querySelector("#resultCount");
const crumb = document.querySelector("#crumb");
const listView = document.querySelector("#listView");
const detailView = document.querySelector("#detailView");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderMachineVisual(work, extraClass = "") {
  if (work.image) {
    return `
      <div class="machine-art image-art ${extraClass}">
        <img src="${escapeHtml(work.image)}" alt="${escapeHtml(work.title)}" loading="lazy" />
      </div>
    `;
  }

  return `<div class="machine-art ${extraClass}" style="--art: ${work.color || "linear-gradient(90deg, #686d66, #9a9f97)"}"></div>`;
}

function getRoute() {
  const hash = decodeURIComponent(location.hash || "#/");
  const [, route = "", value = ""] = hash.match(/^#\/?([^/]*)(?:\/(.+))?$/) || [];
  return { route, value };
}

function workMatches(work, category, query) {
  const inCategory = category === "全部" || work.category === category;
  const text = `${work.title} ${work.category} ${work.tags.join(" ")} ${work.summary} ${work.intro}`;
  return inCategory && text.toLowerCase().includes(query.toLowerCase().trim());
}

function renderCategories(activeCategory) {
  const allCount = works.length;
  const buttons = [
    { name: "全部", count: allCount },
    ...categories.map((name) => ({
      name,
      count: works.filter((work) => work.category === name).length
    }))
  ];

  categoryNav.innerHTML = buttons.map((item) => `
    <button class="category-button ${item.name === activeCategory ? "active" : ""}" data-category="${item.name}">
      <span>${item.name}</span>
      <small>${item.count}</small>
    </button>
  `).join("");
}

function renderGallery() {
  const { route, value } = getRoute();
  if (route === "work") {
    renderDetail(value);
    return;
  }

  const activeCategory = route === "category" ? value : "全部";
  const query = searchInput.value;
  const filtered = works.filter((work) => workMatches(work, activeCategory, query));

  listView.hidden = false;
  detailView.hidden = true;
  renderCategories(activeCategory);
  crumb.textContent = activeCategory === "全部" ? "全部作品" : `分类 / ${activeCategory}`;
  pageTitle.textContent = activeCategory === "全部" ? "全部红石作品" : activeCategory;
  resultCount.textContent = `${filtered.length} 个作品`;

  gallery.innerHTML = filtered.length
    ? filtered.map((work) => `
      <a class="work-card" href="#/work/${work.id}">
        ${renderMachineVisual(work)}
        <div class="card-body">
          <div class="tag-row">
            <span class="tag">${work.category}</span>
            ${work.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <h3>${work.title}</h3>
          <p>${work.summary}</p>
        </div>
      </a>
    `).join("")
    : `<div class="empty">没有找到匹配作品，可以换个标签或搜索词。</div>`;
}

function renderDetail(id) {
  const work = works.find((item) => item.id === id);
  if (!work) {
    location.hash = "#/";
    return;
  }

  listView.hidden = true;
  detailView.hidden = false;
  renderCategories(work.category);

  detailView.innerHTML = `
    <a class="back-link" href="#/category/${encodeURIComponent(work.category)}">返回 ${work.category}</a>
    ${renderMachineVisual(work, "detail-visual")}
    <p class="crumb">${work.category}</p>
    <h2>${work.title}</h2>
    <div class="detail-meta">
      ${work.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <p class="detail-copy">${work.intro}</p>
    <div class="detail-grid">
      ${work.stats.map((stat) => {
        const [label, ...rest] = stat.split(" ");
        return `<div class="stat"><strong>${label}</strong><span>${rest.join(" ")}</span></div>`;
      }).join("")}
    </div>
    <a class="download-link ${work.download ? "" : "disabled"}" href="${work.download || "#"}" ${work.download ? "download" : "aria-disabled=\"true\""}>下载作品文件</a>
  `;
}

async function loadRemoteWorks() {
  try {
    const response = await fetch("/api/works", { headers: { accept: "application/json" } });
    if (!response.ok) return;

    const data = await response.json();
    if (Array.isArray(data.works) && data.works.length) {
      works = data.works;
      renderGallery();
    }
  } catch (_error) {
    // 直接打开本地 HTML 时没有 Netlify Functions，保留内置示例数据。
  }
}

categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest(".category-button");
  if (!button) return;
  const category = button.dataset.category;
  location.hash = category === "全部" ? "#/" : `#/category/${encodeURIComponent(category)}`;
});

searchInput.addEventListener("input", renderGallery);
window.addEventListener("hashchange", renderGallery);
renderGallery();
loadRemoteWorks();
