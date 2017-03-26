import * as React from 'react';
import {
  Panel,
  Button,
} from 'react-bootstrap';
import JSONPretty = require('react-json-pretty');

import {
  DebugViewer,
} from '../../src';
export type PropsType = {

};

export type StateType = {
  showContext?: boolean;
};

export default class ContextMap extends React.Component<PropsType, StateType> {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    const {
      showContext,
    } = this.state;
    return (
      <div>
        <Button
          onClick={()=>this.setState({showContext: !showContext})}
        >
          {showContext ?
            '- context' : '+ context'
          }
        </Button>
        <Panel collapsible expanded={showContext}>
          <DebugViewer
            render={context=> (
              <JSONPretty id="json-pretty" json={context} />
            )}
          />
        </Panel>
      </div>
    )
  }
}