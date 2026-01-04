# 🔌 Configuración de Integraciones - Albino Vino

Esta guía te ayudará a configurar todas las integraciones necesarias para tu tienda de Shopify.

---

## 📧 1. Email Marketing - Klaviyo

### Instalación

1. Ve a: **Shopify Admin** → **Apps** → **Visit Shopify App Store**
2. Busca **"Klaviyo"**
3. Haz clic en **"Add app"** → **"Install app"**
4. Conecta tu cuenta de Klaviyo (o créala si no tienes)

### Configuración de Flujos de Email

#### A. Abandoned Cart (Carrito Abandonado)

**Configurar en Klaviyo:**

1. Ve a: **Klaviyo Dashboard** → **Flows** → **Create Flow**
2. Selecciona: **"Browse Abandonment"** o **"Cart Abandonment"**
3. Configura 3 mensajes:

**Mensaje 1 - Envío inmediato (o 1 hora después):**
- **Asunto:** "¿Te olvidaste algo? Tu Albino. Valentín te espera"
- **Contenido:** Recordatorio sutil con imagen del producto
- **CTA:** "Completar compra"

**Mensaje 2 - 24 horas después:**
- **Asunto:** "Todavía está disponible — Albino. Valentín"
- **Contenido:** Urgencia sutil, destacar que el stock es limitado
- **CTA:** "Completar compra"

**Mensaje 3 - 72 horas después:**
- **Asunto:** "Última oportunidad — 10% de descuento"
- **Contenido:** Oferta de último momento
- **CTA:** "Aprovechar descuento"

#### B. Welcome Email (Email de Bienvenida)

1. Ve a: **Flows** → **Create Flow** → **"Welcome Series"**
2. Configura:
- **Trigger:** Nuevo suscriptor
- **Mensaje:** Bienvenida con historia de la marca
- **CTA:** "Descubrir Albino. Valentín"

#### C. Segementación

**Crear Segmentos:**

1. **Buyers (Compradores):**
   - Condición: Ha realizado al menos 1 compra
   - Uso: Emails de fidelización, nuevos productos

2. **Non-Buyers (No Compradores):**
   - Condición: Ha visitado pero no ha comprado
   - Uso: Campañas de conversión, testimonios

3. **High-Intent (Alta Intención):**
   - Condición: Ha añadido al carrito pero no completó
   - Uso: Abandoned cart + ofertas especiales

### Popup de Suscripción

**En Klaviyo:**

1. Ve a: **Forms** → **Create Form**
2. Selecciona: **"Pop-up Form"**
3. Diseña el popup:
   - Título: "Únete al club"
   - Texto: "Sé el primero en conocer nuevas ediciones"
   - Campo: Email
4. Configura:
   - **Trigger:** Después de 30 segundos o al intentar salir
   - **Frequency:** Máximo 1 vez por visitante cada 30 días

**Instalar en Shopify:**

1. En Klaviyo, copia el código del formulario
2. Ve a: **Shopify Admin** → **Online Store** → **Themes** → **Customize**
3. Ve a: **Theme settings** → **Custom code**
4. Pega el código en **"Additional scripts"**

---

## 💳 2. Métodos de Pago

### Configurar en Shopify

1. Ve a: **Shopify Admin** → **Settings** → **Payments**
2. Activa los métodos de pago:

#### A. Tarjetas de Crédito/Débito
- **Shopify Payments** (si está disponible en España)
- **Stripe** (si no tienes Shopify Payments)
- **PayPal**

#### B. Buy Now, Pay Later (Comprar Ahora, Pagar Después)

**Opción 1: Klarna**
1. En **Payments**, busca **"Klarna"**
2. Haz clic en **"Activate"**
3. Configura tu cuenta de Klarna

**Opción 2: SeQura**
1. En **Payments**, busca **"SeQura"**
2. Haz clic en **"Activate"**
3. Configura tu cuenta de SeQura

**Opción 3: Clearpay (Ahora disponible en España)**
1. En **Payments**, busca **"Clearpay"**
2. Haz clic en **"Activate"**
3. Configura tu cuenta de Clearpay

### Configuración Recomendada

- ✅ **Tarjetas de crédito/débito** (obligatorio)
- ✅ **PayPal** (muy popular en España)
- ✅ **1 método BNPL** (Klarna, SeQura o Clearpay)
- ✅ **Transferencia bancaria** (opcional, para pedidos grandes)

