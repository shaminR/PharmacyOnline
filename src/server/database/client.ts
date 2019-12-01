import {Connection} from './index';

export const enterToDataBase = async (req: any) => {

    const password = req.passwords;
    const fname = req.fnames;
    const minit = req.minits;
    const lname = req.lnames;
    const AHN = req. AHNS;
    const ICName = req.ICNames;
    const birthdate = req.birthdates;
    const username = req.usernames;

    const query = 'INSERT INTO `client` (`AHN`,`birthdate`,`fname`,`minit`,`lname`,`ICName`, `clientuser`)'+ 'VALUES(?,?,?,?,?,?,?)';
    const args = [AHN, birthdate,fname,minit,lname,ICName,username];

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
    enterToDataBase
}