import 'tailwindcss/tailwind.css'
import { addParameters, addDecorator } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withPaddings } from 'storybook-addon-paddings'
import { withA11y } from '@storybook/addon-a11y'
import { withChangeThemeAttr } from './decorators'

addDecorator(withPaddings)

addDecorator(withA11y)

addDecorator(withChangeThemeAttr)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  paddings: [
    { name: 'Small', value: '16px', default: true },
    { name: 'Medium', value: '32px' },
    { name: 'Large', value: '48px' },
  ],
  backgrounds: [
    { name: 'light', value: '#f0f8ff', default: true },
    { name: 'dark', value: '#160D4A' },
  ],
  grid: {
    cellSize: 16,
  },
})
