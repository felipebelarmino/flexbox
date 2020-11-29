### O que vamos aprender?

Você vai aprender sobre o modelo de layout **CSS Flexible Box Layout** ou apenas **Flexbox**  como é conhecido, este modelo permite que os elementos **filhos** dentro de um **elemento pai/mãe** sejam organizados e distribuídos em diversas direções apenas aplicando algumas propriedades ao seu **CSS**. A principal função do **Flexbox** é permitir o controle das colunas e linhas de elementos, dando a eles uma melhor organização visual, tanto em telas de dispositivos móveis quanto computadores portáteis e desktop.





### Você será capaz de:

- Utilizar *CSS Flexbox* para criar layouts flexíveis;
- Utilizar *CSS Flexbox* para alterar o comportamento de *containers* .





### Porque isso é importante?

A principal razão para utilizar **Flebox** é a facilidade com que podemos centralizar os elementos, tanto horizontalmente quanto verticalmente.

Com apenas 3 declarações, podemos obter um elemento filho perfeitamente centralizado -

```language
.flex-container {
  align-items: center; /* Centralização vertical */ 
  display: flex;
  justify-content: center; /* Centralização horizontal */   
};
```





### Conteúdos

**Tempo sugerido para realização: 80 minutos**



> Conceitos básicos sobre Flexbox:



**Eixos** ou **Flex Axes**



Tenha em mente que sempre ao utilizar flexbox estamos nos referindo a dois eixos principais; 

**Eixo principal** que está na direção das linhas e o **eixo transversal** que está na direção das colunas.



Propriedade: `flex-direction`

Valores:

- row
- row-reverse
- column
- column-reverse



Veja os exemplos abaixo, 

temos uma div com ID `flex-container` que será o elemento pai/mãe, 

e seus/suas respectivos(as) filhos/filhas com a classe `flex-item`

<div id="flex-container">
    <div id="flex-container">
        <div class="flex-item"><p>Filho 1</p></div>
        <div class="flex-item"><p>Filho 2</p></div>
        <div class="flex-item"><p>Filho 3</p></div>
        <div class="flex-item"><p>Filho 4</p></div>
        <div class="flex-item"><p>Filho 5</p></div>
    </div>   	


- **row**

<img src='https://firebasestorage.googleapis.com/v0/b/imagenator-ccdab.appspot.com/o/flex-direction1.png?alt=media&token=63e56640-623f-4474-9c36-d6d991af8b21' />

------

- **row-reverse**

![](/home/felipe/Área de Trabalho/Summer Jobs/images/row-reverse.png)

------

- **comumn**

![](/home/felipe/Área de Trabalho/Summer Jobs/images/column.png)

------

- **column-reverse**

![](/home/felipe/Área de Trabalho/Summer Jobs/images/column-reverse.png)

------

### Flex wrap

Quando aplicamos `display:flex` e `flex-direction:row` , por padrão temos os elementos em uma única linha horizontal, caso queira que seja multi-linhas aplique `flex-wrap:wrap`. Vamos ver um exemplo que que temos uma limitação de largura e seria necessário que os elementos pulassem para a pŕoxima linha, neste caso nosso flex-container tem apenas 400px e cada flex-item tem 70px.

------

**Note que o ultimo elemento vazou para fora do container.**

![](/home/felipe/Área de Trabalho/Summer Jobs/images/erro1.png)

------

**Agora aplicando `flex-wrap:wrap`:** Neste caso, não importa a quantidade de elementos dentro do container, caso seja necessário serão criadas novas linhas sempre que for atingida a limitação de largura.

![](/home/felipe/Área de Trabalho/Summer Jobs/images/wrap.png)

------

### Flex flow

**É uma propriedade abreviativa, onde podemos combinar `flex-direction` e `flex-wrap` em uma só.**

Para deixar nosso container como `flex-direction: column` e dar  uma quebra de linha com `flex-wrap:wrap`, era necessário duas propriedades, então vamos ver como fazer o mesmo serviço de forma abreviada aplicando `flex-flow: column wrap`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/flexflow.png)

