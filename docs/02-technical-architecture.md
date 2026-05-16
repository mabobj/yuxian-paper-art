# 02 - 技术架构设计说明书

文档版本：v0.2 中文版  
适用阶段：Phase 1 - Phase 3  
项目名称：蔚纸东方 / Yuxian Paper Art

## 1. 架构目标

项目采用前后端解耦架构，目标是让前台高度定制，后台使用成熟开源电商能力。

核心架构：

```txt
自定义 Next.js 前台
        ↓
Medusa Store API / JS SDK
        ↓
Medusa 电商后台
        ↓
PostgreSQL + Redis
```

## 2. 技术选型

| 模块 | 技术 |
|---|---|
| 前台 | Next.js + React + TypeScript |
| 样式 | Tailwind CSS |
| 路由 | Next.js App Router |
| 电商后台 | Medusa |
| 后台管理 | Medusa Admin |
| 数据库 | PostgreSQL |
| 缓存 / 队列 | Redis |
| 部署 | Docker / Node 服务 |
| 数据源 fallback | 本地 mock products |

## 3. 推荐目录结构

```txt
yuxian-paper-art/
├─ apps/
│  ├─ storefront/
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  ├─ components/
│  │  │  ├─ data/
│  │  │  ├─ lib/
│  │  │  ├─ services/
│  │  │  └─ types/
│  │  ├─ public/
│  │  ├─ package.json
│  │  └─ .env.example
│  │
│  └─ commerce/
│     ├─ src/
│     ├─ medusa-config.ts
│     ├─ package.json
│     └─ .env.example
│
├─ packages/
│  └─ shared/
├─ docs/
├─ docker-compose.yml
├─ README.md
└─ package.json
```

## 4. 前台分层设计

### 4.1 页面层

位置：

```txt
apps/storefront/src/app
```

职责：

1. 定义路由。
2. 组合组件。
3. 处理页面级 metadata。
4. 不写复杂业务逻辑。
5. 不直接散落 API 请求。

### 4.2 组件层

位置：

```txt
apps/storefront/src/components
```

建议组件：

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
ProductDetail
CartSummary
```

组件职责：

1. 展示 UI。
2. 接收 props。
3. 不直接访问 Medusa。
4. 不承担复杂业务逻辑。

### 4.3 数据层

位置：

```txt
apps/storefront/src/data/products.ts
```

职责：

1. 存放 MVP mock 商品。
2. 作为 Medusa 不可用时的 fallback。
3. 作为字段设计参考。
4. 便于前台视觉开发和后台接入解耦。

### 4.4 服务层

位置：

```txt
apps/storefront/src/services
```

职责：

1. 封装商品读取。
2. 封装购物车逻辑。
3. 封装结账逻辑。
4. 处理错误与 fallback。
5. 避免页面直接依赖后端 API 细节。

建议文件：

```txt
products.ts
cart.ts
checkout.ts
```

### 4.5 基础库层

位置：

```txt
apps/storefront/src/lib/medusa.ts
```

职责：

1. 初始化 Medusa client。
2. 读取环境变量。
3. 统一 API base URL。
4. 不承载页面逻辑。
5. 不直接处理 UI。

## 5. Medusa 集成原则

1. 不使用 Medusa 默认 storefront 作为最终前台。
2. Medusa 只作为 commerce backend 和 Admin。
3. 前台通过 Store API 或 JS SDK 读取商品、购物车和订单数据。
4. Medusa Admin 用于运营管理商品。
5. 如果后续 Admin 不够用，再单独开发自定义运营后台。

## 6. 前台与后台边界

前台负责：

1. 品牌视觉。
2. 首页。
3. 商品列表页。
4. 商品详情页。
5. 品牌故事页。
6. 内容叙事。
7. 购物车 UI。
8. 结账 UI。
9. SEO。
10. 响应式体验。

Medusa 负责：

1. 商品管理。
2. 商品分类。
3. 价格。
4. 库存。
5. 购物车。
6. 订单。
7. 支付扩展。
8. 后台管理。

## 7. 商品字段适配原则

前台商品模型和 Medusa 商品模型不完全一致，需要 adapter。

建议数据流：

```txt
Medusa Product → ProductViewModel → UI Components
```

不要让 UI 组件直接依赖 Medusa 原始字段。

好处：

1. 后台字段变化不会直接影响页面。
2. 页面组件更稳定。
3. mock 数据和真实数据可以共用视图模型。
4. 方便后续接入 SEO、礼品场景、文化寓意等扩展字段。

## 8. 环境变量

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

## 9. 容错策略

商品列表读取：

```txt
优先读取 Medusa API
如果失败，读取本地 mock products
页面不崩溃
控制台输出 warning
```

商品详情读取：

```txt
优先通过 handle / slug 从 Medusa 读取
如果失败，通过本地 mock product 查找 slug
如果仍然找不到，展示 404
```

## 10. 本地开发端口建议

```txt
Next.js 前台：http://localhost:3000
Medusa 后台：http://localhost:9000
Medusa Admin：http://localhost:9000/app
PostgreSQL：localhost:5432
Redis：localhost:6379
```

## 11. 开发阶段顺序

推荐顺序：

1. 先做前台静态 MVP。
2. 再初始化 Medusa 后台。
3. 再让前台读取 Medusa 商品。
4. 再接入 Cart API。
5. 再做 Checkout 流程。
6. 最后接真实支付和订单闭环。

## 12. 未来扩展点

1. 购物车接入 Medusa Cart API。
2. Checkout 接入真实支付。
3. 商品图片接入对象存储。
4. SEO 内容页接入 CMS。
5. 多语言。
6. 邮件通知。
7. 物流规则。
8. 自定义运营后台。
9. 数据分析与广告追踪。
10. 礼品场景内容系统。
