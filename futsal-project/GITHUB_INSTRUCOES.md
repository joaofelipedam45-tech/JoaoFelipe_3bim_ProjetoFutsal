# Instruções - Configurar Git e GitHub

## 📦 Primeira Vez com Git?

### 1. Configurar Git Globalmente
```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu.email@exemplo.com"
```

Verifique:
```bash
git config --global --list
```

---

## 🌐 Criar Repositório no GitHub

### Passo 1: Criar Repositório
1. Acesse https://github.com/new
2. **Nome do repositório**: `SeuNome_3bim_futsal`
   - Exemplo: `JoaoSilva_3bim_futsal`
3. **Descrição**: "Sistema de Gerenciamento de Futsal - DW1"
4. **Privado ou Público**: Escolha conforme preferir
5. Clique em **Create repository**

### Passo 2: Copiar URL do Repositório
```
https://github.com/seu-usuario/SeuNome_3bim_futsal.git
```

---

## 💻 Enviar Código para GitHub

### Opção A: Se ainda não tem repositório local inicializado

```bash
# Entre na pasta do projeto
cd futsal-project

# Inicialize o git
git init

# Adicione como remoto
git remote add origin https://github.com/seu-usuario/SeuNome_3bim_futsal.git

# Configure a branch principal
git branch -M main

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Projeto inicial - Futsal Manager"

# Envie para GitHub
git push -u origin main
```

### Opção B: Se clonou de um repositório existente

```bash
# Entre na pasta
cd futsal-project

# Altere a URL remota
git remote set-url origin https://github.com/seu-usuario/SeuNome_3bim_futsal.git

# Faça o push
git push -u origin main
```

---

## 👥 Adicionar Colaborador

### Passo 1: No GitHub
1. Acesse seu repositório
2. Clique em **Settings**
3. Clique em **Collaborators** (na barra esquerda)
4. Clique em **Add people**
5. Digite: `rjhalmeman@gmail.com`
6. Clique em **Select a collaborator above**
7. Clique em **Add** para confirmar

### Verificar se foi adicionado
- Acesse **Settings > Collaborators**
- Você deve ver `rjhalmeman` com status "Pending invite"

---

## 📝 Fluxo de Commits Recomendado

### Commit 1: Estrutura Base
```bash
git add .
git commit -m "Estrutura inicial do projeto MVC"
git push
```

### Commit 2: Banco de Dados
```bash
git add database/
git commit -m "Script DDL e dados iniciais do banco"
git push
```

### Commit 3: Controllers e Routes
```bash
git add controllers/ routes/
git commit -m "Implementar CRUD completo"
git push
```

### Commit 4: Frontend
```bash
git add views/ public/
git commit -m "Páginas HTML e CSS responsivo"
git push
```

### Commit 5: Documentação
```bash
git add README.md DIAGRAMA_BD.md CHECKLIST_REQUISITOS.md
git commit -m "Documentação completa do projeto"
git push
```

---

## 🔄 Atualizar Código (Depois de modificações)

### Verificar Status
```bash
git status
```

### Adicionar Mudanças Específicas
```bash
# Arquivo específico
git add controllers/tecnicoController.js

# Pasta inteira
git add views/

# Todos os arquivos
git add .
```

### Fazer Commit
```bash
git commit -m "Descrição clara da mudança"
```

### Enviar para GitHub
```bash
git push
```

---

## ⚙️ Ignorar Arquivos Corretamente

O `.gitignore` já está configurado com:
```
node_modules/
.env
.DS_Store
logs/
```

✅ Isso significa que `.env` e `node_modules/` não serão enviados ao GitHub.

---

## 🔑 Autenticação (Token de Acesso)

Se receber erro de autenticação:

### Gerar Token no GitHub
1. Acesse https://github.com/settings/tokens
2. Clique em **Generate new token**
3. Marque as permissões:
   - `repo` (acesso completo ao repositório)
   - `workflow` (para CI/CD)
4. Clique em **Generate token**
5. **Copie o token** (não será mostrado novamente)

### Usar o Token
Quando pedir senha no Git:
- **User**: seu username do GitHub
- **Password**: Cole o token copiado

