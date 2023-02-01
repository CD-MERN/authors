const Author = require('../models/author.model');


module.exports.all = (req, res) => {
  Author.find({})
    .then((authors) => res.json({ authors: authors }))
    .catch((error) => res.status(400).json({ message: "Something went wrong when get all authors", error: error }));
};

module.exports.create = (req, res) => {
  Author.create(req.body)
    .then((author) => res.json({ author: author }))
    .catch((error) =>res.status(400).json({ message: "Something went wrong when create a author", error: error }));
};

module.exports.find = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => res.json({ author: author }))
    .catch((error) => res.status(400).json({ message: "Something went wrong then find a author", error: error }));
};

module.exports.update = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then((author) => res.json({ author: author }))
    .catch((error) => res.status(400).json({ message: "Something went wrong when update author", error: error }));
};

module.exports.delete = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) => res.status(400).json({ message: "Something went wrong when delete author", error: error }));
};