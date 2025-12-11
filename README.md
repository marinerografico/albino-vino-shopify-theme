# 🍷 Albino Vino - Tema Shopify

Tema Shopify OS 2.0 para **Albino Vino**, una marca de vino disruptiva con enfoque artístico, social y de comunidad.

## 🎨 Características

- ✨ **Diseño moderno y disruptivo** con animaciones suaves
- 📱 **100% Responsive** - Mobile-first design
- 🛒 **eCommerce completo** - Integración nativa con Shopify
- 🎯 **Configurador de packs interactivo** - Selección visual de variantes
- 🎬 **Hero con video de fondo** - Experiencia inmersiva
- ⚡ **Optimizado para rendimiento** - Carga rápida
- 🎨 **Totalmente personalizable** - Editor visual de Shopify

## 📦 Estructura del Tema

```
albino-vino-theme/
├── layout/
│   └── theme.liquid          # Layout principal con age gate
├── sections/
│   ├── header.liquid         # Sidebar/Navegación
│   ├── footer.liquid         # Footer
│   ├── hero-albino.liquid    # Hero section
│   ├── product-detail.liquid # Página producto con configurador
│   ├── manifesto.liquid     # Manifiesto editable
│   ├── impact.liquid         # Impacto social
│   └── community.liquid     # Comunidad
├── templates/
│   ├── index.json            # Homepage
│   └── product.json          # Página producto
├── assets/
│   ├── theme.css             # Estilos custom
│   └── theme.js              # Scripts (animaciones, menú)
└── config/
    └── settings_schema.json   # Configuración global
```

## 🚀 Instalación

### Opción 1: Desde GitHub (Recomendado)

1. Ve a **Shopify Admin** → **Online Store** → **Themes**
2. Haz clic en **"Add theme"** → **"Connect from GitHub"**
3. Selecciona este repositorio y la rama `main`
4. ¡Listo! El tema se instalará automáticamente

### Opción 2: Descargar ZIP

1. Haz clic en **"Code"** → **"Download ZIP"**
2. Ve a **Shopify Admin** → **Online Store** → **Themes**
3. Haz clic en **"Add theme"** → **"Upload zip file"**
4. Selecciona el archivo ZIP descargado

## ⚙️ Configuración

### 1. Configurar el Producto

Crea el producto "Valentón" con 3 variantes:
- **Pack Solitario** (1 botella) - 14,00€
- **Pack Trío** (3 botellas) - 28,00€ (Recomendado)
- **Pack Multitud** (6 botellas) - 49,00€

Ver documentación completa en: `INFORMACION-VARIANTES-SHOPIFY.md`

### 2. Personalizar Contenido

1. Ve a **Shopify Admin** → **Online Store** → **Themes** → **Customize**
2. Edita cada sección:
   - **Hero**: Título, video, descripción
   - **Product Detail**: Imágenes de packs, textos
   - **Manifiesto**: Contenido editable
   - **Header/Footer**: Links, redes sociales

## 🎯 Funcionalidades Principales

### Configurador de Packs Interactivo
- Selección visual de variantes (1, 3, 6 botellas)
- Cambio automático de imágenes según selección
- Microcopy dinámico que cambia con cada pack
- Precios y descuentos automáticos desde Shopify

### Age Gate
- Verificación de edad obligatoria
- Almacenamiento en localStorage
- Diseño elegante y no intrusivo

### Hero Section
- Video de fondo opcional
- Animaciones fade-in
- CTA personalizable
- Badge de edición limitada

## 🛠️ Tecnologías

- **Shopify Liquid** - Template engine
- **Tailwind CSS** - Framework CSS (CDN)
- **Vanilla JavaScript** - Sin dependencias pesadas
- **Iconify** - Iconos (Lucide Icons)
- **Google Fonts** - Geist, Inter, Playfair Display

## 📝 Documentación

- `INFORMACION-VARIANTES-SHOPIFY.md` - Configuración de variantes
- `CONFIGURACION-PRODUCTO-SHOPIFY.md` - Guía de configuración
- `CONECTAR-GITHUB-SHOPIFY.md` - Conectar con GitHub
- `COMO-SUBIR-TEMA-SHOPIFY.md` - Métodos de instalación

## 🎨 Personalización

### Colores
Los colores principales están definidos en clases Tailwind:
- **Rojo primario**: `red-600` (#dc2626)
- **Fondo**: `stone-50` (#fafaf9)
- **Texto**: `stone-900` (#0c0a09)

### Tipografías
- **Títulos**: Geist (sans-serif)
- **Cuerpo**: Inter (sans-serif)
- **Cursivas**: Playfair Display (serif)

## 🔄 Actualizaciones

Para actualizar el tema desde GitHub:

1. Haz cambios en el código
2. Haz commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push
   ```
3. En Shopify: **Themes** → **Sync from GitHub**

## 📄 Licencia

Este tema fue creado específicamente para Albino Vino.

---

**Hecho con ❤️ para inadaptados que beben vino diferente.**
