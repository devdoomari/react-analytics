import * as React from 'react';
import {
  withContext,
  InferableComponentEnhancer,
} from 'recompose';

import { injectAnalyticsContext } from './inject';
import { Provider } from './Provider';
import {
  augmentAnalyticsContext,
  AugmentAnalyticsContextOptions,
} from './augmentContext';

import {
  AnalyticsContextPropsType,
} from './types';

export const withAnalyticsContext = withContext({
  analyticsContext: React.PropTypes.object,
  children: React.PropTypes.any,
}, (props)  => props);

export type PropsType = {
  augmentContext: AugmentAnalyticsContextOptions,
} & AnalyticsContextPropsType;
export type StateType = {

};

@injectAnalyticsContext
export default class AnalyticsContextAugmentProvider extends React.Component<PropsType, StateType> {
  render() {
    return (
      <Provider
        analyticsContext={augmentAnalyticsContext(
            this.props.analyticsContext, this.props.augmentContext
        )}
      >
        {React.Children.only(this.props.children)}
      </Provider>
    );
  }
}

export {
  InferableComponentEnhancer as __,
};
