class CadastroLegoFrase{
  constructor(frase_ingles, frase_portugues) {
    this.frase_ingles = altura;
    this.frase_portugues = frase_portugues;
    this.frase_indexada = indexar_frase()
    this.indices_embaralhados = embaralhar_frase()
    this.user_indice = {}
  }
  indexar_frase(){
    list_frase = this.frase_portugues.split(" ")
    frase_indexada = {}
    for(indice in list_frase){
      frase_indexada[indice] = list_frase[indice]
    }
    return frase_indexada
  }
  embaralhar_frase(){
    lista_indices = Object.keys(this.frase_indexada)
    lista_indices.sort(() => Math.random() - 0.5);
    return lista_indices
  }
  get frase_embaralhada_tockenizada(){
    indices = this.indices_embaralhados
    frase_indexada = {}
    for(indice in indices){
      frase_indexada[indice] = this.frase_indexada[indice]
    }
    return frase_indexada
  }
  adicionar_palavra(indice){
    palavra = indices_embaralhados[indice]
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