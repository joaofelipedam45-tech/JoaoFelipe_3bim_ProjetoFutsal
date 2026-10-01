const pool = require('../config/database');

// Listar todos os jogadores
exports.getJogadores = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT j.*, t.nome as time_nome 
      FROM jogador j 
      LEFT JOIN time t ON j.id_time = t.id 
      ORDER BY j.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter jogador por ID
exports.getJogadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
      SELECT j.*, t.nome as time_nome 
      FROM jogador j 
      LEFT JOIN time t ON j.id_time = t.id 
      WHERE j.id = $1
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jogador não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter jogadores por time
exports.getJogadoresByTime = async (req, res) => {
  const { id_time } = req.params;
  try {
    const result = await pool.query(`
      SELECT j.*, t.nome as time_nome 
      FROM jogador j 
      LEFT JOIN time t ON j.id_time = t.id 
      WHERE j.id_time = $1
      ORDER BY j.numero
    `, [id_time]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo jogador
exports.createJogador = async (req, res) => {
  const { nome, numero, posicao, id_time, data_nascimento, foto } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO jogador (nome, numero, posicao, id_time, data_nascimento, foto) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, numero, posicao, id_time || null, data_nascimento || null, foto || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar jogador
exports.updateJogador = async (req, res) => {
  const { id } = req.params;
  const { nome, numero, posicao, id_time, data_nascimento, foto } = req.body;
  try {
    const result = await pool.query(
      'UPDATE jogador SET nome = $1, numero = $2, posicao = $3, id_time = $4, data_nascimento = $5, foto = $6 WHERE id = $7 RETURNING *',
      [nome, numero, posicao, id_time || null, data_nascimento || null, foto || null, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jogador não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar jogador
exports.deleteJogador = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM jogador WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jogador não encontrado' });
    }
    res.json({ message: 'Jogador deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
