import React from 'react'
import clsx from 'clsx'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.FC<React.SVGProps<SVGSVGElement>>
  size?: 'small' | 'medium' | 'large'
}

export function Icon({
  svg: Svg,
  size = 'small',
  className,
  ...props
}: IconProps) {
  return (
    <Svg
      {...props}
      className={clsx(className, {
        'h-6 w-6': size === 'small',
        'h-8 w-8': size === 'medium',
        'h-10 w-10': size === 'large',
      })}
    />
  )
}
