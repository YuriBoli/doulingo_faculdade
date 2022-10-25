class SelecionaRespostaFrase{
  constructor(frase, questoes) {
    this.frase = frase;
    this.disposicao_questoes = [];
    this.trecho_valido = "";
    this.trecho_user = undefined;
    this.separar_questoes(questoes);
  }
  separar_questoes(questoes){
    for(var indice in questoes){
      var questao = questoes[indice]
      this.disposicao_questoes.push({
                "questao": questao[0],
                "trecho_user": questao[1],
                "background_color": "#FFFFFF",}
        );
      if (questao[1]){
        this.trecho_valido = questao[0]
      };
      }
    }
  verificar_trechos(){
    var trecho = this.trecho_user
    if (this.trecho_user == true){
      return true
    } else {
      return false
    }
  }
}