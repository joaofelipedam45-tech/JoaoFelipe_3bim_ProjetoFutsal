const pool = require('../config/database');

// Listar todos os técnicos
exports.getTecnicos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tecnico ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obter técnico por ID
exports.getTecnicoById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM tecnico WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Técnico não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Criar novo técnico
exports.createTecnico = async (req, res) => {
  const { nome, email, telefone, licenca } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tecnico (nome, email, telefone, licenca) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, telefone, licenca]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar técnico
exports.updateTecnico = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, licenca } = req.body;
  try {
    const result = await pool.query(
      'UPDATE tecnico SET nome = $1, email = $2, telefone = $3, licenca = $4 WHERE id = $5 RETURNING *',
      [nome, email, telefone, licenca, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Técnico não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar técnico
exports.deleteTecnico = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tecnico WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Técnico não encontrado' });
    }
    res.json({ message: 'Técnico deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
