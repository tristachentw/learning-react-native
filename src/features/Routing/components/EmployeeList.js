import React, { Component } from 'react'
import faker from 'faker'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const LIST_LENGTH = 50
const LIST = Array.from(Array(LIST_LENGTH), (v, i) => ({
  id: faker.random.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatar: faker.image.avatar(),
  jobTitle: faker.name.jobTitle()
}))

class EmployeeList extends Component {
  renderItem ({ item }) {
    return (
      <ListItem
        roundAvatar
        avatar={{ uri: item.avatar }}
        title={item.name}
        subtitle={item.jobTitle}
      />
    )
  }

  render () {
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={LIST}
        renderItem={this.renderItem}
      />
    )
  }
}

export default EmployeeList
