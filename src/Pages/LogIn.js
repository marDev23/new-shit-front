import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
// import LogInError from './LogInError'
import LogoCircle from '../main_logo_mobile.png'

const logInMutation = gql`
    mutation SignInMutation($email: String!, $password: String!){
    signIn(email: $email, password: $password)
  }
`

class LogIn extends Component {
  state={
    email: '',
    password: '',
    visible: false,
  }
  updateEmail = ({ target: { value } }) => { this.setState({ email: value }) }
  updatePassword = ({ target: { value } }) => { this.setState({ password: value }) }
  handleDismiss = () => { this.setState({ visible: false }) }

  render() {
    const { email, password, visible } = this.state
    const { location, match, history } = this.props
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='orange' textAlign='center'>
              <Image src={LogoCircle} /> Log-in to your account
            </Header>
            <Mutation mutation={logInMutation}>
              {(signIn, { error, loading, data }) => (
                <Fragment>
                  <Form
                    size='large'
                    onSubmit={evt => {
                      evt.preventDefault();
                      signIn({
                        variables: {
                          email,
                          password
                        }
                      })
                    }}
                  >
                    <Segment stacked>
                      <Form.Input
                        name='name'
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail Address'
                        onChange={this.updateEmail}
                      />
                      <Form.Input
                        fluid
                        name='password'
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.updatePassword}
                      />

                      <Button type='submit' color='orange' fluid size='large'>
                        Log In
                      </Button>
                    </Segment>
                  </Form>
                  { loading && <p>Loading...</p>}
                  { error && 
                    <Message
                    error
                    header='Error Signing In'
                    list={error.graphQLErrors.map(x => x.message)}
                  /> }
                  {data && <Redirect to='/' /> }
                  </Fragment>
              )}
            </Mutation>
            <Message>
              New to us? <a href='/sign_up'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LogIn