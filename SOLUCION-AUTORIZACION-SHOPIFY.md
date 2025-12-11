# 🔐 Solución: Problema de Autorización en Shopify CLI

## ❌ Error que estás viendo:
```
You are not authorized to use the CLI to develop in the provided store: albino-vino.myshopify.com
```

## ✅ Soluciones (prueba en este orden):

### Solución 1: Iniciar sesión en el Admin de Shopify (MÁS IMPORTANTE)

**Antes de usar el CLI, debes haber iniciado sesión en el Admin de Shopify al menos una vez:**

1. Abre tu navegador
2. Ve a: `https://albino-vino.myshopify.com/admin`
3. Inicia sesión con tu cuenta
4. Asegúrate de que puedes acceder al panel de administración
5. Una vez dentro, cierra la sesión y vuelve a intentar con el CLI

### Solución 2: Verificar permisos de cuenta

Asegúrate de que tu cuenta tenga los permisos necesarios:

1. Ve a: `https://albino-vino.myshopify.com/admin/settings/account`
2. Verifica que tu cuenta sea:
   - **Store owner** (Dueño de la tienda), O
   - **Staff account** con permisos de "Themes" (Temas)

### Solución 3: Usar el dominio correcto

Asegúrate de usar el dominio `.myshopify.com` y no un dominio personalizado:

✅ **Correcto:** `albino-vino.myshopify.com`  
❌ **Incorrecto:** `albino-vino.com` (si tienes dominio personalizado)

### Solución 4: Limpiar autenticación y volver a intentar

```bash
# Limpiar la autenticación guardada
rm -rf ~/.config/shopify

# Volver a autenticarte
npx shopify auth login
```

### Solución 5: Especificar la tienda manualmente

Si tienes acceso a varias tiendas, especifica cuál quieres usar:

```bash
npx shopify theme push --store=albino-vino.myshopify.com
```

### Solución 6: Verificar que la tienda existe y está activa

1. Ve a: `https://albino-vino.myshopify.com`
2. Verifica que la tienda esté activa y funcionando
3. Si es una tienda de desarrollo, asegúrate de que esté activa

---

## 🎯 Pasos Recomendados (en orden):

### Paso 1: Verificar acceso al Admin
```bash
# Abre en tu navegador:
https://albino-vino.myshopify.com/admin
```

Si puedes acceder, continúa. Si no, necesitas recuperar el acceso a tu cuenta.

### Paso 2: Limpiar autenticación anterior
```bash
cd "/Users/juandigonzalezrodriguez/Documents/Emprendimiento/ALBINO VINO/albino-vino-theme"
rm -rf ~/.config/shopify
```

### Paso 3: Volver a autenticarte
```bash
npx shopify auth login
```

### Paso 4: Seleccionar la tienda correcta
Cuando te pida seleccionar la tienda, elige:
- `albino-vino.myshopify.com`

### Paso 5: Subir el tema
```bash
npm run shopify:push
```

---

## 🔍 Verificar tu cuenta de Shopify

Si sigues teniendo problemas, verifica:

1. **¿Eres el dueño de la tienda?**
   - Ve a: Settings → Account
   - Verifica tu rol

2. **¿La tienda está activa?**
   - Verifica que puedas acceder al admin
   - Verifica que la tienda no esté en modo de prueba

3. **¿Tienes permisos de Themes?**
   - Si eres staff, verifica que tengas permisos para editar temas

---

## 💡 Alternativa: Usar ZIP Manual

Si el CLI sigue dando problemas, puedes subir el tema manualmente:

1. Ejecuta el script para crear el ZIP:
   ```bash
   ./crear-zip-tema.sh
   ```

2. Ve a: `https://albino-vino.myshopify.com/admin/themes`

3. Haz clic en "Add theme" → "Upload zip file"

4. Selecciona el archivo `albino-vino-theme.zip`

---

## 📞 Si nada funciona

Si después de intentar todas las soluciones sigue sin funcionar:

1. Verifica que tengas acceso completo a la tienda
2. Contacta con el dueño de la tienda para que te dé permisos
3. O usa el método ZIP manual que siempre funciona

---

## ✅ Checklist de Verificación

- [ ] Puedo acceder a `https://albino-vino.myshopify.com/admin`
- [ ] Mi cuenta es "Store owner" o tiene permisos de "Themes"
- [ ] Estoy usando el dominio `.myshopify.com` correcto
- [ ] He limpiado la autenticación anterior (`rm -rf ~/.config/shopify`)
- [ ] He vuelto a autenticarme con `npx shopify auth login`
