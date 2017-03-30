/// <reference types="react" />
import * as React from 'react';
import { AnalyticsContextType, AnalyticsContextPropsType } from './types';
export declare type PropsType = {
    render: (props: AnalyticsContextType) => React.ReactElement<any>;
} & AnalyticsContextPropsType;
export declare type StateType = {};
export default class DebugViewer extends React.Component<PropsType, StateType> {
    render(): React.ReactElement<any>;
}
