import {Connection} from './index';

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

export default{
    addUser
}