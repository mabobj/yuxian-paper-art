# 06 - Trae 任务包 01：项目骨架与前台静态 MVP

文档版本：v0.2 中文版  
执行对象：Trae SOLO / DeepSeek  
目标：完成 `yuxian-paper-art` 项目的前台静态 MVP  
重要说明：请严格按本任务包执行，不要擅自扩大范围

## 1. 背景

我们正在构建一个面向海外用户的中国非遗文化跨境电商独立站。第一阶段主打蔚县剪纸艺术品、装饰画、礼品和收藏品。

项目名称：

```txt
Yuxian Paper Art
```

中文品牌名：

```txt
蔚纸东方
```

GitHub 仓库名：

```txt
yuxian-paper-art
```

技术方向已经确定：

1. 前台使用自定义 Next.js + TypeScript + Tailwind。
2. 后台后续接入 Medusa。
3. 第一任务包只做前台静态 MVP。
4. 不要接后台。
5. 不要接真实支付。

## 2. 本任务目标

完成一个可运行、可展示、可扩展的前台 MVP。

必须做到：

1. 项目可以启动。
2. 页面路由完整。
3. 组件拆分清晰。
4. 视觉系统符合高端东方手工艺定位。
5. 商品数据集中 mock。
6. 后续可平滑接入 Medusa。

## 3. 技术要求

使用：

1. Next.js。
2. React。
3. TypeScript。
4. Tailwind CSS。
5. App Router。

不要：

1. 不要接数据库。
2. 不要接 Medusa。
3. 不要接支付。
4. 不要做复杂状态管理。
5. 不要引入不必要的大型 UI 模板。
6. 不要复制普通商城模板风格。
7. 不要把所有代码写在一个巨大文件里。

## 4. 推荐目录结构

请在仓库中创建或调整为以下结构：

```txt
yuxian-paper-art/
├─ apps/
│  └─ storefront/
│     ├─ src/
│     │  ├─ app/
│     │  │  ├─ page.tsx
│     │  │  ├─ products/
│     │  │  │  ├─ page.tsx
│     │  │  │  └─ [slug]/page.tsx
│     │  │  ├─ story/page.tsx
│     │  │  ├─ about/page.tsx
│     │  │  ├─ contact/page.tsx
│     │  │  ├─ cart/page.tsx
│     │  │  └─ checkout/page.tsx
│     │  ├─ components/
│     │  ├─ data/products.ts
│     │  ├─ types/product.ts
│     │  └─ lib/
│     ├─ public/
│     ├─ package.json
│     └─ .env.example
├─ docs/
├─ README.md
└─ package.json
```

如果 monorepo 初始化较复杂，可以先只创建 `apps/storefront`，但必须保持未来接入 `apps/commerce` 的空间。

## 5. 必须创建的页面

1. `/` 首页。
2. `/products` 产品列表页。
3. `/products/[slug]` 产品详情页。
4. `/story` 品牌故事页。
5. `/about` 关于我们页。
6. `/contact` 联系页。
7. `/cart` 购物车页。
8. `/checkout` 结账占位页。

## 6. 必须创建的组件

至少创建：

```txt
Header
Footer
Container
Button
SectionTitle
HeroSection
ProductCard
ProductGrid
ValueCard
CraftStory
GiftOccasionCard
```

可以按实际需要增加组件，但不要把所有页面写成一个巨大文件。

## 7. Mock 商品数据要求

创建：

```txt
apps/storefront/src/data/products.ts
```

至少包含 6 个商品：

1. Red Lantern Blessing Paper Cut。
2. Peony Window Paper Art。
3. Auspicious Dragon Heritage Cut。
4. Folk Opera Shadow Paper Cut。
5. Zodiac Rabbit Paper Cut。
6. Double Happiness Wedding Paper Cut。

商品类型：

```ts
export type Product = {
  id: string
  slug: string
  name: string
  subtitle: string
  price: number
  currency: 'USD'
  category: string
  imagePlaceholder: string
  shortDescription: string
  description: string
  dimensions: string
  materials: string
  craft: string
  shippingNote: string
  tags: string[]
}
```

## 8. 视觉规范

必须使用以下色彩：

```txt
背景主色：#F7F1E5
深色文字：#171412
辅助深棕：#3B2A1F
中国朱红：#B73A2F
古金色：#C9A45C
浅卡片色：#FFF9EF
边框浅色：#E7D8C3
```

视觉关键词：

