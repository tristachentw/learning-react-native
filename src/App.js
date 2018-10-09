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

const FEATURE_LIST = [{
  id: 'drop_and_drag_list',
  title: 'Example1: Drop And Drag List',
  component: DropAndDragList
}, {
  id: 'routing',
  title: 'Example2: Routing',
  component: Routing
}]

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
  paddingLeft: 50;
  paddingRight: 50;
`
const StyledButton = styled(Button).attrs({
  containerViewStyle: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  buttonStyle: {
    backgroundColor: '#673ab7'
  }
})``

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      featureId: ''
    }
    this.getButtonProps = this.getButtonProps.bind(this)
  }

  setFeature (featureId) {
    this.setState({ featureId })
  }

  getButtonProps (feature) {
    return {
      title: feature.title,
      onPress: () => {
        this.setState({ featureId: feature.id })
      }
    }
  }

  renderFeatureList () {
    const { getButtonProps } = this
    return (
      <StyledMenuList>
        {FEATURE_LIST.map(item => (
          <StyledButton key={item.id} {...getButtonProps(item)} />
        ))}
      </StyledMenuList>
    )
  }

  render () {
    const { featureId } = this.state
    const { component: Component } = FEATURE_LIST.find(item => item.id === featureId) || {}

    return (
      <StyledContainer>
        <HeaderBar />

        <StyledBody>
          {
            Component
              ? <Component />
              : this.renderFeatureList()
          }
        </StyledBody>
      </StyledContainer>
    )
  }
}
