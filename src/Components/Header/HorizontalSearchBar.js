import React from 'react'
import { Sidebar, Grid, Segment, Input, Icon } from 'semantic-ui-react'

const HorizontalSearchbar = ({...props}) => (
  <Sidebar
  as={Segment}
  animation='overlay'
  direction='top'
  visible={props.visible}>
    <Grid verticalAlign='middle' centered>
      <Grid.Row columns={2}>
        <Grid.Column width={14}>
          <Input fluid icon={<Icon name='search' link />} placeholder='Hab-Hab Search...' />
        </Grid.Column>
        <Grid.Column textAlign='center' width={1}>
            <Icon onClick={props.onClick} color='orange' size='big' name='close' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Sidebar>
)

export default HorizontalSearchbar