```txt
博物馆礼品店
东方纸艺
手工非遗
温润高级
优雅
安静
有诗意
高级但不冰冷
```

禁止：

1. 淘宝风。
2. 低价促销风。
3. 赛博风。
4. 游戏风。
5. 过度动画。
6. 满屏中国红。
7. 复杂花哨渐变。
8. 普通商城模板感。

## 9. 首页内容要求

首页必须包含：

1. Header。
2. Hero。
3. Brand Values。
4. Featured Products。
5. Craft Story。
6. Gift Occasions。
7. Footer。

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

价值点：

1. Handcrafted Heritage。
2. Meaningful Gifts。
3. Ready for Modern Interiors。

礼品场景：

1. Housewarming。
2. Wedding。
3. Festival。
4. Collector’s Gift。

## 10. 产品列表页要求

产品列表页必须包含：

1. 页面标题。
2. 页面说明。
3. 商品网格。
4. 商品卡片。
5. 分类或标签筛选结构预留。
6. 礼品场景提示。
7. 底部 CTA。

商品卡片必须包含：

1. 商品视觉占位。
2. 商品名。
3. 商品短副标题。
4. 价格。
5. 标签。
6. 查看详情入口。

## 11. 产品详情页要求

产品详情页不是普通商城详情页，必须体现文化价值。

必须包含：

1. 标题。
2. 副标题。
3. 价格。
4. 短描述。
5. Add to Cart 按钮。
6. 尺寸。
7. 材料。
8. 工艺。
9. 运输说明。
10. 文化叙事。
11. 推荐商品预留。

## 12. 品牌故事页要求

品牌故事页必须解释：

1. 什么是蔚县剪纸。
2. 蔚县剪纸的工艺特点。
3. 为什么它有文化价值。
4. 为什么适合现代家居。
5. 为什么适合作为礼物。
6. 品牌为什么要做这件事。

## 13. 关于我们页要求

关于我们页必须包含：

1. 品牌使命。
2. 为什么做这个项目。
3. 如何选择产品。
4. 对手工艺和文化表达的态度。
5. 未来合作方向预留。

## 14. 联系页要求

联系页必须包含：

1. 联系表单 UI。
2. 邮箱占位。
3. 批量采购说明。
4. 礼品合作说明。
5. 客服响应说明。

MVP 阶段表单可以只做静态 UI，不需要真实提交。

## 15. 购物车页要求

MVP 阶段静态 UI 即可。

展示：

1. 商品缩略图占位。
2. 商品名称。
3. 数量。
4. 单价。
5. 小计。
6. 总计。
7. Checkout 按钮。
8. 运输说明。

## 16. 结账页要求

只做占位。

必须显示：

```txt
Checkout integration will be added in the next phase.
```

并列出后续将接入：

1. Customer information。
2. Shipping address。
3. Shipping method。
4. Payment method。
5. Order confirmation。

## 17. SEO 要求

每个页面都要有基础 metadata。

首页 title：

```txt
Yuxian Paper Art | Handcrafted Chinese Paper-Cut Heritage
```

首页 description：

```txt
Discover handcrafted Yuxian paper-cut artworks for meaningful gifts and modern interiors.
```

## 18. README 要求

更新 README，说明：

1. 项目背景。
2. 技术栈。
3. 安装命令。
4. 启动命令。
5. 页面清单。
6. 当前未接入 Medusa。
7. 下一步计划。

## 19. 验收标准

完成后必须满足：

1. `npm install` 成功。
2. `npm run dev` 成功。
3. 首页可访问。
4. 产品列表页可访问。
5. 产品详情页可访问。
6. Story / About / Contact / Cart / Checkout 可访问。
7. 移动端布局不崩。
8. 控制台无明显错误。
9. 商品数据集中在 `products.ts`。
10. 组件拆分清晰。
11. 不接 Medusa。
12. 不接真实支付。
13. 不泄露任何密钥。
14. 视觉符合高端东方手工艺方向。

## 20. 完成后请输出

完成后请输出：

1. 实际目录结构。
2. 新增文件列表。
3. 修改文件列表。
4. 删除文件列表。
5. 安装命令。
6. 启动命令。
7. 已完成页面清单。
8. 测试结果。
9. 目前没有完成的内容。
10. 你认为下一步应该做什么。

## 21. 额外提醒

重要：

```txt
不要自行接入 Medusa。
不要自行接入支付。
不要自行改变技术架构。
不要把项目做成普通商城模板。
不要把视觉做成低价中国风促销站。
```
