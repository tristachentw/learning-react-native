/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import styled from 'styled-components'

import HeaderBar from './components/HeaderBar'
import DropAndDragList from './features/DropAndDragList'
import Routing from './features/Routing'

const FEATURE_DROP_AND_DRAG_LIST = 'Example1: Drop And Drag List'
const FEATURE_ROUTING = 'Example2: Routing'

const StyledContainer = styled.View`
  flex: 1;
`
const StyledBody = styled.View`
  flex: 1;
`
const StyledMenuList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const StyledButton = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: '#673ab7'
  }
})``

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feature: ''
    }
    this.getButtonProps = this.getButtonProps.bind(this)
  }

  setFeature (feature) {
    this.setState({ feature })
  }

  getButtonProps (feature) {
    return {
      title: feature,
      onPress: () => {
        this.setState({ feature })
      }
    }
  }

  render () {
    const { getButtonProps } = this
    const { feature } = this.state

    return (
      <StyledContainer>
        <HeaderBar />

        <StyledBody>
          { feature === FEATURE_DROP_AND_DRAG_LIST && <DropAndDragList /> }
          { feature === FEATURE_ROUTING && <Routing />}

          { !feature && (
            <StyledMenuList>
              <StyledButton {...getButtonProps(FEATURE_DROP_AND_DRAG_LIST)} />
              <StyledButton {...getButtonProps(FEATURE_ROUTING)} />
            </StyledMenuList>
          )}
        </StyledBody>
      </StyledContainer>
    )
  }
}
