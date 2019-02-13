import React from 'react'
import { Container } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { MY_ADDRESS } from '../QUERIES/ALL_QUERIES'
import MainCheckout from '../Components/Checkout/MainCheckout'

const Checkout = () => (
	<Container textAlign='center'>
		 <Query query={MY_ADDRESS}>
            {({ loading, data: { me } }) => {
            	if (loading) return ''
            	console.log(me)
            	const emptyAddress = { municipal: '', baranggay: '', id: '', isPickUpAvailable: false, zip: '', fee: '', province: '' }
        		if (me.address == null) {
        			return <MainCheckout address={emptyAddress} />
        		}
        		return <MainCheckout address={me.address} />
        	}}
        </Query>
    </Container>
)

export default Checkout