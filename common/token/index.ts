import store from "store";

export const localToken = () => {
    return store.get('accessToken')
}