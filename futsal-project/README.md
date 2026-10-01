# Futsal Manager - Sistema de Gerenciamento de Futsal

## 📋 Descrição

Sistema web funcional de gerenciamento de futsal baseado na arquitetura **Cliente/Servidor** com padrão **MVC (Model-View-Controller)**, desenvolvido com **Node.js/Express** e **PostgreSQL**.

## 🎯 Funcionalidades

- ✓ **CRUD completo de Técnicos** - Gerenciar técnicos e suas informações
- ✓ **CRUD completo de Times** - Cadastrar, editar e deletar times
- ✓ **CRUD completo de Jogadores** - Gerenciar jogadores com fotos
- ✓ **CRUD completo de Competições** - Controlar competições e torneios
- ✓ **Relacionamentos de Dados** - Associação de jogadores a times, técnicos a times
- ✓ **Interface Responsiva** - Design limpo e funcional

## 🏗️ Arquitetura

### Padrão MVC
```
futsal-project/
├── controllers/       # Lógica de negócio
│   ├── tecnicoController.js
│   ├── timeController.js
│   ├── jogadorController.js
│   └── competicaoController.js
├── routes/           # Mapeamento de endpoints
│   ├── tecnicoRoutes.js
│   ├── timeRoutes.js
│   ├── jogadorRoutes.js
│   └── competicaoRoutes.js
├── views/            # Interface do usuário (HTML/CSS/JS)
│   ├── index.html
│   ├── tecnico.html
│   ├── time.html
│   ├── jogador.html
│   └── competicao.html
├── public/           # Arquivos estáticos
│   └── css/
│       └── style.css
├── config/           # Configuração do banco
│   └── database.js
├── database/         # Scripts SQL
│   └── init.sql
└── server.js         # Arquivo principal
```

## 📊 Modelagem de Dados

### Relacionamentos

```
TÉCNICO (1:1) ─── TIME
   ↑
   │
   └─ Um técnico para um time

TIME (1:N) ─── JOGADOR
   │
   └─ Um time para vários jogadores

COMPETIÇÃO (tabela independente)
```

### Tabelas

**1. Tabela TÉCNICO** (Independente)
- id (PK)
- nome
- email
- telefone
- licenca
- data_criacao

**2. Tabela COMPETIÇÃO** (Independente)
- id (PK)
- nome
- descricao
- data_inicio
- data_fim
- local
- data_criacao

**3. Tabela TIME** (Relacionamento 1:N com JOGADOR, 1:1 com TÉCNICO)
- id (PK)
- nome
- cidade
- id_tecnico (FK - UNIQUE)
- logo
- data_criacao

**4. Tabela JOGADOR** (Relacionamento N:1 com TIME)
- id (PK)
- nome
- numero
- posicao
- id_time (FK)
- data_nascimento
- foto
- data_criacao

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14+)
- PostgreSQL (v12+)
- npm

### 1. Instalação

```bash
# Clonar o repositório
git clone <seu-repositorio>
cd futsal-project

# Instalar dependências
npm install
```

### 2. Configurar Banco de Dados

```bash
# Criar banco de dados
createdb futsal_db

# Executar o script SQL
psql -U postgres -d futsal_db -f database/init.sql
```

### 3. Configurar Variáveis de Ambiente

Editar `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=futsal_db
PORT=3000
NODE_ENV=development
```

### 4. Iniciar o Servidor

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

## 🛣️ Rotas da API

### Técnicos
- `GET /api/tecnicos` - Listar todos
- `GET /api/tecnicos/:id` - Obter por ID
- `POST /api/tecnicos` - Criar novo
- `PUT /api/tecnicos/:id` - Atualizar
- `DELETE /api/tecnicos/:id` - Deletar

### Times
- `GET /api/times` - Listar todos
- `GET /api/times/:id` - Obter por ID
- `POST /api/times` - Criar novo
- `PUT /api/times/:id` - Atualizar
- `DELETE /api/times/:id` - Deletar

### Jogadores
- `GET /api/jogadores` - Listar todos
- `GET /api/jogadores/:id` - Obter por ID
- `GET /api/times/:id_time/jogadores` - Listar jogadores de um time
- `POST /api/jogadores` - Criar novo
- `PUT /api/jogadores/:id` - Atualizar
- `DELETE /api/jogadores/:id` - Deletar

### Competições
- `GET /api/competicoes` - Listar todos
- `GET /api/competicoes/:id` - Obter por ID
- `POST /api/competicoes` - Criar novo
- `PUT /api/competicoes/:id` - Atualizar
- `DELETE /api/competicoes/:id` - Deletar

## 📄 Páginas Disponíveis

1. **index.html** - Página inicial com menu de atalhos
2. **tecnico.html** - CRUD de técnicos
3. **time.html** - CRUD de times
4. **jogador.html** - CRUD de jogadores com suporte a fotos
5. **competicao.html** - CRUD de competições

## 🎨 Estilo

- CSS externo e responsivo
- Design limpo sem gradientes
- Paleta de cores: azul (#1e3c72, #2a5298)
- Totalmente funcional em desktop e mobile

## 📦 Dados Iniciais

O banco de dados é criado com:
- 10 técnicos
- 10 times (cada um com um técnico)
- 10 competições
- 50+ jogadores distribuídos nos times
- Todas as relações devidamente configuradas

## 👤 Autor

**João Felipe**
- Disciplina: DW1
- Bimestre: 3º - 2026
- Projeto: Futsal Manager

## 📝 Notas Técnicas

- Uso de `dotenv` para variáveis de ambiente
- Separação clara entre rotas, controllers e dados
- Tratamento de erros nas requisições
- Fetch API para comunicação cliente-servidor
- Validação básica de formulários

## 🔒 Segurança

- Variáveis sensíveis em `.env`
- `.gitignore` configurado corretamente
- Validação de inputs (básica)

## 📚 Referências

- Express.js: https://expressjs.com/
- PostgreSQL: https://www.postgresql.org/
- Node.js: https://nodejs.org/
