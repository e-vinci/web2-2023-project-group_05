const express = require('express');

const { selectAllTopic, addTopic } = require('../models/topic');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await selectAllTopic();
    return res.json(categories);
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des sujets :", error.message);
    res.status(500).send('Erreur serveur');
  }
  return undefined;
});

router.post('/topic/add', async (req, res) => {
  const { titre, description, image } = req.body;

  // Vérifiez si les champs requis sont présents dans la requête
  if (!titre || !description || !image) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    // Appelez la fonction addTopic avec les nouvelles informations
    const result = await addTopic({ titre, description, image });
    return res.json({ success: true, message: 'Sujet ajouté avec succès', result });
  } catch (error) {
    console.error("Une erreur s'est produite lors de l'ajout du sujet :", error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
  return undefined;
});

module.exports = router;