------

- Teste as possibilidades [aqui](https://flexbox.help/).
-  `row` , `column` , `row-reverse` e `column-reverse`  para a propriedade `flex-direction` 
-  `wrap` e `nowrap`  para a propriedade `flex-wrap` 
-  `flex-flow`

------

### Align items

É um atributo do flexbox para alinhar os elementos no eixo transversal, assim se o `flex-direction` estiver como `row` ele vai alinhar os itens vertical, e se estiver como `column` vai alinhar na horizontal. Veja os exemplos abaixo.

`display: flex`

`flex-direction: row`

`align-items: center`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/aligncenter.png)

------

`align-items: flex-start`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/alignstart.png)

------

`align-items: flex-end`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/alignend.png)

------

`align-items: stretch`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/alignstretch.png)

------

### Justify content

É uma propriedade semelhante ao `align-items`, a qual alinha os itens no mesmo eixo que estiver disposto o `flex-direction`. Veja alguns exemplos abaixo.

`display: flex`

`flex-direction: row`

`justify-content: center`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifycenter.png)

------

`justify-content: flex-start`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifystart.png)

------

`justify-content: flex-end`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifyend.png)

------

`justify-content: space-around`  Insere espaços pequenos nas laterais e mais entre os elementos.

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifyspacearound.png)

------

`justify-content: space-between`  Insere espaços igualmente entre os elementos, porém não nas laterais.

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifybetween.png)

------

`justify-content: space-evenly` Insere espaços igualmente tanto entre os elementos quanto nas laterais.

![](/home/felipe/Área de Trabalho/Summer Jobs/images/justifyevenly.png)

------

### Centralizando tudo

Utilizando juntamente `align-items` e `justify-content` para centralizar os elementos tanto na vertical quanto na horizontal.

`display: flex`

`align-items: center`

`justify-content: center`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/centercenter.png)

------

É importante ressaltar que o `display-flex` apenas flexibiliza os elemento filhos(as), caso dentro de um elemento filho contenha outros elementos, estes não herdarão a propriedade flex e será necessário declarar `display: flex` pois este passará a ser o pai/mãe do elementos dentro dele.



**Agora vamos praticar com alguns exercícios.**

------

### Exercícios

1. Construa em arquivo html, um flex container com largura de 800px e altura de 400px e aplique o id **main-container**, além disso dois elementos filhos(as) com as classes **flex-container-um** e **flex-container-dois** e largura de 350px por 350px cada.

2. Faça também um arquivo separado para estilizar os elementos, o main-container deve ter uma borda de 2px solida azul, e fundo cinza claro.

3. Os dois flex-container's devem estar alinhados ao centro, com espaços igualmente distribuídos.

4. Aplique uma borda vermelha de 2 px pontilhada e fundo branco aos flex-container's.

5. Dentre destes dois flex-container's crie três elementos filhos(as) para cada um com tamanho de 85px po 85px, com bordas verdes de 1px e fundo amarelo. Estes deverão ter a classe **flex-item**.

6. No primeiro flex-container, os items devem estar dispostos alinhados ao centro no sentido horizontal, com espaçamento igual entre os elementos.

7. No segundo flex-container, os items devem estar dispostos alinhados à direita do container, e com espaçamento igual entre os elementos, aplique um espaçamento de 10px da borda interna do container dois para dar um pequeno afastamento. Aplique a direção de coluna.

8. Insira um botão com id **button** logo abaixo do main-container, quando ao ser clicado inverta as disposições de elementos dos flex-containers a cada click. Deverá estar centralizado na parte inferior da página e dentro de uma div com o id **button-container**.

   

**Sua aplicação deve ficar como os exemplos abaixo.**

`Antes`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/exercicioantes.png)

------

`Depois`

![](/home/felipe/Área de Trabalho/Summer Jobs/images/exerciciodepois.png)

------



### Recursos Adicionais

https://rupl.github.io/unfold/

[https://flexboxfroggy.com/]()

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

------

[TOC]

