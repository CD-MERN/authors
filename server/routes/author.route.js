const AuthorController = require('../controllers/author.controller');

module.exports = app => {
  app.get('/api/authors', AuthorController.all)
  app.post('/api/authors/create', AuthorController.create);
  app.get('/api/authors/:id', AuthorController.find);
  app.put('/api/authors/:id', AuthorController.update);
  app.delete('/api/authors/:id', AuthorController.delete);
};