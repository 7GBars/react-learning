import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {DynamicNameWrapper} from "../../components";

type TUserInfo = {
    name: string;
}


export function ComponentUseCallback(props: React.PropsWithChildren<TUserInfo>) {

    const MemoizedFunction = useCallback(React.memo((props: any) => {
        console.log('check without reactMemo')
           return <>dataGrid</>
    }), []);

    

    return (
        <div>
            <h3>{props.name} test</h3>
            <MemoizedFunction/>
        </div>
    );
}