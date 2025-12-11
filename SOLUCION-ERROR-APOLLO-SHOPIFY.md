# 🔧 Solución: Errores Apollo GraphQL al Conectar GitHub

## ❌ Error que estás viendo:
```
An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err
```

Estos errores de Apollo GraphQL generalmente indican problemas de **autorización o acceso al repositorio**.

---

## ✅ Soluciones (en orden de prioridad)

### Solución 1: Verificar que el Repositorio sea Público ⚠️ MÁS IMPORTANTE

**Shopify NO puede acceder a repositorios privados sin configuración especial.**

1. Ve a tu repositorio:
   - `https://github.com/marinerografico/albino-vino-shopify-theme`

2. **Verifica si es privado:**
   - Si ves un candado 🔒 o "Private" = Es privado ❌
   - Si no ves nada o "Public" = Es público ✅

3. **Si es privado, hazlo público:**
   - Haz clic en **"Settings"** (Configuración)
   - Desplázate hasta **"Danger Zone"**
   - Haz clic en **"Change visibility"**
   - Selecciona **"Make public"**
   - Confirma el cambio

4. **Espera 1-2 minutos** y vuelve a intentar en Shopify

---

### Solución 2: Revocar y Re-autorizar GitHub

1. **Revocar autorización actual:**
   - Ve a: `https://github.com/settings/applications`
   - Busca "Shopify" en "Authorized OAuth Apps"
   - Si aparece, haz clic y revoca el acceso

2. **Cerrar sesión y volver a entrar en Shopify:**
   - Cierra completamente el navegador
   - Vuelve a abrir y entra a Shopify Admin

3. **Intentar conectar de nuevo:**
   - Ve a: Themes → Add theme → Connect from GitHub
   - Te pedirá autorizar de nuevo
   - Autoriza con tu cuenta de GitHub

---

### Solución 3: Verificar Permisos del Repositorio

1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme/settings`

2. Verifica:
   - **Features:** Todos habilitados
   - **Collaborators:** Tu cuenta tiene acceso
   - **Branches:** La rama `main` existe

3. Si el repositorio es de una organización:
   - Verifica que tengas permisos de lectura
   - Puede que necesites permisos de administrador

---

### Solución 4: Limpiar Cache del Navegador

Los errores de Apollo pueden ser por cache corrupto:

1. **Abre las herramientas de desarrollador:**
   - Presiona `F12` o `Cmd+Option+I` (Mac)

2. **Limpia el cache:**
   - Haz clic derecho en el botón de recargar
   - Selecciona **"Empty Cache and Hard Reload"**

3. **O limpia manualmente:**
   - `Cmd+Shift+Delete` (Mac)
   - Selecciona "Cached images and files"
   - Limpia los últimos 24 horas

4. **Vuelve a intentar**

---

### Solución 5: Usar Método Alternativo - Descargar ZIP

Si nada funciona, usa el método ZIP que siempre funciona:

#### Paso 1: Descargar desde GitHub

1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme`
2. Haz clic en **"Code"** (botón verde)
3. Selecciona **"Download ZIP"**
4. Guarda el archivo en tu ordenador

#### Paso 2: Descomprimir y Limpiar

1. Descomprime el ZIP
2. **IMPORTANTE:** Asegúrate de que la estructura sea:
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
3. Si hay una carpeta extra dentro, muévete a la carpeta correcta

#### Paso 3: Crear ZIP Limpio

1. Selecciona SOLO las carpetas necesarias (no la carpeta padre)
2. Crea un nuevo ZIP con estas carpetas
3. Nómbralo: `albino-vino-theme.zip`

#### Paso 4: Subir a Shopify

1. Ve a: `https://albino-vino.myshopify.com/admin/themes`
2. Haz clic en **"Add theme"** → **"Upload zip file"**
3. Selecciona el archivo ZIP
4. Espera a que se suba

---

### Solución 6: Verificar Estructura del Repositorio

Asegúrate de que el repositorio tenga la estructura correcta:

**Estructura necesaria en la raíz:**
```
albino-vino-shopify-theme/
├── assets/
│   ├── theme.css
│   └── theme.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── es.default.json
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   └── ...
├── snippets/
│   └── cart-drawer.liquid
└── templates/
    ├── index.json
    └── product.json
```

**Verifica en GitHub:**
- Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme`
- Deberías ver estas carpetas directamente en la raíz
- Si hay una carpeta extra, el tema no se reconocerá

---

## 🔍 Diagnóstico Rápido

Ejecuta este checklist:

- [ ] El repositorio es **público** (no privado) ⚠️ MÁS IMPORTANTE
- [ ] La estructura del repositorio es correcta (carpetas en la raíz)
- [ ] La rama `main` existe y tiene commits
- [ ] Shopify tiene autorización en GitHub
- [ ] He limpiado el cache del navegador
- [ ] He intentado desconectar y reconectar

---

## 💡 Solución Más Probable

**El 90% de estos errores se solucionan haciendo el repositorio público.**

1. Ve a: `https://github.com/marinerografico/albino-vino-shopify-theme/settings`
2. Haz clic en **"Change visibility"** → **"Make public"**
3. Espera 1-2 minutos
4. Vuelve a intentar en Shopify

---

## 🆘 Si Nada Funciona

**Usa el método ZIP manual:**
- Es más lento pero **siempre funciona**
- No depende de autorizaciones
- No tiene límites de GraphQL

**Pasos:**
1. Descarga el ZIP desde GitHub
2. Súbelo manualmente en Shopify
3. ¡Listo!

---

## 📞 Contactar Soporte

Si después de intentar todo sigue sin funcionar:

1. **Contacta con Shopify Support:**
   - Pueden ayudar con problemas de integración GitHub
   - Menciona los errores de Apollo GraphQL

2. **Información a proporcionar:**
   - URL del repositorio
   - Si es público o privado
   - Captura de pantalla de los errores

---

**¡La solución más rápida es hacer el repositorio público!** 🚀
