#### Pagina do amigo secreto
https://ronaldodev1.github.io/amigo-secreto/

<h1>Amigo Secreto</h1>
Este projeto é uma aplicação simples para gerenciar uma lista de amigos e realizar sorteios aleatórios entre eles. A interface permite adicionar amigos, visualizar a lista e sortear um amigo secreto.

<h3>Funcionalidades</h3>

+ Adicionar amigos: Insira nomes em um campo de texto e adicione-os à lista de amigos.

+ Exibir lista de amigos: Visualize todos os amigos adicionados em uma lista dinâmica.
 
+ Sortear amigo secreto: Selecione aleatoriamente um nome da lista e exiba o resultado.
 
+ Reiniciar o Jogo: Reseta a lista de participantes e resultados para iniciar um novo sorteio.
 
+ Validação de Entrada: Somente nomes (texto) podem ser inseridos no campo, números são automaticamente removidos.

<h2>Amigo Secreto</h2>

<h3>HTML</h3>
O arquivo HTML define a estrutura básica da interface, incluindo:

+ Um campo de entrada para inserir nomes.
 
+ Botões para adicionar amigos, sortear e resetar o jogo.
 
+ Listas dinâmicas para exibir os amigos e o resultado do sorteio.

<h3>CSS</h3>
O arquivo style.css é responsável pela estilização da interface, garantindo uma apresentação agradável.

<h3>JavaScript</h3>
O arquivo app.js contém as funções principais para o funcionamento do sistema:

+ adicionarAmigo(): Adiciona um nome ao array de amigos e atualiza a lista na interface.
  
+ atualizarListaAmigos(): Atualiza dinamicamente a lista de amigos exibida no HTML.
  
+ sortearAmigo(): Seleciona um nome aleatório do array de amigos e exibe o resultado.
  
+ reiniciarJogo(): Reseta o jogo, limpando o array de amigos e as listas exibidas na interface.

<h2>Como Usar</h2>
<h4>Adicionar Participantes</h4>

+ Digite o nome no campo de entrada e clique em "Adicionar".
<h4>Sortear Amigo:</h4>

+ Após adicionar os participantes, clique em "Sortear amigo".
<h4>Reiniciar:</h4>

+ Clique no botão "Reiniciar" para começar do zero.

<h2>Instalação</h2>

<h3>Clone o Repositório:</h3>
git clone https://github.com/seuusuario/amigo-secreto.git
cd amigo-secreto

