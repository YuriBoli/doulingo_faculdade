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
    passiva: false,
    ativa: false,
    voz_correta: "",
    erro_div: "none",
    acerto_div: "none",
    check_botao: "block",
    frase: "",
    div_results: "none",
    checkbox_verdadeira: false,
    checkbox_falsa: false,
    vozes: {
      "Voz Passiva": "Voz Passiva",
      "Voz Ativa": "Voz Ativa"
    }
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
    checkboxzar: function(voz){
      console.log(voz)
      this.passiva = false
      this.ativa = false
      if (voz =="ativa"){
        this.frase.voz_user = true
        this.ativa = true
      }
      if (voz == "passiva"){
        this.frase.voz_user = false
        this.passiva = true
      }
    },
    checar_resultado: function(){
      resultado_positiva = this.frase.verificar_voz()
      if (resultado_positiva){
        this.acertos += 1;
        this.acerto_div = "block";
      } else {
        this.erros += 1;
        this.erro_div = "block";
      }
      this.voz_correta = this.vozes[this.frase.voz_correta()]
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
      this.passiva = false;
      this.ativa = false;
      this.$forceUpdate();
    },
    carregar_frase: function(){
      this.total = this.frases_json["data"].length
      var frase_object = this.frases_json["data"][this.indice_frase_atual]
      var frase = frase_object["frase"]
      var frase_resposta = frase_object["vos_ativa"]
      return new Checkboxes(frase, frase_resposta)
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