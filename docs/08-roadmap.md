# 08 - 项目路线图

文档版本：v0.2 中文版  
项目名称：蔚纸东方 / Yuxian Paper Art

## Phase 0：项目初始化与文档确认

目标：

1. 确认技术架构。
2. 确认项目目录。
3. 确认视觉规范。
4. 确认 MVP 范围。
5. 输出项目文档。
6. 创建 GitHub 仓库。

当前状态：

```txt
已完成基础规划，准备进入 Phase 1。
```

## Phase 1：前台静态 MVP

目标：

1. Next.js 项目初始化。
2. Tailwind 视觉系统。
3. 首页。
4. 产品列表页。
5. 产品详情页。
6. 品牌故事页。
7. 关于页。
8. 联系页。
9. 购物车静态页。
10. 结账占位页。
11. 本地 mock 商品数据。

验收：

1. 前台能启动。
2. 页面不报错。
3. 移动端可用。
4. 视觉接近高端东方手工艺品牌。
5. 商品数据集中维护。
6. 代码结构可扩展。

建议提交：

```txt
feat(storefront): add static MVP pages
```

## Phase 2：Medusa 后台基础接入

目标：

1. 初始化 Medusa。
2. 配置 PostgreSQL。
3. 配置 Redis。
4. 启动 Admin。
5. 准备商品数据。
6. 编写 Medusa 集成文档。
7. 保留支付、订单、物流扩展点。

验收：

1. Medusa 能启动。
2. Admin 能访问。
3. 商品能通过后台管理。
4. Store API 可读取商品。
5. 不接真实支付。
6. 不破坏前台视觉。

建议提交：

```txt
feat(commerce): initialize Medusa backend foundation
```

## Phase 3：前台接入 Medusa 商品数据

目标：

1. 新增 Medusa client。
2. 新增 products service。
3. 商品列表页读取 Medusa。
4. 商品详情页读取 Medusa。
5. 保留本地 mock fallback。
6. 建立商品字段 adapter。
7. API 错误不导致页面崩溃。

验收：

1. 前台能读取 Medusa 商品。
2. Medusa 关闭时前台 fallback 到 mock。
3. 商品 slug 正确映射。
4. 商品价格正确显示。
5. 产品详情页不报错。
6. 页面组件不直接依赖 Medusa 原始字段。

建议提交：

```txt
feat(storefront): integrate Medusa product API with fallback
```

## Phase 4：产品详情页高级化

目标：

1. 商品 hero 打磨。
2. 工艺说明模块。
3. 文化寓意模块。
4. 礼品场景模块。
5. 推荐商品模块。
6. 移动端优化。
7. 商品叙事增强。

验收：

1. 产品详情页像艺术品详情页。
2. 有明显文化和礼品价值。
3. 不像普通 SKU 参数页。
4. 移动端阅读舒适。

建议提交：

```txt
feat(storefront): enhance product detail storytelling
```

## Phase 5：购物车接入

目标：

1. 接入 Medusa Cart API。
2. 创建 cart。
3. 加入商品。
4. 修改数量。
5. 删除商品。
6. Cart UI 状态。
7. 本地 cart id 持久化。

验收：

1. 用户能从详情页加入购物车。
2. 购物车数据来自 Medusa。
3. 页面刷新后购物车状态尽量保留。
4. 商品数量和价格正确。
5. API 错误有处理。

建议提交：

```txt
feat(storefront): integrate Medusa cart flow
```

## Phase 6：Checkout 原型

目标：

1. 邮箱输入。
2. 地址表单。
3. 运输方式占位。
4. 支付方式占位。
5. 订单确认页占位。
6. 错误提示结构。

验收：

1. 用户能走到结账页面。
2. 流程清晰。
3. 暂不接真实支付。
4. 后续可接支付服务商。

建议提交：

```txt
feat(storefront): add checkout flow skeleton
```

## Phase 7：支付与订单闭环

目标：

1. 选择跨境支付服务商。
2. 配置测试环境。
3. 接入支付。
4. 创建订单。
5. 邮件通知。
6. 支付失败处理。
7. 后台订单查看。

验收：

1. 测试支付可完成。
2. 后台可看到订单。
3. 用户可看到订单结果。
4. 支付失败有提示。
5. 不泄露密钥。

备注：

支付服务商选择必须单独调研，不要在早期仓促接入。

## Phase 8：内容、SEO 与运营增强

目标：

1. SEO metadata。
2. OpenGraph。
3. 文化故事内容。
4. 礼品场景页。
5. 博客 / Journal。
6. 多语言规划。
7. 埋点分析。
8. 商品图片和包装内容优化。

验收：

1. 页面 SEO 信息完整。
2. 分享卡片基本可用。
3. 文化内容可持续扩展。
4. 商品详情页更利于转化。
5. 可接入后续广告和社媒内容。

## 当前推荐执行顺序

现在应执行：

```txt
Phase 1：前台静态 MVP
```

原因：

1. 前台品牌体验是项目核心。
2. 先跑通页面结构，后续更容易接后台。
3. DeepSeek 缺少视觉能力，需要先用清晰文档约束。
4. 后台可以第二步接入，避免一开始被配置问题拖慢。
