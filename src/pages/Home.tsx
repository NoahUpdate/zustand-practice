import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Pagina Home</p>
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">{count}</h2>
      <div className="mx-auto flex w-full max-w-xs gap-3">
        <button
          type="button"
          onClick={() => setCount((current) => current - 1)}
          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-lg font-semibold text-white transition hover:bg-slate-700"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Home
