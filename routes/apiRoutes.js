const path = require('path');
const notes = require('../db/db');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.post('/api/notes', (req, res) => {

        req.body.id = uuidv4()

        notes.push(req.body)
        fs.readFile((__dirname + '/../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            fs.writeFile((__dirname + '/../db/db.json'), JSON.stringify(notes), err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        })
        res.json(notes);
    })

    app.get('/api/notes', (req, res) => {
        res.json(notes)
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log(req);
        res.json(notes)
    })

};