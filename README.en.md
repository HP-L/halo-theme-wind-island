Wind Island (风屿)

> A restrained, serene Halo theme centered on native content and navigation

[![Halo](https://img.shields.io/badge/Halo-%3E%3D2.22.2-blue)](https://www.halo.run/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.1-orange)](CHANGELOG.md)

---

## ✨ Features

### 🏝️ Island Color System

Supports 4 color schemes that visitors can switch freely from the top-right corner:

- **Night Island** - Dark theme, default brand
- **Dusk Island** - Blue hour and afterglow tones
- **Dawn Island** - Light theme, silver paper and ink
- **Follow System** - Automatically follows device preference

Color switching features smooth View Transition animations.

### 🌍 Internationalization

- Simplified Chinese (zh_CN)
- English (en)

### 📱 Responsive Design

- Mobile-friendly navigation and layout
- Full accessibility (a11y) support
- ARIA labels and keyboard navigation

### 🎨 Rich Theme Configuration

Customizable via Halo admin panel:

- **Appearance**: Custom fonts, default island color
- **Homepage**: Hero image, cover strip source (pinned/category/tag), about page, featured categories, contact page
- **Navigation**: Social media configuration (up to 5, with icons and links)
- **Articles**: Reading settings panel (font size, line height, content width adjustable)
- **Footer**: ICP filing, public security network filing

---

## 📦 Installation

### Method 1: Upload via Admin Panel (Recommended)

1. Download the latest `.zip` file from [Releases](https://gitee.com/HP-L/halo-theme-wind-island/releases)
2. Login to Halo Admin → Theme → Install Theme
3. Upload the downloaded `.zip` file
4. Activate the "Wind Island" theme

### Method 2: Install from Source

```bash
# Clone the repository
git clone https://gitee.com/HP-L/halo-theme-wind-island.git

# Enter theme directory
cd halo-theme-wind-island

# Install dependencies
pnpm install

# Build theme
pnpm build

# Upload contents of dist/ to Halo theme directory
```

---

## 🚀 Development

### Requirements

- Node.js >= 18
- pnpm >= 8
- Halo >= 2.22.2

### Development Commands

```bash
# Install dependencies
pnpm install

# Development mode (watch for file changes)
pnpm dev

# Build theme (with i18n check)
pnpm build

# Build only (skip i18n check)
pnpm build-only

# Check i18n file completeness
pnpm check:i18n
```

### Docker Development Environment

The project includes a Docker Compose configuration for quick local Halo setup:

```bash
# Start Halo development environment
docker compose up -d

# Access Halo admin panel
# http://localhost:8090
```

Docker automatically mounts the current theme directory to Halo. Refresh to see changes after modifying code.

---

## 📁 Project Structure

```
├── src/
│   ├── css/
│   │   ├── main.css          # Main styles (with island color variables)
│   │   └── links-talks.css   # Links/Moments styles
│   ├── js/
│   │   └── main.ts           # Core interaction logic
│   ├── partials/             # Reusable template fragments (header/footer/pagination etc.)
│   ├── layout.html           # Global layout (build-time include + Halo layout contract)
│   ├── index.html            # Homepage
│   ├── post.html             # Article page
│   ├── page.html             # Custom page
│   ├── archives.html         # Archives page
│   ├── categories.html       # Categories page
│   ├── category.html         # Category detail page
│   ├── tags.html             # Tags page
│   ├── tag.html              # Tag detail page
│   ├── author.html           # Author page
│   ├── moment.html           # Moment page
│   ├── moments.html          # Moments list
│   ├── links.html            # Links page
│   ├── photo.html            # Photo detail page
│   └── photos.html           # Photos page
├── i18n/                     # Internationalization files
├── public/                   # Static assets
├── theme.yaml                # Theme configuration
├── settings.yaml             # Theme settings
└── package.json              # Project dependencies
```

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version details.

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Based on the original work by [dingdangmaoup](https://github.com/DINGDANGMAOUP).

---

## 🔗 Links

- [Gitee Repository](https://gitee.com/HP-L/halo-theme-wind-island)
- [Issue Tracker](https://gitee.com/HP-L/halo-theme-wind-island/issues)
- [Halo Official Documentation](https://docs.halo.run/)