# 07 - 验收测试清单

文档版本：v0.2 中文版  
适用阶段：Phase 1 - Phase 3  
项目名称：蔚纸东方 / Yuxian Paper Art

## 1. 前台基础验收

### 1.1 安装与启动

检查项：

1. `npm install` 成功。
2. `npm run dev` 成功。
3. 控制台无阻断性报错。
4. 浏览器可打开本地服务。
5. 页面热更新正常。

### 1.2 页面访问

以下页面必须可访问：

1. `/`
2. `/products`
3. `/products/[slug]`
4. `/story`
5. `/about`
6. `/contact`
7. `/cart`
8. `/checkout`

验收方式：

1. 手动打开每个页面。
2. 检查页面是否白屏。
3. 检查是否出现 404。
4. 检查浏览器控制台是否有明显错误。

## 2. 首页验收

首页必须包含：

1. Header。
2. Hero。
3. Brand Values。
4. Featured Products。
5. Craft Story。
6. Gift Occasions。
7. Footer。

Hero 必须包含：

1. 品牌标题。
2. 品牌副标题。
3. Shop Collection 按钮。
4. Explore the Craft 按钮。
5. 右侧抽象视觉占位。

视觉验收：

1. 是否有高端东方手工艺气质。
2. 是否避免廉价促销风。
3. 是否有足够留白。
4. 朱红是否只作为点缀。
5. 是否像独立站，而不是普通模板商城。

## 3. 产品列表页验收

必须包含：

1. 页面标题。
2. 页面说明。
3. 商品网格。
4. 至少 6 个商品。
5. 商品卡片。
6. 价格。
7. 标签。
8. 详情入口。

检查项：

1. 商品数据是否来自集中 mock 文件。
2. 商品 slug 是否可跳转。
3. 商品卡片是否布局统一。
4. 移动端是否不拥挤。
5. 是否没有硬编码分散数据。

## 4. 产品详情页验收

每个 mock 商品详情页必须可访问。

必须包含：

1. 商品标题。
2. 商品副标题。
3. 价格。
4. 商品描述。
5. Add to Cart 按钮。
6. 尺寸。
7. 材料。
8. 工艺。
9. 运输说明。
10. 文化叙事。
11. 推荐商品区域预留。

验收重点：

1. 是否像艺术品详情页。
2. 是否讲清楚文化和礼品价值。
3. 是否不是普通商品参数页。
4. 找不到 slug 时是否有合理处理。

## 5. Story 页面验收

必须说明：

1. 什么是蔚县剪纸。
2. 工艺特点。
3. 传统文化背景。
4. 手工价值。
5. 与现代家居的关系。
6. 礼品价值。
7. 品牌使命。

## 6. About 页面验收

必须说明：

1. 品牌为什么存在。
2. 选择产品的标准。
3. 对非遗和文化表达的态度。
4. 对海外用户的价值。
5. 后续合作方向预留。

## 7. Contact 页面验收

必须包含：

1. 联系表单 UI。
2. 邮箱占位。
3. 批量采购说明。
4. 礼品合作说明。
5. 客服响应说明。

MVP 阶段不要求真实提交。

## 8. Cart 页面验收

必须包含：

1. 商品缩略图占位。
2. 商品名称。
3. 数量。
4. 单价。
5. 小计。
6. 总计。
7. Checkout 按钮。
8. 运输提示。

MVP 阶段允许静态 UI。

## 9. Checkout 页面验收

必须显示：

```txt
Checkout integration will be added in the next phase.
```

并展示后续流程占位：

1. Customer information。
2. Shipping address。
3. Shipping method。
4. Payment method。
5. Order confirmation。

## 10. 响应式验收

桌面端检查：

1. 页面布局是否舒展。
2. Hero 是否有高级感。
3. 商品网格是否整齐。
4. 内容间距是否合理。

移动端检查：

1. 不出现横向滚动。
2. 导航可用。
3. 按钮可点击。
4. 商品卡片不拥挤。
5. 文本可读。
6. 图片占位不变形。

## 11. 代码结构验收

必须符合：

1. 页面位于 `src/app`。
2. 组件位于 `src/components`。
3. 商品数据位于 `src/data/products.ts`。
4. 类型定义位于 `src/types`。
5. 不把所有代码写在一个文件中。
6. 不在多个页面里重复大量相同代码。
7. 不引入无必要大型依赖。

## 12. SEO 验收

每个页面至少有：

1. title。
2. description。

首页 title：

```txt
Yuxian Paper Art | Handcrafted Chinese Paper-Cut Heritage
```

首页 description：

```txt
Discover handcrafted Yuxian paper-cut artworks for meaningful gifts and modern interiors.
```

## 13. 后台基础验收

适用于 Phase 2。

检查项：

1. `docker-compose up -d` 成功。
2. PostgreSQL 启动成功。
3. Redis 启动成功。
4. Medusa backend 启动成功。
5. Medusa Admin 可访问。
6. 可以创建或查看商品。
7. Store API 可返回商品。
8. `.env.example` 存在。
9. `.env` 没有被提交。

## 14. 前后台联调验收

适用于 Phase 3。

检查项：

1. 前台能读取 Medusa 商品。
2. Medusa 关闭时前台 fallback 到 mock。
3. 商品 slug 正确映射。
4. 商品价格正确显示。
5. 产品详情页不报错。
6. API 错误不会导致页面崩溃。
7. 页面组件不直接依赖 Medusa 原始字段。
8. 有 adapter 或 service 层封装。

## 15. 不通过条件

如果出现以下任一情况，本阶段验收不通过：

1. 页面无法启动。
2. 首页白屏。
3. 产品详情页无法访问。
4. 商品数据散落在多个页面。
5. 大量使用普通商城模板。
6. 视觉明显廉价。
7. 擅自接入真实支付。
8. 擅自改变技术架构。
9. 提交真实密钥。
10. 移动端严重错位。
