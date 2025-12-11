# 👀 Cómo Previsualizar las Páginas en el Navegador

## ✅ **Páginas Creadas**

1. **Homepage** (`/`) - Ya existía, ahora mejorada
2. **Ficha de Producto** (`/products/extasis-albino`) - ✨ NUEVA
3. **Sobre Nosotros** (`/pages/about`) - ✨ NUEVA

---

## 🚀 **Opción 1: Previsualizar en Shopify (Recomendado)**

### **Paso 1: Subir el tema**

1. Ve a: https://albino-vino.myshopify.com/admin
2. **Online Store** → **Themes**
3. **"Add theme"** → **"Upload zip file"**
4. Selecciona: `albino-vino-theme.zip` (23KB)
5. Espera a que se suba

### **Paso 2: Previsualizar Homepage**

1. Una vez subido, haz clic en **"Actions"** → **"Preview"**
2. Verás la homepage completa

### **Paso 3: Previsualizar Ficha de Producto**

**IMPORTANTE:** Primero necesitas crear el producto:

1. Ve a **Products** → **"Add product"**
2. Crea el producto "Éxtasis Albino"
3. Añade precio: 24,00 €
4. Sube al menos una imagen del producto
5. Guarda

**Luego:**
1. Ve a **Online Store** → **Themes** → **Customize**
2. En la parte superior, cambia de "Homepage" a **"Products"** → selecciona tu producto
3. Verás la ficha de producto completa con:
   - Galería de imágenes
   - Tabs (Descripción, Maridaje, Impacto)
   - Botón "Añadir al Altar"
   - Productos relacionados

### **Paso 4: Previsualizar "Sobre Nosotros"**

1. Ve a **Online Store** → **Pages**
2. Crea una nueva página llamada **"About"** (o "Sobre Nosotros")
3. En **"Template"**, selecciona **"page.about"**
4. Guarda y haz clic en **"View page"**
5. Verás la página completa con:
   - Hero
   - Historia
   - Misión y Valores
   - Cooperativas
   - Equipo (opcional)

---

## 🖥️ **Opción 2: Previsualizar Localmente con Shopify CLI**

Si prefieres ver los cambios en tiempo real mientras editas:

```bash
cd "/Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme"
npx shopify theme dev --store=albino-vino.myshopify.com
```

Esto abrirá:
- Homepage: `https://albino-vino.myshopify.com/?preview_theme_id=XXX`
- Producto: `https://albino-vino.myshopify.com/products/extasis-albino?preview_theme_id=XXX`
- About: `https://albino-vino.myshopify.com/pages/about?preview_theme_id=XXX`

---

## 📋 **Checklist de Previsualización**

### **Homepage**
- [ ] Hero se ve correctamente
- [ ] Sección producto muestra el producto seleccionado
- [ ] Manifiesto tiene contenido
- [ ] Impacto social muestra la causa
- [ ] Comunidad muestra posts
- [ ] Menú funciona (links a secciones)

### **Ficha de Producto**
- [ ] Galería de imágenes funciona
- [ ] Cambiar entre imágenes funciona
- [ ] Tabs funcionan (Descripción, Maridaje, Impacto)
- [ ] Botón "Añadir al Altar" funciona
- [ ] Precio se muestra correctamente
- [ ] Variantes se muestran (si hay)

### **Sobre Nosotros**
- [ ] Hero se ve
- [ ] Historia tiene contenido
- [ ] Misión y Proceso se muestran
- [ ] Valores se muestran (si añadiste bloques)
- [ ] Cooperativas muestra el número
- [ ] Equipo se muestra (si añadiste miembros)

---

## 🎨 **Editar Contenido**

Todas las páginas son **100% editables** desde el editor de Shopify:

### **Homepage:**
- **Themes** → **Customize** → Selecciona cada sección y edita

### **Ficha de Producto:**
- **Themes** → **Customize** → Cambia a "Products" → Selecciona tu producto
- Edita la sección "Ficha de Producto Completa"

### **Sobre Nosotros:**
- **Pages** → Selecciona "About" → **"Edit"**
- O desde **Themes** → **Customize** → Cambia a "Pages" → "About"

---

## 🔧 **Troubleshooting**

### **La ficha de producto no se ve**
→ Asegúrate de haber creado el producto primero en Products

### **"Sobre Nosotros" da 404**
→ Crea la página en Pages y selecciona el template "page.about"

### **Los tabs no funcionan**
→ Verifica que `theme.js` se esté cargando (debería estar en el layout)

### **Las imágenes no se ven**
→ Sube las imágenes en Shopify Admin → Products o Pages

---

## 💡 **Tips**

- **Usa el modo Preview** antes de publicar
- **Prueba en móvil** (el editor tiene un botón de vista móvil)
- **Guarda frecuentemente** mientras editas
- **Revisa los links** del menú funcionen correctamente

---

**¡Ya puedes previsualizar todo en tu navegador!** 🎉

