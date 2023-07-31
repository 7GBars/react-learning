import React from 'react';
import './mainPage.scss';
import {ComponentUseCallback} from "../hooksLearnings/useCallback/UseCallbackExamples";


type TMainPageProps = {componentInfo?: string};

export function MainPage(props: React.PropsWithChildren<TMainPageProps>) {

  return (
    <div className={'main-page'}>
        <ComponentUseCallback name={'test'}/>
    </div>
  );
}

