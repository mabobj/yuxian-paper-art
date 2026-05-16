# 04 - 商品数据模型

文档版本：v0.2 中文版  
适用阶段：Phase 1 - Phase 3  
项目名称：蔚纸东方 / Yuxian Paper Art

## 1. 设计目标

商品数据模型需要同时满足：

1. 前台静态 MVP 展示。
2. 后续接入 Medusa 商品数据。
3. 商品详情页文化叙事。
4. 礼品场景表达。
5. SEO 扩展。
6. 未来多品类扩展。

MVP 阶段先使用本地 mock 商品数据，后续接入 Medusa 后再建立 adapter 层。

## 2. 前台商品类型

建议类型：

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

## 3. 字段解释

| 字段 | 中文含义 | 说明 |
|---|---|---|
| id | 商品唯一标识 | 本地 mock 和后续映射使用 |
| slug | URL 路径 | 用于 `/products/[slug]` |
| name | 商品英文名称 | 前台展示名称 |
| subtitle | 商品短副标题 | 强化场景和艺术感 |
| price | 商品价格 | MVP 使用美元 |
| currency | 币种 | MVP 使用 USD |
| category | 商品分类 | 例如 wall art、wedding gift |
| imagePlaceholder | 图片占位类型 | 在没有真实图片时区分视觉风格 |
| shortDescription | 商品卡片短描述 | 用于列表页 |
| description | 商品详情页长描述 | 用于文化和产品叙事 |
| dimensions | 尺寸 | 例如 12 × 16 in |
| materials | 材料 | 例如 dyed paper、archival backing |
| craft | 工艺说明 | 解释手工剪纸工艺 |
| shippingNote | 运输说明 | 展示预估发货、包装说明 |
| tags | 标签 | 用于筛选、展示和后续 SEO |

## 4. MVP 首批商品

至少包含 6 个商品：

1. Red Lantern Blessing Paper Cut
2. Peony Window Paper Art
3. Auspicious Dragon Heritage Cut
4. Folk Opera Shadow Paper Cut
5. Zodiac Rabbit Paper Cut
6. Double Happiness Wedding Paper Cut

中文说明：

1. 红灯笼祝福剪纸。
2. 牡丹窗花纸艺。
3. 吉祥龙纹非遗剪纸。
4. 民俗戏曲影像剪纸。
5. 生肖兔剪纸。
6. 双喜婚礼剪纸。

## 5. 商品标签建议

标签可以包括：

```txt
handcrafted
heritage
wedding gift
housewarming
zodiac
folk art
home decor
collector gift
festival
blessing
```

中文解释：

1. 手工。
2. 非遗。
3. 婚礼礼物。
4. 乔迁礼物。
5. 生肖。
6. 民俗艺术。
7. 家居装饰。
8. 收藏礼物。
9. 节日。
10. 祝福。

## 6. 商品分类建议

MVP 可先设置简单分类：

1. Wall Art。
2. Wedding Gifts。
3. Festival Collection。
4. Zodiac Collection。
5. Folk Heritage。
6. Home Decor。

中文解释：

1. 墙面艺术。
2. 婚礼礼品。
3. 节日系列。
4. 生肖系列。
5. 民俗非遗。
6. 家居装饰。

## 7. 未来扩展字段

后续可以增加：

```ts
giftOccasions: string[]
roomScenes: string[]
culturalMeaning: string
packageIncluded: string[]
careInstructions: string
seoTitle: string
seoDescription: string
storyBlocks: {
  title: string
  content: string
}[]
```

字段说明：

| 字段 | 中文含义 |
|---|---|
| giftOccasions | 礼品场景 |
| roomScenes | 家居空间场景 |
| culturalMeaning | 文化寓意 |
| packageIncluded | 包装清单 |
| careInstructions | 保养说明 |
| seoTitle | SEO 标题 |
| seoDescription | SEO 描述 |
| storyBlocks | 商品故事模块 |

## 8. Medusa 字段映射思路

后续接入 Medusa 后，建议不要让 UI 直接使用 Medusa 原始商品字段。

建议建立：

```txt
Medusa 原始商品 → adapter → ProductViewModel → UI 组件
```

可能映射关系：

| 前台字段 | Medusa 字段来源 |
|---|---|
| id | product.id |
| slug | product.handle |
| name | product.title |
| subtitle | product.subtitle 或 metadata.subtitle |
| description | product.description |
| price | variant.calculated_price 或 price_set |
| currency | region.currency_code |
| category | collection / category |
| tags | product.tags |
| materials | metadata.materials |
| dimensions | metadata.dimensions |
| craft | metadata.craft |
| shippingNote | metadata.shipping_note |
| culturalMeaning | metadata.cultural_meaning |

## 9. 为什么需要 metadata

Medusa 标准电商字段更适合通用商品，但我们的商品需要更多文化叙事字段。

建议将以下内容放入 metadata 或自定义字段：

1. 材料。
2. 尺寸。
3. 工艺说明。
4. 文化寓意。
5. 礼品场景。
6. 家居空间场景。
7. 包装说明。
8. 保养说明。

## 10. 商品内容写作原则

商品名称：

1. 像艺术作品名。
2. 不要像批发 SKU。
3. 不要过度堆砌关键词。

商品短描述：

1. 强调场景。
2. 强调文化寓意。
3. 强调礼品价值。

商品长描述：

1. 先讲用户能感受到的价值。
2. 再讲工艺和文化。
3. 最后讲使用场景和包装运输。
4. 不要像普通商品参数堆叠。

## 11. Mock 数据要求

`products.ts` 中的数据必须：

1. 字段完整。
2. slug 唯一。
3. 价格为数字。
4. currency 统一为 `USD`。
5. tags 至少 2 个。
6. description 不要过短。
7. craft 字段必须有工艺说明。
8. shippingNote 必须有包装或运输说明。
