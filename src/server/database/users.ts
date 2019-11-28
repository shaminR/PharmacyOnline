import {Connection} from './index';

export const validate = async (req: any) => {

    const username = req.username;
    const password = req.password;

    const query = 'SELECT * from users WHERE username = ? AND password = ?';
    const args = [username, password];

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

export default{
    validate
}