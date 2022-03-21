import {UserType} from '../HW8';


export type SortTypeAT = {
    type: 'SORT'
    payload: 'up' | 'down'
}
export type CheckTypeAT = {
    type: 'CHECK'
    payload: number
}

type ActionType = SortTypeAT | CheckTypeAT

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up')
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            else return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
        case 'CHECK':
            return state.filter(a => a.age >= action.payload)
        default:
            return state
    }
}