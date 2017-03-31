/// <reference types="recompose" />
/// <reference types="react" />
import * as React from 'react';
import { InferableComponentEnhancer } from 'recompose';
import { AugmentAnalyticsContextOptions } from './augmentContext';
import { AnalyticsContextPropsType } from './types';
export declare const withAnalyticsContext: InferableComponentEnhancer;
export declare type PropsType = {
    augmentContext: AugmentAnalyticsContextOptions;
} & AnalyticsContextPropsType;
export declare type StateType = {};
export default class AnalyticsContextAugmentProvider extends React.Component<PropsType, StateType> {
    render(): JSX.Element;
}
export { InferableComponentEnhancer as __ };
