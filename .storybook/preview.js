import 'tailwindcss/tailwind.css'
import { addParameters, addDecorator } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withPaddings } from 'storybook-addon-paddings'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withPaddings)

addDecorator(withA11y)

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
    { name: 'dark', value: '#000000' },
  ],
  grid: {
    cellSize: 16,
  },
})
