import { Icon } from 'react-native-elements'
import styled, { withTheme } from 'styled-components'

const CustomIcon = styled(Icon).attrs({
  color: props => props.color || props.theme.primaryColor
})``

CustomIcon.defaultProps = {
  theme: {
    primaryColor: '#000'
  }
}

export default withTheme(CustomIcon)
