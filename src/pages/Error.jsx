import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-3xl text-center">
        <span className="mx-auto mb-5 grid size-14 place-items-center rounded-lg bg-cyan-700 text-2xl font-bold text-white">
          404
        </span>

        <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
          Página não encontrada
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Essa rota não existe
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          O endereço acessado pode ter sido digitado errado ou removido. Volte
          para uma página válida da GameStore.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-lg bg-cyan-700 px-5 py-3 font-bold text-white transition hover:bg-cyan-800"
          >
            Voltar para Home
          </Link>

          <Link
            to="/produtos"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-cyan-700 hover:text-cyan-700"
          >
            Ver produtos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Error;
