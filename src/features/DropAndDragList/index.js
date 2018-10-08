import React, { Component } from 'react'
import faker from 'faker'
import { ListItem } from 'react-native-elements'
import SortableList from 'react-native-sortable-list'

import { arrayToObject } from '@root/utils/converter'

const LIST_LENGTH = 50
const LIST = arrayToObject(Array.from(Array(LIST_LENGTH), (v, i) => ({
  id: faker.random.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatar: faker.image.avatar(),
  jobTitle: faker.name.jobTitle()
})))

class DropAndDragList extends Component {
  renderRow ({ data }) {
    return (
      <ListItem
        roundAvatar
        avatar={{ uri: data.avatar }}
        title={data.name}
        subtitle={data.jobTitle}
        rightIcon={{ name: 'reorder' }}
      />
    )
  }

  render () {
    return (
      <SortableList
        data={LIST}
        renderRow={this.renderRow}
      />
    )
  }
}

export default DropAndDragList
