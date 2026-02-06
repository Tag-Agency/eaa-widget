# AXS Pro Widget - European Accessibility Act

An accessibility widget built with Next.js and Tailwind CSS, designed to help websites comply with the European Accessibility Act (EAA).

## 🚀 Quick Embed
To add the widget to any website, simply include this script tag before the closing `</body>` tag:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget/public/axs-widget.js" 
  data-auto-init="true">
</script>
```

### Customization via URL Parameters
You can customize the widget directly in the script URL:

```html
<script 
  src="https://cdn.jsdelivr.net/gh/Tag-Agency/eaa-widget/public/axs-widget.js?color=ff4081&position=left" 
  data-auto-init="true">
</script>
```

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `color` | Hex code of the main color (no #) | `3f51b5` (Indigo) | `ff0000` |
| `position` | Widget position (`left` or `right`) | `right` | `left` |

## 🛠 Development
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build standalone widget:**
   ```bash
   npm run build:widget
   ```
   This generates `public/axs-widget.js`.

## Deployment
The widget is automatically built and located in the `public` directory. When pushed to GitHub, it can be served via raw GitHub user content or a CDN like jsDelivr.
