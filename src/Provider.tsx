import * as React from 'react';
import {
  withContext,
  InferableComponentEnhancer,
} from 'recompose';

import {
  _AnalyticsContextPropsType,
} from './types';

export const withAnalyticsContext = withContext({
  analyticsContext: React.PropTypes.object,
  children: React.PropTypes.any,
}, (props)  => props);


const ProviderComponent: React.SFC<_AnalyticsContextPropsType> = (props, context) => {
  return React.Children.only(props.children);
};

export const Provider = withAnalyticsContext(ProviderComponent);

export {
  InferableComponentEnhancer as __,
};
