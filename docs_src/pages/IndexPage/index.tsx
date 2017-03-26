import * as React from 'react';

import {
  ProviderWithRouter,
} from '../../../src';

import {
  Panel,
} from 'react-bootstrap';

import {
  CustomAttrs,
} from '../../analytics';
import ContextMap from '../../assorted/ContextMap';
import UsageSection from '../../sections/Usage';
export type PropsType = {
};

export type StateType = {
};

export default class IndexPage extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ProviderWithRouter
        analyticsContext={{
          componentNameHierarchy: ['IndexPage'],
          customAttrs: new CustomAttrs({
            teacher: 'Dev Doomari',
          }),
        }}
      >
        <Panel>
          <h1> React Analytics Context </h1>
          <h3> React-Analytics Context provides contextual('background') info for Analytics event report </h3>
          <ContextMap />

          <UsageSection />
        </Panel>
      </ProviderWithRouter>
    );
  }
}