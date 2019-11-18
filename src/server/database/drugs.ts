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

export default {
    listAllDrugs
}