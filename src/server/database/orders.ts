import {Connection} from './index';

export const listAllOrders = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * FROM orders', (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export const driverDrugs = async()=>{
    console.log('in orders');
    const query = 'SELECT address, drugid, drugname FROM orders,client WHERE status = ? AND AHN = clientAHN';
    const args = [2];
    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve(result);
            }
        });
    });

}

export const changeState = async(req: any)=>{
    const id = req.id;

    const query ='UPDATE orders SET status = ? WHERE drugid = ?';
    const args = [0,id];
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


export const getMaxId = async () => {
    console.log("yassss betch \n");
    return new Promise((resolve, reject) => {
        Connection.query('SELECT MAX(`orderid`) as "orderid" FROM orders', (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}
export const findClientOrders = async (req: any) => {

    const username = req.clientUsername;
    console.log(username + " in orders.ts \n");
    const query = 'SELECT * from orders WHERE clientUsername = ?';
    const args = [username];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}
export const listStatusOrders = async (req: any) => {

    const status = req.status;
 
    const query = 'SELECT * from orders WHERE status = ?';
    const args = [status];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}

export const changeStatus = async (req: any) => {

    const id = req.id;
    const statusToSet = req.status;

    const query = 'UPDATE orders SET status = ? WHERE orderid = ?';
    const args = [statusToSet, id];

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

export const addOrder = async (req: any) => {
    console.log("in addORDER order.ts");
        const orderid = req.orderid;
        const drugid = req.drugid;
        const amount = req.amount;
        const drugname = req.drugname;
        const status = req.status;
        const drugprice = req.drugprice;
        const clientUsername = req.clientUsername;

    const query = 'INSERT INTO `orders` (`orderid`,`drugid`,`amount`, `drugname`, `status`, `drugprice`, `clientUsername`)'+ 
    'VALUES(?,?,?,?,?,?,?)';
    const args = [orderid, drugid,amount,drugname,status,drugprice,clientUsername];

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


export default {
   listAllOrders,
   findClientOrders,
   changeStatus,
   listStatusOrders,
   driverDrugs,
   changeState,
   addOrder,
   getMaxId,
}