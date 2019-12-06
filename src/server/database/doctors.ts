import {Connection} from './index';

export const getDocId = async (req: any) => {

    const username = req.username;

    const query = 'SELECT `docId` from doctors WHERE BINARY docUsername = ?';
    const args = [username];

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

export const getAllDocIds = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT docId FROM doctors', (err, result) => {
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
    getDocId,
    getAllDocIds
}