import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

const CategoryLayout = ({ component: Component, layout: Layout, ...rest }) => (
<Fragment>
	<Route
		path='/categories/:id'
		render={props => (
		<Layout>
	    	<Component {...props}/>
	    </Layout> 
	)} />
</Fragment>
)

export default CategoryLayout
