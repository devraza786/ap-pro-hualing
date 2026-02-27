# AP Pro Hauling Website 需求文档

## 1. 应用概述

**应用名称：** AP Pro Hauling Website

**应用描述：** 为 AP Pro Hauling 打造的专业承包商级网站，这是一家位于加州 Martinez 的垃圾箱租赁和垃圾清理服务公司。网站采用源自公司 logo 的简洁、醒目设计，配备流畅动画效果和完整的 SEO 优化，目标服务区域为 Martinez 和 Contra Costa County。

## 2. 商业信息

**公司名称：** AP Pro Hauling

**地址：** 4 Giannini Rd, Martinez, CA 94553, United States

**电话：** 925-995-8255

**邮箱：** approhauling@gmail.com

**主要服务区域：**
- Martinez, CA
- Contra Costa County
- Surrounding Bay Area

## 3. 设计要求

### 3.1 整体主题与风格
- 主色调和强调色直接源自提供的 logo（image.png）
- 简洁、醒目的承包商级布局
- 强烈的排版效果，间距宽松
- 微妙的动效
- 承包商美学，无杂乱元素
- 专业、值得信赖、以服务为导向的美感
- 简洁、无杂乱的布局，留白充足
- 强烈的视觉层次
- 高对比度以确保最大可读性

### 3.2 导航栏设计
**位置：** 固定在页面顶部

**背景：** 纯白色

**视觉效果：** 导航栏下方有微妙阴影以实现视觉分离

**布局与内容：**
- 左对齐公司 logo
- 居中或均匀分布的菜单项：Home、About、Services、Service Area、Gallery、Testimonials、FAQ、Contact
- 右对齐行动号召按钮：
  - 文本：Call Now: (925) 995-8255
  - 背景色：醒目红色
  - 文本色：白色

**移动端行为：**
- 在移动设备上折叠为汉堡菜单
- 粘性标题，带轻微模糊背景

### 3.3 Hero 区域设计
**布局：** 全宽区域，位于导航栏正下方

**背景：** 高质量相关背景图片（如工地上的干净垃圾箱、垃圾清理前后对比照片），带半透明深色叠加层以确保文本可读性

**内容对齐：** 所有内容（标题、副标题、按钮）在 hero 区域内垂直和水平居中

**Hero 内容：**

1. **标题：** Dumpster Rentals & Junk Removal
   - 样式：大号、粗体、现代字体
   - 颜色处理：
     - Dumpster 和 Removal 为醒目红色（与 Call Now 按钮相同）
     - Rentals & Junk 为白色

2. **副标题：** Fast, Friendly, and Reliable Service for Your Cleanup Projects
   - 颜色：浅灰色或白色

3. **行动号召按钮**（并排放置，间距适当）：
   - 主按钮：
     - 文本：Get a Free Quote
     - 样式：红色背景、白色文本的实心按钮
   - 次按钮：
     - 文本：Call Now
     - 样式：白色边框、透明背景、白色文本的轮廓按钮

**动画：**
- 使用 GSAP 为标题和副标题添加文本显示动画

### 3.4 品牌标识
- 移除所有默认品牌标识、favicon、元数据和 OG graph 链接
- 替换为 AP Pro Hauling 的商业详情和 logo

### 3.5 响应式设计
- 移动优先布局
- 平板优化
- 桌面宽屏布局
- 在断点处进行适当的间距调整
- 隐藏水平溢出（overflow-x: hidden）
- **全设备适配：** 所有页面和区域必须完全响应式，无缝适配任何设备的视口（桌面、平板、手机），内容应适当重排和调整大小，不触发水平滚动

## 4. 技术栈

**必需技术：**
- Next.js 14+（App Router）
- Tailwind CSS
- Framer Motion
- GSAP（包含 ScrollTrigger）
- shadcn/ui 组件
- SEO 结构化数据
- 完全响应式
- 性能优化

## 5. 全局功能

### 5.1 页面加载器
- 首次访问时显示全屏加载器
- 背景：主品牌色
- 居中的动画 logo，包含：
  - 淡入效果
  - 轻微放大
  - 微妙旋转或描边动画
- 持续时间：1.2–1.8 秒
- 内容显示前平滑淡出
- 使用 GSAP 实现动画

### 5.2 Google Maps 集成
- 在 Contact 页面和 Service Area 页面嵌入 Google Map iframe
- 位置：Waubaushene, Ontario
- 响应式容器，16:9 宽高比
- 圆角

### 5.3 SPA 路由配置
- 启用 history API fallback
- 所有未匹配路由重写到 /
- 防止硬刷新时出现 404
- Vercel 部署：生成包含 rewrites 配置的 vercel.json
- Netlify 部署：生成 _redirects 文件
- 保持 SEO 完整性

### 5.4 区域交互行为
- **可折叠区域功能：** 实现特定页面区域可隐藏或折叠的功能
- **视觉指示器：** 提供清晰的视觉指示器（如按钮、箭头图标）用于切换这些区域的可见性
- **平滑过渡：** 显示/隐藏区域时的过渡应平滑（使用 CSS 过渡或动画）
- **布局适配：** 当区域隐藏时，周围的页面内容应平滑扩展以填充可用空间，保持无缝布局；当区域显示时，应重新集成到页面流中，不引起布局偏移或元素重叠
- **无障碍支持：** 使用适当的 ARIA 属性确保屏幕阅读器的可访问性

