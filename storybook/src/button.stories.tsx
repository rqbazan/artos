import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { Button } from '@artos/components'

export default {
  title: 'Inputs/Button',
  component: Button,
}

const onClickAction = action('onClick')

export const TextButton = () => {
  const disabled = boolean('disabled', false)

  return (
    <Button onClick={onClickAction} disabled={disabled}>
      I am a button
    </Button>
  )
}
