import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LogoCircle from '../main_logo_mobile.png'

class SignUp extends Component {

  render() {
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
            <Image src={LogoCircle} /> Sign Up for Hab-Hab
          </Header>
            <Form size='large' >
              <Segment stacked>
                <Form.Input 
                fluid
                name='name'
                icon='user'
                iconPosition='left'
                placeholder='Full Name' />
                <Form.Input 
                fluid
                name='email'
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address' />
                <Form.Input 
                fluid
                name='mobile'
                icon='mobile'
                iconPosition='left'
                placeholder='Mobile Number' />
                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Form.Input
                  fluid
                  name='confirmPassword'
                  icon='user secret'
                  iconPosition='left'
                  placeholder='Confirm Password'
                  type='password'
                />
                <Form.Checkbox
                 size='large'
                 name='terms'
                 fluid='true'
                 label='I agree to the Terms of Service and Privacy Policy' />
                <Button color='orange' fluid size='large'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
          <Message>
            Already have an account? <a href='/log_in'>Log In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}

export default SignUp