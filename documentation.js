//OBJECT SHORT SYNTAX

    // const nome = 'Bruno';
    // const idade = 23;

    // const usuario = {
    //     nome,
    //     idade,
    //     empresa: 'Teste',
    // };

    // console.log(usuario);


//TEMPLATE LITERALS

    // const nome = 'Bruno';
    // const idade = 23;

    // console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


//------------------------------------------------------------------------------------------------------------------------------------------

//OPERADORES REST E SPREAD

    //REST

        // REST COM OBJETO
            // const usuario = {
            //     nome: 'Bruno',
            //     idade: '23',
            //     empresa: 'Teste'
            // };

            // const { nome, ...resto } = usuario;

            // console.log(nome);
            // console.log(resto);

        // REST COM OBJETO

            // const arr = [1,2,3,4];

            // const [ a, b, ...c ] = arr;

            // console.log(a);
            // console.log(b);
            // console.log(c);

        // REST COM PARAMETROS NA FUNÇÃO
            // function soma(...params){
            //     return params.reduce((total, next) => total + next);
            // }

            // console.log(soma(1,2,3));

//SPREAD

    //SPREAD COM ARRAY
        // const arr1 = [1,2,3];
        // const arr2 = [1,2,3];

        // const arr3 = [...arr1, ...arr2];

    //SPREAD COM OBJETOS
        // const usuario = {
        //     nome: 'Bruno',
        //     idade: 23,
        //     empresa: 'Teste'
        // }

        // const usuario2 = { ...usuario, nome: 'Teste Nome' };

        // console.log(usuario2);

//------------------------------------------------------------------------------------------------------------------------------------------

//DESESTRUTURAÇÃO

// const usuario = {
//     nome: 'Bruno',
//     idade: 23,
//     endereco: {
//         cidade: 'São Bernando do Campo',
//         estado: 'São Paulo'
//     },
// };

// const { nome, idade, endereco: { cidade, estado } } = usuario;

// function mostraNome({nome, idade}){
//     console.log(nome);
// }

// console.log(nome)
// console.log(idade)
// console.log(cidade)
// console.log(estado)

//------------------------------------------------------------------------------------------------------------------------------------------

//VALORES PADRÃO

//const soma = (a = 2, b = 3) => a + b;

//------------------------------------------------------------------------------------------------------------------------------------------

//MANIPULANDO ARRAYS

// const arr = [1,2,3,4,5,6]

// const newArr = arr.map((item, index) => item + index);

// const sum = arr.reduce((total, next) => total + next);

// const filter = arr.filter(item => item % 2 === 0);

// const find = arr.find(item => item === 4);

// console.log(find);

//-------------------------------------------------------------------------------------------------------------------------------------------

//CRIANDO CLASSES COM EC6
// class List{
//     constructor(){
//         this.data = [];
//     }
    
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor(){
//         super();
//         this.usuario = 'Bruno';
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();