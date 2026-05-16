# 05 - Medusa 集成说明

文档版本：v0.2 中文版  
适用阶段：Phase 2 - Phase 3  
项目名称：蔚纸东方 / Yuxian Paper Art

## 1. 为什么选择 Medusa

本项目需要：

1. 高度定制前台。
2. 自有服务器部署。
3. 开源电商后台。
4. 后续可接跨境支付。
5. 可管理商品、价格、库存、购物车、订单。
6. 与 Next.js / TypeScript 技术栈匹配。

Medusa 的优势：

1. Headless commerce 架构。
2. 前台可以完全自定义。
3. 技术栈与 Next.js 更统一。
4. 提供 Admin 管理后台。
5. 提供 Store API。
6. 支持商品、购物车、订单和支付扩展。
7. 比从 0 自研后台更稳。
8. 比传统模板商城更适合品牌独立站。

## 2. Medusa 在项目中的角色

Medusa 是 commerce backend，不是最终前台。

它负责：

1. 商品。
2. 分类。
3. 价格。
4. 库存。
5. 购物车。
6. 订单。
7. 支付扩展。
8. 后台管理。

它不负责：

1. 前台品牌视觉。
2. 首页设计。
3. 商品详情页叙事结构。
4. 品牌故事页。
5. 礼品场景内容页。
6. SEO 内容策略。
7. 小红书 / Instagram 内容资产管理。

## 3. 前台与 Medusa 关系

架构关系：

```txt
Next.js 自定义前台 → Medusa Store API → Medusa 后台 → PostgreSQL
```

用户看到的是：

```txt
自定义 Next.js 独立站
```

运营人员使用的是：

```txt
Medusa Admin
```

电商交易能力来自：

```txt
Medusa Backend
```

## 4. 不使用 Medusa 默认前台

重要原则：

```txt
不要使用 Medusa 默认 storefront 作为最终页面。
```

可以参考 Medusa 示例项目的接口调用方式，但前台页面必须由我们自己编码。

原因：

1. 我们需要高度定制品牌视觉。
2. 我们不是普通商城模板站。
3. 商品详情页需要文化叙事。
4. 首页需要非遗和礼品价值表达。
5. 视觉要符合东方手工艺高端定位。

## 5. 本地开发端口建议

```txt
Next.js 前台：http://localhost:3000
Medusa 后台：http://localhost:9000
Medusa Admin：http://localhost:9000/app
PostgreSQL：localhost:5432
Redis：localhost:6379
```

## 6. 推荐目录结构

```txt
yuxian-paper-art/
├─ apps/
│  ├─ storefront/        # 自定义 Next.js 前台
│  └─ commerce/          # Medusa 电商后台
├─ docker-compose.yml
├─ docs/
└─ README.md
```

## 7. docker-compose 建议

本地开发至少需要：

1. PostgreSQL。
2. Redis。

后续可以扩展：

1. Medusa 服务容器。
2. 前台服务容器。
3. 对象存储。
4. 反向代理。

## 8. 环境变量建议

前台 `.env.example`：

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

后台 `.env.example`：

```env
DATABASE_URL=postgres://medusa:medusa@localhost:5432/medusa
REDIS_URL=redis://localhost:6379
JWT_SECRET=change_me
COOKIE_SECRET=change_me
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000,http://localhost:7001
AUTH_CORS=http://localhost:3000,http://localhost:9000,http://localhost:7001
```

注意：

1. `.env` 不要提交。
2. `.env.example` 可以提交。
3. 真实密钥不要写入文档。
4. JWT_SECRET 和 COOKIE_SECRET 必须在生产环境中替换。

## 9. 前台 API 封装建议

前台不要在页面组件里直接散落请求。

推荐结构：

```txt
apps/storefront/src/lib/medusa.ts
apps/storefront/src/services/products.ts
apps/storefront/src/services/cart.ts
apps/storefront/src/services/checkout.ts
```

职责：

1. `lib/medusa.ts`：初始化客户端。
2. `services/products.ts`：读取商品、商品详情、处理 fallback。
3. `services/cart.ts`：后续封装购物车。
4. `services/checkout.ts`：后续封装结账流程。

## 10. 商品读取策略

商品列表页读取顺序：

```txt
1. 优先从 Medusa Store API 读取。
2. 如果失败，读取本地 mock 商品。
3. 控制台输出 warning。
4. 页面不崩溃。
```

商品详情页读取顺序：

```txt
1. 优先通过 slug / handle 从 Medusa 读取。
2. 如果失败，通过本地 mock 查找 slug。
3. 如果仍找不到，展示 404。
```

## 11. Phase 2 集成范围

Medusa Backend Foundation 阶段需要完成：

1. 初始化 `apps/commerce`。
2. 配置 PostgreSQL。
3. 配置 Redis。
4. 启动 Medusa Server。
5. 启动 Medusa Admin。
6. 准备 `.env.example`。
7. 准备商品 seed 或导入说明。
8. 写清启动命令。
9. 写清常见问题。
10. 不接真实支付。

## 12. Phase 3 联调范围

前台接入 Medusa 商品数据阶段需要完成：

1. 新增 Medusa client。
2. 新增 products service。
3. 商品列表页读取 Medusa。
4. 商品详情页读取 Medusa。
5. 保留 mock fallback。
6. 建立商品字段 adapter。
7. 页面不因 API 错误崩溃。

## 13. 后续支付扩展

MVP 阶段不接真实支付。

后续支付服务商需要单独调研：

1. Stripe。
2. PayPal。
3. Airwallex。
4. Oceanpayment。
5. PingPong。
6. 连连。
7. 钱海。
8. 其他适合中国公司申请的跨境支付服务商。

支付接入前必须确认：

1. 中国公司是否可申请。
2. 是否支持目标市场。
3. 手续费。
4. 结算周期。
5. 风控规则。
6. 是否支持 Medusa 集成。
7. 是否支持测试环境。
8. 是否需要海外主体。

## 14. 后续自定义后台

MVP 阶段先使用 Medusa Admin。

如果未来 Medusa Admin 不够用，再开发自定义运营后台。

可能需要自定义后台的场景：

1. 非遗故事管理。
2. 礼品场景管理。
3. 首页推荐位管理。
4. 小红书 / Instagram 内容素材管理。
5. 商品文化标签管理。
6. SEO 内容管理。
7. 多语言内容管理。
