/// <reference types="recompose" />
/// <reference types="react" />
import * as React from 'react';
import { InferableComponentEnhancer } from 'recompose';
import { _AnalyticsContextPropsType } from './types';
export declare const withAnalyticsContext: InferableComponentEnhancer;
export declare const Provider: React.StatelessComponent<_AnalyticsContextPropsType>;
export { InferableComponentEnhancer as __ };
