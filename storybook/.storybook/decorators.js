import { useChannel } from '@storybook/addons'
import { EVENTS } from '@storybook/addon-backgrounds/dist/constants'

export function withChangeThemeAttr(story) {
  useChannel({
    [EVENTS.UPDATE]: (background) => {
      if (background.name === 'dark') {
        document.body.setAttribute('data-theme', 'dark')
      } else {
        document.body.removeAttribute('data-theme')
      }
    },
  })

  return story()
}
