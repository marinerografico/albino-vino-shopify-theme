# 📚 Guía Paso a Paso: Crear Repositorio en GitHub

Esta guía te llevará paso a paso para crear el repositorio en GitHub de forma profesional.

---

## 🎯 Paso 1: Iniciar Sesión en GitHub

1. **Abre tu navegador** (Chrome, Safari, Firefox, etc.)

2. **Ve a GitHub:**
   - URL: `https://github.com`
   - O busca "GitHub" en Google

3. **Inicia sesión:**
   - Si ya tienes cuenta: haz clic en **"Sign in"** (Iniciar sesión)
   - Si no tienes cuenta: haz clic en **"Sign up"** (Registrarse) y crea una cuenta gratuita

---

## 🎯 Paso 2: Crear el Repositorio

### 2.1. Ir a la Página de Creación

1. Una vez dentro de GitHub, haz clic en el **botón "+"** (más) en la esquina superior derecha
2. Selecciona **"New repository"** (Nuevo repositorio)

   **O directamente ve a:**
   - `https://github.com/new`

### 2.2. Llenar el Formulario

Completa los siguientes campos:

#### **Repository name** (Nombre del repositorio):
```
albino-vino-shopify-theme
```
*(Este es el nombre que aparecerá en la URL)*

#### **Description** (Descripción):
```
Tema Shopify OS 2.0 para Albino Vino - Vino para inadaptados
```
*(Opcional, pero recomendado)*

#### **Visibility** (Visibilidad):
- ✅ **Public** (Público) - Recomendado para temas
- ⬜ Private (Privado) - Solo tú puedes verlo

**Nota:** Para Shopify, ambos funcionan. Público es más fácil de conectar.

#### **⚠️ IMPORTANTE - NO marques estas opciones:**
- ❌ **NO** marques "Add a README file"
- ❌ **NO** marques "Add .gitignore"
- ❌ **NO** marques "Choose a license"

*(Ya tenemos estos archivos en nuestro proyecto)*

### 2.3. Crear el Repositorio

1. Haz clic en el botón verde **"Create repository"** (Crear repositorio)

2. **¡Listo!** Se abrirá una página con instrucciones

---

## 🎯 Paso 3: Copiar la URL del Repositorio

En la página que se abrió, verás una sección que dice:

**"…or push an existing repository from the command line"**

Debajo verás un comando que incluye una URL, algo como:

```
https://github.com/tu-usuario/albino-vino-shopify-theme.git
```

**Copia esta URL completa** - la necesitarás en el siguiente paso.

---

## 🎯 Paso 4: Conectar tu Proyecto Local con GitHub

Abre tu **Terminal** (Terminal.app en Mac) y ejecuta estos comandos:

### 4.1. Ir a la carpeta del proyecto:
```bash
cd "/Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme"
```

### 4.2. Añadir el repositorio remoto:

**Reemplaza `TU-URL-AQUI` con la URL que copiaste en el Paso 3:**

```bash
git remote add origin https://github.com/tu-usuario/albino-vino-shopify-theme.git
```

**Ejemplo real:**
```bash
git remote add origin https://github.com/juandigonzalezrodriguez/albino-vino-shopify-theme.git
```

### 4.3. Subir el código a GitHub:

```bash
git push -u origin main
```

**Si te pide autenticación:**

#### Opción A: Personal Access Token (Recomendado)

1. Ve a: `https://github.com/settings/tokens`
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. **Nombre:** `Shopify Theme Upload`
4. **Expiration:** 90 days (o el que prefieras)
5. **Scopes:** Marca solo **`repo`**
6. Haz clic en **"Generate token"**
7. **Copia el token** (solo se muestra una vez)
8. Cuando Git te pida **"Password"**, pega el token (no tu contraseña de GitHub)

#### Opción B: GitHub CLI

Si tienes GitHub CLI instalado:
```bash
gh auth login
```

---

## 🎯 Paso 5: Verificar que Funcionó

1. **Refresca la página de GitHub** en tu navegador
2. Deberías ver todos tus archivos:
   - `README.md`
   - `assets/`
   - `sections/`
   - `templates/`
   - etc.

**¡Felicidades! Tu código está en GitHub** 🎉

---

## 🎯 Paso 6: Conectar GitHub con Shopify

Ahora que tu código está en GitHub, conéctalo con Shopify:

### 6.1. Ve a tu Admin de Shopify:
- `https://albino-vino.myshopify.com/admin`

### 6.2. Ve a Temas:
- **Online Store** → **Themes**
- O directamente: `https://albino-vino.myshopify.com/admin/themes`

### 6.3. Conectar con GitHub:

1. Haz clic en **"Add theme"** (Añadir tema)
2. Selecciona **"Connect from GitHub"** (Conectar desde GitHub)
3. **Primera vez:** Te pedirá autorizar Shopify en GitHub
   - Haz clic en **"Authorize Shopify"**
   - Selecciona tu cuenta de GitHub
   - Autoriza el acceso
4. **Selecciona tu repositorio:**
   - Busca: `albino-vino-shopify-theme`
   - O el nombre que le pusiste
5. **Selecciona la rama:**
   - `main` (o `master` si aparece)
6. Haz clic en **"Connect"** (Conectar)

### 6.4. ¡Listo!

Shopify descargará el tema automáticamente. Puede tardar unos minutos.

---

## ✅ Checklist Completo

- [ ] Inicié sesión en GitHub
- [ ] Creé el repositorio `albino-vino-shopify-theme`
- [ ] NO marqué "Add README" ni otras opciones
- [ ] Copié la URL del repositorio
- [ ] Ejecuté `git remote add origin [URL]`
- [ ] Ejecuté `git push -u origin main`
- [ ] Verifiqué que los archivos aparecen en GitHub
- [ ] Conecté el repositorio con Shopify
- [ ] El tema se descargó correctamente en Shopify

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
**Solución:**
```bash
git remote remove origin
git remote add origin https://github.com/tu-usuario/albino-vino-shopify-theme.git
```

### Error: "Authentication failed"
**Solución:**
- Usa un Personal Access Token en lugar de tu contraseña
- Crea uno en: `https://github.com/settings/tokens`

### Error: "Repository not found"
**Solución:**
- Verifica que el repositorio sea público, o
- Asegúrate de tener permisos de escritura

### Error al conectar con Shopify
**Solución:**
- Asegúrate de haber autorizado Shopify en GitHub
- Verifica que el repositorio sea accesible
- Intenta refrescar la página de Shopify

---

## 💡 Tips Profesionales

1. **Nombres descriptivos:** Usa nombres claros para tus repositorios
2. **README completo:** Siempre incluye un README.md (ya lo tenemos)
3. **Commits claros:** Usa mensajes de commit descriptivos
4. **Ramas:** Usa `main` como rama principal (estándar moderno)
5. **.gitignore:** Ya está configurado para ignorar archivos innecesarios

---

## 🎉 ¡Listo!

Ahora tienes:
- ✅ Repositorio profesional en GitHub
- ✅ Control de versiones
- ✅ Backup automático de tu código
- ✅ Conexión con Shopify para actualizaciones fáciles

**¡Tu tema está listo para producción!** 🚀

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas en cualquier paso:
1. Revisa los mensajes de error
2. Consulta la sección "Solución de Problemas"
3. Verifica que sigas cada paso en orden

**¡Éxito con tu tema!** 🍷
