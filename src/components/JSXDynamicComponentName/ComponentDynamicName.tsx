import React, {useMemo, useRef, useState} from 'react';
import {ComponentsObject} from "./DinamicComponentName";

export function ComponentDynamicName(props: any) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [componentName, setComponentName] = useState('');

    const getComponentInfo = (name: string = 'input') => {
            switch(name) {
                case 'input': return {name:'input', value: 'Это элемент инпут'};
                case 'p': return {name:'p', value: 'Это простой текст'};
                case 'button': return {name:'button', value: 'Это кнопка'};
                case 'img': return {name:'img', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia-logo-v2-ru.svg/1200px-Wikipedia-logo-v2-ru.svg.png'};
                default:  return {name:'default', value: undefined};
            }
    }


    const elementInfo: {name: string, value: string | undefined} =  useMemo(() => {
        return getComponentInfo(componentName);
    }, [componentName]);
    //@ts-ignore
    const ComponentName = ComponentsObject[elementInfo.name];

    return (
        <div>
            <ComponentName value={elementInfo.value}/>
            {/* Изменяем state и получаем динамическое изменение названия компоненты */}
            <input type="text" name="name"  ref={inputRef}/>
            <button onClick={(e) => {
                setComponentName(inputRef.current!.value)
            }}>Change component</button>
        </div>
    );
}

