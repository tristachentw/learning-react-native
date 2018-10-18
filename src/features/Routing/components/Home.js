import React, { Component } from 'react'
import { Text, Icon } from 'react-native-elements'
import styled from 'styled-components/native'

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const StyledIcon = styled(Icon).attrs({
  size: 150,
  color: '#673ab7',
  iconStyle: {
    marginTop: 10,
    marginBottom: 10
  }
})``

class Home extends Component {
  render () {
    return (
      <StyledContainer>
        <StyledIcon name='md-globe' type='ionicon' />
        <Text h3>Hi! How are you?</Text>
      </StyledContainer>
    )
  }
}

export default Home
