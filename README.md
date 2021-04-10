## 💻 Feira do Livro Unesp - Buscador

Está acontecendo o evento anual da [Feira do Livro Unesp](https://feiradolivrodaunesp.com.br/) dos dias 05/04/2021 até 11/04/2021, este ano de forma virtual. Este simples aplicativo tem como objetivo facilitar a busca dos livros das editoras participantes do evento. Infelizmente só fiquei sabendo deste evento ontem, mas ok. Quem sabe ano que vem. Por enquanto só tem 2 editoras, irei atualizando quando conseguir colocar as outras.

Buscador: [https://lpepinelli.github.io/feiradolivrounesp/](https://lpepinelli.github.io/feiradolivrounesp/) 

## 🛠 Como foi feito

A ideia era juntar todas as listas das editoras em um único arquivo csv, limpar os dados e criar um arquivo JSON com o resultado. Para isso fiz um simples processo de ETL utilizando a ferramenta Pentaho.

![image](https://user-images.githubusercontent.com/43144939/114280267-d2b18100-9a0e-11eb-9225-de0691da8f52.png)

Com o JSON criado, foi só utilizá-lo.