## 6. 页面结构与内容

### 6.1 首页

**Hero 区域：**
- 标题：Dumpster Rentals & Junk Removal
  - Dumpster 和 Removal 为醒目红色
  - Rentals & Junk 为白色
- 副标题：Fast, Friendly, and Reliable Service for Your Cleanup Projects
- CTA 按钮：Get a Free Quote（红色实心按钮）、Call Now（白色轮廓按钮）
- 背景：高质量工地图片，带深色叠加层
- GSAP 文本显示动画

**服务概览区域：**
- 带悬停上升动画的服务卡片：
  - Dumpster Rentals（10yd–20yd）
  - Junk Removal
  - Equipment Transport
  - Debris Drop Off
  - Small Demo
- 每张卡片包含：图标、简短描述、Learn More 按钮

**为什么选择我们区域：**
- 带动画计数器的网格：
  - Fast Turnaround
  - Competitive Pricing
  - Professional Service
  - Local & Reliable
- 滚动时使用 GSAP 计数器动画

**服务区域预览：**
- 突出显示 Martinez, CA 和 Surrounding Bay Area
- CTA 链接到 Service Area 页面

### 6.2 关于页面

**内容区域：**
- 公司介绍
- 使命宣言
- 对安全和效率的承诺
- 本地服务强调
- 区域的微妙淡入动画

### 6.3 服务页面

**各项服务区域：**

1. **Dumpster Rentals 10yd–20yd**
   - 说明容量、理想项目、快速交付

2. **Junk Removal**
   - 住宅和商业服务

3. **Equipment Transport**
   - 重型设备搬迁服务

4. **Debris Drop Off**
   - 建筑垃圾处理

5. **Small Demo**
   - 轻型拆除项目

**每项服务的格式：**
- 标题
- 2–3 段描述性段落
- CTA 按钮

### 6.4 服务区域页面

**SEO 目标内容：**
- Martinez, CA
- Contra Costa County
- 附近的 Bay Area 城市

**组件：**
- Google Maps 嵌入（Waubaushene 位置）
- 服务区域说明
- 行动号召

### 6.5 图库页面

**图片库：**
- 展示提供的图片：image.png、image-2.png、image-3.png、image-4.png、image-5.png
- 响应式网格布局
- 平滑动画

### 6.6 客户评价页面

**布局：**
- 卡片式布局
- 3–6 个评价占位符
- 星级评分 UI
- 微妙的入场动画

### 6.7 常见问题页面

**手风琴布局（shadcn/ui）：**

示例问题：
- What size dumpster do I need?
- How long can I keep a dumpster?
- Do you handle construction debris?
- What areas do you serve?
- Do you provide same-day service?

### 6.8 联系页面

**联系表单字段：**
- Name
- Phone
- Email
- Service Type
- Message
- CTA：Request a Quote

**联系信息块：**
- 电话（可点击）：925-995-8255
- 邮箱（可点击）：approhauling@gmail.com
- 地址：4 Giannini Rd, Martinez, CA 94553, United States
- Google Maps 嵌入（Waubaushene 位置）

## 7. SEO 要求

### 7.1 页面 SEO
- 每个页面的唯一 meta 标题
- 每个页面的唯一 meta 描述
- 正确使用 H1（每页 1 个）
- 结构化数据（LocalBusiness schema）
- Open Graph 标签
- Sitemap.xml
- Robots.txt

### 7.2 SEO 关键词定位

包含自然关键词扩展：
- Dumpster rental Martinez CA
- Junk removal Martinez CA
- Equipment transport Contra Costa County
- Construction debris removal Bay Area

编写针对这些关键词的自然段落，避免关键词堆砌。

## 8. 文件夹结构

```
/app
  /about
  /services
  /service-area
  /gallery
  /testimonials
  /faq
  /contact
/components
  Header.tsx
  Footer.tsx
  PageLoader.tsx
  ServiceCard.tsx
  TestimonialCard.tsx
  ContactForm.tsx
```

## 9. 性能与质量要求

- 高性能和快速加载
- 平滑动画（Framer Motion / GSAP 风格）
- 简洁的语义结构
- SEO 友好的标题
- 完全移动响应式
- 生产构建优化
- 使用简洁、语义化的 HTML 和 CSS
- 确保功能的可访问性，为屏幕阅读器提供适当的 ARIA 属性
- 实现不应破坏整体响应式设计原则

## 10. 部署配置

**Vercel 配置（vercel.json）：**
```json
{
  \"rewrites\": [
    { \"source\": \"/(.*)\", \"destination\": \"/\" }
  ]
}
```

**Netlify 配置（_redirects）：**
```
/* /index.html 200
```

## 11. 图片资源

**提供的图片：**
- image.png（Logo）
- image-2.png（图库图片）
- image-3.png（图库图片）
- image-4.png（图库图片）
- image-5.png（图库图片）

所有图片将在图库页面中使用，并进行适当优化和响应式显示。