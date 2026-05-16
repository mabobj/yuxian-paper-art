# Red Window Art 设计拆分包 v0.1

这个压缩包用于帮助不具备设计/规划能力的开发代理（如 Trae / DeepSeek）更准确地复刻首页设计稿。

## 包内内容

- `assets/reference/`：整页参考图和分模块裁切图
- `assets/vectors/`：可直接复用或参考的 SVG 图形素材
- `assets/tokens/`：设计令牌、配色、字体和 Tailwind 参考片段
- `docs/`：中文设计拆解文档、实现约束、Trae 任务包和验收清单

## 推荐用法

1. 把整包解压到项目根目录，例如：`design/red-window-art/`
2. 将 `assets/` 里的图形素材复制到前端项目的 `public/` 目录下
3. 将 `docs/04-trae-task-pack-homepage-implementation.md` 整体发给 Trae
4. 让 Trae 按照 `assets/reference/` 和 `assets/tokens/` 实现首页

## 说明

- 该包重点服务于首页复刻，不包含真实商品摄影素材
- 如果没有真实图片，开发阶段应优先使用 CSS / SVG / 渐变 / 伪元素模拟设计稿气质
- 设计稿中的风格要尽量保留：米白背景、深红剪纸、木质家居、暖光、礼品与寓意导向
