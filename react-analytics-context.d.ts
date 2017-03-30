declare module 'react-analytics-context/lib/inject' {
	/// <reference types="recompose" />
	import { InferableComponentEnhancer } from 'recompose';
	export const injectAnalyticsContext: InferableComponentEnhancer;
	export { InferableComponentEnhancer as _____ };

}
declare module 'react-analytics-context/lib/BaseCustomAttrs' {
	export abstract class BaseCustomAttrs<T> {
	    attrs: T;
	    constructor(attrs?: T);
	    abstract augmentWith(childAttrs: BaseCustomAttrs<T>): BaseCustomAttrs<T>;
	}

}
declare module 'react-analytics-context/lib/types' {
	/// <reference types="react" />
	import { ReactElement } from 'react';
	import { LocationDescriptorObject } from 'history';
	import { BaseCustomAttrs } from 'react-analytics-context/lib/BaseCustomAttrs';
	export type AnalyticsContextType = {
	    location?: LocationDescriptorObject;
	    componentNameHierarchy?: Array<string>;
	    actionsHierarchy?: Array<string>;
	    customAttrs?: BaseCustomAttrs<any>;
	    __DEBUG_COMPONENT_HIERARCHY?: Array<ReactElement<any>>;
	    __DEBUG_CONTEXT_HISTORY?: Array<AnalyticsContextType>;
	};
	export type _AnalyticsContextPropsType = {
	    analyticsContext: AnalyticsContextType;
	};
	export type AnalyticsContextPropsType = Partial<_AnalyticsContextPropsType>;
	export type EventSenderType = (args: {
	    context: AnalyticsContextType;
	    eventName?: string;
	}) => Promise<any>;

}
declare module 'react-analytics-context/lib/Provider' {
	/// <reference types="recompose" />
	/// <reference types="react" />
	import * as React from 'react';
	import { InferableComponentEnhancer } from 'recompose';
	import { _AnalyticsContextPropsType } from 'react-analytics-context/lib/types';
	export const withAnalyticsContext: InferableComponentEnhancer;
	export const Provider: React.StatelessComponent<_AnalyticsContextPropsType>;
	export { InferableComponentEnhancer as __ };

}
declare module 'react-analytics-context/lib/DEBUG_MODE' {
	export const DEBUG_MODE: boolean;

}
declare module 'react-analytics-context/lib/augmentContext' {
	/// <reference types="react" />
	import { AnalyticsContextType } from 'react-analytics-context/lib/types';
	export type AugmentAnalyticsContextOptions = AnalyticsContextType & {
	    component?: React.ReactElement<any>;
	    componentName?: string;
	    action?: string;
	};
	export function augmentAnalyticsContext(parentContext: AnalyticsContextType, options: AugmentAnalyticsContextOptions): AnalyticsContextType;

}
declare module 'react-analytics-context/lib/AugmentProvider' {
	/// <reference types="recompose" />
	/// <reference types="react" />
	import * as React from 'react';
	import { InferableComponentEnhancer } from 'recompose';
	import { AugmentAnalyticsContextOptions } from 'react-analytics-context/lib/augmentContext';
	import { AnalyticsContextPropsType } from 'react-analytics-context/lib/types';
	export const withAnalyticsContext: InferableComponentEnhancer;
	export type PropsType = {
	    augmentContext: AugmentAnalyticsContextOptions;
	} & AnalyticsContextPropsType;
	export type StateType = {};
	export default class AnalyticsContextAugmentProvider extends React.Component<PropsType, StateType> {
	    render(): JSX.Element;
	}
	export { InferableComponentEnhancer as __ };

}
declare module 'react-analytics-context/lib/DebugViewer' {
	/// <reference types="react" />
	import * as React from 'react';
	import { AnalyticsContextType, AnalyticsContextPropsType } from 'react-analytics-context/lib/types';
	export type PropsType = {
	    render: (props: AnalyticsContextType) => React.ReactElement<any>;
	} & AnalyticsContextPropsType;
	export type StateType = {};
	export default class DebugViewer extends React.Component<PropsType, StateType> {
	    render(): React.ReactElement<any>;
	}

}
declare module 'react-analytics-context/lib/ProviderWithRouter' {
	/// <reference types="recompose" />
	/// <reference types="react" />
	import * as React from 'react';
	import { InferableComponentEnhancer } from 'recompose';
	import { AnalyticsContextType } from 'react-analytics-context/lib/types';
	export const withAnalyticsContextAndPath: InferableComponentEnhancer;
	export const ProviderWithRouter: React.ComponentClass<any> & React.StatelessComponent<any>;
	export { InferableComponentEnhancer as __, AnalyticsContextType as ___ };

}
declare module 'react-analytics-context' {
	import { BaseCustomAttrs } from 'react-analytics-context/lib/BaseCustomAttrs';
	import { augmentAnalyticsContext } from 'react-analytics-context/lib/augmentContext';
	import { injectAnalyticsContext } from 'react-analytics-context/lib/inject';
	import { Provider } from 'react-analytics-context/lib/Provider';
	import { ProviderWithRouter } from 'react-analytics-context/lib/ProviderWithRouter';
	import AugmentProvider from 'react-analytics-context/lib/AugmentProvider';
	import DebugViewer from 'react-analytics-context/lib/DebugViewer';
	import { AnalyticsContextType, AnalyticsContextPropsType, EventSenderType } from 'react-analytics-context/lib/types';
	export { BaseCustomAttrs, augmentAnalyticsContext, injectAnalyticsContext, Provider, ProviderWithRouter, AugmentProvider, DebugViewer, AnalyticsContextType, AnalyticsContextPropsType, EventSenderType };

}
