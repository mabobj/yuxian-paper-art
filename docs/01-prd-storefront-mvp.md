# 01 - PRD：前台 MVP 产品需求文档

文档版本：v0.2 中文版  
适用阶段：Phase 1  
执行对象：Trae SOLO / DeepSeek  
项目名称：蔚纸东方 / Yuxian Paper Art

## 1. 产品目标

构建一个面向海外用户的高端东方手工艺独立站前台 MVP。

用户需要能够：

1. 理解品牌。
2. 浏览商品。
3. 查看商品详情。
4. 进入购物车。
5. 进入结账占位流程。
6. 感受到商品的文化价值、礼品价值和家居装饰价值。

第一阶段前台不追求完整交易闭环，而是追求：

1. 品牌体验完整。
2. 页面结构完整。
3. 商品展示路径完整。
4. 代码架构可扩展。
5. 后续可平滑接入 Medusa 后台。

## 2. 目标用户

### 2.1 海外家居装饰消费者

需求：

1. 寻找独特、有文化感、能装饰现代居住空间的艺术品。
2. 不想购买千篇一律的装饰画。
3. 愿意为手工、文化和独特审美付费。

页面需要突出：

1. 现代家居适配。
2. 艺术感。
3. 手工价值。
4. 文化故事。

### 2.2 礼品购买者

需求：

1. 寻找不俗套、有意义、有故事的礼物。
2. 礼物要能被解释。
3. 礼物要看起来有品味。

页面需要突出：

1. 礼品场景。
2. 祝福寓意。
3. 包装感。
4. 文化解释空间。

### 2.3 中国文化兴趣用户

需求：

1. 购买或收藏具有东方文化属性的物件。
2. 了解传统工艺和地域文化。

页面需要突出：

1. 非遗背景。
2. 工艺流程。
3. 地域文化。
4. 收藏价值。

## 3. 页面范围

MVP 前台页面包括：

1. `/` 首页。
2. `/products` 产品列表页。
3. `/products/[slug]` 产品详情页。
4. `/story` 品牌故事页。
5. `/about` 关于我们页。
6. `/contact` 联系页。
7. `/cart` 购物车页。
8. `/checkout` 结账占位页。

## 4. 首页需求

页面路径：

```txt
/
```

首页目标：

```txt
让用户在 5 秒内理解网站卖什么、气质是什么、为什么值得继续看。
```

首页模块：

1. Header。
2. Hero。
3. Brand Values。
4. Featured Products。
5. Craft Story。
6. Gift Occasions。
7. Newsletter / Contact CTA。
8. Footer。

### 4.1 Header

必须包含：

1. 左侧品牌名：`Yuxian Paper Art`。
2. 导航：Shop、Story、About、Contact。
3. 右侧入口：Cart。
4. 移动端可简化为折叠菜单或上下结构。

### 4.2 Hero

Hero 标题：

```txt
Heritage Cut by Hand, Light Framed for Modern Homes.
```

Hero 副标题：

```txt
Discover handcrafted Yuxian paper-cut artworks inspired by centuries of Chinese folk tradition.
```

按钮：

```txt
Shop Collection
Explore the Craft
```

Hero 右侧视觉：

1. 不使用真实图片时，使用抽象纸艺视觉占位。
2. 有宣纸感、剪纸轮廓感、朱红点缀。
3. 不出现文字。
4. 不要做成普通渐变卡片。
5. 不要出现低价促销元素。

### 4.3 Brand Values

展示三个价值点：

1. Handcrafted Heritage。
2. Meaningful Gifts。
3. Ready for Modern Interiors。

中文解释：

1. 手工非遗。
2. 有意义的礼物。
3. 适合现代家居空间。

### 4.4 Featured Products

展示 4 个精选商品。

每个商品卡片包含：

1. 商品视觉占位。
2. 商品名称。
3. 商品短副标题。
4. 价格。
5. 标签。
6. 查看详情入口。

### 4.5 Craft Story

讲述蔚县剪纸的工艺感、层次感、手工价值和文化价值。

### 4.6 Gift Occasions

展示礼品场景：

1. Housewarming。
2. Wedding。
3. Festival。
4. Collector’s Gift。

中文解释：

1. 乔迁礼物。
2. 婚礼礼物。
3. 节日礼物。
4. 收藏礼物。

## 5. 产品列表页需求

页面路径：

```txt
/products
```

页面目标：

```txt
让用户像逛艺术品陈列一样浏览商品，而不是像逛低价货架。
```

必须包含：

