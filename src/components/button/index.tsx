import React from 'react'
import { ContainedButton, ContainedButtonProps } from '../contained-button'

const variants = {
  contained: ContainedButton,
}

type WithButtonOptionProps<T> = T & {
  variant: keyof typeof variants
}

export type ButtonProps = WithButtonOptionProps<ContainedButtonProps>

export function Button({ variant, ...props }: ButtonProps) {
  return React.createElement(variants[variant], props)
}
