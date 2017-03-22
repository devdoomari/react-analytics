import { ReactElement } from 'react';
import { LocationDescriptorObject } from 'history';
export type AnalyticsContextType<CustomContextType> = CustomContextType & {
  location?: LocationDescriptorObject;
  componentNameHierarchy?: Array<string>;
  actionsHierarchy?: Array<string>;
  __DEBUG_COMPONENT_HIERARCHY?: Array<ReactElement<any>>;
  __DEBUG_CONTEXT_HISTORY?: Array<AnalyticsContextType<CustomContextType>>;
};

export type _AnalyticsContextPropsType<CustomContextType> = {
  analyticsContext: AnalyticsContextType<CustomContextType>;
};

export type AnalyticsContextPropsType = Partial<_AnalyticsContextPropsType>;

