import React, { Component } from 'react'
import { string, object } from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import styled from 'styled-components/native'

import Text from './Text'
import Icon from './Icon'

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 15;
  padding-bottom: 15;
  width: 50%;
`
const StyledLabel = styled.View`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledLabelText = styled(Text).attrs({
  weight: 'bold'
})``

class ListItem extends Component {
  render () {
    const { intl, id, icon, value } = this.props
    const i18nTitle = `label_${id}`
    const i18nValue = `value_${id}`

    return (
      <StyledContainer>
        <StyledLabel>
          <Icon {...icon} />
          <StyledLabelText>{intl.formatMessage({ id: i18nTitle })}</StyledLabelText>
        </StyledLabel>
        <Text>{intl.formatMessage({ id: i18nValue }, value)}</Text>
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
