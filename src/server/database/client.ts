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
    const docId = req.docId;
    const address = req.addresss;

    const query = 'INSERT INTO `client` (`AHN`,`birthdate`,`fname`,`minit`,`lname`,`ICName`, `clientuser`, `docId`, `address`)'+ 'VALUES(?,?,?,?,?,?,?,?,?)';
    const args = [AHN, birthdate,fname,minit,lname,ICName,username, docId, address];
    
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

export const listAllClients = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * FROM client', (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export const getICName = async(req:any) => {
    const name = req.names;

    console.log(name + " dickkk ");

    const query = 'SELECT * FROM client WHERE clientuser = ?';
    const args = [name];

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
    enterToDataBase,
    listAllClients,
    getICName,
}