class lego_frase{
  constructor(frase_ingles, frase_portugues) {
    this.frase_ingles = frase_ingles;
    this.frase_portugues = frase_portugues;
    this.frase_indexada = this.indexar_frase()
    this.indices_embaralhados = this.embaralhar_frase()
    this.user_indice = {}
  }
  indexar_frase(){
    var list_frase = this.frase_portugues.split(" ");
    var frase_indexada = {};
    for(var indice in list_frase){
      frase_indexada[indice] = list_frase[indice]
    }
    return frase_indexada
  }
  embaralhar_frase(){
    var lista_indices = Object.keys(this.frase_indexada);
    lista_indices.sort(() => Math.random() - 0.5);
    return lista_indices
  }
  get frase_embaralhada_tockenizada(){
    var indices = this.indices_embaralhados
    var frase_indexada = {}
    for(var indice in indices){
      frase_indexada[indice] = this.frase_indexada[indice]
    }
    return frase_indexada
  }
  adicionar_palavra(indice){
    var palavra = indices_embaralhados[indice]
    this.user_indice[indice] = palavra
  }
  verificar_frases(){
    if (this.user_indice.length != this.indices_embaralhados.length){
      console.log("ainda resta palavras para serem adicionadas")
      return false
    }
    if (this.user_indice == this.frase_indexada){
      console.log("palavra OK :)")
      return true
    } else {
      console.log("palavra Errada :(")
      return false
    }
  }
}