import React, { Component, Fragment } from 'react'
import { Form, Divider, Container, Button, Menu, Header } from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import { ALL_CART, ADDRESS, ORDER_TYPE } from '../../QUERIES/ALL_QUERIES'

const ProductConfirm = ({tray}) => (
    <Menu.Item>
        <Menu.Menu>
        <Menu.Item>
            <Header color='orange' size='small'>{tray.product.name.toUpperCase()} X {tray.quantity}
            </Header>
        </Menu.Item>
        <Menu.Item>
        <Header color='orange' size='small'>P {tray.product.price.toLocaleString()}</Header>
        </Menu.Item>
        </Menu.Menu>
    </Menu.Item>
)

const subTotal = (arr) => {
  return arr.reduce((sum, i) => {
    let n = sum + (i.product.price * i.quantity)
    return n.toLocaleString()
  }, 0)
}

const grandTotal = (arr, hit) => {
  return arr.reduce((sum, i) => {
    let n = sum + (i.product.price * i.quantity)
    let m = n + parseInt(hit)
    return m.toLocaleString()
  }, 0)
}

class Confirmation extends Component{
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { delivery } = this.props
        return(
            <Form>
            <Menu fluid vertical>
                <Menu.Item>
                  <Menu.Header>Products</Menu.Header>

                  <Menu.Menu>
                    <Query query={ALL_CART}>
                        {({ loading, data}) => {
                            if (loading) return ''
                            console.log(data)
                            return (
                                <Fragment>
                                {data.cart.map(x => (
                                    <ProductConfirm key={x.id} tray={x} />
                                ))}
                                </Fragment>
                            )
                        }}
                    </Query>
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>Address</Menu.Header>

                  <Menu.Menu>
                    <Query query={ADDRESS} variables={{ id: delivery.addressId }}>
                        {({ loading, data: { address } }) => {
                            if (loading) return ''
                            return (
                            <Menu.Item>
                                <Header size='small' color='orange'>
                                    {address.baranggay.toUpperCase()}, {address.municipal.toUpperCase()}, {address.province.toUpperCase()}, Philippines {address.zip}
                                </Header>
                            </Menu.Item>
                            )
                        }}
                    </Query>
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>Total</Menu.Header>
                  <Menu.Menu>
                    <Query query={ORDER_TYPE} variables={{ id: delivery.deliveryOption }}>
                        {({ loading: loadingDOption, data: { orderType } }) => (
                            <Query query={ALL_CART}>
                                {({ loading: loadingACart, data: { cart } }) => (
                                    <Query query={ADDRESS} variables={{ id: delivery.addressId }}>
                                        {({ loading: loadingAShipment, data: { address } }) => {
                                            if (loadingDOption) return ''
                                            if (loadingACart) return ''
                                            if (loadingAShipment) return ''
                                            if (orderType.type === 'for-delivery') {
                                                return (
                                                    <Fragment>
                                                    <Menu.Item>ORDER TYPE: {orderType.type.toUpperCase()}</Menu.Item>
                                                    <Menu.Item>TOTAL: P {subTotal(cart)}</Menu.Item>
                                                    <Menu.Item>DELIVERY FEE: P {address.fee.toLocaleString()}</Menu.Item>
                                                    <Menu.Item>GRAND TOTAL: P {grandTotal(cart, address.fee)}</Menu.Item>
                                                    </Fragment>
                                                )
                                            }
                                            return (
                                                <Fragment>
                                                <Menu.Item>ORDER TYPE: {orderType.type.toUpperCase()}</Menu.Item>
                                                <Menu.Item>TOTAL: P {subTotal(cart)}</Menu.Item>
                                                <Menu.Item>DELIVERY FEE:</Menu.Item>
                                                <Menu.Item>GRAND TOTAL: P {subTotal(cart)}</Menu.Item>
                                                </Fragment>
                                            )
                                        }}
                                    </Query>
                                )}
                            </Query>
                        )}
                    </Query>
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            <Divider hidden />
            <Container>
                <Query query={ALL_CART}>
                    {({ loading, data}) => {
                      if (loading) return ''  
                        return (

                                <Button 
                                    fluid 
                                    disabled
                                    color='orange'>
                                    Submit
                                </Button>
                        )
                    }}
                </Query>
                <Button fluid onClick={this.back} style={{ marginTop: '0.5em' }}>Back</Button>
            </Container>
            </Form>
        )
    }
}

export default Confirmation