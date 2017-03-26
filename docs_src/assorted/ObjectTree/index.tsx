import * as React from 'react';
import {
  map,
  isString,
  isNumber,
  isObject, isObjectLike,
  isArray,
} from 'lodash';

import * as defaultStyle from './style';

export type StyleType = Partial<typeof defaultStyle>;

export type PropsType = {
  data: Object | Array<object> | Array<any>;
  __isNotRoot?: boolean;
  style?: StyleType;
}
export type StateType = {

}

export default class ObjectTree
    extends React.Component<PropsType, StateType> {
  render(): React.ReactElement<any> {
    return (
      <div>
        {map(this.props.data, (value: any, key) => {
          if (isString(value) || isNumber(value)) {
            return <p key={key}> {value} </p>;
          }
          if (isObject(value) || isArray(value) || isObjectLike(value)) {
            return (
              <ObjectTree
                data={value}
              />
            );
          }
        })}
      </div>
    )
  }
}