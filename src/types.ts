import { ReactElement } from 'react';
import { LocationDescriptorObject } from 'history';
export type AnalyticsContextType = {
  location?: LocationDescriptorObject;
  componentNameHierarchy?: Array<string>;
  actionsHierarchy?: Array<string>;
  __DEBUG_COMPONENT_HIERARCHY?: Array<ReactElement<any>>;
  __DEBUG_CONTEXT_HISTORY?: Array<AnalyticsContextType>;
};

export type _AnalyticsContextPropsType = {
  analyticsContext: AnalyticsContextType;
};

export type AnalyticsContextPropsType = Partial<_AnalyticsContextPropsType>;

