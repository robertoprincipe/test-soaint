import axios from 'axios';
//llamamos las path
import * as path from './path';

//variable ruta 
const absolutePath = (_path: string) => {
    return path.HOST + _path;
}

//creamos funciones de servicio con el API
export const getInfo = () => {	
    return new Promise((resolve:any, reject:any) => {
        const _absolutePath = absolutePath(path.GET_INFO);
        axios.get(_absolutePath).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        })
    });
}