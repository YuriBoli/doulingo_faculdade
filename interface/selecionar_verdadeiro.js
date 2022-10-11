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
    frase: new Verdadeiro([],[],[]),
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
      t_frase = trecho["frase_frase"]
      var index_trecho = this.frase.user_list.indexOf(t_frase);
      if (index_trecho >= 0){
        trecho["background_color"] = "#FFFFFF";
        this.frase.user_list.splice(index_trecho, 1)
      } else {
        trecho["background_color"] = "#6bfa9d";
        this.frase.adicionar_trecho_usuario(t_frase);
      }
      this.$forceUpdate();
    },
    remover_trecho: function(){
      console.log("erros: acertos:")
    },
    checar_resultado: function(){
      resultado_positiva = this.frase.verificar_lista()
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
      var frase = frase_object["eng_list"]
      var trechos = frase_object["user_like_list"]
      return new Verdadeiro(frase, trechos, this.carregar_trechos())
    },
    carregar_trechos: function(){
      var trechos = []
      for (var i in this.frases_json["data"]){
        if (i != this.indice_frase_atual){
          continue
        }
        var frase_dado = this.frases_json["data"][i];
        for (var trecho in frase_dado["user_like_list"]){
          trecho = frase_dado["user_like_list"][trecho];
          trecho_processecado = {
            "frase_frase": trecho,
            "trecho": "#FFFFFF",
          }
          trechos.push(trecho_processecado)
        }
      }
      trechos = shuffle(trechos);
      return trechos
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