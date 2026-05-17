# 03 Trae 详细任务书：Red Window Art 首页精修 v2

> 直接把本文件整体发给 Trae。不要删减关键要求。

## 一、任务背景

当前项目仓库名为：`yuxian-paper-art`

当前首页已经有一版实现，但还没有达到设计稿的精细度和成熟度。现在需要在现有基础上继续精修，让页面更接近最终设计稿。

本次你不需要进行任何设计判断。我已经提供了：

1. 目标设计稿
2. 当前实现截图
3. 已生成的 Hero 图
4. 已生成的 Collections / Gifts / Artworks 素材图
5. 已裁好的单图素材
6. 可直接复用的 SVG 图标
7. 详细布局和实现要求

你的任务就是按照这些材料完成前端实现。

## 二、设计包目录约定

假设设计包被放在项目根目录：

`design/red-window-art-refinement/`

请先阅读：
- `design/red-window-art-refinement/docs/00-总说明.md`
- `design/red-window-art-refinement/docs/01-素材清单与用途.md`
- `design/red-window-art-refinement/docs/02-切图与布局指引.md`

## 三、本次任务目标

把首页 `/` 精细化到接近目标设计稿，重点改善：

1. Hero 右侧主视觉
2. Featured Collections 素材图
3. Craft Story 模块质感
4. Meaningful Chinese Gifts 素材图
5. Featured Artworks 素材图
6. 整体版式、间距、字体和配色的精细度
7. Footer / Newsletter 完整度

## 四、必须保留的品牌基础

前台展示品牌名必须是：
`Red Window Art`

品牌副标题语义：
- Chinese Heritage Paper-Cut Art for Home & Gifting

网站气质：
- 高端中式家居艺术品牌
- 非遗纸艺礼品品牌
- 现代东方审美
- 温暖、克制、精致、可送礼

不要做成：
- 普通商城模板
- 淘宝/速卖通风
- 低价旅游纪念品站
- 纯占位图站点

## 五、首页模块顺序（不要改）

1. Header
2. Hero
3. Featured Collections
4. Choose by Meaning
5. The Art of Yuxian Paper Cutting
6. Meaningful Chinese Gifts
7. Featured Artworks
8. Trust Bar
9. Newsletter / Subscribe Band
10. Footer

## 六、素材落地要求（非常重要）

### 1. Hero
请直接使用：
`design/red-window-art-refinement/assets/generated/sheets/hero-scene.png`

用途：Hero 右侧主视觉。

要求：
- 不能再用简化占位图
- 必须把这张图放进 Hero 右侧
- 版式保持左文右图
- 文字区和按钮仍保留

Hero 标题：
`Bring Chinese Heritage Art Into Your Home`

Hero 副标题：
`Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.`

按钮：
- `Shop Artworks`
- `Explore the Story`

### 2. Featured Collections
请优先直接使用裁好的 4 张图：
- `collection-zodiac.png`
- `collection-blessing.png`
- `collection-wedding.png`
- `collection-framed-wall-art.png`

卡片标题依次为：
- Zodiac Collection
- Blessing Collection
- Wedding Gifts
- Framed Wall Art

要求：
- 卡片有图、有标题、有右箭头
- 图片不再是空占位
- 卡片边框和圆角更精致
- 与设计稿视觉接近

### 3. Choose by Meaning
使用 SVG 图标：
- `meaning-prosperity.svg`
- `meaning-love.svg`
- `meaning-health.svg`
- `meaning-protection.svg`
- `meaning-harmony.svg`
- `meaning-joy.svg`

标题：`Choose by Meaning`
副文案：
`Every artwork carries a cultural blessing. Find the piece that speaks to what matters most.`

入口依次：
- Prosperity
- Love
- Health
- Protection
- Harmony
- Joy

### 4. Craft Story
使用：
`craft-story-banner.png`

要求：
- 尽量整块使用这张图
- 文字叠加在右侧浅色留白区域
- 左侧展现真实手工氛围

模块标题上方可保留一行辅助文案：
`A living heritage craft with over 500 years of tradition, recognized by UNESCO as an Intangible Cultural Heritage of Humanity.`

主标题：
`The Art of Yuxian Paper Cutting`

正文可保留当前版本，或使用更完整版本：
Yuxian paper-cutting is a living heritage — a folk art that has flourished for over 500 years in the villages of Hebei Province, northern China. Unlike mass-produced decorations, each piece is entirely hand-cut by artisans who train for decades to master the craft.

Using traditional scissors and fine engraving knives, artisans transform single sheets of dyed rice paper into intricate compositions. A single artwork may require thousands of precise cuts — a testament to patience, skill, and generations of accumulated wisdom.

链接：
`Discover the Craft`

### 5. Meaningful Chinese Gifts
请直接使用：
- `gift-housewarming.png`
- `gift-wedding.png`
- `gift-lunar-new-year.png`

标题：`Meaningful Chinese Gifts`
辅助文案：
`Every occasion deserves a gift with cultural depth, beauty, and a story worth sharing.`

