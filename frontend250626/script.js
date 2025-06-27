alert('Jogo de Cálculo de Média!');

let quantidade = parseInt(prompt('Quantos números você deseja digitar para calcular a média?'));

if(isNaN(quantidade) || quantidade < 1){
  alert('Quantidade inválida. Atualize a página e tente novamente com um número maior que zero.');
}else{
  let soma = 0;
  let contador = 0;
  let numero;

  while(contador < quantidade){
    numero = parseFloat(prompt(`Digite o número ${contador + 1} de ${quantidade}:`));
    if(!isNaN(numero)){
      soma += numero;
      contador++;
    }else{
      alert('Valor inválido. Por favor, digite um número.');
    }
  }

  let media = soma / quantidade;
  console.log(`Soma: ${soma}, Quantidade: ${quantidade}`);

  alert(`A média dos ${quantidade} números digitados é: ${media.toFixed(2)}`);
}
