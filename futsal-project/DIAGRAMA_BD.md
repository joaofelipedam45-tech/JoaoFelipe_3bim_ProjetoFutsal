# Diagrama do Banco de Dados - Futsal Manager

## Diagrama ER (Entity-Relationship)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FUTSAL MANAGER DATABASE                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────┐                    ┌──────────────────────┐
│    TÉCNICO          │                    │    COMPETIÇÃO        │
├─────────────────────┤                    ├──────────────────────┤
│ id (PK)          ◆  │                    │ id (PK)           ◆  │
│ nome             ★  │                    │ nome              ★  │
│ email               │                    │ descricao            │
│ telefone            │                    │ data_inicio          │
│ licenca             │                    │ data_fim             │
│ data_criacao        │                    │ local                │
└──────────────┬──────┘                    │ data_criacao         │
               │                          └──────────────────────┘
               │
               │ (1:1)
               │ UNIQUE
               │
               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                            TIME                                      │
├──────────────────────────────────────────────────────────────────────┤
│ id (PK)                                                           ◆  │
│ nome                                                              ★  │
│ cidade                                                               │
│ id_tecnico (FK UNIQUE) ──► REFERENCIA: tecnico(id)                  │
│ logo                                                                 │
│ data_criacao                                                         │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
                               │ (1:N)
                               │
                               ▼
                ┌──────────────────────────────────────┐
                │         JOGADOR                      │
                ├──────────────────────────────────────┤
                │ id (PK)                          ◆  │
                │ nome                             ★  │
                │ numero                           ★  │
                │ posicao                             │
                │ id_time (FK) ──► tecnico(id)        │
                │ data_nascimento                     │
                │ foto                                │
                │ data_criacao                        │
                └──────────────────────────────────────┘

Legend:
  ◆ = Primary Key (Chave Primária)
  ★ = NOT NULL (Campo Obrigatório)
  FK = Foreign Key (Chave Estrangeira)
  1:1 = Relacionamento Um para Um
  1:N = Relacionamento Um para Muitos
```

## Fluxo de Dados

### 1. Criar um Time com Técnico
```
1. Usuário preenche formulário em time.html
2. JavaScript faz POST request para /api/times
3. Servidor recebe em timeController.createTime()
4. Insere na tabela TIME com id_tecnico
5. Retorna o time criado
6. Frontend atualiza a lista
```

### 2. Associar Jogador a Time
```
1. Usuário preenche formulário em jogador.html
2. Seleciona um time do dropdown
3. JavaScript faz POST request para /api/jogadores
4. Servidor insere na tabela JOGADOR com id_time
5. Retorna o jogador criado
6. Frontend atualiza a lista
```

### 3. Consulta com JOIN (Times com Técnicos)
```
SELECT t.*, tc.nome as tecnico_nome
FROM time t
LEFT JOIN tecnico tc ON t.id_tecnico = tc.id
ORDER BY t.id;
```

### 4. Consulta com JOIN (Jogadores com Times)
```
SELECT j.*, t.nome as time_nome
FROM jogador j
LEFT JOIN time t ON j.id_time = t.id
ORDER BY j.id;
```

## Integridade Referencial

### Cascata de Exclusão
- **TIME → JOGADOR**: ON DELETE CASCADE
  - Ao deletar um time, todos seus jogadores são deletados
  
- **TECNICO → TIME**: ON DELETE SET NULL
  - Ao deletar um técnico, o campo id_tecnico fica NULL
  - Permite que times continuem existindo sem técnico

## Estatísticas do Banco

### Dados Iniciais
- **Técnicos**: 10 registros
- **Times**: 10 registros (cada com 1 técnico único)
- **Competições**: 10 registros
- **Jogadores**: 50+ registros (distribuídos entre times)

### Exemplo de Distribuição
```
Time A - Falcões: 10 jogadores
Time B - Águias: 10 jogadores
Times C-J: 3 jogadores cada = 24 jogadores
Total: 44 jogadores
```

## Consultas Comuns

### Listar times com técnicos
```sql
SELECT t.nome as time, tc.nome as tecnico
FROM time t
LEFT JOIN tecnico tc ON t.id_tecnico = tc.id;
```

### Listar jogadores de um time específico
```sql
SELECT * FROM jogador
WHERE id_time = 1
ORDER BY numero;
```

### Contar jogadores por time
```sql
SELECT t.nome, COUNT(j.id) as total_jogadores
FROM time t
LEFT JOIN jogador j ON t.id = j.id_time
GROUP BY t.id, t.nome;
```

### Listar competições futuras
```sql
SELECT * FROM competicao
WHERE data_inicio >= CURRENT_DATE
ORDER BY data_inicio;
```

## Normalização

O banco segue o padrão **3NF (Third Normal Form)**:

✓ **1NF**: Todos os atributos contêm apenas valores atômicos
✓ **2NF**: Não há dependências parciais de chave composta
✓ **3NF**: Não há dependências transitivas entre atributos não-chave

## Constraints

- **Chaves Primárias**: id (AUTO_INCREMENT)
- **Chaves Estrangeiras**: Relacionamentos com ON DELETE
- **UNIQUE**: id_tecnico em TIME (1:1 com TÉCNICO)
- **NOT NULL**: Campos obrigatórios marcados com ★
