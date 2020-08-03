import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@artos/components'

export default {
  title: 'Button',
  component: Button,
}

const onClickAction = action('onClick')

export const ContainedButton = () => {
  return (
    <Button variant="contained" onClick={onClickAction}>
      I am a button
    </Button>
  )
}
