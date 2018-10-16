import styled, { withTheme } from 'styled-components'

const CustomText = styled.Text`
  font-size: ${props => {
    const { size, h1, h2, h3 } = props
    const { fontSize, h1FontSize, h2FontSize, h3FontSize } = props.theme
    if (size) {
      return size
    } else if (h1) {
      return h1FontSize
    } else if (h2) {
      return h2FontSize
    } else if (h3) {
      return h3FontSize
    }
    return fontSize
  }};
  font-weight: ${props => {
    const { weight, h1, h2, h3 } = props
    return weight || (h1 || h2 || h3) ? 'bold' : 'normal'
  }};
  color: ${props => props.color || props.theme.primaryColor};
`

CustomText.defaultProps = {
  theme: {
    h1FontSize: 32,
    h2FontSize: 24,
    h3FontSize: 18,
    fontSize: 14,
    primaryColor: '#000'
  }
}

export default withTheme(CustomText)
