import { appLoading, appLoaded } from "./appStatus";

export const setNumbers = numbers => {
    return {
        type: "SET_NUMBERS",
        payload: numbers
    }
}