import * as React from 'react';

import {
  Panel,
} from 'react-bootstrap';

import {
  AnalyticsContextPropsType,
  injectAnalyticsContext,
  AugmentProvider,
} from '../../src';

import ContextMap from '../assorted/ContextMap';


export type PropsType = {

} & AnalyticsContextPropsType;

export type StateType = {

};

@injectAnalyticsContext
export default class RateTeachersForm extends React.Component<PropsType, StateType> {
  // render(): React.ReactElement<any> {
  render() {
    return (
      <Panel


      >
        <ContextMap />
        <AugmentProvider
          augmentContext={{
            componentName: 'RateTeachersForm',
          }}
        >
          <p> asd </p>
        </AugmentProvider>
      </Panel>
    )
  }
}