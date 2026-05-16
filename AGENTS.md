# AGENTS.md

本文件用于约束 Trae SOLO / DeepSeek / Codex 等编码代理在本项目中的工作方式。

## 项目名称

中文品牌名：

```txt
蔚纸东方
```

英文品牌名：

```txt
Yuxian Paper Art
```

GitHub 仓库名：

```txt
yuxian-paper-art
```

## 项目背景

这是一个面向海外用户销售中国非遗文化产品的跨境电商独立站项目。第一阶段聚焦“蔚县剪纸”。

网站不是低价商城，也不是普通商品陈列站，而是要呈现：

1. 东方手工艺审美。
2. 非遗文化价值。
3. 礼品价值。
4. 家居装饰价值。
5. 收藏价值。
6. 手工工艺故事。

## 技术路线

项目采用：

1. 自定义前台：Next.js + React + TypeScript + Tailwind CSS。
2. 电商后台：Medusa。
3. 数据库：PostgreSQL。
4. 缓存 / 队列：Redis。
5. 前后端解耦。
6. 前台通过 Medusa Store API 或 JS SDK 对接后台。

## 重要架构原则

### 1. 前台必须高度定制

不要使用 Medusa 默认 storefront 作为最终前台。

可以参考 Medusa 示例项目的 API 调用方式，但不能复制它的视觉、页面结构和普通商城模板风格。

前台必须保持：

1. 高端东方手工艺。
2. 博物馆礼品店气质。
3. 温润、克制、有留白。
4. 适合海外用户理解。
5. 适合未来做品牌独立站。

### 2. 后台使用 Medusa

Medusa 只负责：

1. 商品。
2. 分类。
3. 价格。
4. 库存。
5. 购物车。
6. 订单。
7. 支付扩展。
8. 后台管理。

Medusa 不负责：

1. 首页视觉。
2. 品牌故事。
3. 商品详情页叙事结构。
4. 礼品场景内容。
5. SEO 内容策略。
6. 前台设计风格。

### 3. 不要一次性做完整电商系统

每次任务必须严格按任务包执行。

如果当前任务包没有要求，不要擅自实现：

1. 真实支付。
2. 复杂会员系统。
3. 复杂物流系统。
4. 自定义后台。
5. 多语言系统。
6. 营销活动系统。
7. 大规模重构。

### 4. 页面组件不能混乱

页面组件不应直接散落大量 API 请求。

推荐分层：

```txt
src/app/          页面路由层
src/components/   UI 组件层
src/data/         本地 mock 数据
src/lib/          基础工具与客户端
src/services/     业务服务层
src/types/        类型定义
```

### 5. 必须保留 mock fallback

在前台接入 Medusa 后，如果 Medusa API 不可用，前台必须 fallback 到本地 mock 商品数据，避免页面崩溃。

## 视觉规范

必须遵守以下色彩：

```txt
背景主色：#F7F1E5
深色文字：#171412
辅助深棕：#3B2A1F
中国朱红：#B73A2F
古金色：#C9A45C
浅卡片色：#FFF9EF
边框浅色：#E7D8C3
```

禁止：

1. 淘宝风。
2. 低价促销风。
3. 满屏红色。
4. 赛博风。
5. 游戏风。
6. 过度动画。
7. 信息拥挤。
8. 未经确认擅自更换品牌方向。

## 每次任务完成后必须输出

每次完成任务后，请输出：

1. 实际目录结构。
2. 新增文件列表。
3. 修改文件列表。
4. 删除文件列表。
5. 安装命令。
6. 启动命令。
7. 测试结果。
8. 已完成事项。
9. 未完成事项。
10. 风险说明。
11. 建议下一步。

## 提交规范

建议提交信息格式：

```txt
docs: add initial project planning documents
feat(storefront): add static MVP pages
feat(commerce): initialize Medusa backend
fix(storefront): handle product fallback
refactor(storefront): split product service layer
```

## 当前优先级

当前最高优先级：

```txt
先完成前台静态 MVP，再接入 Medusa 后台。
```
