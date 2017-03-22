import {
  concat,
} from 'lodash';
import {
  AnalyticsContextType,
} from './types';
import {
  DEBUG_MODE,
} from './DEBUG_MODE';

export type AugmentAnalyticsContextOptions = AnalyticsContextType & {
  component: React.ReactElement<any>,
  componentName: string,
  action: string,
};
export function augmentAnalyticsContext(
  parentContext: AnalyticsContextType,
  options: AugmentAnalyticsContextOptions,
): AnalyticsContextType {
  return {
    ...parentContext,
    ...options,
    componentNameHierarchy: concat(
      parentContext.componentNameHierarchy || [],
      options.componentName,
    ),
    actionsHierarchy: concat(
      parentContext.actionsHierarchy || [],
      options.action,
    ),
    __DEBUG_COMPONENT_HIERARCHY: DEBUG_MODE
      && concat(
        parentContext.__DEBUG_COMPONENT_HIERARCHY || [],
        options.component
      ),
    __DEBUG_CONTEXT_HISTORY: DEBUG_MODE
      && concat(
        parentContext.__DEBUG_CONTEXT_HISTORY || [],
        parentContext,
      ),
  };
}