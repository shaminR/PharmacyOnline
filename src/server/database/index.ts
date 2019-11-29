import * as mysql from 'mysql';
import config from '../config';
import Drugs from './drugs';
import Users from './users';
import HealthRecords from './healthRecords';


export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err){
        console.log(err);
    }
});

export default {
    Drugs,
    Users,
    HealthRecords
}
