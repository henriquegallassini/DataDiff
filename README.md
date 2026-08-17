DataDiff

Calculadora de idade feita em JavaScript puro, que calcula a diferença exata entre duas datas em anos, meses e dias — sem usar bibliotecas externas.

O que faz

O usuário informa a data de nascimento e a data atual (dia, mês e ano), e o projeto calcula a idade exata, tratando corretamente os casos em que:

O dia atual é menor que o dia de nascimento (ex: nasceu dia 25, hoje é dia 10)
O mês atual é menor que o mês de nascimento (ex: nasceu em novembro, hoje é agosto)

Esses casos usam uma lógica de "empréstimo" (borrow), parecida com a subtração manual que aprendemos na escola: quando a subtração de dias ou meses dá negativo, "pega emprestado" uma unidade da casa seguinte (mês empresta do ano, dia empresta do mês).

Como usar
Clone o repositório:
bash
   git clone https://github.com/henriquegallassini/DataDiff.git
Abra o arquivo Calculator_age.html no navegador.
Preencha os campos de data de nascimento e data atual.
Clique em calcular e veja o resultado: Você tem X anos, Y meses e Z dias.
Tecnologias
HTML — estrutura do formulário
CSS — estilização
JavaScript — lógica de cálculo e manipulação do DOM
Lógica de cálculo

O ponto principal do projeto é o cálculo de diferença de datas com empréstimo:

Se dia atual - dia nascimento < 0, soma-se ao resultado o número de dias do mês anterior (calculado dinamicamente com new Date(ano, mes - 1, 0).getDate(), que já trata corretamente meses com 28, 29, 30 ou 31 dias) e desconta-se 1 do total de meses.
Se, depois disso, o total de meses ainda for negativo, soma-se 12 aos meses e desconta-se 1 do total de anos.

Isso evita o erro comum de calculadoras de idade simples, que apenas subtraem os números sem considerar se a data de aniversário do mês/ano já passou.

Melhorias futuras
 Validação de datas inválidas (ex: dia 31 em fevereiro, mês 13)
 Bloqueio de data de nascimento no futuro
 Responsividade para mobile
Autor

Desenvolvido por Henrique Gallassini como parte dos estudos de JavaScript e lógica de programação.