import React from 'react';
//https://stackoverflow.com/questions/28842459/react-jsx-dynamic-component-names
//https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name

import './DinamicComponentName.scss';

type TDynamicComponentNameProps = {value?: string}

function InputComponent(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-value-component'}>
            <input id={'number-input'} type={'number'}/>
            <label htmlFor='number-input'>{props.value}</label>
        </div>
    );
}
function TextComponentCopy(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-value-component--copy'}>
            <p>{props.value}</p>
        </div>
    );
}

function ButtonComponent(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-value-component--copy'}>
            <button>{props.value}</button>
        </div>
    );
}

function ImageComponent(props: TDynamicComponentNameProps) {
    return (
        <div className={'dynamic-value-component--copy'}>
            <img src={props.value} width={50} height={50}/>
        </div>
    )
}

export const ComponentsObject = {
    input: InputComponent,
    p: TextComponentCopy,
    button: ButtonComponent,
    img: ImageComponent,
    default: () => <>Введите название html елемента</>
}