# Redstone Gallery

一个 Minecraft 像素风红石作品档案馆，用于分类展示红石机器作品，支持作品图片、文字介绍、详情页、下载链接，以及基于 Netlify 的后台上传和内容管理。

A Minecraft-style archive for redstone builds, designed to showcase categorized creations with images, descriptions, detail pages, downloads, and a Netlify-powered admin upload panel.

## Features / 功能

- Minecraft-inspired pixel UI / Minecraft 像素风界面
- Category-based redstone build browsing / 按分类浏览红石作品
- Search by title, category, tags, and description / 支持按标题、分类、标签和描述搜索
- Build detail pages with metadata and download links / 作品详情页包含参数和下载链接
- Admin panel for adding, editing, and deleting works / 后台支持新增、编辑和删除作品
- Image and file uploads through Netlify Functions / 通过 Netlify Functions 上传图片和文件
- Persistent content storage with Netlify Blobs / 使用 Netlify Blobs 保存作品数据和文件

## Categories / 分类

- 分类打包机
- 混杂打包机
- 矿车堆分类
- 分盒器
- 整流器
- 矿车分流
- 多物品分类
- 大宗单品
- 普通单品
- 编码单品
- 仓库成品
- 编码器
- 解码器
- 编码处理
- 盒流处理
- 合成站
- 自动合成

## Tech Stack / 技术栈

- HTML
- CSS
- JavaScript
- Netlify Functions
- Netlify Blobs

## Project Structure / 项目结构

```text
.
├── index.html
├── admin.html
├── app.js
├── admin.js
├── styles.css
├── admin.css
├── netlify.toml
├── package.json
├── netlify/
│   └── functions/
├── assets/
└── downloads/
```

## Admin Panel / 后台管理

The admin panel is available at:

后台页面地址：

```text
/admin.html
```

It supports:

后台支持：

- Creating new redstone build entries / 新增红石作品
- Editing existing entries / 编辑已有作品
- Deleting entries / 删除作品
- Uploading cover images / 上传封面图
- Uploading downloadable build files / 上传作品下载文件

In production, configure this Netlify environment variable:

生产环境需要配置 Netlify 环境变量：

```text
REDSTONE_ADMIN_TOKEN
```

Do not commit your real admin token to the repository.

不要把真实管理员口令提交到仓库里。

## Deployment / 部署

This project is designed to deploy on Netlify.

这个项目设计为部署到 Netlify。

1. Push the project to GitHub.
2. Connect the repository to Netlify.
3. Set `REDSTONE_ADMIN_TOKEN` in Netlify environment variables.
4. Deploy the site.

中文步骤：

1. 把项目上传到 GitHub。
2. 在 Netlify 连接这个 GitHub 仓库。
3. 在 Netlify 环境变量里设置 `REDSTONE_ADMIN_TOKEN`。
4. 部署网站。

## Notes / 说明

- The frontend can display built-in sample data if the Netlify API is unavailable.
- Uploaded images and files are stored with Netlify Blobs.
- Very large files may require external storage in the future.

中文说明：

- 如果 Netlify API 不可用，前台仍然可以显示内置示例数据。
- 上传的图片和文件会存储在 Netlify Blobs。
- 如果未来需要上传超大文件，可能需要接入额外的对象存储。
