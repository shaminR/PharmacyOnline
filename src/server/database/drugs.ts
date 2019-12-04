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

    const query = 'INSERT into drugs (drugid, drugName, price, expiryYear, expiryMonth, stock) values (?, ?, ?, ?, ?, ?)';
    const args = [id, name, price, year, month, amount];

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

export default {
    listAllDrugs,
    deleteDrug,
    addDrug,
    setStock,
    getStock
}