import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {DynamicNameWrapper, UserInfo} from "../../components";
import {useAppContext} from "../../components/contextWrapper/ThemeContextProviderWrapper";

type TUserInfo = {
    name: string;
}


export function ComponentUseCallback(props: React.PropsWithChildren<TUserInfo>) {
    const [count, setCount] = useState<number>(0);
    const getUserInfo = useCallback((id: string, name: string) => {
      console.log(id, name)
    }, []);

  console.log('render ComponentUseCallback')
    return (
        <div>
            <h3>Use callback</h3>
            <UserInfo name={'User 1'} getUserInfoCallback={getUserInfo}/>
            <button onClick={(e) => setCount(count + 1)}>Click to up count</button>
            <p><b>Count:</b> {count}</p>
        </div>
    );
}