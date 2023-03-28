import React from 'react';
//https://stackoverflow.com/questions/28842459/react-jsx-dynamic-component-names

import './DinamicComponentName.scss';

type TDynamicComponentNameProps = {name: string}

export function Component(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-name-component'}>
            <header className={'dynamic-name-component__header'}>
                {`dynamic name ${props.name}`}
            </header>
        </div>
    );
}
export function ComponentCopy(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-name-component--copy'}>
            <header className={'dynamic-name-component--copy__header'}>
                {`dynamic name ${props.name}`}
            </header>
        </div>
    );
}

export const ComponentsObject = {
    component1: Component,
    component2: ComponentCopy
}