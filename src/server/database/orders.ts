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

export default {
   listAllOrders,
   findClientOrders,
   changeStatus,
   listStatusOrders
}