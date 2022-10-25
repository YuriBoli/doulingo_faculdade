var appe = new Vue({
  el: '#app',
  data: {
    message: 'Olá Vue!',
    acertos: 0,
    erros: 0,
    frases_json: json_data,
    indice_frase_atual: 0,
    porcentagem: 0,
    total: 0,
    erro_div: "none",
    acerto_div: "none",
    check_botao: "block",
    frase: "",
    div_results: "none",
    frase: new SelecionaRespostaFrase("",[]),
  },
  methods: {
    chamar_resultados: function(){
      if (this.erros + this.acertos == this.total){
        this.div_results = "block";
        this.erro_div = "none";
        this.acerto_div = "none";
        this.actual_div = "none";
        this.check_botao = "none";
        console.log(this.check_botao)
        this.$forceUpdate();
      }
    },
    adicionar_trecho: function(trecho){
      var t_frase = trecho["questao"]
      this.frase.trecho_user = trecho["trecho_user"]
      for(var indice in this.frase.disposicao_questoes){
        var questao = this.frase.disposicao_questoes[indice]
        if (t_frase == questao["questao"]){
           this.frase.disposicao_questoes[indice]["background_color"] = "#6bfa9d";
        } else {
           this.frase.disposicao_questoes[indice]["background_color"] = "#FFFFFF";
        }
      }
      this.$forceUpdate();
    },
    remover_trecho: function(){
      console.log("erros: acertos:")
    },
    checar_resultado: function(){
      var resultado_positiva = this.frase.verificar_trechos()
      if (resultado_positiva){
        this.acertos += 1;
        this.acerto_div = "block";
      } else {
        this.erros += 1;
        this.erro_div = "block";
      }
      this.check_botao = "none";
      this.$forceUpdate();
      //this.ir_proxima_frase()
    },
    ir_proxima_frase: function(){
      if(this.frases_json["data"].length - 2 >= this.indice_frase_atual){
        this.indice_frase_atual += 1
        this.frase = this.carregar_frase()
        this.update_porcentagem()
      } else {
        this.update_porcentagem(100)
      }
      this.check_botao = "block";
      this.erro_div = "none";
      this.acerto_div = "none";
      this.chamar_resultados();
      this.$forceUpdate();
    },
    carregar_frase: function(){
      this.total = this.frases_json["data"].length
      var frase_object = this.frases_json["data"][this.indice_frase_atual]
      var frase = frase_object["frase"]
      var trechos = frase_object["options"]
      return new SelecionaRespostaFrase(frase, shuffle(trechos))
    },
    update_porcentagem: function(porcentagem = undefined){
      if(porcentagem){
        this.porcentagem = 100
      } else {
        this.porcentagem = (this.indice_frase_atual / this.frases_json["data"].length) * 100
      }
      this.porcentagem = this.porcentagem.toFixed()
      this.$forceUpdate();
    },
  }
})
appe.frase = appe.carregar_frase()
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}