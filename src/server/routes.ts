// import * as express from 'express';
import Database from './database';
import { listAllClients } from './database/client';

var express = require('express');
const router = express.Router();

// var app = express();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/api/hello', (req: any, res: any, next: any) => {
    res.json('Rahman');
});
router.get('/api/orders', async(req: any, res: any) => {
    try {
     //   console.log(" made it here");
        let orders = await Database.Orders.listAllOrders();
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
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
        // console.log(drugs);
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
        // console.log(drugs);
        res.json(drugs);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})
router.put('/api/getAllClientOrders', async(req: any, res: any) => {
    try {
        console.log(req + "\\\\\\\\\\\\\\\\\\ \n");
        let usernames =  req.body.username;
     
        let passwords = req.body.password;
        let type = '';
        
        console.log(usernames + " yuhhhh \n");

        let user = await Database.Orders.findClientOrders({clientUsername: usernames});
        console.log(" made it here");
        console.log(JSON.stringify(user));
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/api/getAllPharmaOrders', async(req: any, res: any) => {
    try {
        const statusToFetch: Number = 1;

        let orders = await Database.Orders.listStatusOrders({status: statusToFetch});
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/api/getAllClients', async(req: any, res: any) => {
    try {
        let orders = await Database.Client.listAllClients();
        // let orders = await Database.Orders.listAllOrders();
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
router.put('/api/reduceDrugStock', async(req: any, res: any) => {
    try {
        let drugid = req.body.id;
        let reduceBy = +req.body.amount;

        let result = await Database.Drugs.getStock(drugid);
        let currStock = result[0].stock;
        let newStock = currStock - reduceBy;

        result = await Database.Drugs.setStock({id: drugid, stock: newStock});

        console.log(JSON.stringify(currStock) + " new: " + newStock);
        
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/addDrugStock', async(req: any, res: any) => {
    try {
        let drugid = req.body.id;
        let addAmount = +req.body.amount;

        let result = await Database.Drugs.getStock(drugid);
        let currStock = result[0].stock;
        let newStock = currStock + addAmount;

        result = await Database.Drugs.setStock({id: drugid, stock: newStock});

        console.log(JSON.stringify(currStock) + " new: " + newStock);
        
        res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/api/getDrugStock', async(req: any, res: any) => {
    try {

        let id = req.body.id;

        let result = await Database.Drugs.getStock(id);
        // console.log(JSON.stringify(result));
        res.json(result);

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
router.put('/api/pharmacistChangeOrder', async(req: any, res: any) => {
    try {
        let orderid = req.body.id;
        let statusToSet = req.body.status;
        console.log("changed status of order: " + orderid + " to: " + statusToSet);

        let deleteResult = await Database.Orders.changeStatus({id: orderid, status: statusToSet});
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
        } else if(req.body.type == 'Client'){
            type = 'client';
        } else if(req.body.type == 'Driver'){
            type = 'driver';
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

router.put('/api/addOrder', async(req,res)=>{
     console.log("in addORDER");
    try{
        console.log(req);
        const orderid = req.body.orderid;
        const drugid = req.body.drugid;
        const amount = req.body.amount;
        const drugname = req.body.drugname;
        const status = req.body.status;
        const drugprice = req.body.drugPrice;
        const clientUsername = req.body.clientName; 
        console.log(orderid + drugid);
        let user = await Database.Orders.addOrder({ orderid: orderid, drugid: drugid,
            amount: amount,
            drugname: drugname,
            status: status,
            drugprice: drugprice,
           clientUsername: clientUsername});
       // let client = await Database.Client.enterToDataBase({birthdates: birthdate,fnames: fname, minits: minit, lnames:lname, AHNS: AHN, ICNames: ICName, usernames: username});
    }catch(error){
        console.log(error);
    }
})

router.get('/api/healthrecords', async(req: any, res: any) => {
    try {
      //  console.log(" made it here -------");
        let healthrecords = await Database.HealthRecords.listAllRecords();
       // console.log(" made it here ------- mmmm");
        res.json(healthrecords);
       // console.log("yuhhhhh kelvin is gay");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/api/getOrderId', async(req: any, res: any) => {
    try {
      //  console.log(" made it here -------");
        let orderId = await Database.Orders.getMaxId();
       // console.log(" made it here ------- mmmm");
        res.json(orderId);
       // console.log("yuhhhhh kelvin is gay");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/api/getClientdrugIds', async(req: any, res: any) => {
    try {
      //  console.log(" made it here -------");
        const clientUsername = req.body.username;
        let orderId = await Database.Prescriptions.getClientdrugIds({clientUsername: clientUsername});
       // console.log(" made it here ------- mmmm");
        res.json(orderId);
       // console.log("yuhhhhh kelvin is gay");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
export default router;
