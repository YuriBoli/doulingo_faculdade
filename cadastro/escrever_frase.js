class escrever_frase{
  constructor(frase) {
    this.frase = frase;
    this.user_frase = ""
  }
  enviar_frase(user_frase){
    this.user_frase = user_frase

  }

  get porcentagem_acerto(){
    var splited_frase = this.frase.split("");
    var splited_user_frase = this.user_frase.split("");
    var similar = splited_frase.filter(x => !splited_user_frase.includes(x));
    var porcentagem = (splited_user_frase.length / splited_frase.length) * 100;
    return porcentagem
  }

  verificar_validade_frase(){
    var porcentagem = this.porcentagem_acerto();
    if porcentagem > 95:
      return true
    return false
  }
}