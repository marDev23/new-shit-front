import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainLayout, LayoutCategory, LayoutRoute, LayoutSingle, LayoutRoutePrivate } from './Components/Layout'
import { Main, LogIn, SignUp, Category, SingleProduct, MainTray, Checkout } from './Pages'

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
			        <LayoutRoute exact path='/' layout={MainLayout} component={Main} />
			        <LayoutRoutePrivate exact path='/tray' layout={MainLayout} component={MainTray} />
			        <Route exact path='/checkout' component={Checkout} />
			        <LayoutSingle exact path='/:id' layout={MainLayout} component={SingleProduct} />
			        <LayoutCategory layout={MainLayout} component={Category} />
			    </Switch>
		    </Fragment>
		)
	}
}
export default App
