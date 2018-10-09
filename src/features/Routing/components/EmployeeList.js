import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Link } from 'react-router-native'
import { ListItem } from 'react-native-elements'

import EMPLOYEE_LIST from '../employeeList'

class EmployeeList extends Component {
  renderItem ({ item }) {
    return (
      <Link to={`/employees/${item.id}`}>
        <ListItem
          roundAvatar
          avatar={{ uri: item.avatar }}
          title={item.name}
          subtitle={item.jobTitle}
        />
      </Link>
    )
  }

  render () {
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={EMPLOYEE_LIST}
        renderItem={this.renderItem}
      />
    )
  }
}

export default EmployeeList
