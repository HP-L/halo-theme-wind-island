<p align="center">
  <img src="./screenshot.png" alt="风屿主题截图" width="800" />
</p>

<h1 align="center">风屿 · Wind Island</h1>

<p align="center">
  一款克制、沉静、以 Halo 原生内容与导航体系为中心的主题
</p>

<p align="center">
  <sub>基于 <a href="https://github.com/DINGDANGMAOUP/moonlit-mountain">DINGDANGMAOUP/moonlit-mountain</a> 修改而来</sub>
</p>

<p align="center">
  <a href="https://www.halo.run/"><img src="https://img.shields.io/badge/Halo-%3E%3D2.22.2-blue" alt="Halo" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="License" /></a>
  <a href="./CHANGELOG.md"><img src="https://img.shields.io/badge/version-0.0.1-orange" alt="Version" /></a>
</p>

---

## ✨ 特性

### 🌙 屿色配色系统

四种配色方案，页面右上角一键切换，切换带有流畅的 View Transition 动画。

| 屿色 | 说明 |
|---|---|
| **夜屿** Night Island | 深色主题，当前默认品牌 |
| **暮屿** Dusk Island | 蓝时与余晖色调 |
| **晓屿** Dawn Island | 浅色主题，银纸与墨色 |
| **随境** Follow System | 自动跟随设备明暗偏好 |

### 🎨 丰富的主题配置

通过 Halo 后台「主题设置」即可自定义：

- **外观** — 自定义在线字体、默认屿色
- **首页** — Hero 图片、封面条来源（置顶 / 分类 / 标签）、关于页面、精选分类
- **导航** — 社交媒体配置（最多 5 个，支持图标、链接与图片弹窗）
- **文章** — 阅读设置面板（字号、行高、正文宽度实时可调）
- **页脚** — ICP 备案号、公安联网备案号

### 🌍 国际化开箱即用

简体中文、繁體中文、English、日本語、한국어，覆盖前端文案与无障碍标签。

### 📱 响应式与无障碍

移动端友好的导航与排版，ARIA 标签、键盘导航、语义化 HTML 贯穿始终。

### 🧩 官方插件集成

自动检测并适配以下 Halo 官方插件（均为可选）：

- [PluginMoments](https://github.com/halo-sigs/plugin-moments) ≥ 1.16.1 — 瞬间列表与详情
- [PluginPhotos](https://github.com/halo-sigs/plugin-photos)  ≥ 2.0.0   — 图库列表与详情
- [PluginLinks](https://github.com/halo-sigs/plugin-links)   ≥ 2.2.1   — 友链与订阅动态
- [PluginSearchWidget](https://github.com/halo-sigs/plugin-search-widget) — 搜索挂件
- [PluginFeed](https://github.com/halo-sigs/plugin-feed)      — RSS 订阅

---

## 📦 安装

### 后台上传（推荐）

1. 在 [Releases](https://github.com/HP-L/halo-theme-wind-island/releases) 页面下载最新 `.zip` 文件
2. 登录 Halo 后台 → **外观** → **主题** → **安装主题**
3. 上传 `.zip` 文件并启用

### 从源码构建

```bash
git clone https://github.com/HP-L/halo-theme-wind-island.git
cd halo-theme-wind-island
corepack pnpm install
corepack pnpm build
```

将 `dist/` 目录下的 `.zip` 文件上传至 Halo 后台即可。

---

## 🚀 本地开发

### 环境要求

- Node.js ≥ 18
- pnpm ≥ 8
- Halo ≥ 2.22.2

### 开发命令

| 命令 | 说明 |
|---|---|
| `corepack pnpm dev` | 监听模式，`src/` 变更实时构建到 `templates/` |
| `corepack pnpm build` | 生产构建（含 i18n 校验） |
| `corepack pnpm build-only` | 仅构建，跳过 i18n 校验 |
| `corepack pnpm check:i18n` | 检查多语言键值完整性 |

> 详细说明见 [DEVELOPMENT.md](./DEVELOPMENT.md)。

---

## 📁 项目结构

```
├── src/
│   ├── css/
│   │   ├── main.css              # 主样式（含屿色 CSS 变量）
│   │   └── links-talks.css       # 友链 / 瞬间样式
│   ├── js/
│   │   └── main.ts               # 核心交互逻辑
│   ├── partials/                 # 可复用模板片段（header/footer/pagination 等）
│   ├── error/                    # 错误页面模板
│   ├── layout.html               # 全局布局（构建时 include + Halo 布局契约）
│   ├── index.html                # 首页
│   ├── post.html                 # 文章页
│   ├── page.html                 # 独立页面
│   ├── archives.html             # 归档页
│   ├── categories.html           # 分类列表
│   ├── category.html             # 分类详情
│   ├── tags.html                 # 标签列表
│   ├── tag.html                  # 标签详情
│   ├── author.html               # 作者页
│   ├── moment.html               # 瞬间详情
│   ├── moments.html              # 瞬间列表
│   ├── links.html                # 友链与订阅动态
│   ├── photo.html                # 图库详情
│   └── photos.html               # 图库列表
├── i18n/                         # 多语言资源
├── public/                       # 静态资源（字体、图片）
├── scripts/                      # 辅助脚本（i18n 校验）
├── theme.yaml                    # 主题元信息
├── settings.yaml                 # 主题设置表单定义
└── vite.config.ts                # Vite 构建配置
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

[MIT](./LICENSE) · 基于 [DINGDANGMAOUP/moonlit-mountain](https://github.com/DINGDANGMAOUP/moonlit-mountain) 修改而来。

---

## 🔗 链接

- [GitHub 仓库](https://github.com/HP-L/halo-theme-wind-island)
- [问题反馈](https://github.com/HP-L/halo-theme-wind-island/issues)
- [更新日志](./CHANGELOG.md)
- [Halo 官方文档](https://docs.halo.run/)