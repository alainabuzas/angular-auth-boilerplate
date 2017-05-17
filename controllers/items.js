var express = require('express');
var items = require('../models/items');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        Items.find(function(err, items) {
            if (err) return res.status(500).send(err);

            return res.send(items);
        });
    })
    .post(function(req, res) {
        Items.create(req.body, function(err, items) {
            if (err) return res.status(500).send(err);

            return res.send(items);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Items.findById(req.params.id, function(err, items) {
            if (err) return res.status(500).send(err);

            return res.send(items);
        });
    })
    .put(function(req, res) {
        Items.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    })
    .delete(function(req, res) {
        Items.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    });

module.exports = router;
