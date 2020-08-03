import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { ContainedButton } from '@artos/components'

export default {
  title: 'ContainedButton',
  component: ContainedButton,
}

const onClickAction = action('onClick')

export const Normal = () => {
  return <ContainedButton onClick={onClickAction}>I am a button</ContainedButton>
}
