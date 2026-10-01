const pool = require('../config/database');

// Listar todos os times
exports.getTimes = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT t.*, tc.nome as tecnico_nome 
      FROM time t 
      LEFT JOIN tecnico tc ON t.id_tecnico = tc.id 
      ORDER BY t.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter time por ID
exports.getTimeById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
      SELECT t.*, tc.nome as tecnico_nome 
      FROM time t 
      LEFT JOIN tecnico tc ON t.id_tecnico = tc.id 
      WHERE t.id = $1
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo time
exports.createTime = async (req, res) => {
  const { nome, cidade, id_tecnico, logo } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO time (nome, cidade, id_tecnico, logo) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, cidade, id_tecnico || null, logo || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar time
exports.updateTime = async (req, res) => {
  const { id } = req.params;
  const { nome, cidade, id_tecnico, logo } = req.body;
  try {
    const result = await pool.query(
      'UPDATE time SET nome = $1, cidade = $2, id_tecnico = $3, logo = $4 WHERE id = $5 RETURNING *',
      [nome, cidade, id_tecnico || null, logo || null, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar time
exports.deleteTime = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM time WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Time não encontrado' });
    }
    res.json({ message: 'Time deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
