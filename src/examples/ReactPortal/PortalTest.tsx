import React, {memo} from 'react';

import './PortalTest.scss';

type TPortalInfo = {
    name: string;

}
export const Portal = memo((props: React.PropsWithChildren<TPortalInfo>) => {
    return (
        <div className={'portal-container'}>
          test

        </div>
    );
})
