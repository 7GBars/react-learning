import React from 'react';
//https://stackoverflow.com/questions/28842459/react-jsx-dynamic-component-names
//https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name

import './DinamicComponentName.scss';

type TDynamicComponentNameProps = {name?: string}

function InputComponent(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-name-component'}>
            <input id={'number-input'} type={'number'}/>
            <label htmlFor='number-input'>Компонент инпута</label>
        </div>
    );
}
function TextComponentCopy(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-name-component--copy'}>
            <p>{props.name}</p>
        </div>
    );
}

function ButtonComponent(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-name-component--copy'}>
            <button>{props.name}</button>
        </div>
    );
}

export const ComponentsObject = {
    input: InputComponent,
    text: TextComponentCopy,
    button: ButtonComponent,
    default: () => <div>Такого копонента нет</div>
}