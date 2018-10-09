import React, { Component } from 'react'
import { List, ListItem } from 'react-native-elements'
import styled from 'styled-components'

const StyledContainer = styled.View`
  flex: 1;
  background: #eee;
`

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      switchState: false
    }
  }

  render () {
    const { switchState } = this.state

    return (
      <StyledContainer>
        <List>
          <ListItem
            title='Option 1'
            switchButton
            switched={switchState}
            hideChevron
            onSwitch={value => {
              this.setState(({ switchState }) => {
                return { switchState: !switchState }
              })
            }}
          />
        </List>

        <List>
          <ListItem
            title='Option 2.1'
          />
          <ListItem
            title='Option 2.2'
          />
        </List>
      </StyledContainer>
    )
  }
}

export default Settings
