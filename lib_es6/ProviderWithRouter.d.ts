/// <reference types="recompose" />
/// <reference types="react" />
import * as React from 'react';
import { WithRouterProps } from 'react-router-types';
import { InferableComponentEnhancer } from 'recompose';
import { AnalyticsContextType } from './types';
export declare const withAnalyticsContextAndPath: InferableComponentEnhancer;
export declare const ProviderWithRouter: React.ComponentClass<Partial<{
    analyticsContext: AnalyticsContextType;
}> & WithRouterProps>;
export { InferableComponentEnhancer as __, AnalyticsContextType as ___ };
