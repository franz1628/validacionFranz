# 💎 Validación Franz - Premium UI Framework

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JQuery](https://img.shields.io/badge/jquery-3.x-orange.svg)
![UI](https://img.shields.io/badge/UI-Premium-purple.svg)

Una biblioteca de validación de formularios ligera y altamente personalizable para JQuery, ahora con un diseño **Premium Next-Gen**.

## ✨ Características Principales

*   🚀 **Validación en Tiempo Real**: Feedback instantáneo a medida que el usuario interactúa.
*   🎨 **Diseño Premium**: Interfaz moderna con glassmorphism, tipografía `Outfit` y animaciones fluidas.
*   🛠️ **Altamente Configurable**: Personaliza mensajes, longitudes mínimas/máximas y tipos de datos.
*   📱 **Responsive Design**: Adaptado perfectamente para dispositivos móviles y escritorio.
*   📦 **Iconografía 3D**: Incluye iconos de estatus (Alerta, Correcto, Info) con diseño de vanguardia.

## 🚀 Instalación Rápida

1.  **Incluye las dependencias** en tu `<head>`:

```html
<link rel="stylesheet" href="css/validFranz.css">
<script src="js/jquery.js"></script>
<script src="js/validFranz.js"></script>
```

2.  **Inicializa el plugin** con tus reglas personalizadas:

```javascript
$(function() {
    var opciones = {
        ".mi_input": {
            required: true,
            msgRequired: "Campo obligatorio",
            msgInfo: "Por favor, complete este campo",
            msgCorrecto: "¡Todo bien!",
            min: 3,
            max: 20
        }
    };
    $("#miForm").franz(opciones);
});
```

## 📋 Reglas Disponibles

| Regla | Descripción |
| :--- | :--- |
| `required` | El campo es obligatorio. |
| `email` | Valida el formato de correo electrónico. |
| `select` | Asegura que se haya seleccionado una opción válida. |
| `checkbox` | Valida que se haya marcado una casilla de verificación. |
| `radio` | Valida que se haya seleccionado una opción de radio. |
| `min` / `max` | Establece el rango de caracteres permitido. |
| `cadenaFra` | Filtra los caracteres permitidos durante la escritura. |

## 📐 Estructura Recomendada

Para una mejor experiencia visual, envuelva sus inputs en un contenedor con la clase `.input-wrapper`:

```html
<div class="input-wrapper">
    <input type="text" class="txt_name1" placeholder="Su nombre...">
</div>
```

## 📧 Contacto

Proyecto mantenido por **Gualambo**.
- **Email**: [gualambo@gmail.com](mailto:gualambo@gmail.com)

---
*Diseñado con ❤️ para una mejor experiencia de usuario.*
