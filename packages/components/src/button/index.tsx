import * as React from 'react'
import { ContainedButton } from '../contained-button'
import type { ContainedButtonProps } from '../contained-button'

const variants = {
  contained: ContainedButton,
}

type WithButtonOptionProps<T> = T & {
  variant: keyof typeof variants
}

export type ButtonProps = WithButtonOptionProps<ContainedButtonProps>

export function Button({ variant = 'contained', ...props }: ButtonProps) {
  return React.createElement(variants[variant], props)
}
