export const APP_LOADING = 'APP_LOADING'
export const APP_DONE_LOADING = 'APP_DONE_LOADING'

export const appIsLoading = () => {
    return {
        type: APP_LOADING
    }
}

export const appIsDoneLoading = () => {
    return {
        type: APP_DONE_LOADING
    }
}