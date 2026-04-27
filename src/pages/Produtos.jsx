import Header from "../components/Header";
import Card from "../components/Card";
import thelast from "../assets/thelastofus.jpeg";
import got from "../assets/got.jpeg"
import spider from "../assets/spider.jpeg"
import minecraft from "../assets/minecraft.jpeg"
import fifa from "../assets/fifa.jpeg"
import harry from "../assets/harry.jpeg"
function Produtos() {
  const jogos = [
    {
      id: 1,
      nome: "The Last of Us Part II",
      genero: "Ação / Aventura",
      preco: "R$ 199,90",
      imagem: thelast,
      descricao:
        "Um jogo emocionante de ação e sobrevivência em um mundo pós-apocalíptico, com narrativa intensa e personagens marcantes."
    },
    {
      id: 2,
      nome: "God of War Ragnarök",
      genero: "Ação / Mitologia",
      preco: "R$ 249,90",
      imagem: got,
      descricao:
        "Acompanhe Kratos e Atreus em uma jornada épica pela mitologia nórdica, enfrentando deuses, monstros e grandes desafios."
    },
    {
      id: 3,
      nome: "Spider-Man 2",
      genero: "Ação / Mundo Aberto",
      preco: "R$ 299,90",
      imagem: spider,
      descricao:
        "Explore a cidade, enfrente vilões e viva uma aventura cheia de ação controlando os heróis aracnídeos mais famosos."
    },
    {
      id: 4,
      nome: "Minecraft",
      genero: "Criativo / Sobrevivência",
      preco: "R$ 99,90",
      imagem: minecraft,
      descricao:
        "Construa, explore e sobreviva em um mundo aberto feito de blocos, onde a criatividade do jogador é o principal limite."
    },
    {
      id: 5,
      nome: "FIFA 25",
      genero: "Esporte / Futebol",
      preco: "R$ 279,90",
      imagem: fifa,
      descricao:
        "Entre em campo com os maiores clubes e jogadores do mundo em partidas realistas, modos online e campeonatos emocionantes."
    },
    {
      id: 6,
      nome: "Hogwarts Legacy",
      genero: "RPG / Fantasia",
      preco: "R$ 229,90",
      imagem: harry,
      descricao:
        "Viva sua própria história no universo mágico, explore Hogwarts, aprenda feitiços e enfrente mistérios perigosos."
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100 px-6 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">

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
              <Card key={jogo.id} jogo={jogo} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Produtos;
