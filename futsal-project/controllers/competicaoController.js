const pool = require('../config/database');

// Listar todas as competições
exports.getCompeticoes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM competicao ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter competição por ID
exports.getCompeticaoById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM competicao WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Competição não encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar nova competição
exports.createCompeticao = async (req, res) => {
  const { nome, descricao, data_inicio, data_fim, local } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO competicao (nome, descricao, data_inicio, data_fim, local) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, descricao || null, data_inicio || null, data_fim || null, local || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar competição
exports.updateCompeticao = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, data_inicio, data_fim, local } = req.body;
  try {
    const result = await pool.query(
      'UPDATE competicao SET nome = $1, descricao = $2, data_inicio = $3, data_fim = $4, local = $5 WHERE id = $6 RETURNING *',
      [nome, descricao || null, data_inicio || null, data_fim || null, local || null, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Competição não encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar competição
exports.deleteCompeticao = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM competicao WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Competição não encontrada' });
    }
    res.json({ message: 'Competição deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
