import {proxyWithComputed} from "valtio/utils";
import memoize from "proxy-memoize";
import {parseUserData} from "../../types/user";

const userProxy = proxyWithComputed({
        user: parseUserData(),
        setUser: (data: any) => {
            userProxy.user = data
        }
    },
    {
        locale: memoize(snap => snap.user?.language?.substring(0, 2) || 'ja')
    });

export {
    userProxy
};
