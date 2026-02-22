import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const AppLayout = () => (
  <div className="min-h-screen bg-slate-100 text-slate-900">
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      <header className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <nav className="flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Contadores</h1>
          <div className="flex gap-2">
            <Link
              to="/"
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <Outlet />
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4">
        <h2 className="text-sm font-semibold text-slate-700">Espacio compartido</h2>
        <div className="mt-2 min-h-14 rounded-xl bg-slate-50 p-3 text-sm text-slate-500">
          Aqui puedes colocar tu contador personal pequenio.
        </div>
      </section>
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
