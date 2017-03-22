import * as React from 'react';
import {
  Navbar,
  Nav, NavItem,
} from 'react-bootstrap';

export type PropsType = {

};
export type StateType = {
};
export default class Header extends React.Component<PropsType, StateType> {
  handleSelect(eventKey: any) {
    console.error(eventKey);
  }
  render() {
    return (
      <Navbar>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
        </Nav>
      </Navbar>
    );
  }
}