# importar-arquivos
## Automatização da importação de arquivos ao sistema de controle processual do órgão em que atuo.
### A aplicação é desenvolvida utilizando a plataforma node.js, em linguagem javascript.

Por se tratar de um sistema desenvolvido em Adobe Flex, a utilização de bibliotecas específicas para automatização (Ex. Selenium) é inviável.
Logo, a solução encontrada foi a utilização da biblioteca Robot.js para efetivamente controlar mouse e teclados e, assim, possibilitar a realização das tarefas necessárias.
Além dessa biblioteca utilizo:
- jest: Desenvolvimento Orientado a Testes (TDD)
- global-mouse-events: Captura coordenadas x e y em que o mouse clica na tela, para assim, usar o robot.js para "imitá-las".
- blessed: Interface rica via terminal para inicialização e configuração da aplicação.
- pkg: Transformar a aplicação em arquivo executável (.exe)
- ncp: cópia de textos para a área de transferência (clipboard) 
