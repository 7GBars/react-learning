import React, {memo, useContext, useState} from 'react';
import {useUserStatus} from "../../customHooks";

import './userInfo.scss';
import {useAppContext} from "../contextWrapper/ThemeContextProviderWrapper";

type TUserInfo = {
    name: string;
    getUserInfoCallback?: (id: string, name: string) => void;
}
export const UserInfo = memo((props: React.PropsWithChildren<TUserInfo>) => {
    const {theme, setTheme} = useAppContext();
    const [localState, setLocalState] = useState(0);
  console.log('render UserInfo', theme);

    return (
        <div className={'user-info'}>
            <div className={'user-info__name'}>{props.name}</div>
            <button onClick={(e) => setLocalState(localState + 1)}>change local state</button>
            <button onClick={(e) => setTheme('dark')}>change context theme</button>
        </div>
    );
})
