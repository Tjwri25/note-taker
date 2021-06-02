const path = require('path');
const noteData = require('../db/db');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.post('/api/notes', (req, res) => {
        req.body.id = uuidv4()

        noteData.push(req.body)
        fs.readFile((__dirname + '/../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            fs.writeFile((__dirname + '/../db/db.json'), JSON.stringify(noteData), err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        })
        res.json(noteData);
    })

    app.get('/api/notes', (req, res) => {
        res.json(noteData)
    });

    app.delete('/api/notes', (req, res) => {
        console.log(req);
        res.json(noteData)
    })

};
