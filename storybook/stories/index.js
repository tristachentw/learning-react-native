import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-elements'
import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'

import CenterView from './CenterView'

addDecorator(withKnobs)
addDecorator(withBackgrounds([
  { name: 'light', value: '#fff' },
  { name: 'dark', value: '#000' }
]))

storiesOf('Welcome', module)
  .add('Welcome', () => <Text>Welcome Storybook</Text>)

storiesOf('Knobs', module)
  .add('with a label', () => (
    <Text>
      {text('Label', 'Hello Storybook')}
    </Text>
  ))

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button
      title='Back to welcome'
      onPress={linkTo('Welcome')}
    />
  ))
  .add('with some emoji', () => (
    <Button
      title='😀 😎 👍 💯'
      onPress={action('clicked-emoji')}
    />
  ))
