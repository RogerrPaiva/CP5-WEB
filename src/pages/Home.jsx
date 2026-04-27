import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="grid min-h-[calc(100vh-9rem)] place-items-center px-6 py-12">
        <section className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-block rounded-lg bg-cyan-700 px-4 py-2 text-sm font-bold uppercase text-white">
            GameStore
          </span>

          <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
            Bem-vindo ao seu novo universo de jogos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Encontre aventuras, desafios e historias incriveis em uma selecao
            feita para todos os tipos de jogadores.
          </p>

          <Link
            to="/produtos"
            className="mt-8 inline-block rounded-lg bg-cyan-700 px-6 py-3 font-bold text-white transition hover:bg-cyan-800"
          >
            Ver produtos
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
