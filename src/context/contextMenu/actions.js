import {HIDE_CONTEXT, SHOW_CONTEXT} from "../types";

export const showContextByMyMessage = e => ({
    type: SHOW_CONTEXT,
    payload: {
        items: ['копировать', 'редактировать', 'удалить'],
        coords: {x: e.clientX, y: e.clientY}
    }
})

export const showContextByNotMyMessage = e => ({
    type: SHOW_CONTEXT,
    payload: {
        items: ['копировать'],
        coords: {x: e.clientX, y: e.clientY}
    }
})

export const hideContextByMessage = () => ({type: HIDE_CONTEXT})

