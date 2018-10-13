
//funcao que faz a logica recebendo a lista a pagina atual e limite de itens
function listItems(items, paginaAtual, limitItems) {

  //lista de resultados 
  let result = [];

  //retorna o total de pagina disponivel
  let totalNaPagina = Math.ceil(items.length / limitItems)

  //contador recebe pagina e mostra qual pagina ele deve retorna da lista 
  let count = (paginaAtual * limitItems) - limitItems

  //limite do laço de repetiçao
  let delimiter = count + limitItems

  //verifica se pagina atual e menor que total pagina 
  if (paginaAtual <= totalNaPagina) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i]);
      }
      count++;
    }
    return result;
  }
};

//lista de dados 
let nomes = [
  { id: 1, nome: 'Junior', idade: 32 }, { id: 2, nome: 'Marcos', idade: 30 },
  { id: 3, nome: 'Carla', idade: 22 }, { id: 4, nome: 'Geraldo', idade: 25 },
  { id: 5, nome: 'Lucia', idade: 20 }, { id: 6, nome: 'Joao', idade: 42 },
  { id: 7, nome: 'Maria', idade: 20 }, { id: 8, nome: 'Catia', idade: 22 },
  { id: 9, nome: 'Claudio', idade: 20 }, { id: 10, nome: 'Joana', idade: 12 },
  { id: 11, nome: 'Geronimo', idade: 20 }, { id: 12, nome: 'Gildesia', idade: 33 }
]

//chamanda a funcao Paginacao passando a lista a pagina atual e quantos items pode ter nela
let resultadosPaginacao = listItems(nomes, 1, 8);

//trazendo o resultado da paginaçao
console.log(resultadosPaginacao)



