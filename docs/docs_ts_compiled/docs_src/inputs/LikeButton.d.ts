/// <reference types="react" />
import * as React from 'react';
import { AnalyticsContextPropsType, AnalyticsContextType } from '../../src';
export declare type PropsType = {
    onChange?: (likeOrNot: boolean, analyticsContext?: AnalyticsContextType) => any;
    defaultLike?: boolean;
    like?: boolean;
} & AnalyticsContextPropsType;
export declare type StateType = {
    like?: boolean;
};
export default class LikeButton extends React.Component<PropsType, StateType> {
    constructor(props: PropsType);
    setLike(like: boolean): void;
    render(): JSX.Element;
}
