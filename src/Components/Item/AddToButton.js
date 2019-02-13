import React from 'react'
import { Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { ADD_TO_CART } from '../../QUERIES/ALL_QUERIES'

const AddToButton = ({...props}) => (
<Mutation mutation={ADD_TO_CART}>
	{( addToCart, { loading, data, error }) => (
    <Button
    	color='orange'
        inverted
        fluid
        size='small'
    	disabled={props.isQuantityEmpty ? true : false}
    	onClick={evt => {
    		console.log(data)
    		evt.preventDefault();
    		addToCart({
    			variables: {
    				productId: props.id,
    				quantity: props.inputQuantity
    			}
    		})
    	}}
    > Add To Tray
    </Button>
	)}
</Mutation>
// console.log(props)
)

export default AddToButton