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
     //   console.log(" made it here");
        let drugs = await Database.Drugs.listAllDrugs();
        res.json(drugs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/healthrecords', async(req, res) => {
    try {
        let usernames = req.body.username;
        let passwords = req.body.password;
        let type = '';

        // if(req.body.type == 'Pharmacist'){
        //     type = 'pharma';
        // } else{
        //     type = 'client';
        // }

        let user = await Database.HealthRecords.find({username: usernames});
        console.log(JSON.stringify(user));
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/users', async(req, res) => {
    try {
        let usernames = req.body.username;
        let passwords = req.body.password;
        let type = '';

        if(req.body.type == 'Pharmacist'){
            type = 'pharma';
        } else{
            type = 'client';
        }

        let user = await Database.Users.validate({username: usernames, password: passwords, userType: type});
        console.log(JSON.stringify(user));
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/api/healthrecords', async(req, res) => {
    try {
        console.log(" made it here -------");
        let healthrecords = await Database.HealthRecords.listAllRecords();
        console.log(" made it here ------- mmmm");
        res.json(healthrecords);
        console.log("yuhhhhh kelvin is gay");
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