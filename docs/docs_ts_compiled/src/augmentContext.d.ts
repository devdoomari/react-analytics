/// <reference types="react" />
import { AnalyticsContextType } from './types';
export declare type AugmentAnalyticsContextOptions = AnalyticsContextType & {
    component?: React.ReactElement<any>;
    componentName?: string;
    action?: string;
};
export declare function augmentAnalyticsContext(parentContext: AnalyticsContextType, options: AugmentAnalyticsContextOptions): AnalyticsContextType;
