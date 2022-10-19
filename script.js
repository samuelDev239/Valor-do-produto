class Items {
    constructor (nome, preco){
        this.nome = nome
        this.preco = preco
      
    }
    
}
let item1 = new Items("micro-ondas", "R$ 300,00" )
let item2 = new Items("cafeteira", "R$ 240,00" )
let item3 = new Items("liquidificador", "R$ 90,00" )
let item4 = new Items("aspirador de pó", "R$ 150,00" )
let item5 = new Items("ventilador", "R$ 120,00" )

let produtos = [item1, item2, item3, item4, item5]



function exibir(){
    input = document.getElementById('caixa').value
     if(input == item1.nome){
        text = item1.preco

    }
    else if(input == item2.nome){
        text = item2.preco

    }
    else if(input == item3.nome){
        text =item3.preco

    }
    else if(input == item4.nome){
        text = item4.preco

    }
    else if(input == item5.nome){
        text = item5.preco

    }
    else {
        text = "Digite um nome que corresponda a um produto entre os disponiveis"
    }
    document.getElementById('resultado').innerText= text 
}