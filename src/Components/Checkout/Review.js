import React, { Component, Fragment } from 'react'
import { Button, Container, Divider  } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { ALL_CART } from '../../QUERIES/ALL_QUERIES'
import { ProductReviewView } from './'

class Review extends Component{

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        return(
            <Fragment>
            <Query query={ALL_CART}>
                {({ loading, data, error }) => {
                    if (loading) return ''
                    console.log(data)
                    return (
                        <Fragment>
                        {data.cart.map(x => (
                            <ProductReviewView tray={x} key={x.id} />
                        ))}
                        </Fragment>
                    )
                }}                
            </Query>
            
          <Divider hidden />
          <Container>
          <Button fluid color='orange' onClick={this.saveAndContinue}>Proceed</Button>
            <Button fluid onClick={this.back} style={{ marginTop: '0.5em' }}>Back</Button>
            </Container>
        </Fragment>
        )
    }
}

export default Review