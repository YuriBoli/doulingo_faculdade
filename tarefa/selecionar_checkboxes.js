class Checkboxes{
  constructor(frase, voz_frase) {
    this.frase = frase;
    this.voz_frase = voz_frase;
    this.voz_user = null;
  }

  verificar_voz(){
    return this.voz_user == this.voz_frase
  }

  voz_correta(){
    if (this.voz_frase){
      return "Voz Ativa"
    } else {
      return "Voz Passiva"
    }
  }
}