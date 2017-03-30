/// <reference types="react" />
import * as React from 'react';
import * as defaultStyle from './style';
export declare type StyleType = Partial<typeof defaultStyle>;
export declare type PropsType = {
    data: Object | Array<object> | Array<any>;
    __isNotRoot?: boolean;
    style?: StyleType;
};
export declare type StateType = {};
export default class ObjectTree extends React.Component<PropsType, StateType> {
    render(): React.ReactElement<any>;
}