### Ou use SSH (Mais Seguro)

**Gerar chave SSH:**
```bash
ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
# Pressione Enter para todas as perguntas (ou defina passphrase)
```

**Adicionar ao SSH-agent:**
```bash
# Mac/Linux
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Windows (Git Bash)
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519
```

**Adicionar chave ao GitHub:**
1. Acesse https://github.com/settings/keys
2. Clique em **New SSH key**
3. Cole o conteúdo de `~/.ssh/id_ed25519.pub`
4. Clique em **Add SSH key**

**Usar SSH ao clonar:**
```bash
git clone git@github.com:seu-usuario/SeuNome_3bim_futsal.git
```

---

## 🔍 Verificar Histórico de Commits

```bash
# Ver últimos commits
git log

# Ver mais compacto
git log --oneline

# Ver com gráfico de branches
git log --graph --oneline --all

# Ver mudanças de um arquivo
git log -p views/index.html
```

---

## ↩️ Desfazer Mudanças

### Desfazer última mudança (ainda não commitada)
```bash
git checkout -- arquivo.js
```

### Desfazer último commit (mantendo mudanças)
```bash
git reset HEAD~1
```

### Desfazer último commit (descartando mudanças)
```bash
git reset --hard HEAD~1
```

### Voltar a um commit específico
```bash
git revert <id-do-commit>
```

---

## 📊 Branch (Opcional para Projeto Único)

Se quiser usar branches:

```bash
# Criar nova branch
git checkout -b feature/crud-times

# Trabalhar normalmente
# ... fazer mudanças ...

# Fazer commits
git commit -m "Implementar CRUD de times"

# Voltar para main
git checkout main

# Mesclar branch
git merge feature/crud-times

# Deletar branch
git branch -d feature/crud-times

# Enviar tudo
git push -u origin main
```

---

## 🐛 Troubleshooting

### "fatal: not a git repository"
```bash
# Certifique-se de estar na pasta do projeto
cd futsal-project
# Se não tiver git, inicialize:
git init
```

### "Permission denied (publickey)"
- Problema de SSH
- Use HTTPS ou configure SSH corretamente

### "Your branch is ahead of 'origin/main'"
```bash
# Envie as mudanças
git push
```

### "Please commit your changes before switching branches"
```bash
# Faça commit das mudanças
git commit -am "Descrição das mudanças"
```

---

## ✅ Antes de Entregar

1. **Verificar estrutura:**
   ```bash
   git status
   ```
   Deve estar "working tree clean"

2. **Verificar commits:**
   ```bash
   git log --oneline
   ```
   Deve ter vários commits bem descritos

3. **Verificar colaborador:**
   - Acesse https://github.com/seu-usuario/SeuNome_3bim_futsal/settings/access
   - Confirme que `rjhalmeman` está adicionado

4. **Copiar URL do repositório:**
   - Clique em Code (verde)
   - Copie o link HTTPS
   - Esse é o link para enviar no formulário

---

## 📋 Checklist GitHub

- [ ] Repositório criado no GitHub
- [ ] URL copiada (https://github.com/...)
- [ ] .gitignore configurado
- [ ] Primeiro commit feito
- [ ] Código enviado (git push)
- [ ] Colaborador `rjhalmeman@gmail.com` adicionado
- [ ] Teste acessar via navegador (github.com/seu-usuario/...)
- [ ] Link pronto para enviar no formulário

---

## 🎯 Link Final para Enviar

Seu link terá este formato:
```
https://github.com/seu-usuario/SeuNome_3bim_futsal
```

**Este é o link que você enviará no formulário oficial:**
https://forms.gle/TYXB1qsmaCk3e2nq5

---

## 💡 Dicas Finais

1. **Faça commits frequentes** (não deixe tudo para o final)
2. **Escreva mensagens claras** nos commits
3. **Nunca commite informações sensíveis** (.env vai no .gitignore)
4. **Teste tudo antes de fazer push**
5. **Verifique o repositório no navegador** para confirmar que tudo está lá

---

**Pronto! Seu projeto está no GitHub e compartilhado com o professor! 🚀**
