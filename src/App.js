import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainLayout, LayoutCategory, LayoutRoute, LayoutSingle, LayoutRoutePrivate, LayoutSinglePrivate } from './Components/Layout'
import {
	Main, 
	LogIn, 
	SignUp, 
	Category, 
	SingleProduct, 
	MainTray, 
	Checkout, 
	ThankYou,
	OrdersFromAccount,
} from './Pages'

// const Hey = ({match}) => (
// 	console.log(match)
// )

class App extends Component {
	render() {
		return (
			<Fragment>
				<Switch>
					<Route exact path='/log_in' component={LogIn} />
					<Route exact path='/sign_up' component={SignUp} />
					<Route exact path='/thank_you' component={ThankYou} />
			        <LayoutRoute exact path='/' layout={MainLayout} component={Main} />
			        <LayoutRoutePrivate exact path='/tray' layout={MainLayout} component={MainTray} />
			        <LayoutRoutePrivate exact path='/orders' layout={MainLayout} component={OrdersFromAccount} />
			        <LayoutSinglePrivate exact path='/checkout' component={Checkout} />
			        <LayoutSingle exact path='/:id' layout={MainLayout} component={SingleProduct} />
			        <LayoutCategory layout={MainLayout} component={Category} />
			    </Switch>
		    </Fragment>
		)
	}
}
export default App
