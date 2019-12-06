import {Connection} from './index';

export const getName = async(req: any)=>{
    const id = req.id;

    const query = 'SELECT name FROM company Where id=?';
    const args = [id];

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
    getName
 }