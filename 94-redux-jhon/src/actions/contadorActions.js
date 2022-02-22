import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

export const doIncrement = () => ({
    type: INCREMENT,
});

export const doDecrement = () => ({
    type: DECREMENT,
});

export const doIncrement5 = () => ({
    type: INCREMENT_5,
    payload: 5,
});

export const doDecrement5 = () => ({
    type: DECREMENT_5,
    payload: 5,
});

export const doReset = () => ({
    type: RESET,
});