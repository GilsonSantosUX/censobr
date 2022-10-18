
<p align="center"> 
<img src="https://gcdnb.pbrd.co/images/lVP1vlu2rfI1.png?o=1"/>
</p>

<p align="center"> 
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

# CensoUFMS

Um censo - ou recenseamento - sobre o âmbito acadêmico. Coleta informações como: profissão, idade, data de nascimento, nome, sexo, escolaridade, religião, etc. Seus dados são coletados através de um formulário e são apresentados em planilhas e gráficos intuitivos.

## O que é o CensoUFMS?

CensoUFMS é um sistema web baseado nos métodos de pesquisa do censo demográfico do IBGE - Instituto Brasileiro de Geografia e Estatística.
O sistema é responsável por registrar as respostas dos candidatos da pesquisa, como também gera relatórios específicos e gerais. Possui um acompanhamento em tempo real por meio de gráficos e também é capaz de cadastrar novos pesquisadores.

### Ferramentas usadas
- Nodejs
- Express
- JWT
- Prisma
- Postgresql
- Heroku
- React
- Chakra UI

### Pré requisitos

- Node@v16.0.1
- Git

## Instalação

Há dois caminho para realizar a instalação, um deles é clonando o projeto como esta documentado abaixo, outra seria fazendo o download do zip do projeto e extraindo no seu desktop.

### Configurações de ambiente
#### Instalar utilizando o git ou terminal
```sh
git clone https://github.com/CaiqueRamos/grupo-1---cs.git
cd grupo-1---cs
```
#### Instalar utilizando o ZIP
Link para download <https://github.com/CaiqueRamos/grupo-1---cs/archive/refs/heads/main.zip/>

    1- Baixe o projeto através do link
    2- Extrai para seu desktop
    3- Siga as instruções abaixo
### Front-End

```sh
cd frontend
npm install
npm run start
```

Abra o browser no <http://localhost:3000/>


## Funcionalidades

### Entregas da sprint 2

#### Historia do usuário

**Sistema**
Acessar o sistema usando as credenciais de ADM

```sh
E-mail:admin@censobr.com.br
Senha:senha!0
```

- [x] Login por e-mail e senha
- [x] Cadastro de novo usuário
- [x] Autenticação JWT nas rotas internas

**Gerente Geral**

Cadastrar, alterar, excluir ou desativar seções, cadastrar, excluir ou desativar todos os tipos de usuários internos, ter acesso ao relatórios do sistema, cadastrar, alterar, excluir questionários.

- [x] Consulta usuário
- [x] Consulta todos os usuários
- [x] Cadastro de usuário
- [x] Alteração de usuário
- [x] Deleção de usuário


**Gerente Seção**

Criar novos usuários que possuam todos os poderes de acordo com o papel atribuído, melhorar ou criar novas pesquisas de acordo com a demanda.

- [x] Consulta usuário
- [x] Consulta todos os usuários da sua seção
- [x] Cadastro de entrevistador
- [x] Alteração de informações proprias e de usuários da sua seção
- [x] Deleção de usuário da sua seção



## Aplicação

(Um exemplo prático da aplicação do CensoUFMS)

## Contribuindo

Acreditamos que o CensoUFMS vem para fazer a diferença, com estatísticas, informações e coleta de dados. Nele estará contido dados sensíveis sobre a população acadêmica da Universidade Federal de Mato Grosso do Sul. Produzindo assim, informações imprescindíveis para a definição e tomada de decisões no meio acadêmico.


## Colaboradores

Este projeto existe graças aos nossos colaboradores:

[![Bruno Ferreira](https://avatars.githubusercontent.com/u/110881579?s=64&v=4)](https://github.com/Carse067) [@Bruno Ferreira](https://github.com/Carse067)

[![Caique Ramos](https://avatars.githubusercontent.com/u/52117766?s=64&v=4)](https://github.com/CaiqueRamos) [@Caique Ramos](https://github.com/CaiqueRamos)

[![Gilson Santos](https://avatars.githubusercontent.com/u/5659433?s=64&v=4)](https://github.com/gilsonsantosux) [@Gilson Santos](https://github.com/gilsonsantosux)

[![Jeferson Lima](https://avatars.githubusercontent.com/u/11639069?s=64&v=4)](https://github.com/jefersonlima) [@Jeferson Lima](https://github.com/jefersonlima)

## Licença

(Licença do código/projeto)
