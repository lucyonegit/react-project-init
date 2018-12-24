import { takeEvery } from 'redux-saga/effects'
import { login } from "../action/action/log/login"
import { loginMethod } from "./Method/login"

export default function* mySaga() {
    yield* [
        takeEvery(login, loginMethod),
    ]

}