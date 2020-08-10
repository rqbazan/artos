import * as React from 'react'
import { ContainedButton, ContainedButtonProps } from '../contained-button'
import { TextButton, TextButtonProps } from '../text-button'

const variants = {
  contained: ContainedButton,
  text: TextButton,
}

type WithButtonOptionProps<T> = T & {
  variant?: keyof typeof variants
}

export type ButtonProps = WithButtonOptionProps<ContainedButtonProps> | WithButtonOptionProps<TextButtonProps>

export function Button({ variant = 'text', ...props }: ButtonProps) {
  return React.createElement(variants[variant], props)
}
