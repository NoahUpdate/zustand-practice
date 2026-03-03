import { useAppStore } from '../store/useAppStore.ts'
import { useShallow } from 'zustand/react/shallow'

const Home = () => {
  //nuevo shallow
  // const cant = useAppStore(state => state.cant)
  // const increase = useAppStore(state=>state.increase);
  // const decrease  = useAppStore(state=>state.decrease);

  const [cant, increase, decrease] = useAppStore(
    useShallow((state) => [state.cant, state.increase, state.decrease])
  )

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Pagina Home</p>
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">{cant}</h2>
      <div className="mx-auto flex w-full max-w-xs gap-3">
        <button
          type="button"
          onClick={decrease}
          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          -
        </button>
        <button
          type="button"
          onClick={increase}
          className="flex-1 rounded-xl bg-blue-500 dark:bg-slate-900 px-4 py-3 text-lg font-semibold text-white transition hover:bg-slate-700"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Home
