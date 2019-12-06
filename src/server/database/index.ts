import * as mysql from 'mysql';
import config from '../config';
import Drugs from './drugs';
import Users from './users';
import Client from './client';
import Orders from './orders';
import Prescriptions from './prescriptions';
import HealthRecords from './healthRecords';
import IC from './IC';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err){
        console.log(err);
    }
});

export default {
    Drugs,
    Users,
    Client,
    HealthRecords,
    Orders,
    Prescriptions,
    IC,
}
