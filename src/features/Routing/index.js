
import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import styled from 'styled-components'

import NAVIGATION_ITEMS from './navigationItems'

const StyledContainer = styled.View`
  flex: 1;
`
const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 }
})``
const StyledNavigationBar = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  height: 44px;
  background: #673ab7;
`
const StyledNav = styled(Link).attrs({
  underlayColor: '#512da8'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const StyledNavIcon = styled(Icon).attrs({
  color: '#fff'
})``
const StyledNavText = styled.Text`
  font-size: 10px;
  color: #fff;
`

class Routing extends Component {
  render () {
    return (
      <NativeRouter>
        <BackButton>
          <StyledContainer>
            <StyledScrollView>
              {NAVIGATION_ITEMS.map(item => (
                <Route
                  key={item.id}
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </StyledScrollView>

            <StyledNavigationBar>
              {NAVIGATION_ITEMS.filter(item => item.visible).map(item => (
                <StyledNav key={item.id} to={item.path}>
                  <View>
                    <StyledNavIcon name={item.icon} />
                    <StyledNavText>{item.title}</StyledNavText>
                  </View>
                </StyledNav>
              ))}
            </StyledNavigationBar>
          </StyledContainer>
        </BackButton>
      </NativeRouter>
    )
  }
}

export default Routing
