# Todo-List

**versão 2.0**

Conteúdo
 1. [Motivo/Objetivo](https://github.com/LeandrodeLimaC/Todo-List#Objetivo)  
 2. [Requisitos](https://github.com/LeandrodeLimaC/Todo-List#Requisitos) 
 3. [Começando](https://github.com/LeandrodeLimaC/Todo-List#Começando) 
 4. [O que há de novo?](https://github.com/LeandrodeLimaC/Todo-List#Descrição-dessa-versão)  
 4. [Versões anteriores](https://github.com/LeandrodeLimaC/Todo-List#Versões-anteriores)


Objetivo
---

 Esta versão do projeto foi inspirada em uma checklist que vi no twitter divulgado por [Steve Schoger](https://twitter.com/steveschoger "Twitter do Steve").
Meu objetivo é ajudar qualquer pessoa que queira dar uma chance à lista original e gostaria de marcar o que já foi feito.  
[Aqui](https://twitter.com/steveschoger/status/1284178659927044098/photo/1 "Link para post original") está a checklist original juntamente com seu post. 

Requisitos
---
Para executar o projeto, será necessário instalar:

1. [Nodejs 12.x](https://nodejs.org/en/)


Começando
---
Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/LeandrodeLimaC/Todo-List.git
```
Navegue até a pasta criada e execute o seguinte comando para instalar as dependências do projeto
```
npm install
```

Por fim, inicie o servidor de desenvolvimento através do seguinte comando
```
npm run serve
```

Descrição dessa versão
---
Instalação do vuetify, melhorias de estrutura de elementos, correção de bugs e preparação para expansões futuras.
Algumas funcionalidades foram adicionadas a essa versão

![checklist versão 2.0](https://github.com/LeandrodeLimaC/Todo-List/blob/master/src/assets/prints/v-2.0/checklist.jpg)

***Edição inline***
Clicar em uma opção do checklist ira transformar o campo de texto em um input, possibilitando a edição do mesmo de forma fácil, clicar para fora do campo ou no icone de salvar, resultará na atualização dos dados  
![funcionalidade de edição inline](https://github.com/LeandrodeLimaC/Todo-List/blob/master/src/assets/prints/v-2.0/edit_inline.jpg)

***Menu de actions***
Um menu de actions foi adicionado a cada item  
![Menu de actions](https://github.com/LeandrodeLimaC/Todo-List/blob/master/src/assets/prints/v-2.0/Actios_menu.jpg)

Versões anteriores
---

**versão 1.0**

Projeto criado através de uma [série de videos](https://www.youtube.com/watch?v=hiOUHcx4Ja8&list=PLRAV69dS1uWTpHQgiV4rZFlnuS8XDl71A) introdutórias ao mundo do vue.

A série de aulas aborda a comunicação entre os componentes, passando assim uma basica ambientação sobre estruturação dos projetos, um tour sobre ciclos de vida do vue, como criar props e emits, e outros detalhes interessantes.

O autor apenas utiliza o bootstrap de forma basica para dar um visual para a aplicação enquanto trabalha na mesma

![imagem da versao 1.0](https://github.com/leandrodelimac/todo-list/blob/master/src/assets/prints/v-1.0/v-1.0.png?raw=true)
