import React from 'react'
import clsx from 'clsx'
import { Button, ButtonProps } from 'reakit'

export interface ContainedButtonProps extends ButtonProps {}

export function ContainedButton(props: ContainedButtonProps) {
  const { className, disabled } = props

  return (
    <Button
      {...props}
      className={clsx(
        className,
        'h-12 px-4 rounded inline-flex justify-center items-center',
        {
          'bg-black-100 border border-black-200 text-black-200': disabled,
          'bg-primary-100 hover:bg-primary-200 text-white transition duration-150 ease-in-out focus:outline-none': !disabled,
        }
      )}
    />
  )
}