---

## 📦 3. Gestión de Inventario

### Configuración Básica

1. Ve a: **Shopify Admin** → **Settings** → **Inventory**
2. Activa: **"Track inventory"**
3. Configura:

#### A. Sincronización en Tiempo Real

**Para cada producto:**

1. Ve a: **Products** → Selecciona "Albino. Edición Valentín"
2. En **"Inventory"**, activa **"Track quantity"**
3. Configura:
   - **Inventory policy:** "Shopify tracks this product's inventory"
   - **Inventory quantity:** Añade la cantidad disponible
   - **Allow customers to purchase this product when it's out of stock:** Desactivado (recomendado)

#### B. Alertas de Stock Bajo

1. Ve a: **Settings** → **Notifications**
2. Busca: **"Low inventory alert"**
3. Configura:
   - **Threshold:** 10 unidades (o el número que prefieras)
   - **Email notifications:** Activa las alertas

#### C. Mensaje "Solo X disponibles"

**Esto ya está implementado en el tema:**
- El tema muestra "Solo X disponibles" cuando el stock está por debajo del umbral configurado
- Configurable en: **Themes** → **Customize** → **Product pages** → **Product detail** → **"Umbral de stock bajo"**

---

## 🛒 4. Optimización de Checkout Móvil

### Configuración en Shopify

1. Ve a: **Settings** → **Checkout**
2. Configura:

#### A. Información del Cliente
- ✅ **Email address** (obligatorio)
- ✅ **Phone number** (obligatorio para envíos)
- ✅ **Company name** (opcional)
- ✅ **Address line 2** (opcional)

#### B. Orden y Pagos
- ✅ **Customer information** (mostrar primero)
- ✅ **Shipping address** (si es diferente)
- ✅ **Payment methods** (mostrar claramente)

#### C. Marketing
- ✅ **Email marketing opt-in** (con checkbox pre-marcado opcional)
- ✅ **SMS marketing opt-in** (opcional)

#### D. Scripts de Checkout (Opcional)

Para personalizar el checkout más allá:

1. Ve a: **Settings** → **Checkout** → **Order status page**
2. Añade scripts personalizados si es necesario

### Mejores Prácticas

- ✅ **Mínimos campos necesarios**
- ✅ **Autocompletado activado**
- ✅ **Múltiples métodos de pago visibles**
- ✅ **Trust badges** (seguridad, envíos)
- ✅ **Garantía de devolución visible**

---

## 📊 5. Analytics y Seguimiento

### Google Analytics 4

1. Ve a: **Shopify Admin** → **Settings** → **Customer events**
2. Conecta con **Google Analytics 4**
3. O añade el código manualmente en: **Online Store** → **Themes** → **Customize** → **Theme settings** → **Custom code**

### Facebook Pixel (Opcional)

1. Ve a: **Settings** → **Customer events**
2. Conecta con **Facebook Pixel**
3. Útil para retargeting y publicidad

---

## ✅ Checklist de Configuración

### Email Marketing
- [ ] Klaviyo instalado y conectado
- [ ] Flujo de abandoned cart configurado (3 mensajes)
- [ ] Welcome email configurado
- [ ] Segmentos creados (Buyers, Non-Buyers)
- [ ] Popup de suscripción instalado

### Métodos de Pago
- [ ] Tarjetas de crédito/débito activadas
- [ ] PayPal configurado
- [ ] BNPL (Klarna/SeQura/Clearpay) configurado
- [ ] Métodos de pago visibles en checkout

### Inventario
- [ ] Tracking de inventario activado
- [ ] Cantidad de stock configurada
- [ ] Alertas de stock bajo configuradas
- [ ] Mensaje "Solo X disponibles" funcionando

### Checkout
- [ ] Checkout optimizado para móvil
- [ ] Campos mínimos configurados
- [ ] Múltiples métodos de pago disponibles
- [ ] Trust badges visibles

---

## 🆘 Soporte

Si tienes problemas con alguna integración:

1. **Klaviyo:** https://help.klaviyo.com/
2. **Shopify Payments:** https://help.shopify.com/en/manual/payments
3. **Inventario:** https://help.shopify.com/en/manual/products/inventory

---

**¡Todo listo para convertir!** 🚀
