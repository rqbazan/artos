import * as React from 'react'
import { Button, ButtonProps } from 'reakit'
import clsx from 'clsx'

export interface TextButtonProps extends ButtonProps {}

export function TextButton(props: TextButtonProps) {
  const { className, disabled } = props

  return (
    <Button
      {...props}
      className={clsx(
        className,
        'shadow-button rounded px-3 border-2 border-transparent font-medium focus:outline-none',
        {
          'transition duration-200 ease-in-out shadow-secondary text-night dark:text-smoke-100 dark:shadow-primary hover:bg-smoke-100 dark:hover:bg-night-soft active:shadow-none active:border-secondary dark:active:border-primary': !disabled,
          'text-smoke-300 shadow-smoke-300': disabled,
        }
      )}
    />
  )
}
