# Práctica de Zustand

Este proyecto está diseñado para practicar el uso de Zustand, una solución pequeña, rápida y escalable para la gestión de estado en aplicaciones React. Zustand proporciona una API simple para gestionar el estado global sin el boilerplate de Redux o Context API.

## Características

- Practicar la creación y uso de stores de Zustand
- Gestionar estado con acciones y selectores
- Manejar operaciones asíncronas
- Integrar Zustand con componentes React

## Primeros Pasos

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Ejecuta el servidor de desarrollo: `npm start`

## Conceptos Básicos de Zustand

Zustand te permite crear stores que contienen tu estado y proporcionan métodos para actualizarlo. Aquí hay un ejemplo básico:

```javascript
import create from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

Luego úsalo en tus componentes:

```javascript
function Counter() {
  const { count, increment, decrement } = useStore()
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

Este proyecto contiene ejemplos y ejercicios para ayudarte a dominar Zustand para la gestión de estado en tus proyectos React.
