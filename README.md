# importar-arquivos
## Automatização da importação de arquivos ao sistema de controle processual do órgão em que atuo.
### A aplicação é desenvolvida utilizando a plataforma node.js, em linguagem javascript.

Por conta da plataforma de desesenvolvimento adotada pelo sistema de controle processual, a utilização de bibliotecas específicas para automatização (Ex. Selenium) é inviável.
Logo, a solução encontrada foi o uso da biblioteca Robot.js para efetivamente controlar mouse e teclados e, assim, possibilitar a realização das tarefas necessárias de forma automática.

Além dessa biblioteca utilizo:
- jest: Desenvolvimento Orientado a Testes (TDD)
- global-mouse-events: Captura coordenadas x e y em que o mouse clica na tela, para assim, usar o robot.js para "imitá-las".
- blessed: Interface rica via terminal para inicialização e configuração da aplicação.
- ncp: cópia de textos para a área de transferência (clipboard) 
- pkg: Transformar a aplicação em arquivo executável (.exe)

A ideia é evoluir a flexibilização dessa aplicação até o ponto em que seja facilmente adotada para automatizar tarefas diferentes em sistemas com as mesmas características.
