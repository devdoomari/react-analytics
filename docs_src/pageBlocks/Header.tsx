import * as React from 'react';
import {
  Menu,
  Input,
  Icon,
  Dropdown,
} from 'semantic-ui-react';

import {

} from '../../src';

export type PropsType = {

};
export type StateType = {
  activeItem?: string,
};
export default class Header extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {};
  }
  handleSelect(eventKey: any) {
    console.error(eventKey);
  }
  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu>
          <Menu.Item>
            <Input placeholder='Search...' />
          </Menu.Item>


          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleSelect}>
            <Icon name='grid layout' />
            Browse
          </Menu.Item>
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleSelect}>
            Messages
          </Menu.Item>

          <Dropdown item text='More'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item>
                <Dropdown item text='More'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='globe' text='Choose Language' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}