import * as React from 'react';
import { withRouter } from 'react-router';
import {
  WithRouterProps,
} from 'react-router-types';
import {
  omit,
} from 'lodash';
import {
  withContext,
  InferableComponentEnhancer,
} from 'recompose';

import {
  AnalyticsContextType,
  AnalyticsContextPropsType,
} from './types';

type AnalyticsContextPropsWithRouterType = AnalyticsContextPropsType
 & WithRouterProps;
export const withAnalyticsContextAndPath = withContext<
  AnalyticsContextType, AnalyticsContextPropsWithRouterType
>({
  analyticsContext: React.PropTypes.object,
  children: React.PropTypes.any,
}, (props: AnalyticsContextPropsWithRouterType)  => {
  const analyticsContext = Object.assign({}, props.analyticsContext, {
    location: props.location,
  });
  const newProps = Object.assign({}, props, {
    analyticsContext,
  });
  const cleanNewProps = omit(newProps, [
    'router', 'location', 'history', 'params', 'routes',
  ]);
  return cleanNewProps;
});

const _ProviderWithRouter: React.SFC<AnalyticsContextPropsWithRouterType> =
    (props) => {
  return React.Children.only(props.children);
};

export const ProviderWithRouter = withRouter<AnalyticsContextPropsWithRouterType>(
  withAnalyticsContextAndPath(_ProviderWithRouter)
);


export {
  InferableComponentEnhancer as __,
  AnalyticsContextType as ___,
};
