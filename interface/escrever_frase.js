var appe = new Vue({
  el: '#app',
  data: {
    message: '',
    acertos: 0,
    erros: 0,
    frases_json: json_data,
    indice_frase_atual: 0,
    porcentagem: 0,
    total: 0,
    erro_div: "none",
    acerto_div: "none",
    check_botao: "block",
    div_results: "none",
    frase: "",
  },
  methods: {
    chamar_resultados: function(){
      if (this.erros + this.acertos >= this.total){
        this.div_results = "block";
        this.erro_div = "none";
        this.acerto_div = "none";
        this.actual_div = "none";
        this.check_botao = "none";
        this.$forceUpdate();
      }
    },
    checar_resultado: function(){
      this.frase.user_frase = this.message
      resultado_positiva = this.frase.verificar_validade_frase()
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
      this.message = "";
      this.chamar_resultados();
      this.$forceUpdate();
    },
    carregar_frase: function(){
      this.total = this.frases_json["data"].length
      var frase_object = this.frases_json["data"][this.indice_frase_atual]
      var frase = frase_object["frase_ingles"]
      var frase_resposta = frase_object["frase_resposta"]
      return new EscreverFrase(frase, frase_resposta)
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