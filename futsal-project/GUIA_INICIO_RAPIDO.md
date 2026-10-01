# Guia de Início Rápido - Futsal Manager

## 🏃 Execução em 5 Minutos

### Passo 1: Clonar o Repositório
```bash
git clone <seu-repositorio>
cd futsal-project
```

### Passo 2: Instalar Dependências
```bash
npm install
```

### Passo 3: Criar Banco de Dados
```bash
# No terminal do PostgreSQL
createdb futsal_db

# Execute o script SQL
psql -U postgres -d futsal_db -f database/init.sql
```

### Passo 4: Configurar Variáveis de Ambiente
Edite o arquivo `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_aqui
DB_NAME=futsal_db
PORT=3000
NODE_ENV=development
```

### Passo 5: Iniciar o Servidor
```bash
npm start
# ou para desenvolvimento com auto-reload:
npm run dev
```

✅ **Pronto!** Acesse: http://localhost:3000

---

## 🎯 Testar Funcionalidades

### 1️⃣ Acessar a Home
```
http://localhost:3000
```
Você verá a página inicial com menu de atalhos.

### 2️⃣ Testar CRUD de Técnicos
```
http://localhost:3000/tecnico.html
```
- Adicione um novo técnico
- Veja a lista atualizar
- Use "Editar" e "Deletar"

### 3️⃣ Testar CRUD de Times
```
http://localhost:3000/time.html
```
- Crie um novo time
- Selecione um técnico existente
- Veja os relacionamentos funcionarem

### 4️⃣ Testar CRUD de Jogadores
```
http://localhost:3000/jogador.html
```
- Crie jogadores com foto
- Associe a um time
- Veja a foto e dados serem salvos

### 5️⃣ Testar CRUD de Competições
```
http://localhost:3000/competicao.html
```
- Crie competições com datas
- Veja a lista funcionar completamente

---

## 🐛 Solução de Problemas

### Erro: "ECONNREFUSED - Cannot connect to database"
**Solução:**
- Verifique se PostgreSQL está rodando
- Confira credenciais no `.env`
- Certifique-se que criou o banco: `createdb futsal_db`

### Erro: "Cannot find module 'express'"
**Solução:**
```bash
npm install
# ou remova node_modules e instale novamente:
rm -rf node_modules
npm install
```

### Porta 3000 já está em uso
**Solução:**
- Altere em `.env`: `PORT=3001`
- Ou mate o processo: `lsof -ti:3000 | xargs kill -9`

### Banco de dados vazio
**Solução:**
- Reexecute o script SQL:
```bash
psql -U postgres -d futsal_db -f database/init.sql
```

---

## 📱 Testar no Celular/Tablet

### Encontrar IP Local da Máquina
**Windows:**
```bash
ipconfig
```
Procure por "IPv4 Address"

**Mac/Linux:**
```bash
ifconfig
```
Procure por "inet"

### Acessar do Celular
Na rede local, acesse:
```
http://SEU_IP_LOCAL:3000
```
Exemplo: `http://192.168.1.100:3000`

---

## 🔍 Verificar Dados no PostgreSQL

### Conectar ao banco
```bash
psql -U postgres -d futsal_db
```

### Ver as tabelas
```sql
\dt
```

### Ver técnicos
```sql
SELECT * FROM tecnico;
```

### Ver times com técnicos
```sql
SELECT t.nome, tc.nome as tecnico FROM time t
LEFT JOIN tecnico tc ON t.id_tecnico = tc.id;
```

### Ver jogadores de um time
```sql
SELECT * FROM jogador WHERE id_time = 1;
```

### Sair
```sql
\q
```

---

## 📝 Modificar Dados Iniciais

### Adicionar mais técnicos
```sql
INSERT INTO tecnico (nome, email, telefone, licenca)
VALUES ('João Silva', 'joao@email.com', '11987654321', 'CBV-011');
```

### Adicionar mais times
```sql
INSERT INTO time (nome, cidade, id_tecnico)
VALUES ('Time Novo', 'Rio de Janeiro', 1);
```

### Adicionar jogadores
```sql
INSERT INTO jogador (nome, numero, posicao, id_time)
VALUES ('Neymar', 10, 'Ala Direita', 1);
```

---

## 🚀 Deploy (Opcional)

Para colocar em produção:

1. **Heroku**
   ```bash
   heroku login
   heroku create seu-app
   heroku addons:create heroku-postgresql:hobby-dev
   git push heroku main
   ```

2. **Railway.app**
   - Conecte o repositório GitHub
   - Configure variáveis de ambiente
   - Deploy automático

3. **Replit**
   - Faça upload do código
   - Configure .env
   - Execute `npm start`

---

## 📚 Estrutura de Arquivos Importante

```
futsal-project/
├── server.js              👈 Inicia o servidor aqui
├── .env                   👈 Suas credenciais (NÃO commitar!)
├── package.json           👈 Dependências
├── config/database.js     👈 Conexão com banco
├── routes/                👈 Definição de endpoints
├── controllers/           👈 Lógica do negócio
├── views/                 👈 Páginas HTML
└── public/css/style.css   👈 Estilos
```

---

## 💡 Dicas Úteis

1. **Recarregue a página** (Ctrl+F5 ou Cmd+Shift+R) se não ver mudanças
2. **Verifique o Console** (F12) para erros em JavaScript
3. **Use o DevTools** para debugar requisições (Aba Network)
4. **Faça commits frequentes** no Git
5. **Teste tudo antes de entregar**

---

## ✨ Checklist Final

Antes de entregar:
- [ ] Banco de dados criado e populado
- [ ] Server rodando sem erros
- [ ] Todas as 5 páginas acessíveis
- [ ] CRUD funcionando para todas as entidades
- [ ] Relacionamentos funcionando (técnico em time, jogador em time)
- [ ] Imagens/URLs sendo salvas corretamente
- [ ] Mensagens de sucesso/erro aparecendo
- [ ] Responsivo (testou em mobile)
- [ ] Git configurado com colaborador
- [ ] README com informações corretas

---

## 📞 Suporte

Se tiver dúvidas:
1. Verifique o README.md
2. Veja DIAGRAMA_BD.md para entender o banco
3. Consulte REQUISICOES_EXEMPLO.md para testar API
4. Procure no console do navegador (F12)
5. Verifique logs do servidor no terminal

---

## 🎉 Você Está Pronto!

Parabéns! Você tem um sistema de futsal completo e funcional. 

**Boa sorte na sabatina! 💪⚽**
