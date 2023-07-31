import React, {memo} from 'react';
import {useUserStatus} from "../../customHooks";

import './userInfo.scss';

type TUserInfo = {
    name: string;
    getUserInfoCallback?: (id: string, name: string) => void;
}
export const UserInfo = memo((props: React.PropsWithChildren<TUserInfo>) => {

    // const isOnline = useUserStatus();

    console.log('render UserInfo');
    return (
        <div className={'user-info'}>
            {/*<div className={`user-info__status ${isOnline ? 'online' : 'offline'}`}></div>*/}
            <div className={'user-info__name'}>{props.name}</div>
            <button onClick={(e) => props?.getUserInfoCallback?.('o', props.name)}>get info</button>
        </div>
    );
})
