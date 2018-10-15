import React, { Component } from 'react'
import { string, object } from 'prop-types'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components'

const StyledText = styled(Text)`
  color: #fff;
`
const StyledIcon = styled(Icon).attrs({
  color: '#fff'
})``
const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15;
  padding-bottom: 15;
  width: 50%;
`
const StyledLabel = styled.View`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledValue = styled(StyledText)`
  font-size: 16;
`

class ListItem extends Component {
  render () {
    const { intl, id, icon, value } = this.props
    const i18nTitle = `label_${id}`
    const i18nValue = `value_${id}`

    return (
      <StyledContainer>
        <StyledLabel>
          <StyledIcon {...icon} />
          <StyledText>{intl.formatMessage({ id: i18nTitle })}</StyledText>
        </StyledLabel>
        <StyledValue>{intl.formatMessage({ id: i18nValue }, value)}</StyledValue>
      </StyledContainer>
    )
  }
}

ListItem.propTypes = {
  intl: intlShape.isRequired,
  id: string,
  icon: object,
  value: object
}

export default injectIntl(ListItem)
