<p align="center">
  <img src="./screenshot.png" alt="风屿主题截图" width="800" />
</p>

<h1 align="center">风屿 · Wind Island</h1>

<p align="center">
  一款克制、沉静的 Hexo 博客主题，注重阅读体验与视觉美感
</p>

<p align="center">
  <sub>设计灵感源自 <a href="https://github.com/DINGDANGMAOUP/moonlit-mountain">DINGDANGMAOUP/moonlit-mountain</a></sub>
</p>

<p align="center">
  <a href="https://hexo.io/"><img src="https://img.shields.io/badge/Hexo-%3E%3D7.0.0-blue" alt="Hexo" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="License" /></a>
</p>

---

## ✨ 特性

### 🌙 屿色配色系统

四种随季节变幻的屿色配色方案，导航栏一键切换，带有流畅的 View Transition 动画。

<p align="center">
  <img src="./screenshot-1.png" alt="夜屿 · 暮屿" width="400" />
  <img src="./screenshot-2.png" alt="晓屿 · 随境" width="400" />
</p>

| 屿色 | 页面底色 | 内容区底色 | 说明 |
|---|---|---|---|
| **夜屿** Night Island | `#0F172A` 深墨蓝 | `#1E293B` 暮靛灰 | 深色主题，深邃克制，默认品牌色 |
| **暮屿** Dusk Island | `#1C2433` 薄暮蓝灰 | `#253040` 夜空蓝灰 | 蓝时与余晖交织，冷暖相融 |
| **晓屿** Dawn Island | `#F0F3F1` 晨雾绿灰 | `#F8FBF9` 素纸白 | 浅色主题，银纸墨色，晨光柔和 |
| **随境** Follow System | — | — | 自动跟随设备明暗偏好，切换夜屿 / 晓屿 |

### 🎨 丰富的主题配置

通过 `_config.wind-island.yml` 即可自定义：

- **外观** — 自定义在线字体、默认屿色
- **首页** — Hero 图片、封面条来源（置顶 / 分类 / 标签）、精选分类、专题集合、联系页面
- **导航** — 自定义菜单、社交媒体图标与图片弹窗
- **文章** — 阅读设置面板（字号、行高、正文宽度实时可调）、阅读时长估算、文章目录
- **页脚** — ICP 备案号、公安联网备案号、版权起始年份
- **评论** — 可选开启评论支持

### 🌍 国际化开箱即用

简体中文、繁體中文、English、日本語、한국어 —— 纯客户端 i18n 实现，无需刷新即可切换语言，覆盖所有 UI 文案与无障碍标签。

### 📖 阅读体验

- **阅读设置面板** — 字号 / 行高 / 正文宽度实时可调，偏好自动保存
- **文章目录（TOC）** — 自动生成，支持展开 / 收起
- **阅读时长估算** — 自动统计中英文混合阅读时间
- **分享功能** — 一键复制文章链接 / 原生分享
- **打印优化** — 专为打印场景优化的样式
- **上下篇导航** — 文章底部自动展示相邻文章

### 🌿 节气氛围

首页 Hero 区域随中国二十四节气动态展示当季节气名称，搭配对应季节的视觉氛围。

### 📱 响应式与无障碍

移动端友好的导航与排版，ARIA 标签、键盘导航、语义化 HTML 贯穿始终，支持 `prefers-reduced-motion`。

---

## 📦 安装

### 方式一：直接使用本仓库

本仓库是一个完整的 Hexo 站点，克隆后即可使用：

```bash
git clone https://github.com/HP-L/halo-theme-wind-island.git
cd halo-theme-wind-island
npm install
```

修改 `_config.yml` 中的站点信息，然后：

> **注意**：如果你部署在子目录下（如 GitHub Pages 的项目页面 `https://username.github.io/repo/`），需修改 `_config.yml` 中 URL 部分的 `root` 配置，例如：
> ```yaml
> root: /halo-theme-wind-island/
> ```
> 若部署在根域名下则保持 `root: /` 即可。

```bash
npx hexo server
```

### 方式二：仅使用主题

将 `themes/wind-island/` 目录复制到你现有 Hexo 项目的 `themes/` 下，然后在 Hexo 根目录 `_config.yml` 中修改：

```yaml
theme: wind-island
```

接着在 Hexo 根目录创建 `_config.wind-island.yml`，参考 `themes/wind-island/_config.yml` 进行配置。

---

## 🚀 本地开发

### 环境要求

- Node.js ≥ 18
- Hexo ≥ 7.0.0

### 开发命令

| 命令 | 说明 |
|---|---|
| `npx hexo server` | 启动本地开发服务器（默认 `http://localhost:4000`） |
| `npx hexo generate` | 生成静态文件到 `public/` |
| `npx hexo clean` | 清除缓存与生成文件 |
| `npx hexo new post "标题"` | 新建文章 |

### 主题开发

主题文件位于 `themes/wind-island/`，修改模板（`.ejs`）、样式（`main.css`）或脚本（`main.js`）后刷新浏览器即可看到效果。如需修改 JavaScript，直接编辑 `themes/wind-island/source/js/main.js`（已打包的单文件）。

---

## 📁 项目结构

```
├── source/
│   ├── _posts/                    # 博客文章（Markdown）
│   ├── about/                     # 关于页面
│   ├── categories/                # 分类页
│   └── tags/                      # 标签页
├── themes/
│   └── wind-island/               # 风屿主题
│       ├── languages/             # 多语言资源（zh-CN / zh-TW / en / ja / ko）
│       ├── layout/                # EJS 模板
│       │   ├── _partial/          # 可复用片段（footer / pagination / post-card 等）
│       │   ├── layout.ejs         # 全局布局
│       │   ├── index.ejs          # 首页
│       │   ├── post.ejs           # 文章页
│       │   ├── page.ejs           # 独立页面
│       │   ├── archive.ejs        # 归档页
│       │   ├── categories.ejs     # 分类列表
│       │   ├── category.ejs       # 分类详情
│       │   ├── tags.ejs           # 标签列表
│       │   ├── tag.ejs            # 标签详情
│       │   └── links.ejs          # 友链页
│       ├── source/
│       │   ├── css/
│       │   │   ├── main.css       # 主样式（含屿色 CSS 变量）
│       │   │   └── fonts/         # 内置字体（GeneralSans）
│       │   ├── js/
│       │   │   ├── main.js        # 核心交互逻辑
│       │   │   └── i18n.js        # 国际化运行时
│       │   └── images/            # 主题图片与节气插图
│       └── _config.yml            # 主题默认配置
├── _config.yml                    # Hexo 站点配置
└── package.json
```

---

## 🤝 参与贡献

1. Fork 本仓库
2. 创建分支 `git checkout -b feature/your-feature`
3. 提交更改 `git commit -m 'feat: add your feature'`
4. 推送分支 `git push origin feature/your-feature`
5. 提交 Pull Request

---

## 📄 许可证

[MIT](./LICENSE) · Copyright (c) 2026 Phosphine · 设计灵感源自 [DINGDANGMAOUP/moonlit-mountain](https://github.com/DINGDANGMAOUP/moonlit-mountain)

---

## 🔗 链接

- [GitHub 仓库](https://github.com/HP-L/halo-theme-wind-island)
- [问题反馈](https://github.com/HP-L/halo-theme-wind-island/issues)
- [Hexo 官方文档](https://hexo.io/docs/)