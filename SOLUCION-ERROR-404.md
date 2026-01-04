# 🔧 Solución: Error 404 "Not Found" en Shopify

## ❌ Problema
Estás viendo un error 404 "The page you were looking for does not exist" en tu tienda de Shopify.

---

## ✅ Soluciones (en orden de prioridad)

### Solución 1: Verificar que el Tema esté Publicado ⚠️ MÁS IMPORTANTE

**El tema debe estar publicado para que las páginas funcionen:**

1. Ve a: `https://albino-vino.myshopify.com/admin/themes`
2. Busca tu tema "Albino Vino" (o el nombre que tenga)
3. Verifica el estado:
   - Si dice **"Current theme"** = Está publicado ✅
   - Si dice **"Unpublished"** = No está publicado ❌

4. **Si no está publicado:**
   - Haz clic en **"Actions"** → **"Publish"**
   - Confirma la publicación

---

### Solución 2: Crear el Producto "Valentón"

**Si estás intentando ver una página de producto, primero debes crearlo:**

1. Ve a: `https://albino-vino.myshopify.com/admin/products`
2. Haz clic en **"Add product"** (Añadir producto)

3. **Llena la información:**
   - **Title:** `Valentón`
   - **Description:** Descripción del producto
   - **Price:** `14.00` (o el precio que prefieras)
   - **Images:** Sube al menos una imagen

4. **Configurar Variantes:**
   - Haz clic en **"Variants"**
   - Añade las 3 variantes:
     - `Pack Solitario` - 14,00€
     - `Pack Trío` - 28,00€
     - `Pack Multitud` - 49,00€
   - (Ver `INFORMACION-VARIANTES-SHOPIFY.md` para más detalles)

5. **Guardar:**
   - Haz clic en **"Save"**
   - El producto se creará con una URL como: `/products/valenton`

6. **Ver el producto:**
   - Haz clic en **"View"** o ve a: `https://albino-vino.myshopify.com/products/valenton`

---

### Solución 3: Verificar la URL que Estás Visitando

**Asegúrate de estar visitando la URL correcta:**

#### URLs Válidas:
- ✅ Homepage: `https://albino-vino.myshopify.com/`
- ✅ Producto: `https://albino-vino.myshopify.com/products/valenton`
- ✅ Página: `https://albino-vino.myshopify.com/pages/about`

#### URLs Inválidas (causan 404):
- ❌ `https://albino-vino.myshopify.com/product` (falta la 's')
- ❌ `https://albino-vino.myshopify.com/products/` (sin nombre de producto)
- ❌ `https://albino-vino.myshopify.com/valenton` (falta /products/)

**Para encontrar la URL correcta del producto:**
1. Ve a: Products → Selecciona tu producto
2. Haz clic en **"View"** o **"Preview"**
3. Copia la URL que se abre

---

### Solución 4: Verificar que el Template esté Asignado

**Asegúrate de que el producto use el template correcto:**

1. Ve a: Products → Selecciona "Valentón"
2. Desplázate hasta **"Theme templates"** (al final)
3. Verifica que esté seleccionado: **"product"** o **"Default product"**
4. Si no aparece, el tema puede no estar instalado correctamente

---

### Solución 5: Verificar que el Tema esté Instalado Correctamente

**Si el tema no aparece o no funciona:**

1. Ve a: `https://albino-vino.myshopify.com/admin/themes`
2. Verifica que el tema "Albino Vino" aparezca en la lista
3. Si no aparece:
   - Ve a: **"Add theme"** → **"Connect from GitHub"**
   - O descarga el ZIP desde GitHub y súbelo manualmente

4. **Si aparece pero no funciona:**
   - Haz clic en **"Actions"** → **"Edit code"**
   - Verifica que existan los archivos:
     - `sections/product-detail.liquid`
     - `templates/product.json`

---

### Solución 6: Previsualizar desde el Editor

**La forma más fácil de ver el producto:**

1. Ve a: `https://albino-vino.myshopify.com/admin/themes`
2. Haz clic en **"Customize"** (Personalizar)
3. En la parte superior, cambia de "Homepage" a **"Products"**
4. Selecciona tu producto "Valentón"
5. Verás la página del producto con el nuevo diseño

---

## 🔍 Diagnóstico Rápido

Ejecuta este checklist:

- [ ] El tema está **publicado** (dice "Current theme")
- [ ] He creado el producto **"Valentón"** en Products
- [ ] El producto tiene al menos **una imagen**
- [ ] Estoy visitando la URL correcta: `/products/valenton`
- [ ] El template del producto está asignado correctamente
- [ ] El tema está instalado y aparece en Themes

---

## 📝 Pasos Completos para Configurar Todo

### Paso 1: Publicar el Tema
1. Themes → Selecciona tu tema → **"Publish"**

### Paso 2: Crear el Producto
1. Products → **"Add product"**
2. Title: `Valentón`
3. Price: `14.00`
4. Images: Sube imágenes
5. **Save**

### Paso 3: Configurar Variantes
1. En el producto → **"Variants"**
2. Añade: Pack Solitario, Pack Trío, Pack Multitud
3. (Ver `INFORMACION-VARIANTES-SHOPIFY.md`)

### Paso 4: Ver el Producto
1. Products → Selecciona "Valentón" → **"View"**
2. O ve a: `https://albino-vino.myshopify.com/products/valenton`

---

## 💡 Tips

- **Siempre publica el tema** antes de intentar ver las páginas
- **Crea el producto primero** antes de intentar ver su página
- **Usa "Customize"** para previsualizar sin publicar
- **Verifica las URLs** - deben tener el formato correcto

---

## 🆘 Si Nada Funciona

1. **Verifica que el tema esté completo:**
   - Debe tener `sections/product-detail.liquid`
   - Debe tener `templates/product.json`

2. **Reinstala el tema:**
   - Elimina el tema actual
   - Vuelve a subirlo desde GitHub o ZIP

3. **Contacta con soporte de Shopify:**
   - Pueden ayudar con problemas de temas y páginas

---

**¡La solución más común es que el tema no está publicado o el producto no existe!** 🚀
