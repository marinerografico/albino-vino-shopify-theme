# Configuración del Producto en Shopify

## 📦 Configuración de Variantes

Para que el configurador de packs funcione correctamente, necesitas crear variantes en Shopify con nombres específicos que el sistema pueda reconocer.

### Opción 1: Variantes con nombres descriptivos (Recomendado)

Crea 3 variantes del producto "Valentón" con estos nombres:

1. **Pack Solitario** (o cualquier nombre que contenga "1" o "solitario")
   - Precio: 14,00€
   - SKU: PACK-1

2. **Pack Trío** (o cualquier nombre que contenga "3", "trío" o "trio")
   - Precio: 28,00€
   - Precio comparado: 42,00€ (para mostrar descuento)
   - SKU: PACK-3

3. **Pack Multitud** (o cualquier nombre que contenga "6", "multitud", "orgía" o "orgia")
   - Precio: 49,00€
   - Precio comparado: 84,00€ (para mostrar descuento)
   - SKU: PACK-6

### Opción 2: Usar Opciones de Producto

Si prefieres usar opciones de producto en lugar de variantes separadas:

1. Crea una opción llamada "Pack" o "Cantidad"
2. Añade los valores: "Pack Solitario", "Pack Trío", "Pack Multitud"
3. El sistema detectará automáticamente los números (1, 3, 6) en los nombres

## 🖼️ Configuración de Imágenes

En la sección de configuración del tema (`Customize` > `Product pages` > `Product detail`):

1. **Imagen Pack 1 Botella**: Sube la imagen para el pack de 1 botella
2. **Imagen Pack 3 Botellas**: Sube la imagen para el pack de 3 botellas
3. **Imagen Pack 6 Botellas**: Sube la imagen para el pack de 6 botellas

Si no subes imágenes específicas, se usará la imagen principal del producto.

## 🎬 Configuración del Hero

En la misma sección de configuración:

- **URL del Video Hero**: URL del video de fondo (por defecto usa un video de Pexels)
- **Texto Badge Hero**: "Edición Valentón" (o el texto que prefieras)
- **Título Hero Línea 1**: "Dulce como"
- **Título Hero Línea 2**: "tu venganza."
- **Descripción Hero**: Texto descriptivo del producto
- **Subtítulo del Producto**: "Tinto dulce de uva garnacha suicida."

## ✅ Verificación

Después de configurar:

1. Ve a la página del producto en tu tienda
2. Verifica que aparezcan las 3 opciones de pack
3. Al seleccionar cada pack, debería:
   - Cambiar la imagen del producto
   - Actualizar el texto descriptivo
   - Actualizar el botón CTA
   - Mostrar el precio correcto

## 🔧 Solución de Problemas

### Las variantes no aparecen
- Verifica que los nombres de las variantes contengan los números o palabras clave mencionadas
- Asegúrate de que las variantes estén disponibles (tienen stock o están marcadas como "continuar vendiendo cuando no hay stock")

### Las imágenes no cambian
- Verifica que hayas subido las imágenes en la configuración de la sección
- Asegúrate de que las imágenes estén en formato web (JPG, PNG, WebP)

### El formulario no funciona
- Verifica que el formulario tenga el atributo `id="product-form"`
- Asegúrate de que cada radio button tenga el atributo `data-pack` con el valor correcto (1, 3, o 6)

## 📝 Notas Importantes

- El sistema detecta automáticamente las variantes basándose en palabras clave en los nombres
- Si no encuentra variantes específicas, mostrará todas las variantes disponibles del producto
- El formulario de Shopify maneja automáticamente el añadir al carrito
- El precio se muestra automáticamente desde Shopify usando el filtro `money`
