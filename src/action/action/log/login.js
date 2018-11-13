import * as ActionType from "../../actionType/index"

export const login = (from, data) => {
    return {
        type: ActionType.LOGIN,
        payload: {
            from,
            data
        }
    };
};
