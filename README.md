# Clínica Aviat — Sitio web

Sitio institucional de **Aviat, Centro Quirúrgico y de Medicina Ambulatoria** (La Rioja, Argentina).

**Demo:** [aviat.riojadev.com.ar](https://aviat.riojadev.com.ar)

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **framer-motion** y **GSAP** para animaciones
- **Lenis** para scroll suave
- Exportado como **sitio estático**: no requiere servidor y funciona en cualquier hosting

## Secciones

- **Inicio:** presentación, instalaciones y accesos rápidos
- **La clínica:** quiénes somos e instalaciones
- **Servicios:** áreas y especialidades
- **Ubicación:** dirección, mapa y contacto
- Botón flotante de WhatsApp en todas las páginas

## Estructura

```
src/
├── app/                 Páginas (inicio, la-clinica, servicios, ubicacion)
│   ├── globals.css      Colores y estilos base de la marca
│   ├── layout.tsx       Tipografías, navegación y pie de página
│   └── template.tsx     Transición entre páginas
├── components/          Componentes visuales y animaciones
└── lib/config.ts        Contenido del sitio: textos, contacto, servicios, galería
```

- **Contenido** (textos, teléfonos, horarios, servicios): se edita en `src/lib/config.ts`.
- **Identidad visual** (colores): variables en `src/app/globals.css`.
- **Tipografías:** `src/app/layout.tsx`.

## Desarrollo local

Requiere Node.js 22.

```bash
npm ci          # instala dependencias
npm run dev     # servidor local en http://localhost:3000
npm run build   # genera el sitio estático en la carpeta dist/
```

## Publicación

Cada cambio en la rama `main` se publica automáticamente.

- **Build:** `npm run build`
- **Carpeta de salida:** `dist`
- **Subcarpeta (opcional):** por defecto el sitio funciona en la raíz del dominio. Para publicarlo bajo una subcarpeta (por ejemplo `/aviat`), definir la variable de entorno `BASE_PATH=/aviat` al compilar.

## Desarrollo

Agustín Fernández Gastón — [github.com/AgusFernandezGaston](https://github.com/AgusFernandezGaston)
