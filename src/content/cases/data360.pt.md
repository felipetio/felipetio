## context

Jornalistas climáticos, pesquisadores e ativistas precisam de dados oficiais citáveis em tempo real, mas acessar a API Data360 do Banco Mundial (mais de 10.000 indicadores, 200 economias, 300 milhões de pontos de dados) exige conhecimento técnico que a maioria não tem. Ao mesmo tempo, assistentes de IA genéricos alucinam números e inventam fontes, o que piora a crise de desinformação climática em vez de resolver.

## problem

Como tornar um ativo institucional gigante acessível via linguagem natural sem cair na armadilha da alucinação. A IA precisa interpretar e narrar, mas nunca fabricar dados ou atribuições.

## action

Co-criei o projeto com Gustavo Faleiros (InfoAmazonia/Pulitzer Center), que trouxe a perspectiva editorial, enquanto eu liderei a arquitetura e implementação técnica. A solução é uma interface de chat que traduz perguntas em linguagem natural em consultas à API do Banco Mundial e devolve respostas narrativas com fontes citáveis. A peça-chave é um servidor MCP open-source que encapsula a API Data360 e garante que a IA narre apenas o que veio dos dados oficiais, nunca números inventados. Toda citação é verificável por construção.

## result

Projeto submetido ao Data360 Global Challenge, aguardando resultado da avaliação. O servidor MCP foi publicado como open-source, permitindo adoção por outros agentes e projetos jornalísticos.
