-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS futsal_db;

-- Tabela de Técnicos (1:1 com Time)
CREATE TABLE tecnico (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  telefone VARCHAR(15),
  licenca VARCHAR(50),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Competições (Tabela independente)
CREATE TABLE competicao (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  data_inicio DATE,
  data_fim DATE,
  local VARCHAR(100),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Times (1:N com Jogador, 1:1 com Técnico)
CREATE TABLE time (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cidade VARCHAR(100),
  id_tecnico INTEGER UNIQUE REFERENCES tecnico(id) ON DELETE SET NULL,
  logo VARCHAR(255),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Jogadores (N:1 com Time)
CREATE TABLE jogador (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  numero INTEGER NOT NULL,
  posicao VARCHAR(50),
  id_time INTEGER REFERENCES time(id) ON DELETE CASCADE,
  data_nascimento DATE,
  foto VARCHAR(255),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de Técnicos
INSERT INTO tecnico (nome, email, telefone, licenca) VALUES
('Carlos Silva', 'carlos@email.com', '11987654321', 'CBV-001'),
('Ana Costa', 'ana@email.com', '11912345678', 'CBV-002'),
('Roberto Mendes', 'roberto@email.com', '11998765432', 'CBV-003'),
('Fernanda Dias', 'fernanda@email.com', '11945678901', 'CBV-004'),
('Marcelo Souza', 'marcelo@email.com', '11956789012', 'CBV-005'),
('Juliana Lima', 'juliana@email.com', '11967890123', 'CBV-006'),
('Paulo Santos', 'paulo@email.com', '11978901234', 'CBV-007'),
('Beatriz Oliveira', 'beatriz@email.com', '11989012345', 'CBV-008'),
('Diego Alves', 'diego@email.com', '11910234567', 'CBV-009'),
('Camila Rocha', 'camila@email.com', '11921345678', 'CBV-010');

-- Inserção de Competições
INSERT INTO competicao (nome, descricao, data_inicio, data_fim, local) VALUES
('Campeonato Paulista 2026', 'Principal campeonato estadual de futsal', '2026-03-01', '2026-11-30', 'São Paulo, SP'),
('Copa da Liga 2026', 'Competição de times profissionais', '2026-04-15', '2026-09-15', 'Várias cidades'),
('Torneio Amador Regional', 'Competição para times amadores', '2026-05-01', '2026-08-31', 'Região Metropolitana'),
('Seletiva Nacional', 'Escolha de atletas para seleção', '2026-02-10', '2026-06-30', 'Rio de Janeiro, RJ'),
('Campeonato Interclubes', 'Competição entre os principais clubes', '2026-06-01', '2026-10-31', 'Diversas cidades'),
('Liga Futsal 2026', 'Série A do futsal brasileiro', '2026-01-20', '2026-12-15', 'Brasil inteiro'),
('Taça Brasil Futsal', 'Taça nacional de futsal', '2026-03-15', '2026-11-20', 'Diversas cidades'),
('Torneio de Desenvolvimento', 'Para jogadores jovens', '2026-04-01', '2026-09-30', 'São Paulo, SP'),
('Campeonato Municipal', 'Competição local de futsal', '2026-05-15', '2026-10-15', 'Cidade local'),
('Amistoso Internacional', 'Jogos de preparação com seleções', '2026-02-01', '2026-07-31', 'Várias cidades');

-- Inserção de Times
INSERT INTO time (nome, cidade, id_tecnico, logo) VALUES
('Time A - Falcões', 'São Paulo', 1, '/images/falcoes-logo.png'),
('Time B - Águias', 'Rio de Janeiro', 2, '/images/aguias-logo.png'),
('Time C - Tigres', 'Belo Horizonte', 3, '/images/tigres-logo.png'),
('Time D - Leões', 'Brasília', 4, '/images/leoes-logo.png'),
('Time E - Dragões', 'Salvador', 5, '/images/dragoes-logo.png'),
('Time F - Fênix', 'Recife', 6, '/images/fenix-logo.png'),
('Time G - Corvos', 'Curitiba', 7, '/images/corvos-logo.png'),
('Time H - Gaviões', 'Porto Alegre', 8, '/images/gavioes-logo.png'),
('Time I - Grifo', 'Fortaleza', 9, '/images/grifo-logo.png'),
('Time J - Jaguares', 'Manaus', 10, '/images/jaguares-logo.png');

-- Inserção de Jogadores para Time A
INSERT INTO jogador (nome, numero, posicao, id_time, data_nascimento, foto) VALUES
('João Silva', 1, 'Goleiro', 1, '1995-03-15', '/images/joao-silva.png'),
('Pedro Costa', 2, 'Fixo', 1, '1998-07-22', '/images/pedro-costa.png'),
('Lucas Santos', 3, 'Ala Direita', 1, '2000-11-10', '/images/lucas-santos.png'),
('Carlos Oliveira', 4, 'Ala Esquerda', 1, '1999-05-18', '/images/carlos-oliveira.png'),
('Rafael Mendes', 5, 'Pivô', 1, '1997-09-25', '/images/rafael-mendes.png'),
('Matheus Lima', 6, 'Fixo', 1, '2001-01-08', '/images/matheus-lima.png'),
('Diego Alves', 7, 'Ala Direita', 1, '1996-04-12', '/images/diego-alves.png'),
('André Souza', 8, 'Ala Esquerda', 1, '1998-08-30', '/images/andre-souza.png'),
('Felipe Rocha', 9, 'Pivô', 1, '1999-06-19', '/images/felipe-rocha.png'),
('Gustavo Dias', 10, 'Fixo', 1, '2000-02-27', '/images/gustavo-dias.png');

-- Inserção de Jogadores para Time B
INSERT INTO jogador (nome, numero, posicao, id_time, data_nascimento, foto) VALUES
('Bruno Silva', 1, 'Goleiro', 2, '1994-08-14', '/images/bruno-silva.png'),
('Ricardo Santos', 2, 'Fixo', 2, '1997-12-03', '/images/ricardo-santos.png'),
('Thiago Costa', 3, 'Ala Direita', 2, '1999-10-21', '/images/thiago-costa.png'),
('Fabio Oliveira', 4, 'Ala Esquerda', 2, '2000-04-09', '/images/fabio-oliveira.png'),
('Marcelo Gomes', 5, 'Pivô', 2, '1996-06-17', '/images/marcelo-gomes.png'),
('Vinícius Lima', 6, 'Fixo', 2, '2001-03-11', '/images/vinicius-lima.png'),
('Leandro Souza', 7, 'Ala Direita', 2, '1998-09-28', '/images/leandro-souza.png'),
('Rodrigo Dias', 8, 'Ala Esquerda', 2, '1997-07-05', '/images/rodrigo-dias.png'),
('Fernando Rocha', 9, 'Pivô', 2, '1999-11-13', '/images/fernando-rocha.png'),
('Alexandre Teixeira', 10, 'Fixo', 2, '2000-05-22', '/images/alexandre-teixeira.png');

-- Inserção de Jogadores para Times C a J (3 jogadores por time)
INSERT INTO jogador (nome, numero, posicao, id_time, data_nascimento, foto) VALUES
('Time C - Goleiro', 1, 'Goleiro', 3, '1995-01-10', '/images/tc-g1.png'),
('Time C - Fixo', 2, 'Fixo', 3, '1998-03-15', '/images/tc-f1.png'),
('Time C - Ala', 3, 'Ala Direita', 3, '2000-05-20', '/images/tc-a1.png'),
('Time D - Goleiro', 1, 'Goleiro', 4, '1996-02-14', '/images/td-g1.png'),
('Time D - Fixo', 2, 'Fixo', 4, '1998-04-18', '/images/td-f1.png'),
('Time D - Ala', 3, 'Ala Esquerda', 4, '2000-06-22', '/images/td-a1.png'),
('Time E - Goleiro', 1, 'Goleiro', 5, '1997-03-12', '/images/te-g1.png'),
('Time E - Fixo', 2, 'Fixo', 5, '1998-05-19', '/images/te-f1.png'),
('Time E - Ala', 3, 'Ala Direita', 5, '2000-07-24', '/images/te-a1.png'),
('Time F - Goleiro', 1, 'Goleiro', 6, '1994-04-11', '/images/tf-g1.png'),
('Time F - Fixo', 2, 'Fixo', 6, '1998-06-20', '/images/tf-f1.png'),
('Time F - Ala', 3, 'Ala Esquerda', 6, '2000-08-25', '/images/tf-a1.png'),
('Time G - Goleiro', 1, 'Goleiro', 7, '1995-05-13', '/images/tg-g1.png'),
('Time G - Fixo', 2, 'Fixo', 7, '1998-07-21', '/images/tg-f1.png'),
('Time G - Ala', 3, 'Ala Direita', 7, '2000-09-26', '/images/tg-a1.png'),
('Time H - Goleiro', 1, 'Goleiro', 8, '1996-06-14', '/images/th-g1.png'),
('Time H - Fixo', 2, 'Fixo', 8, '1998-08-22', '/images/th-f1.png'),
('Time H - Ala', 3, 'Ala Esquerda', 8, '2000-10-27', '/images/th-a1.png'),
('Time I - Goleiro', 1, 'Goleiro', 9, '1997-07-15', '/images/ti-g1.png'),
('Time I - Fixo', 2, 'Fixo', 9, '1998-09-23', '/images/ti-f1.png'),
('Time I - Ala', 3, 'Ala Direita', 9, '2000-11-28', '/images/ti-a1.png'),
('Time J - Goleiro', 1, 'Goleiro', 10, '1994-08-16', '/images/tj-g1.png'),
('Time J - Fixo', 2, 'Fixo', 10, '1998-10-24', '/images/tj-f1.png'),
('Time J - Ala', 3, 'Ala Esquerda', 10, '2000-12-29', '/images/tj-a1.png');
