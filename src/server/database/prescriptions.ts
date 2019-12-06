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
export const getPrescribesTable = async (req: any) => {
    const username = req.clientUsername;
    //console.log("yassss betch \n");
    return new Promise((resolve, reject) => {
        //'SELECT drugid, amount, fname, drugname, address FROM orders,client WHERE status = ? AND clientuser = clientUsername';
        // const query = 'SELECT `drugid` from prescriptions WHERE clientUsername = ?';
        const query = 'SELECT p.drugid, p.prescripId, d.drugName from prescriptions as p, drugs as d WHERE clientUsername = ? AND d.drugid = p.drugid';
        const args = [username];
        Connection.query(query, args, (err, result) => {
            console.log(result);
            console.log("after query");
            if(err){
                return reject(err);
            }
            else
                resolve(result);
        });
    });
}

export const deletePrescribe = async (req: any) => {

    const id = req;

    const query = 'DELETE from prescriptions WHERE prescripId = ?';
    const args = [id];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}
export const getMaxId = async () => {
    console.log("in get max id for prescibes");
    return new Promise((resolve, reject) => {
        Connection.query('SELECT MAX(`prescripId`) as "id" FROM prescriptions', (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve(result); 
        });
    });
}

export const addPrescription = async (req: any) => {

    const id = req.id;
    const drugid = req.drugid;
    const user = req.user;

    const query = 'INSERT into prescriptions (prescripId, clientUsername, drugid) values (?, ?, ?)';
    const args = [id, user, drugid];

    return new Promise((resolve, reject) => {
        Connection.query(query, args, (err, result) => {
            if(err){
                console.log('error in query');
                return reject(err);
            }
            else
                resolve("sucess");
        });
    });
}
export default {
    getClientdrugIds, 
    getPrescribesTable,
    deletePrescribe,
    getMaxId,
    addPrescription,   
 }