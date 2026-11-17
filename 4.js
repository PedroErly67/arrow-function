//4

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(n => n % 2 === 0)

console.log(`Os números pares são: ${pares}`)

const notas = [5, 8, 6.5, 9, 7];

const notasAltas = notas.filter(n => n >= 7);

console.log(`As notas acima da média são: ${notasAltas}`)

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const PrecoAbaixo = produtos.filter(n => n.preco <= 50);

const soNomes = PrecoAbaixo.map(produto => produto.nome)

console.log(`Os produtos com preço abaixo de R$50,00 são o ${soNomes[0]} e a ${soNomes[1]}`)
