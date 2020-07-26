import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import SvgSpin from '../../icons/spin'
import { Icon } from './index'

export default {
  title: 'Icon',
  component: Icon,
  decorators: [withKnobs],
}

export const Default = () => {
  const size = select('size', ['small', 'medium', 'large'], 'small')

  return <Icon svg={SvgSpin} size={size} />
}
