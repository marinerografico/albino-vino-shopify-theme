# 🔧 Solución: No Carga el Tema desde GitHub en Shopify

## ❌ Problema
Cuando intentas conectar el repositorio de GitHub con Shopify, no carga nada o no aparece el tema.

---

## ✅ Soluciones (Prueba en este orden)

### Solución 1: Verificar que el Repositorio es Público

**Shopify necesita que el repositorio sea público para conectarlo:**

1. Ve a tu repositorio en GitHub:
   - `https://github.com/marinerografico/albino-vino-shopify-theme`

2. Haz clic en **"Settings"** (Configuración)

3. Desplázate hasta **"Danger Zone"** (Zona de peligro)

4. Si el repositorio es privado, haz clic en **"Change visibility"** → **"Make public"**

5. Confirma el cambio

6. **Vuelve a intentar conectar en Shopify**

---

### Solución 2: Verificar Autorización de GitHub

1. **En Shopify Admin:**
   - Ve a: `https://albino-vino.myshopify.com/admin/themes`
   - Haz clic en **"Add theme"** → **"Connect from GitHub"**

2. **Si no aparece la opción de autorizar:**
   - Ve a: `https://github.com/settings/applications`
   - Busca "Shopify" en las aplicaciones autorizadas
   - Si no está, necesitas autorizarlo desde Shopify

3. **Autorizar manualmente:**
   - Ve a: `https://albino-vino.myshopify.com/admin/settings/apps`
   - Busca "GitHub" o "Theme Development"
   - Si no está instalado, instálalo

---

### Solución 3: Verificar Estructura del Repositorio

Asegúrate de que el repositorio tenga la estructura correcta de un tema Shopify:

**Estructura necesaria:**
```
albino-vino-shopify-theme/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
```

**Verifica en GitHub:**
1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme`
2. Verifica que veas estas carpetas en la raíz
3. Si no están, el tema no se reconocerá

---

### Solución 4: Usar la URL Completa del Repositorio

En lugar de seleccionar desde la lista, intenta usar la URL completa:

1. En Shopify, cuando te pida el repositorio
2. En lugar de buscar, pega la URL completa:
   ```
   marinerografico/albino-vino-shopify-theme
   ```
3. O la URL completa de GitHub:
   ```
   https://github.com/marinerografico/albino-vino-shopify-theme
   ```

---

### Solución 5: Verificar la Rama (Branch)

Asegúrate de que la rama `main` existe y tiene contenido:

1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme`
2. Verifica que estás en la rama `main` (debería aparecer arriba)
3. Verifica que hay archivos visibles
4. En Shopify, asegúrate de seleccionar la rama `main` (no `master`)

---

### Solución 6: Desconectar y Reconectar

1. **En Shopify Admin:**
   - Ve a: `https://albino-vino.myshopify.com/admin/themes`
   - Si hay algún tema conectado a GitHub, elimínalo primero

2. **En GitHub:**
   - Ve a: `https://github.com/settings/applications`
   - Revoca el acceso de Shopify si existe

3. **Vuelve a conectar:**
   - Ve a Shopify → Themes → Add theme → Connect from GitHub
   - Autoriza de nuevo
   - Selecciona el repositorio

---

### Solución 7: Verificar Permisos del Repositorio

1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme/settings`
2. Desplázate hasta **"Collaborators"** o **"Access"**
3. Verifica que tu cuenta tenga acceso de lectura
4. Si el repositorio es de una organización, verifica los permisos

---

### Solución 8: Alternativa - Descargar ZIP y Subir Manualmente

Si nada funciona, puedes descargar el ZIP desde GitHub y subirlo manualmente:

1. **Descargar desde GitHub:**
   - Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme`
   - Haz clic en **"Code"** → **"Download ZIP"**
   - Guarda el archivo

2. **Subir a Shopify:**
   - Ve a: `https://albino-vino.myshopify.com/admin/themes`
   - Haz clic en **"Add theme"** → **"Upload zip file"**
   - Selecciona el archivo descargado

---

## 🔍 Verificación Rápida

Ejecuta este checklist:

- [ ] El repositorio es **público** (no privado)
- [ ] El repositorio tiene las carpetas: `assets/`, `sections/`, `templates/`, `layout/`
- [ ] La rama `main` existe y tiene commits
- [ ] Shopify tiene autorización en GitHub
- [ ] Estás usando la URL correcta: `marinerografico/albino-vino-shopify-theme`
- [ ] Estás seleccionando la rama `main` (no `master`)

---

## 📞 Si Nada Funciona

1. **Verifica los logs de Shopify:**
   - Revisa la consola del navegador (F12) cuando intentas conectar
   - Busca errores en rojo

2. **Contacta con soporte de Shopify:**
   - Pueden ayudar con problemas de integración con GitHub

3. **Usa el método ZIP:**
   - Es más lento pero siempre funciona
   - Descarga el ZIP desde GitHub y súbelo manualmente

---

## 💡 Tips

- **Repositorio público:** Shopify requiere repositorios públicos para la conexión automática
- **Primera vez:** La primera conexión puede tardar unos minutos
- **Refrescar:** Intenta refrescar la página de Shopify después de conectar
- **Esperar:** A veces Shopify tarda en procesar la conexión

---

## ✅ Solución Más Probable

**El problema más común es que el repositorio es privado.**

**Solución rápida:**
1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme/settings`
2. Haz clic en **"Change visibility"** → **"Make public"**
3. Vuelve a intentar en Shopify

---

**¿Sigue sin funcionar?** Prueba el método ZIP manual - siempre funciona.
