```
   ■   ▄▄▄ ▗▞▀▜▌▄▄▄▄   ▄▄▄ ▗▞▀▘▗▞▀▚▖▄▄▄▄     ▐▌▗▞▀▚▖▄▄▄▄  ▗▞▀▘▗▞▀▚▖
▗▄▟▙▄▖█    ▝▚▄▟▌█   █ ▀▄▄  ▝▚▄▖▐▛▀▀▘█   █    ▐▌▐▛▀▀▘█   █ ▝▚▄▖▐▛▀▀▘
  ▐▌  █         █   █ ▄▄▄▀     ▝▚▄▄▖█   █ ▗▞▀▜▌▝▚▄▄▖█   █     ▝▚▄▄▖
  ▐▌                                      ▝▚▄▟▌                    
  ▐▌
                A full-stack web application.                                                          
```

*This project is centered around the design, development, and \
organization of a full-stack web application.*

 Skills | Grade |
:------:|:-----:|
[**Rigor**] [**Web**] [**Group & interpersonal**]  | **Subscribed**
<!--- **:white_check_mark: 125%** --->

`Take the time to contemplate the design of your application with your choices before
delving into the code – it’s crucial.`

- *Team members:* 
  - *Fabricio Leite [`faaraujo`](https://profile.intra.42.fr/users/faaraujo)*
  - *Pedro Santos [`anda-cun`](https://profile.intra.42.fr/users/anda-cun)*
  - *Dinis Marques [`dimarque`](https://profile.intra.42.fr/users/dimarque)*
  - *Paulo Bastos [`paulorod`](https://profile.intra.42.fr/users/paulorod)*

## Index
* **[Workflow](#workflow)**
* **[Briefing](#briefing)** 
  * **[Tema](#tema)**
  * **[Objetivo](#objetivo)**
* **[I. Visão Geral](#i-visão-geral)**
* **[II. Requisitos Obrigatórios](#ii-requisitos-obrigatórios)**
* **[III. Módulos](#iii-módulos)**
  * **[Categorias de Módulos](#categorias-de-módulos)**
  * **[Exemplos de Módulos](#exemplos-de-módulos)**
* **[Divisão de tarefas](#divisão-de-tarefas)**
* **[Study resources](#study-resources)**

<!-- * **[Mandatory part](#mandatory-part)**
  * **[Summary](#summary)**
  * **[Structure](#structure)**
* **[Tools](#tools)**
* **[Workflow](#workflow)**
* **[Study resources](#study-resources)** -->

## Briefing

#### Tema
Desenvolvimento de uma aplicação web single-page para jogar Pong e interagir com outros usuários.

#### Objetivo
Revisar os principais temas e ideias dos materiais fornecidos sobre o projeto ft_transcendence, destacando os requisitos obrigatórios e módulos opcionais.

## I. Visão Geral
O projeto visa o desenvolvimento de uma aplicação web single-page com foco no clássico jogo Pong, explorando conceitos de desenvolvimento web, SPA e interação em tempo real entre jogadores.

## II. Requisitos Obrigatórios
A versão 15.1 do projeto exige o desenvolvimento de um site funcional com as seguintes características:

### Linguagem e Frameworks

**Backend:**
- Linguagem base: Ruby (opcional, pode ser substituído por frameworks).
- Framework obrigatório se escolhido: Django.

**Frontend:**
- Linguagem base: Javascript puro (opcional, pode ser substituído por frameworks).
- Toolkit obrigatório se escolhido: Bootstrap.

### Funcionalidades
- Sistema de Registro para torneios com aliases de jogadores.
- Sistema de Matchmaking para organização de partidas entre participantes.
- Implementação do jogo Pong com a possibilidade de personalização visual, mantendo a essência do jogo original (1972).
- Utilização de Docker para execução do projeto em um container autônomo (ex: `docker-compose up --build`).

### Segurança
- Armazenamento de senhas com hashing.
- Proteção contra SQL Injection e XSS.
- Conexão HTTPS obrigatória para todas as funcionalidades (wss ao invés de ws).
- Validação de dados de formulários e inputs do usuário.

### Considerações
- O uso de bibliotecas que forneçam soluções completas para funcionalidades globais ou módulos é proibido.
- Bibliotecas para tarefas simples e específicas, que representem subcomponentes de funcionalidades, são permitidas.
- A justificativa do uso de bibliotecas não explicitamente permitidas pelo projeto será avaliada.

## III. Módulos
Para alcançar 100% de conclusão do projeto, são necessários no mínimo 7 módulos principais, além dos requisitos básicos. É importante analisar cada módulo e suas implicações na estrutura base do projeto.

### Categorias de Módulos
- Web
- Gerenciamento de Usuários
- Jogabilidade e Experiência do Usuário
- IA e Algoritmos
- Cibersegurança
- DevOps
- Gráficos
- Acessibilidade
- Pong no lado do servidor

[↑ Index ↑](#index)

### Exemplos de Módulos

**Web:**
- Armazenamento de pontuação de torneios na Blockchain Ethereum utilizando Solidity (módulo principal).

**Gerenciamento de Usuários:**
- Gerenciamento de usuários padrão com autenticação, informações de perfil, histórico de partidas e lista de amigos (módulo principal).
- Implementação de autenticação remota via OAuth 2.0 com 42 (módulo principal).

**Jogabilidade e Experiência do Usuário:**
- Suporte a jogadores remotos em partidas (módulo principal).
- Funcionalidade multiplayer para mais de 2 jogadores em uma partida (módulo principal).
- Adição de um novo jogo com histórico de usuário e matchmaking (módulo principal).
- Chat ao vivo com mensagens diretas, bloqueio de usuários e convites para jogos (módulo principal).

**IA e Algoritmos:**
- Implementação de um oponente controlado por IA (proibido o uso do algoritmo A*) (módulo principal).
- Dashboards com estatísticas de usuários e jogos (módulo menor).

**Cibersegurança:**
- Implementação de WAF/ModSecurity com configuração rigorosa e HashiCorp Vault para gerenciamento de segredos (módulo principal).
- Conformidade com GDPR: anonimização de dados, gerenciamento local de dados e exclusão de contas (módulo menor).
- Autenticação de dois fatores (2FA) e uso de JSON Web Tokens (JWT) (módulo principal).

**DevOps:**
- Configuração de infraestrutura para gerenciamento de logs com ELK (módulo principal).
- Sistema de monitoramento com Prometheus e Grafana (módulo menor).
- Arquitetura de backend como microsserviços (módulo principal).

**Gráficos:**
- Utilização de técnicas avançadas de 3D com ThreeJS/WebGL (módulo principal).

**Acessibilidade:**
- Suporte a todos os dispositivos (módulo menor).
- Compatibilidade com múltiplos navegadores (módulo menor).
- Suporte a múltiplos idiomas (mínimo de 3) (módulo menor).
- Acessibilidade para usuários com deficiência visual (módulo menor).
- Integração de Server-Side Rendering (SSR) (módulo menor).

**Pong no lado do servidor:**
- Substituição do Pong básico por uma versão no lado do servidor com API (módulo principal).
- Criação de uma interface de linha de comando (CLI) para jogar Pong contra usuários da versão web (módulo principal).

[↑ Index ↑](#index)


## Divisão de tarefas

Collecting workspace information

Para um desenvolvimento efetivo do projeto "ft_transcendence" com cinco pessoas, a divisão de tarefas pode ser organizada da seguinte maneira:

1. **Gerente de Projeto / DevOps**:
   - Responsável pela coordenação geral do projeto.
   - Configuração e manutenção do ambiente de desenvolvimento (Docker, CI/CD).
   - Monitoramento e logging (Prometheus, Grafana).
   - Gerenciamento de repositório e integração contínua.

2. **Desenvolvedor Backend**:
   - Implementação do servidor e APIs.
   - Desenvolvimento do sistema de autenticação e autorização (OAuth 2.0, JWT).
   - Implementação do sistema de matchmaking e registro de torneios.
   - Segurança do backend (hashing de senhas, proteção contra SQL Injection e XSS).

3. **Desenvolvedor Frontend**:
   - Desenvolvimento da interface do usuário usando JavaScript e Bootstrap.
   - Implementação do jogo Pong com personalização visual.
   - Desenvolvimento de funcionalidades de interação em tempo real (WebSockets).

4. **Desenvolvedor Full Stack**:
   - Suporte tanto ao backend quanto ao frontend.
   - Integração entre frontend e backend.
   - Implementação de funcionalidades adicionais (chat ao vivo, listas de amigos).
   - Garantir a conformidade com os requisitos de segurança (HTTPS, validação de dados).

5. **Especialista em Segurança / QA**:
   - Revisão de código focada em segurança.
   - Testes de penetração e auditoria de segurança.
   - Implementação de WAF/ModSecurity e HashiCorp Vault.
   - Testes automatizados e manuais para garantir a qualidade do software.

### Exemplo de Tarefas Específicas:

- **Gerente de Projeto / DevOps**:
  - Configurar Docker e `docker-compose`.
  - Configurar CI/CD pipelines.
  - Monitorar logs e métricas do sistema.

- **Desenvolvedor Backend**:
  - Criar APIs RESTful para registro de usuários e torneios.
  - Implementar autenticação com OAuth 2.0.
  - Desenvolver lógica de matchmaking.

- **Desenvolvedor Frontend**:
  - Criar páginas de login, registro e dashboard.
  - Desenvolver o jogo Pong em JavaScript.
  - Implementar chat ao vivo com WebSockets.

- **Desenvolvedor Full Stack**:
  - Integrar frontend com backend.
  - Desenvolver funcionalidades de perfil de usuário e histórico de partidas.
  - Implementar notificações em tempo real.

- **Especialista em Segurança / QA**:
  - Realizar testes de segurança e revisão de código.
  - Implementar autenticação de dois fatores (2FA).
  - Escrever testes automatizados para garantir a qualidade do código.

### Comunicação e Ferramentas:

- **Ferramentas de Comunicação**: Slack, Microsoft Teams ou Discord.
- **Gerenciamento de Tarefas**: Jira, Trello ou Asana.
- **Controle de Versão**: GitHub ou GitLab.
- **Documentação**: Confluence ou Notion.

Essa divisão de tarefas garante que todos os aspectos do projeto sejam cobertos e que a equipe trabalhe de forma eficiente e colaborativa.

[↑ Index ↑](#index)

## Workflow

Para criar um cronograma com um workflow de trabalho efetivo para o projeto ft_transcendence da Escola 42, siga estas etapas:

### Semana 1: Planejamento e Configuração
- **Dia 1-2:** 
  - Reunião inicial para definir objetivos e metas do projeto.
  - Divisão de tarefas entre os membros da equipe.
- **Dia 3-4:** 
  - Configuração do ambiente de desenvolvimento.
  - Configuração do repositório Git e integração contínua.
- **Dia 5-7:** 
  - Pesquisa e escolha das tecnologias e frameworks a serem utilizados.
  - Criação de um esqueleto básico do projeto.

### Semana 2: Desenvolvimento Inicial
- **Dia 8-10:** 
  - Implementação da autenticação de usuários.
  - Configuração do banco de dados.
- **Dia 11-14:** 
  - Desenvolvimento das funcionalidades básicas do frontend.
  - Criação de APIs iniciais para comunicação com o backend.

### Semana 3: Desenvolvimento de Funcionalidades Principais
- **Dia 15-17:** 
  - Implementação de funcionalidades principais (ex: chat, jogos, etc.).
  - Integração do frontend com as APIs do backend.
- **Dia 18-21:** 
  - Testes unitários e de integração para as funcionalidades desenvolvidas.
  - Correção de bugs e melhorias.

### Semana 4: Refinamento e Testes
- **Dia 22-24:** 
  - Refinamento das funcionalidades existentes.
  - Implementação de funcionalidades adicionais ou melhorias.
- **Dia 25-28:** 
  - Testes de usabilidade e feedback dos usuários.
  - Correção de bugs e ajustes finais.

### Semana 5: Documentação e Preparação para Entrega
- **Dia 29-31:** 
  - Criação da documentação do projeto (manual do usuário, guia de instalação, etc.).
  - Preparação do projeto para entrega (deploy, configuração de servidores, etc.).
- **Dia 32-35:** 
  - Revisão final do projeto.
  - Apresentação e entrega do projeto.

### Ferramentas e Tecnologias
- **Frontend:** JavaScript, HTML, CSS, Bootstrap
- **Backend:** Django, Ruby on Rails
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT, OAuth.
- **Controle de Versão:** Git, GitHub.
- **CI/CD:** GitHub Actions.



## Study resources
- [Medium](https://medium.com/@glukas94/ft-transcendence-semana-1-3b641e683339)
- [Repo - Bonk-Corporation](https://github.com/Bonk-Corporation/ft_transcendence)
- [Repo - zwzone](https://github.com/zwzone/ft_transcendence)
- [Eval](https://www.42evals.com/sheets/66bb317f3db302907fbb1343)

[↑ Index ↑](#index)