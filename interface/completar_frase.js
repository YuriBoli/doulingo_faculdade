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
  },
  methods: {
    adicionar_trecho: function(trecho){
      var index_trecho = this.frase.trechos_user.indexOf(trecho);
      if (index_trecho >= 0){
        trecho["background_color"] = "#FFFFFF";
        this.frase.trechos_user.splice(index_trecho, 1)
      } else {
        trecho["background_color"] = "#6bfa9d";
        this.frase.adicionar_trecho_usuario(trecho);
      }
      this.$forceUpdate();
    },
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
    checar_resultado: function(){
      resultado_positiva = this.frase.verificar_trechos()
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
        this.carregar_trechos()
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
      var frase = frase_object["frase_ingles"]
      var trechos = frase_object["trechos_escondidos"]
      return new CompletaFrase(frase, trechos)
    },
    carregar_trechos: function(){
      var trechos = []
      for (var i in this.frases_json["data"]){
        if (i == this.indice_frase_atual){
          continue
        }
        var frase_dado = this.frases_json["data"][i];
        for (var trecho in frase_dado["trechos_escondidos"]){
          trecho = frase_dado["trechos_escondidos"][trecho];
          trechos.push(trecho)
        }
      }
      trechos = shuffle(trechos);
      this.frase.adicionar_disposicao_trechos(trechos)

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
appe.carregar_trechos()
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}