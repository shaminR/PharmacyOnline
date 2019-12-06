import {Connection} from './index';

export const listAllDrugs = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * FROM drugs', (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export const getTypeDrug = async (req: any) => {
    const type = req.type;

    const query = 'SELECT * FROM drugs WHERE type = ?';
    const args = [type];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export const deleteDrug = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from drugs WHERE drugid = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}


export const deleteSpray = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from spray WHERE id = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}


export const deleteChewable = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from chewable WHERE id = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}


export const deleteSyrup = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from syrup WHERE id = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}


export const deletePill = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from pill WHERE id = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}


export const deleteOintment = async (req: any) => {

    const id = req.drugid;
    const query = 'DELETE from ointment WHERE id = ?';

    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}




export const getStock = async (req: any) => {

    const id = req;

    const query = 'SELECT * from drugs WHERE drugid = ?';
    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}
export const addDrug = async (req: any) => {

    const id = req.drugid;
    const name = req.drugName;
    const price = req.price;
    const year = req.expiryYear;
    const month = req.expiryMonth;
    const amount = req.stock;
    const type = req.type;

    const query = 'INSERT into drugs (drugid, drugName, price, expiryYear, expiryMonth, stock, type) values (?, ?, ?, ?, ?, ?, ?)';
    const args = [id, name, price, year, month, amount, type];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}

export const setStock = async(req: any)=>{
    const id = req.id;
    const stock = req.stock;

    const query ='UPDATE drugs SET stock = ? WHERE drugid = ?';
    const args = [stock, id];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}


export const addChewable = async(req: any)=>{
    const id = req.ids;
    const description = req.descriptions;
    const query ='INSERT into chewable (id,flavor) values (?, ?)';
    const args = [id, description];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}

export const addSpray = async(req: any)=>{
    const id = req.ids;
    const description = req.descriptions;
    const query ='INSERT into spray (id,intensity) values (?, ?)';
    const args = [id, description];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}
export const addOintment = async(req: any)=>{
    const id = req.ids;
    const description = req.descriptions;
    const query ='INSERT into ointment (id,concentration) values (?, ?)';
    const args = [id, description];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}
export const addPill = async(req: any)=>{
    const id = req.ids;
    const description = req.descriptions;
    const query ='INSERT into pill (id,size) values (?, ?)';
    const args = [id, description];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}
export const addSyrup = async(req: any)=>{
    const id = req.ids;
    const description = req.descriptions;
    const query ='INSERT into syrup (id,flavor) values (?, ?)';
    const args = [id, description];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}

export default {
    listAllDrugs,
    deleteDrug,
    addDrug,
    setStock,
    getStock,
    getTypeDrug,
    addChewable,
    addSpray,
    addOintment,
    addPill,
    addSyrup,
    deleteChewable,
    deleteOintment,
    deletePill,
    deleteSpray,
    deleteSyrup,
}