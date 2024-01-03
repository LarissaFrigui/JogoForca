var Animais = ['tigre','leao','macaco','elefante','jacare','lagarto','pelicano','gorila','iguana','girafa','morcego'];
var Frutas = ['morango', 'banana', 'lichia','carambola','caqui','pessego','limao','laranja','jabuticaba','pomelo','framboesa','cereja'];
var Paises = ['brasil','angola','canada','argentina','espanha','portugal','coreia','japao','tailandia','egito','holanda','alemanha', 'peru','chile'];
var Categoria;
var CategoriaNome;
var Novamente = 1;
var Simbolo = '*';
let Letra;

while (Novamente == 1) {
  Categoria = prompt('*****JOGO FORCA*****\nEscolha a categoria de palavra para iniciar o jogo\n1 - Animais\n2 - Frutas\n3 - Países');
  if (Categoria >= 0 && Categoria <= 2) {
      if (Categoria == 0){
          Categoria = Animais;
          CategoriaNome = 'um ANIMAL';
      } else if (Categoria == 1){
          Categoria = Frutas;
          CategoriaNome = 'uma FRUTA';
      } else if (Categoria == 2){
          Categoria = Paises; 
          CategoriaNome = 'um PAÍS';
      }
 
   var Tamanho = Categoria.length;
   alert('Vou pensar em ' + CategoriaNome);
   var Posicao = Math.floor(Math.random() * Tamanho);
   var Palavra = Categoria[Posicao];
   var NumeroDeLetras = Palavra.length;
   let Codigo = Simbolo.repeat(NumeroDeLetras).split('');
   alert('A palavra escolhida possui ' + NumeroDeLetras + ' letras. É hora de adivinhar!\n' + 'Palavra: ' + Codigo.join(''));
   alert('AVISO! Você só poderá errar 4 letras se não o jogo acaba. Será que você consegue?');

   var cont = 0;
   var tentativas = 0;
   let LetrasErradas = [];

   while (cont != NumeroDeLetras && tentativas<=4) {
       Letra = prompt('Você possui um total de ' + tentativas + '/4 erros.\nLetras erradas: ' + LetrasErradas + '\n\nPalavra: ' + Codigo.join('') + '\n\nEscolha uma letra').toLowerCase();
       var teste = cont;
       for (var i = 0; i < NumeroDeLetras; i++) {
           if (Letra === Palavra[i]) {
               Codigo[i] = Palavra[i];
               cont++;
            }
        }
        if (teste == cont){
          tentativas++;
          LetrasErradas.push(Letra);
        }
    }
  
    if (tentativas > 4){
      Novamente = prompt ('Não foi dessa vez...Gostaria de tentar novamente?\n1 - Sim\n2 - Não');
    }
    else{
      Novamente = prompt('Parabens você venceu! Deseja jogar novamente?\n1 - Sim\n2 - Não').toUpperCase(); 
    }
    
  }
  else {
    alert('Categoria inserida inválida');
    Novamente = 1;
  }
}
alert('Adorei jogar mais um jogo com você.');