const db = require('./db_conf');

async function selectAllTopic() {
  const selectQuery = 'SELECT * FROM sujets';
  const selectStatement = db.prepare(selectQuery);

  try {
    const result = await selectStatement.all();
    // Vous pouvez renvoyer le résultat ou effectuer d'autres opérations
    return result;
  } catch (error) {
    console.error('Erreur lors de la sélection de tous les sujets :', error.message);
    throw error;
  }
}

async function addTopic(topic) {
  const insertQuery = 'INSERT INTO sujets (nom) VALUES (?)';

  try {
    const result = await db.query(insertQuery, [topic]);
    // Vous pouvez renvoyer le résultat ou toute autre information pertinente
    return result;
  } catch (error) {
    console.error("Erreur lors de l'ajout du sujet :", error.message);
    throw error;
  }
}

module.exports = { selectAllTopic, addTopic };
