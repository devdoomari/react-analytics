import * as React from 'react';
import {
  isBoolean,
} from 'lodash';
import {
  injectAnalyticsContext,
  AnalyticsContextPropsType,
  AnalyticsContextType,
} from '../../src';
import {
  TiHeartFullOutline,
  TiHeartOutline,
} from 'react-icons/lib/ti';

export type PropsType = {
  onChange?: (
    likeOrNot: boolean,
    analyticsContext?: AnalyticsContextType,
  ) => any;
  defaultLike?: boolean;
  like?: boolean;
} & AnalyticsContextPropsType;

export type StateType = {
  like?: boolean;
};

@injectAnalyticsContext
export default class LikeButton extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      like: props.defaultLike,
    };
  }
  setLike(like: boolean) {
    this.setState({ like });
    this.props.onChange && this.props.onChange(like, this.props.analyticsContext);
  }
  render() {
    const liked = isBoolean(this.props.like) ? this.props.like : this.state.like;
    return (
      <button
        onClick={() => this.setLike(!liked)}
      >
        {liked ?
          <TiHeartFullOutline/>
          : <TiHeartOutline/>
        }
      </button>
    );
  }
}