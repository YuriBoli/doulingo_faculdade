class CompletaFrase{
  constructor(frase, trechos) {
    this.frase = frase;
    this.trechos_escondidos = trechos;
    this.frase_escondida = this.encontrar_trechos()
    this.disposicao_trechos = []
    this.trechos_user = []
  }
  encontrar_trechos(){
    var frase_indexada = this.frase.split(" ");
    var frase_subsituir = this.frase;
    var trechos = {};
    for (var i in this.trechos_escondidos){
      var trecho_dado = this.trechos_escondidos[i];
      var frase_subsituir = this._substituir_trecho(trecho_dado["trecho"], trecho_dado["posicao"], frase_subsituir);
    }
    return frase_subsituir
  }
  _substituir_trecho = function(trecho, posicao, frase_subsituir){
    var pv_substituicao = "Substituir 4qu1";
    var substituidos = 0;
    posicao -= 1
    while (posicao <= substituidos){
      if (substituidos == posicao){
        frase_subsituir = frase_subsituir.replace(trecho, "___");
      } else {
        frase_subsituir = frase_subsituir.replace(trecho, pv_substituicao);
      }
      posicao += 1
    }
    return frase_subsituir
  }
  adicionar_disposicao_trechos(trechos){
    for (var i in trechos){
      var trecho = trechos[i];
      trecho["essa_frase"] = false;
      trecho["background_color"] = "#FFFFFF";
      this.disposicao_trechos.push(trecho);
      if (this.disposicao_trechos.length >= 5 - this.trechos_escondidos.length - 1){
        break;
      }
    }

    for (var i in this.trechos_escondidos){
      var trecho = this.trechos_escondidos[i];
      trecho["essa_frase"] = true;
      trecho["background_color"] = "#FFFFFF";
      this.disposicao_trechos.push(trecho);
    }
    //this.disposicao_trechos = shuffle(this.disposicao_trechos)
  }
  adicionar_trecho_usuario(trecho){
    this.trechos_user.push(trecho)
  }
  verificar_trechos(){
    var trechos_raw = []
    for (var i in this.trechos_escondidos){
      var trecho = this.trechos_escondidos[i]
      trechos_raw.push(trecho["trecho"])
    }
    var trechos_user_raw = []
    for (var i in this.trechos_user){
      var trecho = this.trechos_user[i]
      trechos_user_raw.push(trecho["trecho"])
    }
    if (String(trechos_user_raw.sort()) == String(trechos_raw.sort())){
      console.log("resposta certa")
      return true
    } else {
      console.log("resposta errada")
      return false
    }
  }
}