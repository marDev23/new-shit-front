import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'

const SideBarComponent = ({...props}) => (
<Sidebar
          as={Menu}
          animation='overlay'
          onHide={props.onHide}
          vertical
          visible={props.visible}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>CareersT</Menu.Item>
          {
            props.dataBoolean
            ? ''
            : <Menu.Item as='a'>{props.userName.me.name}</Menu.Item>
          }
        </Sidebar>
)

export default SideBarComponent
