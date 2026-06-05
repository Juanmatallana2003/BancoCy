# 🏦 Mini Banco

Aplicación bancaria de pruebas (SPA) construida con **React + Vite**. Diseñada como entorno target para automatización QA con **Cypress**.

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## 📋 Características

| Vista       | Funcionalidad                                                           |
|-------------|-------------------------------------------------------------------------|
| **Login**   | Formulario de usuario y contraseña. Acepta cualquier credencial.        |
| **Dashboard** | Muestra saldo ($50,000 inicial), permite transferencias y actualiza el saldo. |

---

## 🧪 Selectores para Cypress (`data-cy`)

| Selector          | Elemento                           |
|-------------------|------------------------------------|
| `login-usuario`   | Input de usuario (Login)           |
| `login-clave`     | Input de contraseña (Login)        |
| `btn-ingresar`    | Botón "Ingresar" (Login)          |
| `saldo-actual`    | Texto del saldo (Dashboard)       |
| `input-cuenta`    | Input cuenta destino (Dashboard)   |
| `input-monto`     | Input monto (Dashboard)           |
| `btn-transferir`  | Botón "Transferir Dinero"         |
| `mensaje-exito`   | Mensaje de transferencia exitosa   |

---

## 🏗️ Estructura del Proyecto

```
MiniBanco/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx      # Punto de entrada React
    ├── App.jsx        # Componente principal (Login + Dashboard)
    └── index.css      # Estilos globales
```

---

## 📝 Notas Técnicas

- **Sin router**: La navegación entre vistas se maneja con `useState`.
- **Sin backend/BD**: Toda la lógica es client-side.
- **Saldo inicial**: `50000` (número entero).
- **Transferencias**: Se valida que el monto sea positivo y no exceda el saldo disponible.
