//gerar valores aleatorios e genericos
function gerarAletaroio(min, max){
    return Math.random() * (min - min) + min;
}

//Gerando uma idade entre 18 e 60 anos aleatoria
let idade = Math.floor(geraraleatorio(18, 60));
console.log(`O paciente tem ${idade} anos. `);

//Gerando uma massa corporal aleatoria 
let peso = Math.floor(gerarAletaroio(30, 300));
console.log(`O paciente possui massa coporal igual a ${peso} kg`);

//Gerando uma altura aleatoria entre 1,5 a 2,00 aleatoria
let altura = gerarAletaroio(1.50, 2.00)
console.log (`O paciente possui ${altura.toFixed(2)}m de altura`)

//calculadora de IMC
function calculaIMC(altura, peso){
    return peso / (altura * altura);
}

let imc = calculaIMC(altura, peso);
console.log (`O IMC do paciente é ${imc.toFixed(2)}.` )

//classificação IMC
function classificaIMC(imc){
    if (imc < 18.5){
        return 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9 ) {
        return 'Normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 39.9) {
        return 'Obesidade';
    } else {
        return 'Obesidade Grave';
    }
}
let classificacao = classificaIMC(imc);

//exibir resultados no console
console.log (`${classificacao}!\n O paciente possui ${idade} anos. \nTem ${altura.toFixed(2)}m de altura.\nTem massa corporal igual à ${peso} Kg. \n Seu IMC é de ${imc.toFixed(2)}`);