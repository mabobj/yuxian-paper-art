# 11 Homepage Polish v3

## 1. 本次精修目标

基于 `design/red-window-art-polish/` 设计包，对首页 `/` 进行第三轮精修，使页面更接近目标设计稿的品牌精细度。

核心目标：

- 修复 Hero 右侧主视觉缺失问题。
- 扩大页面版心至 1180px。
- 调整 Header 尺寸和品牌感。
- 调整每个模块的卡片尺寸、间距和图片比例。
- 把 Craft Story 改得更接近设计稿的横向故事带。
- 让 Collections / Gifts / Artworks 更像成熟独立站页面。
- 精修 Trust Bar、Newsletter 和 Footer。
- 保持移动端可用。

## 2. 复制了哪些素材

从 `design/red-window-art-polish/assets/public-copy/design/red-window-art/` 复制到 `apps/storefront/public/design/red-window-art/`：

### PNG 素材

| 文件 | 用途 |
|------|------|
| `hero-scene.png` | Hero 右侧家居场景 |
| `collection-zodiac.png` | Featured Collections — Zodiac |
| `collection-blessing.png` | Featured Collections — Blessing |
| `collection-wedding.png` | Featured Collections — Wedding |
| `collection-framed-wall-art.png` | Featured Collections — Framed Wall Art |
| `craft-story-banner.png` | Craft Story 横向横幅 |
| `gift-housewarming.png` | Gifts — Housewarming |
| `gift-wedding.png` | Gifts — Wedding |
| `gift-lunar-new-year.png` | Gifts — Lunar New Year |
| `artwork-dragon-of-prosperity.png` | Artworks — Dragon of Prosperity |
| `artwork-blessing-of-fortune.png` | Artworks — Blessing of Fortune |
| `artwork-peony-of-abundance.png` | Artworks — Peony of Abundance |
| `artwork-mandarin-ducks.png` | Artworks — Mandarin Ducks |

### SVG 素材

| 文件 | 用途 |
|------|------|
| `logo-seal-red-window-art.svg` | Header 品牌 Logo |
| `icon-search.svg` | Header 搜索图标 |
| `icon-account.svg` | Header 账户图标 |
| `icon-cart.svg` | Header 购物袋图标 |
| `icon-chevron-down.svg` | Header 导航下拉箭头 |
| `icon-arrow-right.svg` | 卡片右箭头 |
| `icon-heart-outline.svg` | 商品心形收藏图标 |
| `meaning-prosperity.svg` | Meaning — Prosperity |
| `meaning-love.svg` | Meaning — Love |
| `meaning-health.svg` | Meaning — Health |
| `meaning-protection.svg` | Meaning — Protection |
| `meaning-harmony.svg` | Meaning — Harmony |
| `meaning-joy.svg` | Meaning — Joy |
| `trust-secure-payment.svg` | Trust Bar — Secure Payment |
| `trust-worldwide-shipping.svg` | Trust Bar — Worldwide Shipping |
| `trust-carefully-packaged.svg` | Trust Bar — Carefully Packaged |
| `trust-handmade-heritage.svg` | Trust Bar — Handmade Heritage |
| `pattern-newsletter-rings.svg` | Newsletter 环形暗纹装饰 |
| `pattern-floral-corner.svg` | Hero 左侧花枝装饰 |

## 3. 修改了哪些组件

### Header (`src/components/Header.tsx`)

- 高度 64px（h-16）
- Logo 40px（w-10 h-10）
- 品牌名 Red Window Art，字号 26px，颜色 brand-red，serif
- 导航居中，gap 30px
- Shop / Gifts / Home Decor / Blessings 带 chevron-down 下拉箭头
- 右侧图标 22px，间距 16px
- 购物袋图标带静态红色数字角标（"2"）
- 全宽铺开，版心 1180px

### Hero (`src/components/HeroSection.tsx`)

