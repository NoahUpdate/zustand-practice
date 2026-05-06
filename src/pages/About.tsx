import { useAppStore } from '../store/useAppStore.ts'
import { useState } from 'react'

const About = () => {
  const updateCant = useAppStore((state) => state.updateCant)
  const [inputValue, setInputValue] = useState('')

  const handleUpdate = () => {
    const newCantValue = Number(inputValue)
    if (!isNaN(newCantValue)) {
      updateCant(newCantValue)
      setInputValue('')
    }
  }
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Pagina About</p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Segunda pagina activa</h2>
      <p className="text-sm text-slate-600">
        Esta vista se mantiene simple para que puedas seguir agregando funcionalidades. y este es un cambio nuevo.
      </p>
      <div className="flex items-center justify-center">
        <p className="text-sm"> Ingresa el valor actual:</p>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 rounded-lg border-blue-950 px-2 py-1"
          type="number"
        />
        <button onClick={handleUpdate} className="px-4 py-1 bg-blue-900 text-white rounded-lg">
          Actualizar
        </button>
      </div>
    </div>
  )
}

export default About
