import React, { Component } from 'react'
import { Segment, Grid, Menu, Label, Header, Divider, Accordion, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AccountMenu } from '../Components/Account'

class OrdersFromAccount extends Component {

	state = { activeIndex: '' }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


	render() {
		const { activeIndex } = this.state
		const { history, match, location } = this.props
		console.log(match)
		return (
			<Segment style={{ padding: '3em 0em' }} vertical>
				<Grid container stackable centered columns={2}>
				<Grid.Row>
				    <Grid.Column width={4}>
						<AccountMenu activeItem={`${match.url}`} />
					</Grid.Column>
					<Grid.Column width={8}>
						 <Accordion fluid styled>
					        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
					          <Icon name='dropdown' />
					          Order #
					        </Accordion.Title>
					        <Accordion.Content active={activeIndex === 0}>
					          <p>
							    <List.Item selection>
							      Order Type: &nbsp;&nbsp;
							      <Label horizontal>For Delivery</Label>
							    </List.Item>
					           <Link to='/orders'>View More</Link>
					          </p>
					        </Accordion.Content>
					        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
					          <Icon name='dropdown' />
					          Order #
					        </Accordion.Title>
					        <Accordion.Content active={activeIndex === 0}>
					          <p>
							    <List.Item selection>
							      Order Type: &nbsp;&nbsp;
							      <Label horizontal>For Delivery</Label>
							    </List.Item>
					           <Link to='/orders'>View More</Link>
					          </p>
					        </Accordion.Content>
					        <Accordion.Title active={activeIndex === '90jdsfj43908'} index='90jdsfj43908' onClick={this.handleClick}>
					          <Icon name='dropdown' />
					          Order #
					        </Accordion.Title>
					        <Accordion.Content active={activeIndex === '90jdsfj43908'}>
					          <p>
							    <List.Item selection>
							      Order Type: &nbsp;&nbsp;
							      <Label horizontal>For Delivery</Label>
							    </List.Item>
					           <Link to='/orders'>View More</Link>
					          </p>
					        </Accordion.Content>
					        </Accordion>
				    </Grid.Column>
				</Grid.Row>
				</Grid>
			</Segment>
		)
	}
}

export default OrdersFromAccount


