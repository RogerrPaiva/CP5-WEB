import Footer from "../components/Footer"
import Header from "../components/Header"

const Produtos = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto mt-12 w-full max-w-6xl px-4">
        <h1 className="text-4xl font-bold text-slate-950">Produtos</h1>
        <p className="mt-3 text-lg text-slate-600">Conheca nossos produtos.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Produtos
