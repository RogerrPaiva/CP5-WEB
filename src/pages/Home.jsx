import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import got from "../assets/got.jpeg";
import thelast from "../assets/thelastofus.jpeg";
import cupHead from "../assets/CupHead.jpeg";
import spiderMiles from "../assets/SpiderMan_Miles_Morales.jpeg";
import zelda from "../assets/ZeldaBreathoftheWild.jpeg";

const destaques = [
  {
    nome: "The Last of Us Part II",
    genero: "Ação",
    preco: "R$ 199,90",
    imagem: thelast,
    descricao: "Narrativa intensa, sobrevivência e personagens marcantes.",
  },
  {
    nome: "God of War Ragnarök",
    genero: "RPG",
    preco: "R$ 249,90",
    imagem: got,
    descricao: "Uma jornada épica por reinos nórdicos cheios de desafios.",
  },
  {
    nome: "Spider-Man: Miles Morales",
    genero: "Ação",
    preco: "R$ 249,90",
    imagem: spiderMiles,
    descricao: "Explore a cidade com velocidade, combate e grandes vilões.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main>
        <section className="border-b border-slate-200 bg-white px-6 py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="mb-5 inline-block rounded-lg bg-cyan-700 px-4 py-2 text-sm font-bold uppercase text-white">
                GameStore
              </span>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
                Seu próximo jogo favorito está aqui
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Explore aventuras épicas, desafie seus limites e viva histórias
                inesquecíveis. Novidades, clássicos e grandes jornadas em um só
                lugar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/produtos"
                  className="rounded-lg bg-cyan-700 px-6 py-3 font-bold text-white transition hover:bg-cyan-800"
                >
                  Ver produtos
                </Link>

                <a
                  href="#destaques"
                  className="rounded-lg border border-cyan-700 bg-white px-6 py-3 font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Explorar destaques
                </a>
              </div>

              <div className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                <div>
                  <strong className="block text-slate-900">Compra segura</strong>
                  Ambiente protegido
                </div>
                <div>
                  <strong className="block text-slate-900">Melhores preços</strong>
                  Ofertas exclusivas
                </div>
                <div>
                  <strong className="block text-slate-900">Suporte rápido</strong>
                  Estamos aqui para ajudar
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={zelda}
                alt="The Legend of Zelda: Breath of the Wild"
                className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
              />
              <img
                src={got}
                alt="God of War Ragnarök"
                className="mt-8 h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
              />
              <img
                src={cupHead}
                alt="Cuphead"
                className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
              />
              <img
                src={spiderMiles}
                alt="Spider-Man: Miles Morales"
                className="mt-8 h-48 w-full rounded-2xl object-cover shadow-lg md:h-64"
              />
            </div>
          </div>
        </section>

        <section id="destaques" className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-950">Destaques</h2>
              <Link
                to="/produtos"
                className="text-sm font-bold text-cyan-700 hover:text-cyan-800"
              >
                Ver todos
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {destaques.map((jogo) => (
                <article
                  key={jogo.nome}
                  className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md sm:grid-cols-[11rem_1fr]"
                >
                  <img
                    src={jogo.imagem}
                    alt={jogo.nome}
                    className="h-48 w-full object-cover sm:h-full"
                  />

                  <div className="flex flex-col p-5">
                    <span className="mb-3 w-fit rounded-lg bg-cyan-700 px-3 py-1 text-xs font-bold text-white">
                      {jogo.genero}
                    </span>
                    <h3 className="text-xl font-bold text-slate-950">
                      {jogo.nome}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {jogo.descricao}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <strong className="text-lg text-cyan-700">
                        {jogo.preco}
                      </strong>
                      <button className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-800">
                        Comprar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
