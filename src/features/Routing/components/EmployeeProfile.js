import React, { Component } from 'react'
import { object } from 'prop-types'
import { Text, List, ListItem } from 'react-native-elements'
import styled from 'styled-components'

import EMPLOYEE_LIST from '../employeeList'

const StyledContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`
const StyledHeading = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
`
const StyledAvatar = styled.Image`
  margin-top: 20;
  margin-bottom: 20;
  width: 200;
  height: 200;
  border-radius: 100;
`

const ICON_MAPPING = [
  { key: 'birth', icon: 'cake' },
  { key: 'city', icon: 'domain' },
  { key: 'phone', icon: 'phone' },
  { key: 'email', icon: 'email' }
]

class EmployeeProfile extends Component {
  get profile () {
    const { id = '' } = this.props.match.params
    return EMPLOYEE_LIST.find(item => item.id === id) || {}
  }

  render () {
    const {
      name,
      jobTitle,
      avatar,
      ...rest
    } = this.profile

    return (
      <StyledContainer>
        <StyledHeading>
          <StyledAvatar source={{ uri: avatar }} />
          <Text h3>{name}</Text>
          <Text h4>{jobTitle}</Text>
        </StyledHeading>

        <List>
          {ICON_MAPPING.map(({ key, icon }) => (
            <ListItem
              title={rest[key]}
              leftIcon={{ name: icon }}
              hideChevron
            />
          ))}
        </List>
      </StyledContainer>
    )
  }
}

EmployeeProfile.propTypes = {
  match: object.isRequired
}

export default EmployeeProfile
