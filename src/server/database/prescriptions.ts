import {Connection} from './index';

export const getClientdrugIds = async (req: any) => {
    const username = req.clientUsername;
    //console.log("yassss betch \n");
    return new Promise((resolve, reject) => {
        const query = 'SELECT `drugid` from prescriptions WHERE clientUsername = ?';
        const args = [username];
        Connection.query(query, args, (err, result) => {
            if(err){
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export default {
    getClientdrugIds
 }