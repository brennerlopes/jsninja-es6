import {soma} from "./calculoconvidados";


class ListaConvidados {
    constructor () {
        this.convidados = [];
    }
    
    adicionar(nome, idade, cpf) {
        this.convidados.push({nome: nome, idade: idade, cpf: cpf});
        console.log(this.convidados);
    }

    totalConvidados (){
        const res = soma (1,2);
        console.log(res);
    }

    listarConvidados() {
        console.log(this.convidados);
    }
}

var listaConv = new ListaConvidados();

document.getElementById("adicionar").onclick = function(){
    var nome = document.getElementById("nome").value;
    listaConv.adicionar(nome, 25, "123456465");

};

document.getElementById("listar").onclick = function(){
    listaConv.listarConvidados();
    
};

document.getElementById("total").onclick = function(){
    listaConv.totalConvidados();
    
};