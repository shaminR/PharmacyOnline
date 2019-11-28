// import * as express from 'express';
import Database from './database';

var express = require('express');
const router = express.Router();

// var app = express();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/api/hello', (req, res, next) => {
    res.json('Rahman');
});

router.get('/api/drugs', async(req, res) => {
    try {
        console.log(" made it here");
        let drugs = await Database.Drugs.listAllDrugs();
        res.json(drugs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/users', async(req, res) => {
    try {
        console.log(" in users server");

        let username = req.body.username;
        let password = req.body.password;

        console.log(username);

        let user = await Database.Users.validate({username:'rahman', password: '8002'});
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
// router.get('/api/users', async(req, res) => {
//     try {
//         // let drugs = await Database.Drugs.listAllDrugs();
//         console.log(" << in server >> ")
//         let foo = req.body + " helooo ";
//         res.json(foo);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });


// router.use('/static', express.static(path.join(__dirname, 'public')))

export default router;