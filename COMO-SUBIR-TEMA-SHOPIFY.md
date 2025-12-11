# 📤 Cómo Subir el Tema a Shopify

Hay dos formas de subir tu tema a Shopify. Elige la que prefieras:

---

## 🚀 Opción 1: Shopify CLI (Recomendado - Más Rápido)

### Paso 1: Abrir Terminal
Abre la terminal en tu Mac y navega a la carpeta del tema:

```bash
cd "/Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme"
```

### Paso 2: Subir el Tema
Ejecuta este comando:

```bash
npm run shopify:push
```

**Primera vez:**
- Te pedirá iniciar sesión en Shopify
- Se abrirá una ventana del navegador
- Inicia sesión con tu cuenta de Shopify
- Selecciona tu tienda
- ¡Listo! El tema se subirá automáticamente

**Siguientes veces:**
- Solo ejecuta el comando y se subirá directamente

### ✅ Ventajas
- ✅ Sincronización automática
- ✅ Puedes previsualizar cambios antes de publicar
- ✅ Más rápido para desarrollo

---

## 📦 Opción 2: Subir Manualmente (ZIP)

### Paso 1: Crear el Archivo ZIP

**IMPORTANTE:** Necesitas comprimir SOLO los archivos del tema, NO la carpeta completa.

1. Abre la carpeta del tema en Finder:
   ```
   /Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme
   ```

2. Selecciona TODOS estos archivos y carpetas:
   - ✅ `assets/`
   - ✅ `config/`
   - ✅ `layout/`
   - ✅ `locales/`
   - ✅ `sections/`
   - ✅ `snippets/`
   - ✅ `templates/`
   - ✅ `.shopifyignore` (si existe)

3. **NO incluyas:**
   - ❌ `node_modules/`
   - ❌ `preview-*.html`
   - ❌ Archivos `.md` (documentación)
   - ❌ `.git/`
   - ❌ `package.json` y `package-lock.json`

4. Clic derecho → **"Comprimir X elementos"**
5. Renombra el ZIP a: `albino-vino-theme.zip`

### Paso 2: Subir a Shopify

1. **Inicia sesión en Shopify Admin:**
   - Ve a: `https://admin.shopify.com`
   - Inicia sesión con tu cuenta

2. **Ve a Temas:**
   - En el menú lateral: **Online Store** → **Themes**
   - O directamente: `https://admin.shopify.com/store/[tu-tienda]/themes`

3. **Sube el Tema:**
   - Haz clic en **"Add theme"** (Añadir tema)
   - Selecciona **"Upload zip file"** (Subir archivo ZIP)
   - Selecciona el archivo `albino-vino-theme.zip`
   - Espera a que se suba (puede tardar unos minutos)

4. **Activa el Tema:**
   - Una vez subido, verás el tema en la lista
   - Haz clic en **"Actions"** → **"Publish"** para publicarlo
   - O haz clic en **"Customize"** para editarlo primero

---

## 🎯 ¿Cuál Opción Elegir?

### Usa Shopify CLI si:
- ✅ Tienes Node.js instalado
- ✅ Vas a hacer cambios frecuentes
- ✅ Quieres previsualizar antes de publicar
- ✅ Prefieres trabajar desde la terminal

### Usa ZIP Manual si:
- ✅ Es la primera vez que subes el tema
- ✅ No tienes Node.js instalado
- ✅ Prefieres una interfaz visual
- ✅ Solo vas a subir el tema una vez

---

## 🔍 Verificar que se Subió Correctamente

1. Ve a **Online Store** → **Themes**
2. Deberías ver tu tema en la lista
3. Haz clic en **"Customize"** para ver el editor
4. Verifica que todas las secciones aparezcan:
   - Hero section
   - Product detail
   - Manifiesto
   - Footer

---

## ⚠️ Solución de Problemas

### Error: "No se encontró el comando npm"
**Solución:** Instala Node.js desde: https://nodejs.org/

### Error: "No estás autenticado" (CLI)
**Solución:**
```bash
npx shopify auth login
```

### Error: "El archivo ZIP es demasiado grande"
**Solución:** 
- Asegúrate de NO incluir `node_modules/`
- El ZIP debería ser menor a 50MB

### Error: "Formato de tema inválido"
**Solución:**
- Verifica que incluyas las carpetas: `assets/`, `sections/`, `templates/`, `layout/`
- Asegúrate de que el ZIP no tenga una carpeta extra dentro

### El tema se sube pero no se ve
**Solución:**
- Verifica que hayas hecho clic en **"Publish"** (Publicar)
- Asegúrate de que el tema esté activo (aparece como "Current theme")

---

## 📝 Checklist Antes de Subir

- [ ] He revisado los archivos que voy a incluir
- [ ] No incluyo `node_modules/` ni archivos de desarrollo
- [ ] Tengo acceso a mi cuenta de Shopify
- [ ] Sé qué tienda quiero usar
- [ ] He hecho backup del tema actual (si hay uno)

---

## 🎉 Después de Subir

Una vez subido el tema:

1. **Personaliza el contenido:**
   - Ve a **Customize** (Personalizar)
   - Edita textos, imágenes, colores
   - Configura las secciones

2. **Configura el producto:**
   - Crea el producto "Valentón" en **Products**
   - Añade las 3 variantes (Pack Solitario, Pack Trío, Pack Multitud)
   - Sube las imágenes de cada pack

3. **Prueba todo:**
   - Visita tu tienda
   - Prueba el configurador de packs
   - Verifica que el botón de compra funcione
   - Prueba en móvil

---

## 💡 Tips

- **Haz un tema de desarrollo primero:** Antes de publicar, crea un tema de desarrollo para probar
- **Guarda frecuentemente:** Si editas desde Shopify, guarda los cambios
- **Revisa en móvil:** Siempre verifica cómo se ve en dispositivos móviles
- **Prueba el checkout:** Asegúrate de que todo el flujo de compra funcione

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa los errores en la consola del navegador (F12)
2. Verifica que todos los archivos se hayan subido correctamente
3. Consulta la documentación de Shopify: https://help.shopify.com/

---

**¡Listo! Tu tema debería estar funcionando en Shopify.** 🎉
