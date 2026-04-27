import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import thelast from "../assets/thelastofus.jpeg";
import got from "../assets/got.jpeg";
import harry from "../assets/harry.jpeg";
import eldenRing from "../assets/EldenRing.jpeg";
import cyberPunk from "../assets/CyberPunk.jpg";
import redDead from "../assets/RedDead.jpg";
import stardewValley from "../assets/StardewValley.jpg";
import hollowKnight from "../assets/HollowKnight.jpg";
import theWitcher from "../assets/TheWitcher.jpeg";
import terraria from "../assets/Terraria.jpg";
import residentEvil from "../assets/ResidentEvil.jpg";
import zelda from "../assets/ZeldaBreathoftheWild.jpeg";
import journey from "../assets/Journey.jpeg";
import gris from "../assets/Gris.jpeg";
import darkSouls from "../assets/Dark_Souls_3.jpeg";
import cupHead from "../assets/CupHead.jpeg";
import celeste from "../assets/Celeste.jpeg";
import spiderMiles from "../assets/SpiderMan_Miles_Morales.jpeg";

const jogos = [
  {
    id: 1,
    nome: "The Last of Us Part II",
    genero: "Ação",
    preco: "R$ 199,90",
    imagem: thelast,
    descricao:
      "Um jogo emocionante de ação e sobrevivência em um mundo pós-apocalíptico, com narrativa intensa e personagens marcantes.",
  },
  {
    id: 2,
    nome: "God of War Ragnarök",
    genero: "Ação",
    preco: "R$ 249,90",
    imagem: got,
    descricao:
      "Acompanhe Kratos e Atreus em uma jornada épica pela mitologia nórdica, enfrentando deuses, monstros e grandes desafios.",
  },
  {
    id: 3,
    nome: "Spider-Man: Miles Morales",
    genero: "Ação",
    preco: "R$ 249,90",
    imagem: spiderMiles,
    descricao:
      "Balance por Nova York, enfrente ameaças poderosas e descubra a força de um novo herói.",
  },
  {
    id: 4,
    nome: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura",
    preco: "R$ 299,90",
    imagem: zelda,
    descricao:
      "Explore Hyrule com liberdade, resolva desafios e descubra segredos em uma grande jornada.",
  },
  {
    id: 5,
    nome: "Cuphead",
    genero: "Plataforma",
    preco: "R$ 59,90",
    imagem: cupHead,
    descricao:
      "Enfrente chefes criativos em fases desenhadas à mão, com visual clássico e muita precisão.",
  },
  {
    id: 6,
    nome: "Hogwarts Legacy",
    genero: "RPG",
    preco: "R$ 229,90",
    imagem: harry,
    descricao:
      "Viva sua própria história no universo mágico, explore Hogwarts, aprenda feitiços e enfrente mistérios perigosos.",
  },
  {
    id: 7,
    nome: "Elden Ring",
    genero: "RPG",
    preco: "R$ 249,90",
    imagem: eldenRing,
    descricao:
      "Explore as Terras Intermédias em uma aventura desafiadora cheia de chefes, magia e liberdade.",
  },
  {
    id: 8,
    nome: "Cyberpunk 2077",
    genero: "RPG",
    preco: "R$ 199,90",
    imagem: cyberPunk,
    descricao:
      "Viva em Night City, uma metrópole futurista marcada por tecnologia, escolhas difíceis e ação intensa.",
  },
  {
    id: 9,
    nome: "Red Dead Redemption 2",
    genero: "Aventura",
    preco: "R$ 299,90",
    imagem: redDead,
    descricao:
      "Entre em uma jornada cinematográfica pelo velho oeste, com exploração, drama e mundo aberto.",
  },
  {
    id: 10,
    nome: "Stardew Valley",
    genero: "Simulação",
    preco: "R$ 49,90",
    imagem: stardewValley,
    descricao:
      "Cuide da sua fazenda, faça amizades, pesque, explore cavernas e transforme uma vila inteira.",
  },
  {
    id: 11,
    nome: "Celeste",
    genero: "Plataforma",
    preco: "R$ 36,99",
    imagem: celeste,
    descricao:
      "Suba uma montanha cheia de desafios precisos enquanto acompanha uma história sensível.",
  },
  {
    id: 12,
    nome: "Hollow Knight",
    genero: "Metroidvania",
    preco: "R$ 46,99",
    imagem: hollowKnight,
    descricao:
      "Explore Hallownest, enfrente criaturas perigosas e descubra segredos em um mundo sombrio.",
  },
  {
    id: 13,
    nome: "The Witcher 3: Wild Hunt",
    genero: "RPG",
    preco: "R$ 129,90",
    imagem: theWitcher,
    posicaoImagem: "center 35%",
    descricao:
      "Acompanhe Geralt em contratos, escolhas difíceis e uma grande aventura em mundo aberto.",
  },
  {
    id: 14,
    nome: "Journey",
    genero: "Aventura",
    preco: "R$ 49,99",
    imagem: journey,
    descricao:
      "Atravesse desertos e ruínas em uma experiência visual emocionante sobre descoberta e conexão.",
  },
  {
    id: 15,
    nome: "Terraria",
    genero: "Sandbox",
    preco: "R$ 32,99",
    imagem: terraria,
    descricao:
      "Cave, construa, lute e explore mundos cheios de recursos, inimigos e possibilidades criativas.",
  },
  {
    id: 16,
    nome: "Dark Souls III",
    genero: "RPG",
    preco: "R$ 159,90",
    imagem: darkSouls,
    descricao:
      "Encare chefes implacáveis, explore reinos decadentes e supere combates difíceis.",
  },
  {
    id: 17,
    nome: "Resident Evil 4",
    genero: "Terror",
    preco: "R$ 169,90",
    imagem: residentEvil,
    descricao:
      "Sobreviva a uma missão assustadora com ação, suspense e inimigos marcantes.",
  },
  {
    id: 18,
    nome: "Gris",
    genero: "Indie",
    preco: "R$ 39,99",
    imagem: gris,
    descricao:
      "Viva uma jornada artística e delicada, com plataformas leves e um visual cheio de emoção.",
  },
];

const produtosPorPagina = 6;
const totalPaginas = Math.ceil(jogos.length / produtosPorPagina);

function Produtos() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const inicio = (paginaAtual - 1) * produtosPorPagina;
  const jogosDaPagina = jogos.slice(inicio, inicio + produtosPorPagina);

  const mudarPagina = (pagina) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100 px-6 py-10">
        <section className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Produtos
            </h1>

            <p className="mx-auto max-w-2xl leading-7 text-slate-600">
              Confira nossa seleção de jogos com diferentes estilos, aventuras e
              experiências para todos os tipos de jogadores.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jogosDaPagina.map((jogo) => (
              <Card key={jogo.id} jogo={jogo} />
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => mudarPagina(paginaAtual - 1)}
              disabled={paginaAtual === 1}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-500 transition hover:border-cyan-700 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Anterior
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => index + 1).map(
              (pagina) => (
                <button
                  key={pagina}
                  type="button"
                  onClick={() => mudarPagina(pagina)}
                  className={`rounded-lg px-4 py-2 font-bold transition ${
                    paginaAtual === pagina
                      ? "bg-cyan-700 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-700 hover:text-cyan-700"
                  }`}
                >
                  {pagina}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => mudarPagina(paginaAtual + 1)}
              disabled={paginaAtual === totalPaginas}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-600 transition hover:border-cyan-700 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Produtos;
