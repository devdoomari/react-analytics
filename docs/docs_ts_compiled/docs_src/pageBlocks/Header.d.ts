/// <reference types="react" />
import * as React from 'react';
export declare type PropsType = {};
export declare type StateType = {
    activeItem?: string;
};
export default class Header extends React.Component<PropsType, StateType> {
    constructor(props: PropsType);
    handleSelect(eventKey: any): void;
    render(): JSX.Element;
}
