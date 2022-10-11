class Verdadeiro{
  constructor(eng_list, user_like_list, user_show) {
    this.eng_list = eng_list;
    this.user_like_list = user_like_list;
    this.user_show = user_show;
    this.user_list = [];
  }

  verificar_lista(){
    return this.user_list.toString() == this.user_like_list.toString()
  }

  adicionar_trecho_usuario(trecho){
    this.user_list.push(trecho)
  }

}