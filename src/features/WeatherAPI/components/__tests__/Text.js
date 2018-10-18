import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { ThemeProvider } from 'styled-components/native'

import Text from '../Text'

const THEME = {
  h1FontSize: 40,
  h2FontSize: 30,
  h3FontSize: 20,
  fontSize: 10,
  primaryColor: 'black'
}

const renderWithTheme = (children, theme) => {
  return renderer.create(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

describe('Custom Text Component', () => {
  it('should render without throwing an error', function () {
    const component = shallow(<Text />)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render with theme without throwing an error', function () {
    const component = renderWithTheme(<Text />, THEME)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have heading styles provided by theme', () => {
    const component = renderWithTheme(<Text h1 />, THEME)
    const view = component.root.findByType('Text')
    expect(view.props.style).toEqual([{
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black'
    }])
  })

  it('should have text as children', () => {
    const component = renderWithTheme(<Text>Children Text</Text>, THEME)
    const view = component.root.findByType('Text')
    expect(view.props.children).toBe('Children Text')
  })
})