三张卡片文案：
1. Housewarming / Bless a new beginning
2. Wedding / Double happiness, forever
3. Lunar New Year / Welcome good fortune

### 6. Featured Artworks
请直接使用：
- `artwork-dragon-of-prosperity.png`
- `artwork-blessing-of-fortune.png`
- `artwork-peony-of-abundance.png`
- `artwork-mandarin-ducks.png`

标题：`Featured Artworks`
辅助文案：
`Hand-cut, professionally framed, and ready to transform your space.`

4 个卡片文案：
1. Dragon of Prosperity / $128.00 / Prosperity
2. Blessing of Fortune / $98.00 / Blessing
3. Peony of Abundance / $118.00 / Prosperity
4. Mandarin Ducks / $128.00 / Joy

要求：
- 卡片上方有图
- 右上角显示心形图标（静态即可）
- 第一张可带 `BEST SELLER`
- 第三张可带 `NEW`
- 底部商品名、价格、轻标签要更精致

### 7. Trust Bar
使用 4 个 SVG：
- `trust-secure-payment.svg`
- `trust-worldwide-shipping.svg`
- `trust-carefully-packaged.svg`
- `trust-handmade-heritage.svg`

四项文案：
1. Secure Payment / Shop with confidence
2. Worldwide Shipping / Delivered to your door
3. Carefully Packaged / Gift-ready packaging
4. Handmade Heritage / Authentic & meaningful

### 8. Newsletter / Subscribe Band
底色使用深红：`#8F1717`

主文案：
`Stories of Heritage, Delivered`

副文案：
`Receive stories of Chinese symbols, seasonal gift ideas, and new artwork releases.`

输入框：
- 占位：`Email address`

按钮：
- `Subscribe`

底部小字：
`No spam, unsubscribe any time.`

要求：
- 背景要比当前版本更完整、更有品牌感
- 可以加轻微的椭圆线稿装饰，但不要喧宾夺主

### 9. Footer
要求：
- 保留四列结构
- 左侧品牌说明
- 中间导航分组
- 右侧 Support
- 底部版权小字
- 字重和行距更精细

## 七、文件路径建议

请将设计包里的可用素材复制到前端项目的：

`apps/storefront/public/design/red-window-art/`

建议结构：
- `apps/storefront/public/design/red-window-art/hero-scene.png`
- `apps/storefront/public/design/red-window-art/collection-zodiac.png`
- `apps/storefront/public/design/red-window-art/collection-blessing.png`
- `apps/storefront/public/design/red-window-art/collection-wedding.png`
- `apps/storefront/public/design/red-window-art/collection-framed-wall-art.png`
- `apps/storefront/public/design/red-window-art/gift-housewarming.png`
- `apps/storefront/public/design/red-window-art/gift-wedding.png`
- `apps/storefront/public/design/red-window-art/gift-lunar-new-year.png`
- `apps/storefront/public/design/red-window-art/artwork-dragon-of-prosperity.png`
- `apps/storefront/public/design/red-window-art/artwork-blessing-of-fortune.png`
- `apps/storefront/public/design/red-window-art/artwork-peony-of-abundance.png`
- `apps/storefront/public/design/red-window-art/artwork-mandarin-ducks.png`
- 以及若干 SVG 图标

## 八、样式要求

必须使用以下风格：
- 主背景：`#F7F1E5`
- 标题：`#171412`
- 主红：`#9F1D1D`
- 金色：`#C9A45C`
- 卡片底：`#FFF9EF`
- 边框：`#E7D8C3`
- 次级深棕：`#3B2A1F`

字体建议：
- 标题：`Georgia, 'Times New Roman', serif`
- 正文：`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

## 九、组件层建议

请优先复用已有组件，但需要继续拆清晰。

建议首页组件结构：
- `Header`
- `HeroSection`
- `FeaturedCollectionsSection`
- `MeaningSection`
- `CraftStorySection`
- `GiftOccasionsSection`
- `FeaturedArtworksSection`
- `TrustBar`
- `NewsletterBand`
- `Footer`

每个 section 不要写成一个巨大文件。

## 十、不要做什么

本任务不要：
1. 不接 Medusa
2. 不接支付
3. 不做登录
4. 不做真实收藏
5. 不改仓库名
6. 不删除已有 docs
7. 不引入外部随机图片链接
8. 不用极重型动画库
9. 不做大范围业务逻辑重构

## 十一、你完成后必须输出

1. 修改文件列表
2. 新增文件列表
3. 删除文件列表
4. 复制了哪些素材图片到 public 目录
5. `npm run dev` 结果
6. `npm run build` 结果
7. 首页桌面端完整截图
8. 首页移动端截图
9. 当前仍未完成项
10. 下一步建议

## 十二、验收标准

完成后必须达到：
- 首页明显比当前版本更精致
- Hero 右侧为真实氛围图，不再是简化占位
- Featured Collections、Gifts、Artworks 不再是空白占位图
- 整体风格更接近目标设计稿
- 新闻订阅区更完整
- Footer 更完整
- 桌面端和移动端都可用
