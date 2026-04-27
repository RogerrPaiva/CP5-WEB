import { NavLink } from "react-router-dom"

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-cyan-50 text-cyan-800"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
  }`

const Header = () => {
  return (
    <header className="flex min-h-18 flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-8">
      <NavLink
        className="inline-flex items-center gap-3 font-bold"
        to="/"
        aria-label="Ir para a pagina inicial"
      >
        <span className="grid size-11 place-items-center rounded-lg bg-cyan-700 text-white">
          CP
        </span>
        <span className="text-lg text-slate-950">GameStore</span>
      </NavLink>

      <nav
        className="order-3 flex w-full items-center gap-2 overflow-x-auto sm:order-2 sm:w-auto"
        aria-label="Navegacao principal"
      >
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkClass} to="/produtos">
          Produtos
        </NavLink>
        <NavLink className={navLinkClass} to="/contato">
          Contato
        </NavLink>
      </nav>

      <NavLink
        className="order-2 rounded-lg bg-cyan-700 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cyan-800 sm:order-3"
        to="/produtos"
      >
        Ver produtos
      </NavLink>
    </header>
  )
}

export default Header
