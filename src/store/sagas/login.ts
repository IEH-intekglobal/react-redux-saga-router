import { loginAction } from "../actions";
import { call } from "redux-saga/effects";
import router from '../../router';

export default function* login({payload}: ReturnType<typeof loginAction>){
    if(payload.username === 'admin' && payload.password ==="12345"){
        yield call(router.navigate,'/');
    } else {
        console.error('wrong credentials');
    }
}