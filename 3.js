//3

const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(numero => numero * 2);

console.log(`Números Dobrados: ${dobrados}`);

const nomes = ["ana", "bruno", "carla"];
const maiusculos = nomes.map(texto => texto.toUpperCase())

console.log(`Nomes em letra maiúscula: ${maiusculos}`);

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const soNomes = produtos.map(produto => produto.nome)

console.log(`Nomes dos produtos: ${soNomes}`);