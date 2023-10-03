let nomeHeroi = "Goku";
let xpHeroi = 5000;
let nivelHeroi;

// Descomente as linhas abaixo para permitir que o usuário digite o nome do herói
/*
const readline = require('readline');
const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
 });

 rl.question("Digite o nome do herói: ", function(nome) {
 nomeHeroi = nome;*/

  if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else {
    nivelHeroi = "Radiante";
  }

  console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi}.`);

 /*  rl.close();
 });*/

//neste campo comentado a baixo foi criado um jogo com perguntas para que o usuario responda e conforme responder subira o nivel do personagem, ao errar o programa executa o informe do nivel que ele parou.
/*
const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nivel = 'Ferro';
let nomePersonagem = '';

// Função para exibir a próxima pergunta e atualizar o nível
function proximaPergunta(pergunta, respostasCorretas, proximoNivel) {
  rl.question(pergunta, function(resposta) {
    const respostaCorreta = respostasCorretas.find(opcao => opcao.toLowerCase() === resposta.toLowerCase());
    if (respostaCorreta) {
      console.log('Resposta correta! Subiu para o próximo nível.\n');
      nivel = proximoNivel;
      if (proximoNivel !== 'Radiante') {
        proximaPergunta(...perguntas[proximoNivel]);
      } else {
        console.log(`Parabéns, ${nomePersonagem}! Você alcançou o nível máximo de ${nivel}!\n`);
        rl.close();
      }
    } else {
      console.log(`Resposta incorreta! Chegou ao nível de ${nivel}.\n`);
      rl.close();
    }
  });
}

// Solicita ao usuário o nome do personagem
rl.question('Informe o nome do seu personagem: ', function(nome) {
  nomePersonagem = nome;
  console.log(`Bem-vindo, ${nomePersonagem}! Vamos começar o jogo!\n`);
  proximaPergunta(...perguntas[nivel]);
});

// Perguntas e respostas
const perguntas = {
  Ferro: [
    'Qual é o nome comum para uma arma curta e afiada frequentemente usada por ladrões em jogos de RPG?\nResposta: ',
    ['Adaga'],
    'Bronze'
  ],
  Bronze: [
    'Que tipo de item é comumente usado para aumentar a força de ataque de um personagem em jogos de RPG?\nResposta: ',
    ['Espada' , 'arma física'],
    'Prata'
  ],
  Prata: [
    'Qual é o equipamento usado para proteger as mãos de um personagem em jogos de RPG?\nResposta: ',
    ['Luvas', 'Manoplas'],
    'Ouro'
  ],
  Ouro: [
    'Que tipo de item é usado para restaurar pontos de vida de um personagem em jogos de RPG?\nResposta: ',
    ['Poções de cura', 'Itens de cura'],
    'Platina'
  ],
  Platina: [
    'Qual é o nome dado a um item usado para aumentar temporariamente a defesa de um personagem em jogos de RPG?\nResposta: ',
    ['Escudo'],
    'Ascendente'
  ],
  Ascendente: [
    'Que tipo de equipamento é usado para aumentar a velocidade de movimento de um personagem em jogos de RPG?\nResposta: ',
    ['Botas', 'Calçados'],
    'Imortal'
  ],
  Imortal: [
    'Qual é o nome comum para uma arma de longo alcance em jogos de RPG?\nResposta: ',
    ['Arco e Flecha' , 'balestra'],
    'Radiante'
  ],
  Radiante: [
    'Parabéns, ${nomePersonagem}! Você alcançou o nível máximo de Radiante!\n',
    '',
    ''
  ]
};

*/