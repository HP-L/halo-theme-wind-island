---
title: 风屿主题完整配置指南
date: 2026-10-03 10:30:00
tags:
  - 主题
  - 配置
  - 风屿
categories:
  - 教程
---

## 快速开始

在 Hexo 项目中使用风屿主题，只需几步：

### 1. 安装主题

将主题文件夹放入 `themes/wind-island` 目录下，然后在 Hexo 根目录的 `_config.yml` 中修改：

```yaml
theme: wind-island
```

### 2. 创建主题配置文件

在 Hexo 根目录创建 `_config.wind-island.yml` 文件，以下是一个完整的配置示例：

```yaml
# 菜单
menu:
  归档: /archives
  分类: /categories
  标签: /tags

# 配色方案
style:
  color_scheme: nightIsland
  custom_font: "LXGW Marker Gothic"

# 首页设置
home:
  hero_image: "/images/hero.jpg"
  cover_strip_source: pinned
  cover_strip_category: ""
  cover_strip_tag: ""
  featured_category: ""
  topic_categories: []
  contact_page: ""

# 文章设置
post:
  enable_reader_settings: true
  reading_time: true

# 页脚
footer:
  copyright_start_year: "2026"
  icp_number: ""
  icp_url: ""
  public_security_number: ""
  public_security_url: ""
  public_security_icon: ""

# 评论
comment:
  enable: false

# 资源前缀（CDN）
asset_prefix: ""
```

## 配置详解

### 菜单配置

`menu` 支持任意数量的自定义菜单项，格式为 `显示名称: 链接路径`。支持的路径类型：

| 路径 | 说明 |
|------|------|
| `/archives` | 归档页 |
| `/categories` | 分类页 |
| `/tags` | 标签页 |
| `/links` | 友链页 |
| `/自定义路径` | 任意自定义页面 |

### 配色方案

`style.color_scheme` 支持四个值：

| 值 | 效果 |
|----|------|
| `nightIsland` | 夜屿——深色主题（默认） |
| `dawnIsland` | 晓屿——银纸墨色 |
| `duskIsland` | 暮屿——蓝时余晖 |
| `followSystem` | 随境——跟随系统 |

`style.custom_font` 可以指定自定义字体名称。

### 首页布局配置

首页是最灵活的区域。

**主视觉图**：`hero_image` 设置首页顶部大图路径。留空则不显示。建议图片尺寸为 1920×800 左右。

**封面条带**：`cover_strip_source` 决定封面区域显示的内容：

- `pinned`：显示所有置顶文章（需在文章 front-matter 中设置 `pinned: true`）
- `category`：显示指定分类下的文章（配合 `cover_strip_category` 使用）
- `tag`：显示指定标签下的文章（配合 `cover_strip_tag` 使用）

**精选文章**：`featured_category` 指定一个分类名称，在首页展示精选文章区。

**专题集合**：`topic_categories` 指定多个分类名称组成专题集合。示例：

```yaml
topic_categories:
  - 教程
  - 实践
  - 进阶
```

**联系方式**：`contact_page` 指定联系页面的路径，会在首页底部显示联系入口。

### 文章设置

- `enable_reader_settings`：是否启用文章页的阅读设置面板
- `reading_time`：是否显示预估阅读时长

### 页脚设置

支持中国大陆网站的备案信息展示：

- `icp_number` / `icp_url`：ICP 备案号和链接
- `public_security_number` / `public_security_url` / `public_security_icon`：公安备案号、链接与图标

### 评论系统

`comment.enable` 设为 `true` 即可启用评论功能。

### 文章 Front-matter

除了标准的 `title`、`date`、`tags`、`categories`，风屿还支持以下 front-matter：

```yaml
---
title: 文章标题
date: 2026-10-01 14:00:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类1
pinned: true       # 是否置顶
cover: /images/xxx.jpg  # 文章封面图
---
```

## 常见问题

### 如何切换语言？

点击导航栏的语言切换按钮，选择目标语言即可。偏好会自动保存到浏览器中。

### 封面图不显示？

确认图片路径是否正确。推荐将图片放在 `source/images/` 目录下，引用时使用 `/images/xxx.jpg`。

### 如何添加友链？

友链页面使用 Hexo 的数据文件功能。在 `source/_data/links.yml` 中配置链接数据即可。