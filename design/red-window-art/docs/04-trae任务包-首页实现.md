# 04 Trae 任务包：Red Window Art 首页实现

> 这是给 Trae / DeepSeek 的直接执行任务包。请整体复制给 Trae，不要删减关键要求。

## 一、背景

当前项目仓库名为：`yuxian-paper-art`。

当前需要你完成的不是普通页面开发，而是将一个已确定视觉方向的首页设计稿，尽量一致地落地为前端页面。

你不具备设计和规划能力，所以请严格遵循以下材料和要求实现。

本任务只关注首页 `/` 的高保真实现，不接 Medusa，不接支付，不做登录，不做真实收藏功能。

## 二、必须使用的参考材料

请先阅读并参考以下文件：

1. `design/red-window-art/assets/reference/00-homepage-full-reference.png`
2. `design/red-window-art/docs/00-设计拆解总览.md`
3. `design/red-window-art/docs/01-首页模块拆解.md`
4. `design/red-window-art/docs/02-视觉令牌与实现约束.md`
5. `design/red-window-art/assets/tokens/design-tokens.json`
6. `design/red-window-art/docs/03-素材清单.md`

如果实际目录不同，请以本任务包中提到的相对结构为准，把该设计包放到项目根目录下的：

`design/red-window-art/`

## 三、任务目标

在现有 Next.js 前端项目基础上，把首页 `/` 实现为接近设计稿的状态。

标准不是“差不多有这些模块”，而是：

1. 模块顺序一致
2. 配色气质一致
3. 布局结构高度接近
4. 文字内容基本一致
5. 首页第一眼气质接近高端中式剪纸家居艺术独立站

## 四、品牌与导航

前台展示品牌名必须是：

`Red Window Art`

项目仓库名仍然保留：

`yuxian-paper-art`

导航必须为：
- Shop
- Gifts
- Home Decor
- Blessings
- Our Story
- Journal

右侧图标：
- Search
- Account
- Cart

## 五、首页模块顺序

首页按以下顺序实现：

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

## 六、具体实现要求

### 1. Header
- 左侧显示 logo + Red Window Art
- 中间为导航
- 右侧为 3 个图标
- 整体高度约 72px
- 背景白色或浅米白

### 2. Hero
左侧：
- 标题：Bring Chinese Heritage Art Into Your Home
- 副标题：Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.
- 两个按钮：Shop Artworks / Explore the Story

右侧：
必须做成“家居展示场景”效果：
- 墙上带画框的圆形红色剪纸艺术
- 木柜
- 花瓶和枝条
- 暖色光感
- 轻窗影

要求：不要做普通占位图。

### 3. Featured Collections
4 张横向卡片：
- Zodiac Collection
- Blessing Collection
- Wedding Gifts
- Framed Wall Art

### 4. Choose by Meaning
6 个小卡片：
- Prosperity
- Love
- Health
- Protection
- Harmony
- Joy

使用金色线性图标，优先复用设计包中的 SVG。

### 5. The Art of Yuxian Paper Cutting
左图右文：
- 左侧表现手工剪纸过程
- 右侧标题与介绍
- 链接：Discover the Craft
- 可以叠加淡色花鸟纹样

### 6. Meaningful Chinese Gifts
3 张卡片：
- Housewarming / Bless a new beginning
- Wedding / Double happiness, forever
- Lunar New Year / Welcome good fortune

### 7. Featured Artworks
4 个商品卡片：
- Dragon of Prosperity / $128.00 / Prosperity
- Blessing of Fortune / $98.00 / Blessing
- Peony of Abundance / $118.00 / Prosperity
- Mandarin Ducks / $128.00 / Joy

卡片要求：
- 右上角心形图标
- 部分卡片可有 Best Seller / New 角标
- 像艺术品陈列，不像普通商品格子

### 8. Trust Bar
四项：
- Secure Payment / Shop with confidence
- Worldwide Shipping / Delivered to your door
- Carefully Packaged / Gift-ready packaging
- Handmade Heritage / Authentic & meaningful

### 9. Newsletter
红色订阅区：
- 文案：Receive stories of Chinese symbols, seasonal gift ideas, and new artwork releases.
- 输入框占位：Email address
- 按钮：Subscribe
- 小字：No spam, unsubscribe any time.

## 七、视觉要求

必须使用设计包中的配色：
- 背景：#F7F1E5
- 正文：#171412
- 主红：#9F1D1D
- 古金：#C9A45C
- 卡片：#FFF9EF
- 边框：#E7D8C3
- 底部红：#8F1717

标题字体应呈现 serif 书卷感，正文保持现代清晰。

## 八、素材使用要求

### 推荐目录
请将设计包内的 SVG 素材复制或引用到：

`apps/storefront/public/design/red-window-art/`

参考图不要直接用于最终页面展示，但允许在开发时对照。

允许直接使用或改造以下 SVG：
- logo-seal-red-window-art.svg
- meaning-*.svg
- trust-*.svg
- pattern-*.svg

## 九、代码要求

1. 尽量复用现有项目结构
2. 不要把整个首页写成一个超大组件
3. 建议拆分组件：
   - Header
   - HeroSection
   - FeaturedCollections
   - MeaningGrid
   - CraftStory
   - GiftScenarios
   - ArtworkGrid
   - TrustBar
   - NewsletterBand
4. 不要引入重型动画库
5. 不要依赖外部图片 URL
6. 不要破坏现有路由

## 十、文档更新

请新增：

`docs/10-red-window-art-homepage-implementation.md`

内容包括：
1. 实现了哪些模块
2. 使用了哪些设计素材
3. 哪些部分为 CSS/SVG 模拟
4. 哪些部分后续需要真实摄影素材替换
5. 移动端适配说明

并更新 `README.md`：
- 标注首页视觉基准已对齐 Red Window Art
- 标注当前完成到首页高保真实现阶段

## 十一、不要做什么

本任务不要：
1. 不接 Medusa
2. 不接支付
3. 不做登录
4. 不做真实收藏功能
5. 不删除已有 docs
6. 不改仓库名
7. 不做大范围业务逻辑重构
8. 不使用外部随机图片

## 十二、验收标准

完成后必须满足：
1. `npm run dev` 可以启动
2. 首页模块顺序与设计稿一致
3. 首页气质明显接近设计稿
4. Header 品牌名为 Red Window Art
5. Hero 有家居场景感
6. Featured Collections / Choose by Meaning / Craft Story / Gifts / Artworks / Trust Bar / Newsletter 都已实现
7. 移动端不崩
8. 文档已更新

## 十三、完成后请输出

请输出：
1. 修改文件列表
2. 新增文件列表
3. 删除文件列表
4. 运行命令
5. `npm run dev` 结果
6. `npm run build` 结果
7. 首页桌面端截图
8. 首页移动端截图
9. 仍未完成项
10. 下一步建议
