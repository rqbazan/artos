import React from 'react'
import { action } from '@storybook/addon-actions'
import { ContainedButton } from './index'

export default {
  title: 'ContainedButton',
  component: ContainedButton,
}

export const Default = () => {
  return (
    <ContainedButton onClick={action('onClick')}>I am a button</ContainedButton>
  )
}

export const Disabled = () => {
  return (
    <ContainedButton onClick={action('onClick')} disabled>
      I am a button
    </ContainedButton>
  )
}
