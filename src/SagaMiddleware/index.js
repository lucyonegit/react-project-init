import { takeEvery } from 'redux-saga/effects'

export default function* mySaga() {
    yield* [
        takeEvery(),
    ]

}