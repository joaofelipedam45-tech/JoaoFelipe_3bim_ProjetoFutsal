# Exemplos de Requisições HTTP - Futsal Manager

Use estas requisições para testar a API com ferramentas como Postman, Insomnia ou cURL.

## TÉCNICOS

### Listar todos os técnicos
```http
GET http://localhost:3000/api/tecnicos
```

### Obter técnico específico
```http
GET http://localhost:3000/api/tecnicos/1
```

### Criar novo técnico
```http
POST http://localhost:3000/api/tecnicos
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "11987654321",
  "licenca": "CBV-001"
}
```

### Atualizar técnico
```http
PUT http://localhost:3000/api/tecnicos/1
Content-Type: application/json

{
  "nome": "João Silva Atualizado",
  "email": "joao.novo@email.com",
  "telefone": "11912345678",
  "licenca": "CBV-002"
}
```

### Deletar técnico
```http
DELETE http://localhost:3000/api/tecnicos/1
```

---

## TIMES

### Listar todos os times
```http
GET http://localhost:3000/api/times
```

### Obter time específico
```http
GET http://localhost:3000/api/times/1
```

### Criar novo time
```http
POST http://localhost:3000/api/times
Content-Type: application/json

{
  "nome": "Falcões Azuis",
  "cidade": "São Paulo",
  "id_tecnico": 1,
  "logo": "/images/falcoes-logo.png"
}
```

### Atualizar time
```http
PUT http://localhost:3000/api/times/1
Content-Type: application/json

{
  "nome": "Falcões Azuis Atualizado",
  "cidade": "Rio de Janeiro",
  "id_tecnico": 2,
  "logo": "/images/falcoes-novo.png"
}
```

### Deletar time
```http
DELETE http://localhost:3000/api/times/1
```

---

## JOGADORES

### Listar todos os jogadores
```http
GET http://localhost:3000/api/jogadores
```

### Obter jogador específico
```http
GET http://localhost:3000/api/jogadores/1
```

### Listar jogadores de um time
```http
GET http://localhost:3000/api/times/1/jogadores
```

### Criar novo jogador
```http
POST http://localhost:3000/api/jogadores
Content-Type: application/json

{
  "nome": "Cristiano Ronaldo",
  "numero": 7,
  "posicao": "Ala Direita",
  "id_time": 1,
  "data_nascimento": "1985-02-05",
  "foto": "/images/cristiano.png"
}
```

### Atualizar jogador
```http
PUT http://localhost:3000/api/jogadores/1
Content-Type: application/json

{
  "nome": "Cristiano Ronaldo",
  "numero": 10,
  "posicao": "Pivô",
  "id_time": 1,
  "data_nascimento": "1985-02-05",
  "foto": "/images/cristiano-novo.png"
}
```

### Deletar jogador
```http
DELETE http://localhost:3000/api/jogadores/1
```

---

## COMPETIÇÕES

### Listar todas as competições
```http
GET http://localhost:3000/api/competicoes
```

### Obter competição específica
```http
GET http://localhost:3000/api/competicoes/1
```

### Criar nova competição
```http
POST http://localhost:3000/api/competicoes
Content-Type: application/json

{
  "nome": "Campeonato Paulista 2026",
  "descricao": "Principal campeonato estadual de futsal",
  "data_inicio": "2026-03-01",
  "data_fim": "2026-11-30",
  "local": "São Paulo, SP"
}
```

### Atualizar competição
```http
PUT http://localhost:3000/api/competicoes/1
Content-Type: application/json

{
  "nome": "Campeonato Paulista 2027",
  "descricao": "Campeonato estadual atualizado",
  "data_inicio": "2027-03-01",
  "data_fim": "2027-11-30",
  "local": "São Paulo e Litoral, SP"
}
```

### Deletar competição
```http
DELETE http://localhost:3000/api/competicoes/1
```

---

## Testes com cURL

### Exemplo 1: Listar técnicos
```bash
curl -X GET http://localhost:3000/api/tecnicos
```

### Exemplo 2: Criar técnico
```bash
curl -X POST http://localhost:3000/api/tecnicos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Pedro Santos",
    "email": "pedro@email.com",
    "telefone": "11999999999",
    "licenca": "CBV-011"
  }'
```

### Exemplo 3: Atualizar técnico
```bash
curl -X PUT http://localhost:3000/api/tecnicos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Pedro Santos Atualizado",
    "email": "pedro.novo@email.com",
    "telefone": "11988888888",
    "licenca": "CBV-012"
  }'
```

### Exemplo 4: Deletar técnico
```bash
curl -X DELETE http://localhost:3000/api/tecnicos/1
```

---

## Respostas Esperadas

### Sucesso (201 - Created)
```json
{
  "id": 11,
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "11987654321",
  "licenca": "CBV-001",
  "data_criacao": "2026-09-30T10:30:00.000Z"
}
```

### Sucesso (200 - OK)
```json
{
  "message": "Técnico deletado com sucesso"
}
```

### Erro (404 - Not Found)
```json
{
  "error": "Técnico não encontrado"
}
```

### Erro (500 - Server Error)
```json
{
  "error": "Mensagem de erro do servidor"
}
```

---

## Dicas de Teste

1. **Comece pelos Técnicos**: Teste CRUD básico primeiro
2. **Depois Times**: Para entender relacionamentos 1:1
3. **Depois Jogadores**: Para entender relacionamentos 1:N
4. **Finalize com Competições**: Tabela independente

## Ferramentas Recomendadas

- **Postman**: https://www.postman.com/
- **Insomnia**: https://insomnia.rest/
- **Thunder Client** (VS Code): https://www.thunderclient.com/

## Validação de Dados

Certifique-se de que:
- ✓ Campos obrigatórios estão preenchidos
- ✓ Tipos de dados estão corretos
- ✓ IDs referenciados existem no banco
- ✓ Datas estão no formato YYYY-MM-DD
