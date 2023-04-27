import React from 'react';
import {useUserStatus} from "../../customHooks";

import './userInfo.scss';

type TUserInfo = {
    name: string;
}
export function UserInfo(props: React.PropsWithChildren<TUserInfo>) {
    const isOnline = useUserStatus();
    return (
        <div className={'user-info'}>
            <div className={`user-info__status ${isOnline ? 'online' : 'offline'}`}></div>
            <div className={'user-info__name'}>{props.name}</div>
        </div>
    );
}
