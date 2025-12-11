# 🔗 Conectar GitHub con Shopify

Shopify permite conectar tu repositorio de GitHub directamente, lo que hace el proceso mucho más fácil y automático.

## 📋 Pasos para Conectar GitHub con Shopify

### Paso 1: Crear Repositorio en GitHub

1. **Ve a GitHub:** https://github.com/new
2. **Crea un nuevo repositorio:**
   - Nombre: `albino-vino-shopify-theme` (o el que prefieras)
   - Descripción: "Tema Shopify para Albino Vino"
   - **Público o Privado** (ambos funcionan)
   - **NO** marques "Initialize with README" (ya tenemos archivos)
   - Haz clic en **"Create repository"**

3. **Copia la URL del repositorio** (la necesitarás después)
   - Ejemplo: `https://github.com/tu-usuario/albino-vino-shopify-theme.git`

---

### Paso 2: Inicializar Git en tu Proyecto Local

Ejecuta estos comandos en tu terminal:

```bash
# 1. Ir a la carpeta del tema
cd "/Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme"

# 2. Inicializar Git
git init

# 3. Añadir todos los archivos (excepto los ignorados)
git add .

# 4. Hacer el primer commit
git commit -m "Initial commit: Tema Albino Vino para Shopify"
```

---

### Paso 3: Conectar con GitHub

```bash
# 1. Añadir el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/albino-vino-shopify-theme.git

# 2. Cambiar a la rama main (si es necesario)
git branch -M main

# 3. Subir el código a GitHub
git push -u origin main
```

**Nota:** Si GitHub te pide autenticación:
- Usa un **Personal Access Token** en lugar de tu contraseña
- Crea uno en: https://github.com/settings/tokens
- Selecciona el scope `repo`

---

### Paso 4: Conectar GitHub con Shopify

1. **Ve a tu Admin de Shopify:**
   - `https://albino-vino.myshopify.com/admin`

2. **Ve a Temas:**
   - **Online Store** → **Themes**
   - O: `https://albino-vino.myshopify.com/admin/themes`

3. **Conectar con GitHub:**
   - Haz clic en **"Add theme"**
   - Selecciona **"Connect from GitHub"** (o "Conectar desde GitHub")
   - Si es la primera vez, te pedirá autorizar Shopify en GitHub
   - Selecciona tu repositorio: `albino-vino-shopify-theme`
   - Selecciona la rama: `main`
   - Haz clic en **"Connect"** (Conectar)

4. **¡Listo!** Shopify descargará el tema automáticamente

---

## 🔄 Sincronización Automática (Opcional)

Una vez conectado, puedes configurar sincronización automática:

### Opción A: Sincronización Manual
- Cada vez que hagas `git push` a GitHub
- Ve a Shopify Admin → Themes
- Haz clic en **"Sync"** o **"Update from GitHub"**

### Opción B: GitHub Actions (Avanzado)
Puedes configurar GitHub Actions para que se sincronice automáticamente cuando hagas push.

---

## 📝 Comandos Rápidos para Futuros Cambios

Cada vez que hagas cambios y quieras actualizar el tema en Shopify:

```bash
# 1. Añadir cambios
git add .

# 2. Hacer commit
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push

# 4. Luego en Shopify Admin → Themes → Sync
```

---

## ✅ Ventajas de Usar GitHub

- ✅ **Sin límite de tamaño** (el ZIP tiene límite de 50MB)
- ✅ **Control de versiones** - puedes ver todos los cambios
- ✅ **Colaboración** - varios desarrolladores pueden trabajar
- ✅ **Historial** - puedes volver a versiones anteriores
- ✅ **Backup automático** - tu código está seguro en GitHub
- ✅ **Sincronización fácil** - un click en Shopify para actualizar

---

## 🆘 Solución de Problemas

### Error: "Repository not found"
- Verifica que el repositorio sea público, o
- Asegúrate de haber autorizado a Shopify en GitHub

### Error: "Branch not found"
- Verifica que la rama se llame `main` o `master`
- Puedes cambiarla en: `git branch -M main`

### Error al hacer push
- Verifica que tengas permisos de escritura en el repositorio
- Usa un Personal Access Token si te pide contraseña

---

## 🎯 Resumen de Comandos

```bash
# Inicializar Git
git init
git add .
git commit -m "Initial commit: Tema Albino Vino"

# Conectar con GitHub
git remote add origin https://github.com/tu-usuario/albino-vino-shopify-theme.git
git branch -M main
git push -u origin main
```

Luego en Shopify: **Themes → Add theme → Connect from GitHub**

---

**¡Es mucho más fácil y profesional que subir ZIPs!** 🚀