- 高度 430px
- 左侧文字区 42%，右侧图片区 58% grid
- 右侧使用 hero-scene.png，object-fit: cover
- 左侧叠加淡淡花枝装饰（pattern-floral-corner.svg，opacity 0.06）
- 标题 42px-48px，leading 1.08，serif
- "Into Your Home" 红色强调
- 副标题对齐任务包文案
- Shop Artworks / Explore the Story 两个按钮

### SectionTitle (`src/components/SectionTitle.tsx`)

- 24px font-medium + 金色短线（w-8 h-0.5 bg-brand-gold/50）
- 可选 subtitle

### FeaturedCollections (`src/components/FeaturedCollections.tsx`)

- 4 列，gap 18px
- 图片高度 140px，object-cover
- 底部信息条 42px，标题左对齐 + 箭头右对齐
- 卡片 rounded-lg，shadow 轻量

### MeaningGrid (`src/components/MeaningGrid.tsx`)

- 6 列，gap 12px（gap-3）
- 卡片高度 98px
- 图标 42px，金色
- 卡片背景 brand-card，边框 brand-border

### CraftStory (`src/components/CraftStory.tsx`)

- 横向横幅，高度 210px
- 背景图 craft-story-banner.png，object-cover 全幅覆盖
- 半透明遮罩层
- 文字叠加右侧，max-w-[44%]
- 文案对齐任务包："Rooted in the ancient folk tradition of Yuxian..."

### GiftScenarios (`src/components/GiftScenarios.tsx`)

- 3 列，gap 18px
- 图片高度 133px
- 底部信息条 42px + 右箭头

### ArtworkGrid (`src/components/ArtworkGrid.tsx`)

- 4 列，gap 18px
- 图片高度 200px
- 右上角心形图标
- Best Seller / New 角标
- 信息区 minHeight 76px，标签 + 商品名 + 价格层级清晰

### TrustBar (`src/components/TrustBar.tsx`)

- 4 列，图标 32px，标题 15px，副文案 12px
- 背景 brand-card，上下 border

### Newsletter (`src/components/Newsletter.tsx`)

- 高度 145px，背景 brand-footer（#8F1717）
- 装饰背景使用 pattern-newsletter-rings.svg（Image fill + opacity 0.4）
- 主标题："Receive stories of Chinese symbols, seasonal gift ideas, and new artwork releases."
- 小字："No spam, unsubscribe any time."
- 输入框 280-320px，按钮 130-140px
- 桌面端水平布局

### Footer (`src/components/Footer.tsx`)

- 4 列结构：品牌介绍 / Shop / Explore / Support
- 版心 1180px
- 品牌名红色
- 底部版权 © 2026

### Container (`src/components/Container.tsx`)

- max-width: min(1180px, calc(100% - 48px))

### 首页布局 (`src/app/page.tsx`)

- 各 section 间距 py-12 lg:py-14
- 文案对齐：Shop by Collection / Choose by Meaning / Meaningful Chinese Gifts / Featured Artworks / You're in Good Hands

## 4. 与设计稿相比还剩哪些差距

- 尚未接入 Medusa 后台，商品数据仍为 Mock
- 尚未接入真实支付、登录、收藏功能
- 移动端 Hero 可进一步优化上下布局比例
- 动画和微交互可以后续增加
- 产品详情页、分类页等二级页面尚未精修

## 5. 移动端处理说明

- Header 不横向挤爆，nav 在移动端隐藏（lg:flex）
- Hero 在移动端保持上下结构（文案在上，图片在 lg 以下隐藏）
- Collections 两列（grid-cols-2 lg:grid-cols-4）
- Meaning 三列（grid-cols-3 lg:grid-cols-6）
- Gifts 一列（grid-cols-1 md:grid-cols-3）
- Artworks 一列（grid-cols-1 sm:grid-cols-2 lg:grid-cols-4）
- Newsletter 输入框和按钮上下排列（flex-col sm:flex-row）
- 不出现横向滚动

## 6. 后续建议

1. 接入 Medusa 后台，实现动态商品数据
2. 精修产品详情页、分类页
3. 添加页面过渡动画和微交互
4. 接入真实支付和物流
5. 多语言支持
6. SEO 内容策略