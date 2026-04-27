function Produtos() {
  const jogos = [
    {
      id: 1,
      nome: "The Last of Us Part II",
      genero: "Ação / Aventura",
      preco: "R$ 199,90",
      imagem:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop",
      descricao:
        "Um jogo emocionante de ação e sobrevivência em um mundo pós-apocalíptico, com narrativa intensa e personagens marcantes."
    },
    {
      id: 2,
      nome: "God of War Ragnarök",
      genero: "Ação / Mitologia",
      preco: "R$ 249,90",
      imagem:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop",
      descricao:
        "Acompanhe Kratos e Atreus em uma jornada épica pela mitologia nórdica, enfrentando deuses, monstros e grandes desafios."
    },
    {
      id: 3,
      nome: "Spider-Man 2",
      genero: "Ação / Mundo Aberto",
      preco: "R$ 299,90",
      imagem:
        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=600&auto=format&fit=crop",
      descricao:
        "Explore a cidade, enfrente vilões e viva uma aventura cheia de ação controlando os heróis aracnídeos mais famosos."
    },
    {
      id: 4,
      nome: "Minecraft",
      genero: "Criativo / Sobrevivência",
      preco: "R$ 99,90",
      imagem:
        "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&auto=format&fit=crop",
      descricao:
        "Construa, explore e sobreviva em um mundo aberto feito de blocos, onde a criatividade do jogador é o principal limite."
    },
    {
      id: 5,
      nome: "FIFA 25",
      genero: "Esporte / Futebol",
      preco: "R$ 279,90",
      imagem:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&auto=format&fit=crop",
      descricao:
        "Entre em campo com os maiores clubes e jogadores do mundo em partidas realistas, modos online e campeonatos emocionantes."
    },
    {
      id: 6,
      nome: "Hogwarts Legacy",
      genero: "RPG / Fantasia",
      preco: "R$ 229,90",
      imagem:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&auto=format&fit=crop",
      descricao:
        "Viva sua própria história no universo mágico, explore Hogwarts, aprenda feitiços e enfrente mistérios perigosos."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mx-auto mb-4 grid size-11 place-items-center rounded-lg bg-cyan-700 text-white">
            🎮
          </span>

          <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Produtos
          </h1>

          <p className="mx-auto max-w-2xl text-slate-600">
            Confira nossa seleção de jogos com diferentes estilos, aventuras e
            experiências para todos os tipos de jogadores.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jogos.map((jogo) => (
            <div
              key={jogo.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
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
          ))}
        </div>
      </section>
    </main>
  );
}

export default Produtos;