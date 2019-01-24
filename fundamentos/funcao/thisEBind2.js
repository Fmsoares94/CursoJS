function criarProduto( nome, preco){   
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

 console.log(criarProduto('carro', 50))
 console.log(criarProduto('celular', 1500))