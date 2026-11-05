# Arquitectura

Cómo está organizada la fundación y cómo organizar una aplicación que la use.

## 1. Capas de la fundación

```text
src/
├── styles/        Sistema de diseño SCSS (tokens, temas, grid, utilidades, componentes)
├── components/    Componentes globales Vue + barrel index.ts
├── store/         Composables singleton (estado compartido): useNotify, usePrintDoc, useTheme
├── app/i18n/      Instancia de vue-i18n, formateo de fechas y números, textos de los componentes
└── index.ts       Exportaciones públicas
```

| Capa | Responsabilidad | Puede depender de |
|---|---|---|
| `styles/` | Aspecto visual. No contiene lógica. | — |
| `app/i18n/` | Idioma activo, textos y formatos (`formatDate`, `formatNumber`…). | `vue-i18n` |
| `store/` | Estado compartido entre componentes (notificaciones, documento a imprimir, tema). | `vue` |
| `components/` | Piezas de interfaz reutilizables y **sin lógica de negocio**: no consumen APIs ni conocen módulos. | `store/`, `app/i18n/`, `styles/` (por clases) |

Las dependencias van en un solo sentido: `components → store / app/i18n`. Ningún archivo de la fundación importa código de la aplicación que la usa.

## 2. Arquitectura recomendada para la aplicación

La fundación proviene de una aplicación organizada por **dominios**. Esa estructura es la recomendada para proyectos nuevos:

```text
src/
├── app/           Composición: router y guards, providers (arranque), config (env), i18n
├── modules/       Un dominio por carpeta, autocontenido
├── components/    Componentes globales (los de la fundación + los que se promuevan)
├── services/      Cliente HTTP centralizado y utilidades de infraestructura
├── store/         Composables globales (estado compartido)
├── types/         Tipos compartidos (errores, paginación…)
├── layouts/       Estructura de la aplicación (barra superior, menú)
└── styles/        Sistema de diseño
```

### Dependencias en un solo sentido

```text
modules  →  capa global (components · services · store · types)  →  app
```

- ✅ `modules/productos → services/httpClient`
- ❌ `modules/productos → modules/usuarios`

Si algo lo necesitan dos o más módulos, **sube a la capa global** y debe quedar genérico (solo props y eventos, sin lógica de negocio).

### Forma de un módulo

```text
modules/<dominio>/
├── pages/        Una page por vista, con nombre simple: list.vue, create.vue, edit.vue, detail.vue
├── components/   Piezas propias del dominio (tablas, filtros, pestañas, modales del dominio)
├── services/     Todas las llamadas HTTP del módulo
├── types/        Interfaces del dominio (entidad, formulario, filtros, respuestas)
├── routes/       Rutas lazy (RouteRecordRaw[]), una por page
└── index.ts      Barrel público: el router importa las rutas solo desde aquí
```

- `create.vue` y `edit.vue` tienen **cada uno su propio formulario**: no se comparte un formulario contenedor entre alta y edición.
- Solo se extraen a componentes las piezas reutilizables (tablas, filtros, pestañas, modales).

### Flujo de datos

```text
Page → Service → API → Page → Component
```

1. La **page** pide los datos al **service** de su módulo y maneja `loading` / `error`.
2. El **service** llama a la API a través del cliente HTTP centralizado y devuelve datos tipados.
3. La **page** pasa los datos a los **componentes** por props y reacciona a sus eventos.

Los componentes no llaman a la API. No se crea estado global mientras no exista una necesidad real (ver [DEVELOPMENT-GUIDELINES.md](DEVELOPMENT-GUIDELINES.md#composables-singleton)).

## 3. Convenciones de nombres

| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes | PascalCase | `SearchSelect.vue` |
| Pages | nombre simple en minúscula | `list.vue`, `detail.vue` |
| Composables | `use` + PascalCase | `useNotify.ts` |
| Services | dominio + `.service.ts` | `productos.service.ts` |
| Parciales SCSS | `_` + kebab-case | `_form-controls.scss` |
| Clases CSS | kebab-case, nombres genéricos | `.btn-primary`, `.section-title` |
| Variables y funciones | nombres con significado, sin abreviaturas crípticas | `selectedMethod`, no `sm` |

## 4. Alias de importación

Configurados en `vite.config.ts` y en `tsconfig.app.json`. Están prohibidas las rutas relativas que suben varias carpetas (`../../../`) entre capas.

| Alias | Apunta a |
|---|---|
| `@/` | `src/` |
| `@app/` | `src/app/` |
| `@modules/` | `src/modules/` |
| `@styles/` | `src/styles/` |

## 5. Comunicación entre capas

| De → a | Mecanismo |
|---|---|
| Page → componente | props |
| Componente → page | eventos (`emit`), `v-model` |
| Cualquier vista → estado compartido | composable singleton (`useNotify().success(...)`) |
| Page → API | service del módulo |
| Módulo → router | barrel `index.ts` del módulo |
