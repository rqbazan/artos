import React, { useContext } from 'react'
import clsx from 'clsx'
import { ThemeContext } from '~/theme'

export type WithIconOptionProps<T> = T & {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export type IconProps =
  | WithIconOptionProps<{
      as: React.ComponentType<React.SVGProps<SVGSVGElement>>
    }>
  | WithIconOptionProps<{
      name: string
    }>

export function Icon({ size, ...props }: IconProps) {
  const theme = useContext(ThemeContext)

  const className = clsx(props.className, {
    'h-6 w-6': size === 'small',
    'h-8 w-8': size === 'medium',
    'h-10 w-10': size === 'large',
  })

  if ('as' in props) {
    const { as: Component, ...other } = props

    return <Component {...other} className={className} />
  }

  if ('name' in props) {
    const { name, ...other } = props

    const Component = theme.icons[name]

    return <Component {...other} className={className} />
  }

  return null
}
