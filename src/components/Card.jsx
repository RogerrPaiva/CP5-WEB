function Card({ jogo }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={jogo.imagem}
        alt={jogo.nome}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <span className="mb-3 inline-block rounded-lg bg-cyan-700 px-3 py-1 text-sm font-medium text-white">
          {jogo.genero}
        </span>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          {jogo.nome}
        </h2>

        <p className="mb-5 text-sm leading-relaxed text-slate-600">
          {jogo.descricao}
        </p>

        <div className="flex items-center justify-between">
          <strong className="text-xl text-cyan-700">
            {jogo.preco}
          </strong>

          <button className="rounded-lg bg-cyan-700 px-4 py-2 font-semibold text-white transition hover:bg-cyan-800">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
