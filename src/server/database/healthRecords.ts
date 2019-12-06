import {Connection} from './index';

export const listAllRecords = async () => {

    return new Promise((resolve, reject) => {
  
        Connection.query('SELECT * FROM healthrecords', (err, result) => {   
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

export const find = async (req: any) => {

    const username = req.username;
 
    const query = 'SELECT * from healthrecords WHERE username = ?';
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
    listAllRecords,
    find
}