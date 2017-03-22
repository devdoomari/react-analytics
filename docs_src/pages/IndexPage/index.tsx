import * as React from 'react';

import {
  ProviderWithRouter,
} from '../../../src/ProviderWithRouter';

export type PropsType = {

};

export type StateType = {

};
export default class IndexPage extends React.Component<PropsType, StateType> {
  render() {
    return (
      <ProviderWithRouter
      >
        <h1> React Analytics Context </h1>

      </ProviderWithRouter>
    );
  }
}