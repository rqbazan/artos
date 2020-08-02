import React from 'react'
import { Icon, IconProps } from './components/icon'

export function createIcon(SVG: React.FC<React.SVGProps<SVGSVGElement>>) {
  function SVGIcon(props: Omit<IconProps, 'as'>) {
    return <Icon as={SVG} {...props} />
  }

  if (__DEV__) {
    SVGIcon.displayName = SVG.displayName
  }

  return SVGIcon
}
