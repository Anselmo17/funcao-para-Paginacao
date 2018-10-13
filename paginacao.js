//lista de dados 
let list = [
  { id: 1, carro: 'fusca', placa: 'fph-2344' }, { id: 2, carro: 'celta', placa: 'xxd-3055' },
  { id: 3, carro: 'opalla', placa: 'jkl-3366' }, { id: 4, carro: 'palio', placa: 'rtt-8825' },
  { id: 5, carro: 'omega', placa: 'zxc-9088' }, { id: 6, carro: 'punto', placa: 'ert-0025' },
  { id: 7, carro: 'gol', placa: 'cvv-6745' }, { id: 8, carro: 'verona', placa: 'wdf-9022' },
  { id: 9, carro: 'perua', placa: 'dff-9000' }, { id: 10, carro: 'logan', placa: 'yyu-6788' },
  { id: 11, carro: 'fioriono', placa: 'azz-1099' }, { id: 12, carro: 'fox', placa: 'uii-8899' }
]


//chamando a funcao para paginar a lista , a pagina atual e total de itens na pagina
const resp = paginacao(list, 0, 5)
console.log(resp)

//funcao para pagina sua lista 
function paginacao(list, paginaAtual, limitItens) {
  let listPagina = [];
  let totalPagina = Math.ceil(list.length / limitItens);
  let count = (paginaAtual * limitItens) / limitItens;
  let delimiter = count + limitItens

  //validacao das paginas 
  if (paginaAtual <= totalPagina) {
    for (let i = count; i < delimiter; i++) {
      if (list[i] != null) {
        listPagina.push(list[i]);
      }
    }
    count++;
  }
  return listPagina;
}

