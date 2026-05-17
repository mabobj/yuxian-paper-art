# 12 Homepage Polish v4 — Image Fill Fix & Premium Refinement

## 1. 本次解决了哪些问题

基于 `design/red-window-art-homepage-polish-pack-v0.4`，解决：

1. **Hero 主视觉缺失** — 右侧家居场景图未显示。
2. **图片不满框** — 卡片图片左侧或四周有空隙，未真正填满容器。
3. **版心偏窄** — 页面整体像缩放到中间，不够大气。
4. **Craft Story 文字压图** — 文字被压在复杂图像上，视觉不精致。
5. **卡片尺寸偏小** — 图片高度、信息区高度不够。

## 2. Hero 图片为什么之前没显示，如何修复

**原因**：Hero 引用了旧图片 `hero-scene.png`，且父容器使用 `grid` 布局时高度继承链条不完整。

**修复**：
- 替换为 v0.4 新素材 `hero-scene-right-focused.png`
- 右侧图片区改为独立的 `relative overflow-hidden` + `Image fill + object-cover`
- Hero 整体高度提升至 460px
- Hero 版心扩大至 1320px

## 3. 图片填充不满的原因和修复方式

| 问题 | 原因 | 修复 |
|------|------|------|
| 图片左侧/四周留白 | 父容器有 padding | 移除所有图片容器 padding |
| 图片未填满容器 | 使用 object-contain | 统一改为 object-cover |
| 图片不显示或高度异常 | fill 但父级无明确高度 | 所有图片容器给明确 height |
| 图片路径错误 | 引用 vectors/ 子目录 | 统一使用根级路径 |

**统一修复**：新增 `BrandImage` 组件，强制 `relative + overflow-hidden + 明确高度 + fill + object-cover`。

## 4. 修改了哪些组件

| 组件 | 主要变更 |
|------|---------|
| `Container.tsx` | max-width: 1180→1200px, calc(100% - 48px→56px) |
| `HeroSection.tsx` | hero-scene-right-focused.png, 460px, 1320px 版心 |
| `Header.tsx` | SVG 路径 vectors/→root, 1200px 版心 |
| `FeaturedCollections.tsx` | BrandImage, 150px 图, 44px 信息条, 阴影加大 |
| `MeaningGrid.tsx` | 卡片 98→104px, 图标 42→44px |
| `CraftStory.tsx` | craft-story-band.png, 48%/52% 分栏, 240px, 文字在纯净区域 |
| `GiftScenarios.tsx` | BrandImage, 133→140px 图, 44px 信息条 |
| `ArtworkGrid.tsx` | 200→220px 图, 76→82px 信息区, object-cover |
| `TrustBar.tsx` | 图标 32→36px, gap 加大 |
| `Newsletter.tsx` | 145→160px 高度, 1200px 版心 |
| `Footer.tsx` | 1200px 版心, pt 42→48px, 列间距加大 |
| `page.tsx` | "Shop by Collection"→"Featured Collections" |
| `BrandImage.tsx` | **新增**统一图片组件 |

## 5. 复制了哪些素材

从 v0.4 设计包 `assets/public-copy/design/red-window-art/` 复制到 `public/design/red-window-art/`：

**新增**：
- `hero-scene-right-focused.png` — Hero 右侧家居场景（tight crop）
- `craft-story-band.png` — Craft Story 手工图（tight crop）

**更新（tight 版本覆盖）**：
- `collection-zodiac.png`, `collection-blessing.png`, `collection-wedding.png`, `collection-framed-wall-art.png`
- `gift-housewarming.png`, `gift-wedding.png`, `gift-lunar-new-year.png`
- `artwork-dragon-of-prosperity.png`, `artwork-blessing-of-fortune.png`, `artwork-peony-of-abundance.png`, `artwork-mandarin-ducks.png`

**SVG**：
- 所有 SVG 复制到根级路径（`/design/red-window-art/` 而非 `vectors/` 子目录）

## 6. 当前与设计稿仍有差距的地方

- 尚未接入 Medusa 后台，商品数据仍为 Mock
- 尚未接入真实支付、登录、收藏功能
- 移动端 Hero 图片在 lg 以下隐藏
- 产品详情页、分类页等二级页面尚未精修
- 动画和微交互可后续增加