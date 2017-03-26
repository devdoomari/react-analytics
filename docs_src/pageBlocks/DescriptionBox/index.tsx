import * as React from 'react';

export type PropsType = {
  color: string,
};

export type StateType = {

};
export default class DescriptionBox extends React.Component<PropsType, StateType> {
  render() {
    return (
      <div

      >
        <span>

        </span>
        <ul />
        {this.props.children}
      </div>
    )
  }
}