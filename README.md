# 蔚纸东方 / Yuxian Paper Art

一个面向海外用户的中国非遗文化跨境电商独立站项目。第一阶段聚焦“蔚县剪纸”相关艺术品、家居装饰品、礼品和收藏品。

本项目采用：

- 自定义前台：Next.js + React + TypeScript + Tailwind CSS
- 开源电商后台：Medusa
- 数据库：PostgreSQL
- 缓存 / 队列：Redis
- 协作模式：ChatGPT 负责产品经理与架构师，Trae SOLO / DeepSeek 负责代码实现，用户负责运行与反馈

## 项目定位

本项目不是普通低价小商品商城，而是一个具有东方审美、非遗文化、手工价值和礼品价值的独立站。

核心价值主张：

> 用手工剪出的非遗文化，用现代方式装进海外家庭的日常生活。

前台展示品牌名：

```txt
Yuxian Paper Art
```

中文内部品牌名：

```txt
蔚纸东方
```

仓库名：

```txt
yuxian-paper-art
```

## 当前阶段

当前阶段为项目规划与 MVP 构建准备阶段。

第一阶段目标：

1. 完成自定义 Next.js 前台静态 MVP。
2. 完成首页、商品列表页、商品详情页、品牌故事页、关于页、联系页、购物车页、结账占位页。
3. 使用本地 mock 商品数据。
4. 保持高端东方手工艺视觉风格。
5. 为后续接入 Medusa 后台预留架构。
6. 后续再接入商品后台、购物车、订单、支付、物流。

## 推荐目录结构

```txt
yuxian-paper-art/
├─ apps/
│  ├─ storefront/        # 自定义 Next.js 前台
│  └─ commerce/          # Medusa 电商后台，后续阶段接入
├─ packages/
│  └─ shared/            # 共享类型与工具，后续预留
├─ docs/                 # 项目文档
├─ README.md
├─ AGENTS.md
└─ .gitignore
```

## 文档目录

```txt
docs/
├─ 00-project-charter.md
├─ 01-prd-storefront-mvp.md
├─ 02-technical-architecture.md
├─ 03-visual-design-spec.md
├─ 04-product-data-model.md
├─ 05-medusa-integration.md
├─ 06-trae-task-pack-01-storefront-mvp.md
├─ 07-acceptance-checklist.md
├─ 08-roadmap.md
└─ 09-risk-register.md
```

## 第一阶段不要做什么

MVP 阶段暂不做：

1. 真实支付接入。
2. 复杂会员系统。
3. 完整物流系统。
4. 多语言完整翻译系统。
5. 自研后台管理系统。
6. 复杂营销活动系统。
7. 复杂库存与仓储系统。
8. App、小程序或第三方平台同步。

## 下一步执行建议

第一步让 Trae SOLO 执行：

```txt
docs/06-trae-task-pack-01-storefront-mvp.md
```

完成后，把 Trae 输出的以下内容回传给 ChatGPT 审查：

1. 实际目录结构。
2. 新增文件列表。
3. 修改文件列表。
4. 运行命令。
5. 终端报错或运行截图。
6. 页面截图。
7. Trae 对已完成和未完成事项的总结。

## 版本说明

当前文档版本：v0.2 中文版

说明：

- 文档说明、任务描述、验收标准、风险说明均使用中文。
- 代码路径、环境变量、仓库名、框架名、品牌英文名等必要技术标识保留英文。
- 面向海外用户展示的前台页面文案仍建议使用英文，但会在中文任务文档中明确给出。
