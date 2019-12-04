// import * as express from 'express';
import Database from './database';

var express = require('express');
const router = express.Router();

// var app = express();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/api/hello', (req: any, res: any, next: any) => {
    res.json('Rahman');
});

router.get('/api/drugs', async(req: any, res: any) => {
    try {
     //   console.log(" made it here");
        let drugs = await Database.Drugs.listAllDrugs();
        res.json(drugs);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/api/change',async(req: any, res: any) =>{
    let ids = req.body.selected;
    try{
        let drugs = await Database.Orders.changeState({id: ids});
        console.log(drugs);
        res.json(drugs);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/api/driverDrugs',async(req: any, res: any) =>{
    console.log("in routes");
    try{
        let drugs = await Database.Orders.driverDrugs();
        console.log(drugs);
        res.json(drugs);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})



router.get('/api/getAllPharmaOrders', async(req: any, res: any) => {
    try {
     //   console.log(" made it here");
        let orders = await Database.Orders.listAllOrders();
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/healthrecords', async(req: any, res: any) => {
    try {
        let usernames = req.body.username;
        let passwords = req.body.password;
        let type = '';

        let user = await Database.HealthRecords.find({username: usernames});
        console.log(JSON.stringify(user));
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/deletedrug', async(req: any, res: any) => {
    try {
        let drugId = req.body;
        console.log(drugId);

        let deleteResult = await Database.Drugs.deleteDrug({drugid: drugId});
        res.json(deleteResult);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/adddrug', async(req: any, res: any) => {
    try {
        console.log(req.body);

        let insert = await Database.Drugs.addDrug(req.body);
        console.log(JSON.stringify(insert) + " <<< we out hereeee");
        res.json(insert);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/api/users', async(req: any, res: any) => {
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

router.put('/api/signup', async(req,res)=>{
    // console.log("in signup");
    try{
        const fname = req.body.fname;
        const password = req.body.password;
        const username = req.body.username;
        const AHN = req.body.AHN;
        const minit = req.body.minit;
        const lname = req.body.lname;
        const ICName = req.body.ICName; 
        const birthdate= (req.body.month) +"/"+(req.body.day)+"/"+(req.body.year);
         
        let user = await Database.Users.addUser({passwords: password, usernames: username});
        let client = await Database.Client.enterToDataBase({birthdates: birthdate,fnames: fname, minits: minit, lnames:lname, AHNS: AHN, ICNames: ICName, usernames: username});
    }catch(error){
        console.log(error);
    }
})

router.get('/api/healthrecords', async(req: any, res: any) => {
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

export default router;
