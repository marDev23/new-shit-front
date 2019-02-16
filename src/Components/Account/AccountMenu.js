import React from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const AccountMenu = withRouter(({ activeItem, history}) => {
console.log(activeItem)
return (
	<Menu color='orange' secondary vertical fluid>
		<Menu.Item
		  active={activeItem === '/account'}
		  onClick={() => {
		  	history.push('/account')
		  }}>
		   <Label circular size='tiny' color='red' empty />
				Account
		</Menu.Item>
		<Menu.Item
		  active={activeItem === '/orders'}
		  onClick={() => {
		  	history.push('/orders')
		  }}>
		   <Label circular size='tiny' color='red' empty />
				Orders
		</Menu.Item>
		<Menu.Item
		  active={activeItem === '/messages'}
		  onClick={() => {
		  	history.push('/messages')
		  }}>
		  <Label circular size='tiny' color='red' empty />
				Messages
		</Menu.Item>
		 
		<Menu.Item
		  active={activeItem === '/settings'}
		  onClick={() => {
		  	history.push('/settings')
		  }}>
		   <Label circular size='tiny' color='red' empty />
				Settings
		</Menu.Item>
	</Menu>
)

})

export default AccountMenu