import {Connection} from './index';

export const validate = async (req: any) => {

    const username = req.username;
    const password = req.password;
    const type = req.userType;

    const query = 'SELECT * from users WHERE BINARY username = ? AND password = ? AND type = ?';
    const args = [username, password, type];

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

export const addUser = async (req: any) => {

    const password = req.passwords;
    const username = req.usernames;

    const query = 'INSERT INTO `users` (`username`,`password`,`type`)'+ 'VALUES(?,?,?)';
    const args = [username, password,"client"];

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
    validate, addUser
}