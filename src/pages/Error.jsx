import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-5 py-16 text-center">
      <div>
        <p className="text-lg font-bold text-blue-600">Erro 404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Pagina nao encontrada</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          A rota acessada nao existe. Volte para a pagina inicial.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
        >
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}

export default Error
