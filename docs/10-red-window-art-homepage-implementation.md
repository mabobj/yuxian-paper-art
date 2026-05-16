# 10 - Red Window Art 首页高保真实现

文档版本：v1.0
对应任务包：Task Pack 04
构建结果：✓ 12/12 页面，零 TypeScript 错误

---

## 1. 实现的模块

| 序号 | 模块 | 组件文件 | 状态 |
|---|---|---|---|
| 1 | Header | [Header.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/Header.tsx) | ✅ |
| 2 | Hero | [HeroSection.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/HeroSection.tsx) | ✅ |
| 3 | Featured Collections | [FeaturedCollections.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/FeaturedCollections.tsx) | ✅ |
| 4 | Choose by Meaning | [MeaningGrid.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/MeaningGrid.tsx) | ✅ |
| 5 | The Art of Yuxian Paper Cutting | [CraftStory.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/CraftStory.tsx) | ✅ |
| 6 | Meaningful Chinese Gifts | [GiftScenarios.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/GiftScenarios.tsx) | ✅ |
| 7 | Featured Artworks | [ArtworkGrid.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/ArtworkGrid.tsx) | ✅ |
| 8 | Trust Bar | [TrustBar.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/TrustBar.tsx) | ✅ |
| 9 | Newsletter | [Newsletter.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/Newsletter.tsx) | ✅ |
| 10 | Footer | [Footer.tsx](file:///d:/dev/project/trae-yuxian-paper-art/apps/storefront/src/components/Footer.tsx) | ✅ |

---

## 2. 使用的设计素材

### SVG 素材（已复制到 `public/design/red-window-art/vectors/`）

| 素材 | 使用位置 |
|---|---|
| `logo-seal-red-window-art.svg` | Header 品牌 Logo |
| `icon-search.svg` | Header 搜索按钮 |
| `icon-account.svg` | Header 账户按钮 |
| `icon-cart.svg` | Header 购物车按钮 |
| `icon-arrow-right.svg` | Featured Collections 卡片箭头 |
| `icon-heart-outline.svg` | Featured Artworks 收藏图标 |
| `meaning-prosperity.svg` | Choose by Meaning — Prosperity |
| `meaning-love.svg` | Choose by Meaning — Love |
| `meaning-health.svg` | Choose by Meaning — Health |
| `meaning-protection.svg` | Choose by Meaning — Protection |
| `meaning-harmony.svg` | Choose by Meaning — Harmony |
| `meaning-joy.svg` | Choose by Meaning — Joy |
| `trust-secure-payment.svg` | Trust Bar — Secure Payment |
| `trust-worldwide-shipping.svg` | Trust Bar — Worldwide Shipping |
| `trust-carefully-packaged.svg` | Trust Bar — Carefully Packaged |
| `trust-handmade-heritage.svg` | Trust Bar — Handmade Heritage |

---

## 3. CSS/SVG 模拟部分

以下视觉元素使用内联 SVG + CSS 实现，非真实图片：

| 元素 | 实现方式 |
|---|---|
| Hero 右侧家居场景 | 内联 SVG：墙面渐变、画框 + 圆形红色剪纸、木柜、花瓶花枝、暖光、窗影 |
| Featured Collections 卡片占位图 | 内联 SVG：圆形剪纸抽象图案 |
| Craft Story 左侧插图 | 内联 SVG：纸张 + 剪纸过程 + 淡色花鸟纹样 |
| Meaningful Chinese Gifts 卡片图 | 内联 SVG：礼物盒抽象图案 |
| Featured Artworks 卡片图 | 内联 SVG：画框 + 圆形剪纸抽象图案 |
| Newsletter 背景暗纹 | 内联 SVG：花鸟圆形纹样 |

---

## 4. 后续需要真实摄影素材替换的部分

| 模块 | 当前实现 | 建议替换为 |
|---|---|---|
| Hero 右侧 | SVG 家居场景 | 真实家居摄影：墙上装裱剪纸、木柜、花瓶、暖光场景 |
| Featured Collections 卡片图 | SVG 抽象图案 | 各系列代表性商品实拍图 |
| Craft Story 左侧 | SVG 工艺插图 | 手工剪纸过程实拍照片 |
| Meaningful Chinese Gifts 卡片图 | SVG 抽象图案 | 各场景氛围摄影 |
| Featured Artworks 商品图 | SVG 抽象图案 | 商品白底或场景实拍图 |

---

## 5. 移动端适配说明

| 模块 | 桌面端 | 移动端 |
|---|---|---|
| Header | Logo + 6 导航 + 3 图标，72px 高 | Logo + Cart 图标，其余隐藏 |
| Hero | 左右双栏（文字 + 家居场景 SVG） | 单列文字，SVG 隐藏 |
| Featured Collections | 4 列卡片 | 2 列卡片 |
| Choose by Meaning | 6 列等宽卡片 | 3 列卡片 |
| Craft Story | 左图右文 | 单列纯文字，SVG 隐藏 |
| Meaningful Chinese Gifts | 3 列卡片 | 单列卡片 |
| Featured Artworks | 4 列卡片 | 2 列 → 单列卡片 |
| Trust Bar | 4 列 | 2 列 |
| Newsletter | 居中表单 | 居中表单，按钮全宽 |
| Footer | 4 列网格 | 单列堆叠 |

---

## 6. 色彩体系变更

| 旧变量 | 新变量 | 色值 |
|---|---|---|
| `--color-vermilion` | `--color-brand-red` | `#9F1D1D` |
| `--color-ink` | `--color-brand-text` | `#171412` |
| `--color-walnut` | `--color-brand-brown` | `#3B2A1F` |
| `--color-gold` | `--color-brand-gold` | `#C9A45C` |
| `--color-cream` | `--color-brand-card` | `#FFF9EF` |
| `--color-sand` | `--color-brand-border` | `#E7D8C3` |
| `--color-parchment` | `--color-brand-bg` | `#F7F1E5` |
| — | `--color-brand-red-alt` | `#B73A2F` |
| — | `--color-brand-muted` | `#6A5A49` |
| — | `--color-brand-footer` | `#8F1717` |
| — | `--color-brand-wood` | `#6B3F1D` |

---

## 7. 字体变更

| 旧 | 新 |
|---|---|
| Playfair Display + Lora (Google Fonts) | Georgia + system-ui (系统原生) |

---

## 8. 容器宽度变更

| 旧 | 新 |
|---|---|
| `max-w-7xl` (1280px) | `min(1180px, calc(100% - 48px))` |