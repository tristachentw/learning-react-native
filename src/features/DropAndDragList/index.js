import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

const LIST = [
  {
    id: 1,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    id: 2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

class DropAndDragList extends Component {
  render () {
    return (
      <View>
        {
          LIST.map(item => (
            <ListItem
              key={item.id}
              avatar={{ uri: item.avatar_url }}
              title={item.name}
              subtitle={item.subtitle}
              roundAvatar
              hideChevron
            />
          ))
        }
      </View>
    )
  }
}

export default DropAndDragList
