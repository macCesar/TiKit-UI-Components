Alloy.Globals.buttons = {
  title: 'Buttons',
  subtitle: 'General props: variant, size and classes',
  text: `Buttons allow the user to take actions or make choices.

TiKit Button Component contains 6 variants:
  • border
  • border-rounded
  • filled
  • filled-rounded
  • icon-left
  • icon-right

With 6 different sizes each: xs, sm, base, lg, xl and 2xl.`,
  extra: {
    title: 'Custom Icons',
    subtitle: 'Use any Icon Font Library',
    text: `You can change to a different icon from the FontAwesome Icon Library or even to a different font vendor by setting the 'icon' property with the font and icon classes, ej. 'fa fa-file-pdf' or 'mi mi-pending_actions'

You can even change its size with any of PurgeTSS's font size classes, such as 'text-lg' or 'text-2xl'.

In this example, we are using the Material Icons font library.`,
    code: {
      title: 'Custom icon and color',
      text: `<Button variant="icon-left" size="base" module="tikit.ui" icon="mi mi-pending_actions text-2xl text-violet-50" title="Pending Actions" classes="text-violet-50 bg-violet-900 font-bold"/>`,
    }
  },
  code: {
    title: 'Button Component',
    text: `<Button variant="border" size="lg" title="Button Name" module="tikit.ui"/>`
  },
  variants: {
    border: {
      title: 'border variant',
      subtitle: 'Main props: title',
      text: `Use the 'classes' property to change the color of the title and border:`,
      code: {
        title: 'border variant',
        text: `<Button variant="border" size="base" title="Border" module="tikit.ui" classes="border-violet-900 text-violet-900"/>`
      }
    },
    borderRounded: {
      title: 'border-rounded variant',
      subtitle: 'Main props: title',
      text: `Use the 'classes' property to change the color of the title and border:`,
      code: {
        title: 'border-rounded variant',
        text: `<Button variant="border-rounded" size="base" title="Border Rounded" classes="border-violet-900 text-violet-900" module="tikit.ui"/>`
      }
    },
    filled: {
      title: 'filled variant',
      subtitle: 'Main props: title',
      text: `Use the 'classes' property to change the color of the title and background:`,
      code: {
        title: 'filled variant',
        text: `<Button variant="filled" size="base" title="Filled" module="tikit.ui" classes="text-violet-50 bg-violet-900"/>`
      }
    },
    filledRounded: {
      title: 'filled-rounded variant',
      subtitle: 'Main props: title',
      text: `Use the 'classes' property to change the color of the title and background:`,
      code: {
        title: 'filled-rounded variant',
        text: `<Button variant="filled-rounded" size="base" title="Filled Rounded" classes="text-violet-50 bg-violet-900" module="tikit.ui"/>`
      }
    },
    iconLeft: {
      title: 'icon-left variant',
      subtitle: 'Main props: title and icon',
      text: `Use the 'icon' property to change its icon, color and size.

Use the 'classes' property to change the color of the title and background.`,
      code: {
        title: 'icon-left variant',
        text: `<Button variant="icon-left" size="base" module="tikit.ui" title="Button" icon="fa fa-file text-violet-50" classes="text-violet-50 bg-violet-900"/>`
      }
    },
    iconRight: {
      title: 'icon-right variant',
      subtitle: 'Main props: title and icon',
      text: `Use the 'icon' property to change its icon, color and size.

Use the 'classes' property to change the color of the title and background:`,
      code: {
        title: 'icon-right variant',
        text: `<Button variant="icon-right" size="base" module="tikit.ui" title="Button" icon="fa fa-file text-violet-50" classes="text-violet-50 bg-violet-900"/>`
      }
    }
  }
};
