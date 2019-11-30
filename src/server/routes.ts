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

router.put('/api/signup', async(req,res)=>{
    console.log("in signup");
    try{
        const fname = req.body.fname;
        const password = req.body.password;
        const username = req.body.username;
        const AHN = req.body.AHN;
        const minit = req.body.minit;
        const lname = req.body.lname;
        const ICName = req.body.ICName; 
        const birthdate= (req.body.month) +"/"+(req.body.day)+"/"+(req.body.year);
         
        let user = await Database.addUser.addUser({passwords: password, usernames: username})
        let client = await Database.Client.enterToDataBase({birthdates: birthdate,fnames: fname, minits: minit, lnames:lname, AHNS: AHN, ICNames: ICName})
    }catch(error){
        console.log(error);
    }
})


export default router;