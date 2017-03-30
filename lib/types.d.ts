/// <reference types="react" />
import { ReactElement } from 'react';
import { LocationDescriptorObject } from 'history';
import { BaseCustomAttrs } from './BaseCustomAttrs';
export declare type AnalyticsContextType = {
    location?: LocationDescriptorObject;
    componentNameHierarchy?: Array<string>;
    actionsHierarchy?: Array<string>;
    customAttrs?: BaseCustomAttrs<any>;
    __DEBUG_COMPONENT_HIERARCHY?: Array<ReactElement<any>>;
    __DEBUG_CONTEXT_HISTORY?: Array<AnalyticsContextType>;
};
export declare type _AnalyticsContextPropsType = {
    analyticsContext: AnalyticsContextType;
};
export declare type AnalyticsContextPropsType = Partial<_AnalyticsContextPropsType>;
export declare type EventSenderType = (args: {
    context: AnalyticsContextType;
    eventName?: string;
}) => Promise<any>;
