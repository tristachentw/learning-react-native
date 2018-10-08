import React, { PureComponent } from 'react'
import { Header, Icon } from 'react-native-elements'
import styled from 'styled-components'

const StyledContainer = styled(Header).attrs({
  backgroundColor: '#673ab7'
})``
const StyledIcon = styled(Icon).attrs({
  color: '#fff'
})``
const StyledTitle = styled.Text`
  color: #fff;
`

class HeaderBar extends PureComponent {
  render () {
    return (
      <StyledContainer
        leftComponent={<StyledIcon name='menu' />}
        centerComponent={<StyledTitle>Learning RN Examples</StyledTitle>}
      />
    )
  }
}

export default HeaderBar
