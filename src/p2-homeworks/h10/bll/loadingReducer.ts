const initState: InitialStateType = {
isLoading:false
}

export const loadingReducer = (state: InitialStateType = initState, action: LoadingActionType): InitialStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state,isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {type: 'LOADING',isLoading}
}

export type LoadingActionType = {
    type: 'LOADING'
    isLoading:boolean
}
export type InitialStateType = {
    isLoading: boolean
}