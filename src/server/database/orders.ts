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

    const username = req.username;
 
    const query = 'SELECT * from orders WHERE clientAHN = ?';
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

export default {
   listAllOrders,
   findClientOrders
}