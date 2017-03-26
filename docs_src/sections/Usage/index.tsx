import * as React from 'react';
import {
  Panel,
} from 'react-bootstrap';
import {
  AugmentProvider,
} from '../../../src';
import ContextMap from '../../assorted/ContextMap';
import LikeButton from '../../inputs/LikeButton';
import {
  report,
} from '../../analytics';

export type PropsType = {

};
export type StateType = {

};

export default class UsageSection extends React.Component<PropsType, StateType> {
  render(): React.ReactElement<PropsType> {
    return (
      <AugmentProvider
        augmentContext={{
          componentName: 'UsageSection',
        }}
      >
        <Panel>
          <ContextMap />
          <h1> Usage Example: </h1>
          <LikeButton
            onChange={(like, analyticsContext) => {
              report({
                context: analyticsContext,
                eventName: 'like!',
              });
            }}
          />
        </Panel>
      </AugmentProvider>
    )
  }
}