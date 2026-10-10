/* Wind Island - Client-side i18n */
(function () {
  'use strict';

  var messages = {
    'zh-CN': {
      'common.all': '全部',
      'common.close': '关闭',
      'common.nextPage': '下一页',
      'common.page': 'PAGE',
      'common.pagination': '分页',
      'common.postsCount': '文章：{0} 篇',
      'common.previousPage': '上一页',
      'common.readPost': '阅读文章',
      'common.viewDetails': '查看详情',
      'language.en': 'English',
      'language.ja': '日本語',
      'language.ko': '한국어',
      'language.zhCN': '简体中文',
      'language.zhTW': '繁體中文',
      'layout.backHome': '返回 {0} 首页',
      'layout.skipToContent': '跳到正文',
      'nav.archives': '归档',
      'nav.about': '关于',
      'nav.categories': '分类',
      'nav.language': '语言',
      'nav.links': '友链',
      'nav.menu.close': '关闭菜单',
      'nav.menu.label': '菜单',
      'nav.menu.open': '打开菜单',
      'nav.islandColor': '屿色',
      'nav.islandColor.description': '选择页面配色',
      'nav.moments': '瞬间',
      'nav.photos': '图库',
      'nav.primary': '主导航',
      'nav.search': '搜索',
      'nav.social.closeImage': '关闭图片',
      'nav.social.defaultName': '社交媒体',
      'nav.social.imageAlt': '{0} 图片',
      'nav.social.label': '社交媒体',
      'nav.social.viewImage': '查看 {0} 图片',
      'nav.social.visit': '访问 {0}',
      'nav.submenu.collapse': '收起 {0} 子菜单',
      'nav.submenu.current': '当前项目',
      'nav.submenu.expand': '展开 {0} 子菜单',
      'nav.tags': '标签',
      'nav.tools': '站点工具',
      'islandColor.nightIsland': '夜屿',
      'islandColor.nightIsland.description': '当前深色品牌',
      'islandColor.dawnIsland': '晓屿',
      'islandColor.dawnIsland.description': '银纸与墨色',
      'islandColor.followSystem': '随境',
      'islandColor.followSystem.description': '随设备明暗',
      'islandColor.duskIsland': '暮屿',
      'islandColor.duskIsland.description': '蓝时与余晖',
      'footer.filings': '网站备案信息',
      'footer.icp': 'ICP',
      'footer.poweredBy': '由 {0} 驱动',
      'footer.theme': '主题：{0}',
      'page.index.welcome': '欢迎来到',
      'page.index.browseCategories': '浏览分类',
      'page.index.collectionsEyebrow': '专题',
      'page.index.collectionsTitle': '内容专题',
      'page.index.contactEyebrow': '联系',
      'page.index.emptyCategories': '分类会在这里形成你的内容地图。',
      'page.index.emptyPosts': '还没有文章，先写下第一篇吧。',
      'page.index.featuredEyebrow': '精选文章',
      'page.index.heroImageAlt': '{0} 的首页主图',
      'page.index.pinnedPosts': '置顶文章',
      'page.index.categoryPosts': '分类文章',
      'page.index.tagPosts': '标签文章',
      'page.index.recentDescription': '记录最新的实践、阅读与生活切片。',
      'page.index.recentPosts': '近期文章',
      'page.index.viewAllPosts': '查看全部文章',
      'page.index.viewCategory': '查看该分类',
      'page.archives.description': '沿着时间，重读写下的痕迹。',
      'page.archives.empty': '还没有可归档的文章。',
      'page.archives.heading': '文章归档',
      'page.archives.title': '归档',
      'page.author.empty': '这位作者暂时没有文章。',
      'page.author.eyebrow': 'AUTHOR',
      'page.categories.description': '从不同路径进入同一片思想的山林。',
      'page.categories.empty': '还没有文章分类。',
      'page.categories.eyebrow': 'CATEGORIES',
      'page.categories.heading': '文章分类',
      'page.categories.title': '分类',
      'page.category.empty': '这个分类暂时没有文章。',
      'page.category.eyebrow': 'CATEGORY',
      'page.tag.empty': '这个标签暂时没有文章。',
      'page.tag.eyebrow': 'TAG',
      'page.tags.description': '一些反复出现、值得继续追问的词。',
      'page.tags.empty': '还没有文章标签。',
      'page.tags.eyebrow': 'TAGS',
      'page.tags.heading': '全部标签',
      'page.tags.title': '标签',
      'page.post.adjacentPosts': '相邻文章',
      'page.post.author': '作者',
      'page.post.categories': '分类',
      'page.post.categoriesAria': '文章分类',
      'page.post.closeToc': '关闭文章目录',
      'page.post.contentWidth': '正文宽度',
      'page.post.continueReading': '继续阅读',
      'page.post.fontSize': '字号',
      'page.post.lineHeight': '行高',
      'page.post.linkCopied': '链接已复制，可以粘贴分享。',
      'page.post.nextPost': '下一篇',
      'page.post.openToc': '打开文章目录',
      'page.post.previousPost': '上一篇',
      'page.post.print': '打印',
      'page.post.published': '发布于',
      'page.post.readerReset': '已恢复默认排版。',
      'page.post.readerSettings': '阅读设置',
      'page.post.readerTools': '阅读工具',
      'page.post.readingTime': '阅读时长',
      'page.post.readingTimeValue': '约 {0} 分钟阅读',
      'page.post.resetReaderSettings': '恢复默认',
      'page.post.share': '分享',
      'page.post.shareComplete': '分享完成。',
      'page.post.shareError': '暂时无法分享，请复制地址栏链接。',
      'page.post.tagsAria': '文章标签',
      'page.post.tagsLabel': '标签',
      'page.post.toc.section': '章节 {0}',
      'page.post.tocAria': '文章目录',
      'page.post.tocEyebrow': '本页目录',
      'page.post.updated': '更新于',
      'page.post.visits': '访问量',
      'page.links.title': '友链',
      'page.links.description': '有朋自远方来，不亦乐乎。感谢每一位驻足 {0} 的朋友。',
      'page.links.empty': '暂时还没有友链，去交个朋友吧。',
      'page.links.defaultGroup': '常遇',
      'page.links.siteCount': '{0} 个站点',
      'page.links.visitNewTab': '访问 {0}（新标签页打开）'
    },
    'en': {
      'common.all': 'All',
      'common.close': 'Close',
      'common.nextPage': 'Next page',
      'common.page': 'PAGE',
      'common.pagination': 'Pagination',
      'common.postsCount': 'Posts: {0}',
      'common.previousPage': 'Previous page',
      'common.readPost': 'Read article',
      'common.viewDetails': 'View details',
      'language.en': 'English',
      'language.ja': '日本語',
      'language.ko': '한국어',
      'language.zhCN': '简体中文',
      'language.zhTW': '繁體中文',
      'layout.backHome': 'Go to {0} home page',
      'layout.skipToContent': 'Skip to content',
      'nav.archives': 'Archives',
      'nav.about': 'About',
      'nav.categories': 'Categories',
      'nav.language': 'Language',
      'nav.links': 'Links',
      'nav.menu.close': 'Close menu',
      'nav.menu.label': 'Menu',
      'nav.menu.open': 'Open menu',
      'nav.islandColor': 'Island color',
      'nav.islandColor.description': 'Choose page colors',
      'nav.moments': 'Moments',
      'nav.photos': 'Photos',
      'nav.primary': 'Primary navigation',
      'nav.search': 'Search',
      'nav.social.closeImage': 'Close image',
      'nav.social.defaultName': 'Social media',
      'nav.social.imageAlt': '{0} image',
      'nav.social.label': 'Social media',
      'nav.social.viewImage': 'View image for {0}',
      'nav.social.visit': 'Visit {0}',
      'nav.submenu.collapse': 'Collapse {0} submenu',
      'nav.submenu.current': 'Current item',
      'nav.submenu.expand': 'Expand {0} submenu',
      'nav.tags': 'Tags',
      'nav.tools': 'Site tools',
      'islandColor.nightIsland': 'Night Island',
      'islandColor.nightIsland.description': 'Original dark brand',
      'islandColor.dawnIsland': 'Dawn Island',
      'islandColor.dawnIsland.description': 'Silver paper and ink',
      'islandColor.followSystem': 'Follow system',
      'islandColor.followSystem.description': 'Match this device',
      'islandColor.duskIsland': 'Dusk Island',
      'islandColor.duskIsland.description': 'Blue hour and afterglow',
      'footer.filings': 'Website registration information',
      'footer.icp': 'ICP',
      'footer.poweredBy': 'Powered by {0}',
      'footer.theme': 'Theme: {0}',
      'page.index.welcome': 'Welcome to',
      'page.index.browseCategories': 'Browse categories',
      'page.index.collectionsEyebrow': 'COLLECTIONS',
      'page.index.collectionsTitle': 'Collections',
      'page.index.contactEyebrow': 'CONTACT',
      'page.index.emptyCategories': 'Categories will form your content map here.',
      'page.index.emptyPosts': 'No posts yet. Start with the first one.',
      'page.index.featuredEyebrow': 'FEATURED STORIES',
      'page.index.heroImageAlt': 'Hero image for {0}',
      'page.index.pinnedPosts': 'Pinned posts',
      'page.index.categoryPosts': 'Category posts',
      'page.index.tagPosts': 'Tag posts',
      'page.index.recentDescription': 'The latest notes on practice, reading, and everyday life.',
      'page.index.recentPosts': 'Recent posts',
      'page.index.viewAllPosts': 'View all posts',
      'page.index.viewCategory': 'View category',
      'page.archives.description': 'Follow the timeline and revisit what was written.',
      'page.archives.empty': 'No posts to archive yet.',
      'page.archives.heading': 'Post archive',
      'page.archives.title': 'Archives',
      'page.author.empty': 'This author has no posts yet.',
      'page.author.eyebrow': 'AUTHOR',
      'page.categories.description': 'Follow different paths into the same forest of ideas.',
      'page.categories.empty': 'No categories yet.',
      'page.categories.eyebrow': 'CATEGORIES',
      'page.categories.heading': 'Post categories',
      'page.categories.title': 'Categories',
      'page.category.empty': 'There are no posts in this category yet.',
      'page.category.eyebrow': 'CATEGORY',
      'page.tag.empty': 'There are no posts with this tag yet.',
      'page.tag.eyebrow': 'TAG',
      'page.tags.description': 'Words worth revisiting and questioning.',
      'page.tags.empty': 'No tags yet.',
      'page.tags.eyebrow': 'TAGS',
      'page.tags.heading': 'All tags',
      'page.tags.title': 'Tags',
      'page.post.adjacentPosts': 'Adjacent posts',
      'page.post.author': 'Author',
      'page.post.categories': 'Categories',
      'page.post.categoriesAria': 'Post categories',
      'page.post.closeToc': 'Close table of contents',
      'page.post.contentWidth': 'Content width',
      'page.post.continueReading': 'Continue reading',
      'page.post.fontSize': 'Font size',
      'page.post.lineHeight': 'Line height',
      'page.post.linkCopied': 'Link copied. Paste it anywhere to share.',
      'page.post.nextPost': 'Next post',
      'page.post.openToc': 'Open table of contents',
      'page.post.previousPost': 'Previous post',
      'page.post.print': 'Print',
      'page.post.published': 'Published on',
      'page.post.readerReset': 'Default reading layout restored.',
      'page.post.readerSettings': 'Reading settings',
      'page.post.readerTools': 'Reading tools',
      'page.post.readingTime': 'Reading time',
      'page.post.readingTimeValue': '{0} min read',
      'page.post.resetReaderSettings': 'Reset',
      'page.post.share': 'Share',
      'page.post.shareComplete': 'Shared.',
      'page.post.shareError': 'Sharing is unavailable. Copy the link from the address bar.',
      'page.post.tagsAria': 'Post tags',
      'page.post.tagsLabel': 'Tagged',
      'page.post.toc.section': 'Section {0}',
      'page.post.tocAria': 'Table of contents',
      'page.post.tocEyebrow': 'ON THIS PAGE',
      'page.post.updated': 'Updated',
      'page.post.visits': 'Views',
      'page.links.title': 'Links',
      'page.links.description': 'Welcome friends who stop by {0}. It is a pleasure to have you here.',
      'page.links.empty': 'No links yet. Go make some friends.',
      'page.links.defaultGroup': 'Encountered',
      'page.links.siteCount': '{0} sites',
      'page.links.visitNewTab': 'Visit {0} (opens in new tab)'
    },
    'ja': {
      'common.all': 'すべて',
      'common.close': '閉じる',
      'common.nextPage': '次のページ',
      'common.page': 'ページ',
      'common.pagination': 'ページネーション',
      'common.postsCount': '記事: {0} 件',
      'common.previousPage': '前のページ',
      'common.readPost': '記事を読む',
      'common.viewDetails': '詳細を見る',
      'date.format.dateTime': 'yyyy年M月d日 HH:mm',
      'date.format.long': 'yyyy年MM月dd日',
      'date.format.moment': 'yyyy年M月d日',
      'date.format.short': 'yyyy.MM.dd',
      'date.format.time': 'HH:mm',
      'language.en': 'English',
      'language.ja': '日本語',
      'language.ko': '한국어',
      'language.zhCN': '简体中文',
      'language.zhTW': '繁體中文',
      'layout.backHome': '{0} のホームへ戻る',
      'layout.skipToContent': '本文へスキップ',
      'nav.archives': 'アーカイブ',
      'nav.about': '概要',
      'nav.categories': 'カテゴリー',
      'nav.language': '言語',
      'nav.links': 'リンク',
      'nav.menu.close': 'メニューを閉じる',
      'nav.menu.label': 'メニュー',
      'nav.menu.open': 'メニューを開く',
      'nav.islandColor': '島の色',
      'nav.islandColor.description': 'ページの配色を選択',
      'nav.moments': 'モーメント',
      'nav.photos': 'フォト',
      'nav.primary': 'メインナビゲーション',
      'nav.search': '検索',
      'nav.social.closeImage': '画像を閉じる',
      'nav.social.defaultName': 'ソーシャルメディア',
      'nav.social.imageAlt': '{0} の画像',
      'nav.social.label': 'ソーシャルメディア',
      'nav.social.viewImage': '{0} の画像を見る',
      'nav.social.visit': '{0} にアクセス',
      'nav.submenu.collapse': '{0} のサブメニューを折りたたむ',
      'nav.submenu.current': '現在の項目',
      'nav.submenu.expand': '{0} のサブメニューを展開',
      'nav.tags': 'タグ',
      'nav.tools': 'サイトツール',
      'islandColor.nightIsland': '夜の島',
      'islandColor.nightIsland.description': 'オリジナルのダークブランド',
      'islandColor.dawnIsland': '暁の島',
      'islandColor.dawnIsland.description': '銀紙と墨色',
      'islandColor.followSystem': 'システムに従う',
      'islandColor.followSystem.description': 'デバイスの設定に合わせる',
      'islandColor.duskIsland': '夕暮れの島',
      'islandColor.duskIsland.description': 'ブルーアワーと残照',
      'footer.filings': 'サイト登録情報',
      'footer.icp': 'ICP',
      'footer.poweredBy': '{0} によって提供',
      'footer.theme': 'テーマ: {0}',
      'page.index.welcome': 'ようこそ',
      'page.index.browseCategories': 'カテゴリーを見る',
      'page.index.collectionsEyebrow': 'コレクション',
      'page.index.collectionsTitle': 'コンテンツコレクション',
      'page.index.contactEyebrow': 'お問い合わせ',
      'page.index.emptyCategories': 'カテゴリーがここにコンテンツマップを形成します。',
      'page.index.emptyPosts': 'まだ記事がありません。最初の一編を書きましょう。',
      'page.index.featuredEyebrow': '注目の記事',
      'page.index.heroImageAlt': '{0} のヒーロー画像',
      'page.index.pinnedPosts': '固定記事',
      'page.index.categoryPosts': 'カテゴリー記事',
      'page.index.tagPosts': 'タグ記事',
      'page.index.recentDescription': '実践、読書、日常の最新の記録。',
      'page.index.recentPosts': '最近の記事',
      'page.index.viewAllPosts': 'すべての記事を見る',
      'page.index.viewCategory': 'このカテゴリーを見る',
      'page.archives.description': '時系列に沿って、書き綴った痕跡を読み返す。',
      'page.archives.empty': 'まだアーカイブできる記事がありません。',
      'page.archives.heading': '記事アーカイブ',
      'page.archives.title': 'アーカイブ',
      'page.author.empty': 'この著者にはまだ記事がありません。',
      'page.author.eyebrow': '著者',
      'page.categories.description': '異なる道筋から同じ思索の森へ入っていく。',
      'page.categories.empty': 'まだカテゴリーがありません。',
      'page.categories.eyebrow': 'カテゴリー',
      'page.categories.heading': '記事カテゴリー',
      'page.categories.title': 'カテゴリー',
      'page.category.empty': 'このカテゴリーにはまだ記事がありません。',
      'page.category.eyebrow': 'カテゴリー',
      'page.tag.empty': 'このタグの記事はまだありません。',
      'page.tag.eyebrow': 'タグ',
      'page.tags.description': '繰り返し現れ、問い続ける価値のある言葉たち。',
      'page.tags.empty': 'まだタグがありません。',
      'page.tags.eyebrow': 'タグ',
      'page.tags.heading': 'すべてのタグ',
      'page.tags.title': 'タグ',
      'page.post.adjacentPosts': '隣接する記事',
      'page.post.author': '著者',
      'page.post.categories': 'カテゴリー',
      'page.post.categoriesAria': '記事カテゴリー',
      'page.post.closeToc': '目次を閉じる',
      'page.post.contentWidth': '本文の幅',
      'page.post.continueReading': '読み続ける',
      'page.post.fontSize': '文字サイズ',
      'page.post.lineHeight': '行の高さ',
      'page.post.linkCopied': 'リンクをコピーしました。貼り付けて共有できます。',
      'page.post.nextPost': '次の記事',
      'page.post.openToc': '目次を開く',
      'page.post.previousPost': '前の記事',
      'page.post.print': '印刷',
      'page.post.published': '公開日',
      'page.post.readerReset': 'デフォルトのレイアウトに戻しました。',
      'page.post.readerSettings': '読書設定',
      'page.post.readerTools': '読書ツール',
      'page.post.readingTime': '読了時間',
      'page.post.readingTimeValue': '約 {0} 分で読めます',
      'page.post.resetReaderSettings': 'デフォルトに戻す',
      'page.post.share': '共有',
      'page.post.shareComplete': '共有しました。',
      'page.post.shareError': '共有できません。アドレスバーのリンクをコピーしてください。',
      'page.post.tagsAria': '記事タグ',
      'page.post.tagsLabel': 'タグ',
      'page.post.toc.section': 'セクション {0}',
      'page.post.tocAria': '目次',
      'page.post.tocEyebrow': 'このページの内容',
      'page.post.updated': '更新日',
      'page.post.visits': '閲覧数',
      'page.links.title': 'リンク',
      'page.links.description': '{0} が大切にする隣人たちが集まっています。真摯に書き、創造し、学びを世界と共有し続ける人々です。',
      'page.links.empty': 'まだ同行者がいません',
      'page.links.defaultGroup': '道中で出会う',
      'page.links.siteCount': 'サイト: {0} 件',
      'page.links.visitNewTab': '{0} にアクセス（新しいタブで開く）'
    },
    'ko': {
      'common.all': '전체',
      'common.close': '닫기',
      'common.nextPage': '다음 페이지',
      'common.page': '페이지',
      'common.pagination': '페이지네이션',
      'common.postsCount': '게시글: {0}건',
      'common.previousPage': '이전 페이지',
      'common.readPost': '글 읽기',
      'common.viewDetails': '자세히 보기',
      'date.format.dateTime': 'yyyy년 M월 d일 HH:mm',
      'date.format.long': 'yyyy년 MM월 dd일',
      'date.format.moment': 'yyyy년 M월 d일',
      'date.format.short': 'yyyy.MM.dd',
      'date.format.time': 'HH:mm',
      'language.en': 'English',
      'language.ja': '日本語',
      'language.ko': '한국어',
      'language.zhCN': '简体中文',
      'language.zhTW': '繁體中文',
      'layout.backHome': '{0} 홈으로 돌아가기',
      'layout.skipToContent': '본문으로 건너뛰기',
      'nav.archives': '아카이브',
      'nav.about': '소개',
      'nav.categories': '카테고리',
      'nav.language': '언어',
      'nav.links': '링크',
      'nav.menu.close': '메뉴 닫기',
      'nav.menu.label': '메뉴',
      'nav.menu.open': '메뉴 열기',
      'nav.islandColor': '섬 색상',
      'nav.islandColor.description': '페이지 색상 선택',
      'nav.moments': '모먼트',
      'nav.photos': '사진',
      'nav.primary': '주 내비게이션',
      'nav.search': '검색',
      'nav.social.closeImage': '이미지 닫기',
      'nav.social.defaultName': '소셜 미디어',
      'nav.social.imageAlt': '{0} 이미지',
      'nav.social.label': '소셜 미디어',
      'nav.social.viewImage': '{0} 이미지 보기',
      'nav.social.visit': '{0} 방문하기',
      'nav.submenu.collapse': '{0} 하위 메뉴 접기',
      'nav.submenu.current': '현재 항목',
      'nav.submenu.expand': '{0} 하위 메뉴 펼치기',
      'nav.tags': '태그',
      'nav.tools': '사이트 도구',
      'islandColor.nightIsland': '밤의 섬',
      'islandColor.nightIsland.description': '오리지널 다크 브랜드',
      'islandColor.dawnIsland': '새벽의 섬',
      'islandColor.dawnIsland.description': '은종이와 먹색',
      'islandColor.followSystem': '시스템 따르기',
      'islandColor.followSystem.description': '기기 설정에 맞춤',
      'islandColor.duskIsland': '땅거미의 섬',
      'islandColor.duskIsland.description': '블루아워와 잔광',
      'footer.filings': '사이트 등록 정보',
      'footer.icp': 'ICP',
      'footer.poweredBy': '{0} 제공',
      'footer.theme': '테마: {0}',
      'page.index.welcome': '환영합니다',
      'page.index.browseCategories': '카테고리 둘러보기',
      'page.index.collectionsEyebrow': '컬렉션',
      'page.index.collectionsTitle': '콘텐츠 컬렉션',
      'page.index.contactEyebrow': '연락처',
      'page.index.emptyCategories': '카테고리가 여기에 콘텐츠 지도를 형성합니다.',
      'page.index.emptyPosts': '아직 게시글이 없습니다. 첫 번째 글을 작성해 보세요.',
      'page.index.featuredEyebrow': '주목할 글',
      'page.index.heroImageAlt': '{0}의 히어로 이미지',
      'page.index.pinnedPosts': '고정된 글',
      'page.index.categoryPosts': '카테고리 글',
      'page.index.tagPosts': '태그 글',
      'page.index.recentDescription': '실천, 독서, 일상의 최신 기록.',
      'page.index.recentPosts': '최근 글',
      'page.index.viewAllPosts': '모든 글 보기',
      'page.index.viewCategory': '이 카테고리 보기',
      'page.archives.description': '시간의 흐름을 따라, 써 내려간 흔적을 다시 읽다.',
      'page.archives.empty': '아직 아카이브할 글이 없습니다.',
      'page.archives.heading': '글 아카이브',
      'page.archives.title': '아카이브',
      'page.author.empty': '이 저자에게는 아직 글이 없습니다.',
      'page.author.eyebrow': '저자',
      'page.categories.description': '서로 다른 길로 같은 사색의 숲으로 들어갑니다.',
      'page.categories.empty': '아직 카테고리가 없습니다.',
      'page.categories.eyebrow': '카테고리',
      'page.categories.heading': '글 카테고리',
      'page.categories.title': '카테고리',
      'page.category.empty': '이 카테고리에는 아직 글이 없습니다.',
      'page.category.eyebrow': '카테고리',
      'page.tag.empty': '이 태그의 글은 아직 없습니다.',
      'page.tag.eyebrow': '태그',
      'page.tags.description': '반복해서 나타나고, 계속 물을 가치가 있는 단어들.',
      'page.tags.empty': '아직 태그가 없습니다.',
      'page.tags.eyebrow': '태그',
      'page.tags.heading': '모든 태그',
      'page.tags.title': '태그',
      'page.post.adjacentPosts': '인접한 글',
      'page.post.author': '저자',
      'page.post.categories': '카테고리',
      'page.post.categoriesAria': '글 카테고리',
      'page.post.closeToc': '목차 닫기',
      'page.post.contentWidth': '본문 너비',
      'page.post.continueReading': '계속 읽기',
      'page.post.fontSize': '글자 크기',
      'page.post.lineHeight': '줄 높이',
      'page.post.linkCopied': '링크가 복사되었습니다. 붙여넣기로 공유할 수 있습니다.',
      'page.post.nextPost': '다음 글',
      'page.post.openToc': '목차 열기',
      'page.post.previousPost': '이전 글',
      'page.post.print': '인쇄',
      'page.post.published': '게시일',
      'page.post.readerReset': '기본 레이아웃으로 복원되었습니다.',
      'page.post.readerSettings': '읽기 설정',
      'page.post.readerTools': '읽기 도구',
      'page.post.readingTime': '읽는 시간',
      'page.post.readingTimeValue': '약 {0}분 소요',
      'page.post.resetReaderSettings': '기본값으로 복원',
      'page.post.share': '공유',
      'page.post.shareComplete': '공유되었습니다.',
      'page.post.shareError': '공유할 수 없습니다. 주소 표시줄의 링크를 복사해 주세요.',
      'page.post.tagsAria': '글 태그',
      'page.post.tagsLabel': '태그',
      'page.post.toc.section': '섹션 {0}',
      'page.post.tocAria': '목차',
      'page.post.tocEyebrow': '이 페이지에서',
      'page.post.updated': '업데이트일',
      'page.post.visits': '조회수',
      'page.links.title': '링크',
      'page.links.description': '{0}이(가) 소중히 여기는 이웃들이 모여 있습니다. 진지하게 글을 쓰고, 창조하며, 배움을 세상과 나누는 사람들입니다.',
      'page.links.empty': '아직 동행자가 없습니다',
      'page.links.defaultGroup': '길에서 만나다',
      'page.links.siteCount': '사이트: {0}개',
      'page.links.visitNewTab': '{0} 방문 (새 탭에서 열기)'
    },
    'zh-TW': {
      'common.all': '全部',
      'common.close': '關閉',
      'common.nextPage': '下一頁',
      'common.page': '頁面',
      'common.pagination': '分頁',
      'common.postsCount': '文章：{0} 篇',
      'common.previousPage': '上一頁',
      'common.readPost': '閱讀文章',
      'common.viewDetails': '檢視詳情',
      'date.format.dateTime': 'yyyy年M月d日 HH:mm',
      'date.format.long': 'yyyy年MM月dd日',
      'date.format.moment': 'yyyy年M月d日',
      'date.format.short': 'yyyy.MM.dd',
      'date.format.time': 'HH:mm',
      'language.en': 'English',
      'language.ja': '日本語',
      'language.ko': '한국어',
      'language.zhCN': '简体中文',
      'language.zhTW': '繁體中文',
      'layout.backHome': '返回 {0} 首頁',
      'layout.skipToContent': '跳到正文',
      'nav.archives': '歸檔',
      'nav.about': '關於',
      'nav.categories': '分類',
      'nav.language': '語言',
      'nav.links': '友鏈',
      'nav.menu.close': '關閉選單',
      'nav.menu.label': '選單',
      'nav.menu.open': '開啟選單',
      'nav.islandColor': '嶼色',
      'nav.islandColor.description': '選擇頁面配色',
      'nav.moments': '瞬間',
      'nav.photos': '圖庫',
      'nav.primary': '主導航',
      'nav.search': '搜尋',
      'nav.social.closeImage': '關閉圖片',
      'nav.social.defaultName': '社群媒體',
      'nav.social.imageAlt': '{0} 圖片',
      'nav.social.label': '社群媒體',
      'nav.social.viewImage': '檢視 {0} 圖片',
      'nav.social.visit': '造訪 {0}',
      'nav.submenu.collapse': '收起 {0} 子選單',
      'nav.submenu.current': '當前項目',
      'nav.submenu.expand': '展開 {0} 子選單',
      'nav.tags': '標籤',
      'nav.tools': '站點工具',
      'islandColor.nightIsland': '夜嶼',
      'islandColor.nightIsland.description': '當前深色品牌',
      'islandColor.dawnIsland': '曉嶼',
      'islandColor.dawnIsland.description': '銀紙與墨色',
      'islandColor.followSystem': '隨境',
      'islandColor.followSystem.description': '隨裝置明暗',
      'islandColor.duskIsland': '暮嶼',
      'islandColor.duskIsland.description': '藍時與餘暉',
      'footer.filings': '網站備案資訊',
      'footer.icp': 'ICP',
      'footer.poweredBy': '由 {0} 驅動',
      'footer.theme': '主題：{0}',
      'page.index.welcome': '歡迎來到',
      'page.index.browseCategories': '瀏覽分類',
      'page.index.collectionsEyebrow': '專題',
      'page.index.collectionsTitle': '內容專題',
      'page.index.contactEyebrow': '聯絡',
      'page.index.emptyCategories': '分類會在這裡形成你的內容地圖。',
      'page.index.emptyPosts': '還沒有文章，先寫下第一篇吧。',
      'page.index.featuredEyebrow': '精選文章',
      'page.index.heroImageAlt': '{0} 的首頁主圖',
      'page.index.pinnedPosts': '置頂文章',
      'page.index.categoryPosts': '分類文章',
      'page.index.tagPosts': '標籤文章',
      'page.index.recentDescription': '記錄最新的實踐、閱讀與生活切片。',
      'page.index.recentPosts': '近期文章',
      'page.index.viewAllPosts': '檢視全部文章',
      'page.index.viewCategory': '檢視該分類',
      'page.archives.description': '沿著時間，重讀寫下的痕跡。',
      'page.archives.empty': '還沒有可歸檔的文章。',
      'page.archives.heading': '文章歸檔',
      'page.archives.title': '歸檔',
      'page.author.empty': '這位作者暫時沒有文章。',
      'page.author.eyebrow': '作者',
      'page.categories.description': '從不同路徑進入同一片思想的山林。',
      'page.categories.empty': '還沒有文章分類。',
      'page.categories.eyebrow': '分類',
      'page.categories.heading': '文章分類',
      'page.categories.title': '分類',
      'page.category.empty': '這個分類暫時沒有文章。',
      'page.category.eyebrow': '分類',
      'page.tag.empty': '這個標籤暫時沒有文章。',
      'page.tag.eyebrow': '標籤',
      'page.tags.description': '一些反覆出現、值得繼續追問的詞。',
      'page.tags.empty': '還沒有文章標籤。',
      'page.tags.eyebrow': '標籤',
      'page.tags.heading': '全部標籤',
      'page.tags.title': '標籤',
      'page.post.adjacentPosts': '相鄰文章',
      'page.post.author': '作者',
      'page.post.categories': '分類',
      'page.post.categoriesAria': '文章分類',
      'page.post.closeToc': '關閉文章目錄',
      'page.post.contentWidth': '正文寬度',
      'page.post.continueReading': '繼續閱讀',
      'page.post.fontSize': '字號',
      'page.post.lineHeight': '行高',
      'page.post.linkCopied': '連結已複製，可以貼上分享。',
      'page.post.nextPost': '下一篇',
      'page.post.openToc': '開啟文章目錄',
      'page.post.previousPost': '上一篇',
      'page.post.print': '列印',
      'page.post.published': '發佈於',
      'page.post.readerReset': '已恢復預設排版。',
      'page.post.readerSettings': '閱讀設定',
      'page.post.readerTools': '閱讀工具',
      'page.post.readingTime': '閱讀時長',
      'page.post.readingTimeValue': '約 {0} 分鐘閱讀',
      'page.post.resetReaderSettings': '恢復預設',
      'page.post.share': '分享',
      'page.post.shareComplete': '分享完成。',
      'page.post.shareError': '暫時無法分享，請複製網址列連結。',
      'page.post.tagsAria': '文章標籤',
      'page.post.tagsLabel': '標籤',
      'page.post.toc.section': '章節 {0}',
      'page.post.tocAria': '文章目錄',
      'page.post.tocEyebrow': '本頁目錄',
      'page.post.updated': '更新於',
      'page.post.visits': '瀏覽量',
      'page.links.title': '友鏈',
      'page.links.description': '這裡收集著 {0} 珍視的鄰居：仍在認真寫作、創造，也願意把經驗分享給世界的人。',
      'page.links.empty': '還沒有同行者',
      'page.links.defaultGroup': '沿途相遇',
      'page.links.siteCount': '站點：{0} 個',
      'page.links.visitNewTab': '造訪 {0}（在新分頁開啟）'
    }
  };

  function formatMsg(tmpl) {
    var args = Array.prototype.slice.call(arguments, 1);
    return tmpl.replace(/\{(\d+)\}/g, function (m, i) {
      return args[i] !== undefined ? args[i] : m;
    });
  }

  function msg(key, lang) {
    var dict = messages[lang] || messages['zh-CN'] || {};
    return dict[key] || key;
  }

  function detectInitialLang() {
    var url = new URL(window.location.href);
    var param = url.searchParams.get('language') || url.searchParams.get('lang');
    if (param && messages[param]) {
      localStorage.setItem('wind-island-lang', param);
      try {
        url.searchParams.delete('language');
        url.searchParams.delete('lang');
        window.history.replaceState({}, '', url.href);
      } catch (e) {}
      return param;
    }
    var stored = localStorage.getItem('wind-island-lang');
    if (stored && messages[stored]) return stored;
    return document.documentElement.getAttribute('lang') || 'zh-CN';
  }

  function setLang(lang) {
    if (!messages[lang]) return;
    localStorage.setItem('wind-island-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    var all = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var key = el.getAttribute('data-i18n');
      var tmpl = msg(key, lang);
      var argsAttr = el.getAttribute('data-i18n-args');
      if (argsAttr) {
        try {
          var args = JSON.parse(argsAttr);
          tmpl = formatMsg.apply(null, [tmpl].concat(args));
        } catch (e) {}
      }
      var mode = el.getAttribute('data-i18n-mode') || 'text';
      if (mode === 'html') {
        el.innerHTML = tmpl;
      } else if (mode === 'placeholder') {
        el.setAttribute('placeholder', tmpl);
      } else if (mode === 'aria-label') {
        el.setAttribute('aria-label', tmpl);
      } else {
        var firstChild = el.firstChild;
        if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
          firstChild.textContent = tmpl;
        } else {
          el.textContent = tmpl;
        }
      }
    }

    // Update WindIslandI18n for main.js compatibility
    if (window.WindIslandI18n) {
      window.WindIslandI18n.locale = lang;
      window.WindIslandI18n.messages = messages[lang] || messages['zh-CN'];
    }
  }

  var activeLang = detectInitialLang();

  // Set up WindIslandI18n for main.js (must be set BEFORE main.js loads)
  window.WindIslandI18n = window.WindIslandI18n || {};
  window.WindIslandI18n.locale = activeLang;
  window.WindIslandI18n.messages = messages[activeLang] || messages['zh-CN'];

  // Apply translations after DOM ready
  function applyTranslations() {
    setLang(activeLang);
    var languageSwitcher = document.querySelector('[data-language-switcher]');
    if (languageSwitcher) {
      languageSwitcher.querySelectorAll('.submenu a[data-language]').forEach(function (l) {
        l.classList.toggle('active', l.dataset.language === activeLang);
      });
    }
  }

  function setupLanguageSwitcher() {
    var languageSwitcher = document.querySelector('[data-language-switcher]');
    if (languageSwitcher) {
      languageSwitcher.querySelectorAll('.submenu a[data-language]').forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
          var language = link.dataset.language ? link.dataset.language.trim() : '';
          if (!language || !messages[language]) return;
          activeLang = language;
          localStorage.setItem('wind-island-lang', language);
          setLang(language);

          // Update active class on language links
          languageSwitcher.querySelectorAll('.submenu a[data-language]').forEach(function (l) {
            l.classList.toggle('active', l.dataset.language === language);
          });

          // Close the submenu after selecting a language
          languageSwitcher.classList.remove('is-submenu-open');
          var toggleBtn = languageSwitcher.querySelector('[data-submenu-toggle]');
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
          }
        }, true);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTranslations();
      setupLanguageSwitcher();
    });
  } else {
    applyTranslations();
    setupLanguageSwitcher();
  }

  // Watch for dynamic content (e.g., article content loaded via AJAX)
  if (window.MutationObserver) {
    var observer = new MutationObserver(function (mutations) {
      var hasNewI18n = false;
      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.hasAttribute && node.hasAttribute('data-i18n')) {
              hasNewI18n = true;
              break;
            }
            if (node.querySelectorAll) {
              var nested = node.querySelectorAll('[data-i18n]');
              if (nested.length > 0) {
                hasNewI18n = true;
                break;
              }
            }
          }
        }
        if (hasNewI18n) break;
      }
      if (hasNewI18n) setLang(activeLang);
    });
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }
  }
})();