import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {atomWithProxy} from 'jotai/valtio'; //
import {proxy} from 'valtio/vanilla'; //

const userProxyState = proxy({});

const userProxyAtom = atomWithProxy(userProxyState);

const userAtomWithStorage = atomWithStorage('user', {}, {
    ...createJSONStorage(() => localStorage),
    delayInit: true,
})

export {
    userAtomWithStorage,
    userProxyState,
    userProxyAtom
};
