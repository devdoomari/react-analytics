import * as React from 'react';
import { injectAnalyticsContext } from './inject';
import {
  AnalyticsContextType,
  AnalyticsContextPropsType,
} from './types';

export type PropsType = {
  render: (props: AnalyticsContextType) => React.ReactElement<any>,
} & AnalyticsContextPropsType;
export type StateType = {

};


@injectAnalyticsContext
export default class DebugViewer
    extends React.Component<PropsType, StateType> {
  render() {
    return React.Children.only(this.props.render(this.props.analyticsContext));
  }
}