1. 页面标题。
2. 页面说明。
3. 商品网格。
4. 商品卡片。
5. 分类或标签筛选结构预留。
6. 礼品场景提示。
7. 底部行动入口。

商品卡片必须包含：

1. 商品视觉占位。
2. 商品名。
3. 商品短副标题。
4. 价格。
5. 标签。
6. 查看详情入口。

## 6. 产品详情页需求

页面路径：

```txt
/products/[slug]
```

页面目标：

```txt
把商品从“剪纸”提升为“有文化故事的艺术礼物”。
```

必须包含：

1. 大图视觉区。
2. 商品标题。
3. 商品副标题。
4. 价格。
5. 简短描述。
6. Add to Cart 按钮。
7. 尺寸。
8. 材料。
9. 工艺说明。
10. 运输说明。
11. 文化寓意。
12. 推荐商品区域预留。

重要要求：

1. 不能做成普通商品详情页。
2. 必须有工艺和文化叙事。
3. 必须突出礼品和家居场景。
4. 必须保留后续接入真实购物车的按钮位置。

## 7. 品牌故事页需求

页面路径：

```txt
/story
```

页面目标：

```txt
解释蔚县剪纸为什么有价值。
```

必须包含：

1. 什么是 Yuxian paper-cut。
2. 工艺特点。
3. 传统文化背景。
4. 手工价值。
5. 为什么适合现代空间。
6. 为什么适合作为礼物。
7. 品牌使命。

## 8. 关于我们页需求

页面路径：

```txt
/about
```

页面目标：

```txt
建立新品牌信任感。
```

必须包含：

1. 品牌使命。
2. 我们为什么做这个项目。
3. 我们如何选择产品。
4. 我们对手工艺和文化表达的态度。
5. 后续可以补充团队、产地、合作工坊等信息。

## 9. 联系页需求

页面路径：

```txt
/contact
```

页面目标：

```txt
提供基础联系和合作入口。
```

必须包含：

1. 联系表单 UI。
2. 邮箱占位。
3. 批量采购说明。
4. 礼品合作说明。
5. 客服响应说明。

MVP 阶段表单可以只做静态 UI，不需要真实提交。

## 10. 购物车页需求

页面路径：

```txt
/cart
```

MVP 阶段先做静态 UI。

必须包含：

1. 商品缩略图占位。
2. 商品名称。
3. 数量。
4. 单价。
5. 小计。
6. 总计。
7. Checkout 按钮。
8. 运输和税费提示。

## 11. 结账页需求

页面路径：

```txt
/checkout
```

MVP 阶段只做占位。

必须显示：

```txt
Checkout integration will be added in the next phase.
```

并展示后续将接入：

1. Customer information。
2. Shipping address。
3. Shipping method。
4. Payment method。
5. Order confirmation。

## 12. 视觉要求

整体风格：

1. 博物馆礼品店气质。
2. 东方纸艺。
3. 手工非遗。
4. 温润高级。
5. 克制、安静、有诗意。
6. 高级但不冰冷。

禁止：

1. 淘宝风。
2. 满屏红色。
3. 赛博风。
4. 游戏风。
5. 过度动画。
6. 廉价促销风。
7. 信息拥挤。

色彩：

```txt
背景主色：#F7F1E5
深色文字：#171412
辅助深棕：#3B2A1F
中国朱红：#B73A2F
古金色：#C9A45C
浅卡片色：#FFF9EF
边框浅色：#E7D8C3
```

## 13. 响应式要求

1. 桌面端优先实现高级感。
2. 移动端必须可读、可点、不卡片挤压。
3. Header 在移动端可以折叠为简化导航。
4. 产品网格移动端单列或双列均可，但不能拥挤。
5. CTA 按钮在移动端要足够大。

## 14. SEO 要求

每个页面都需要基础 metadata：

1. title。
2. description。
3. OpenGraph 结构预留。

首页 title：

```txt
Yuxian Paper Art | Handcrafted Chinese Paper-Cut Heritage
```

首页 description：

```txt
Discover handcrafted Yuxian paper-cut artworks for meaningful gifts and modern interiors.
```

## 15. MVP 验收标准

1. 前台可以启动。
2. 所有页面可访问。
3. 页面无明显报错。
4. 移动端布局可用。
5. 商品数据来自集中 mock 文件。
6. 页面视觉符合高端东方手工艺定位。
7. 产品详情页不是普通商品页，而是有文化叙事。
8. 代码结构清晰，后续能接 Medusa。
