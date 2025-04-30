Alloy.Globals.buttons = {
  title: 'Buttons',
  subtitle: 'General props: variant, size and classes',
  text: `The heart of user interaction - buttons that look great and respond instantly.

Our Button Component includes 6 stylish variants:
  • border
  • border-rounded
  • filled
  • filled-rounded
  • icon-left
  • icon-right

Each scales perfectly with 6 sizes: xs, sm, base, lg, xl and 2xl.`,
  defaults: {
    title: 'Default Values',
    subtitle: 'Smart defaults make your code cleaner',
    text: `Our buttons use these sensible defaults when properties aren't specified:

• size: "base" - The button's size
• variant: "icon-left" (with icon) or "filled" (without icon) - The button's visual style

This means you can create effective buttons with minimal code:`,
    code: {
      title: 'Button with default values',
      text: '<Button module="tikit.ui" title="Default Button" />'
    }
  },
  extra: {
    title: 'Custom Icons',
    subtitle: 'Use any Icon Font Library',
    text: `Mix it up with icons from FontAwesome, Material Icons, or any other font library - just set the 'icon' property with the right classes like 'fa fa-file-pdf' or 'mi mi-pending_actions'.

Want a bigger icon? Add any PurgeTSS font size class like 'text-lg' or 'text-2xl'.

We're using Material Icons in this example, but you can use whatever fits your style.`,
    code: {
      title: 'Custom icon and color',
      text: '<Button variant="icon-left" size="base" module="tikit.ui" icon="mi mi-pending_actions text-2xl text-violet-50" title="Pending Actions" classes="text-violet-50 bg-violet-900 font-bold"/>',
    }
  },
  code: {
    title: 'Button Component',
    text: '<Button variant="border" size="lg" title="Button Name" module="tikit.ui"/>'
  },
  variants: {
    border: {
      title: 'border variant',
      subtitle: 'Main props: title',
      text: 'Simple and elegant with customizable colors - tweak the border and text with the \'classes\' property:',
      code: {
        title: 'border variant',
        text: '<Button variant="border" size="base" title="Border" module="tikit.ui" classes="border-violet-900 text-violet-900"/>'
      }
    },
    borderRounded: {
      title: 'border-rounded variant',
      subtitle: 'Main props: title',
      text: 'Softer edges with the same great look - customize border and text colors with \'classes\':',
      code: {
        title: 'border-rounded variant',
        text: '<Button variant="border-rounded" size="base" title="Border Rounded" classes="border-violet-900 text-violet-900" module="tikit.ui"/>'
      }
    },
    filled: {
      title: 'filled variant',
      subtitle: 'Main props: title',
      text: 'Bold and attention-grabbing - perfect for primary actions. Customize with \'classes\':',
      code: {
        title: 'filled variant',
        text: '<Button variant="filled" size="base" title="Filled" module="tikit.ui" classes="text-violet-50 bg-violet-900"/>'
      }
    },
    filledRounded: {
      title: 'filled-rounded variant',
      subtitle: 'Main props: title',
      text: 'Friendly rounded corners with solid background - great for modern interfaces:',
      code: {
        title: 'filled-rounded variant',
        text: '<Button variant="filled-rounded" size="base" title="Filled Rounded" classes="text-violet-50 bg-violet-900" module="tikit.ui"/>'
      }
    },
    iconLeft: {
      title: 'icon-left variant',
      subtitle: 'Main props: title and icon',
      text: `Add visual cues with an icon on the left side of your text.

Style both the icon and button using simple class properties.`,
      code: {
        title: 'icon-left variant',
        text: '<Button variant="icon-left" size="base" module="tikit.ui" title="Button" icon="fa fa-file text-violet-50" classes="text-violet-50 bg-violet-900"/>'
      }
    },
    iconRight: {
      title: 'icon-right variant',
      subtitle: 'Main props: title and icon',
      text: `Perfect for "next" or "continue" actions with the icon following your text.

Fully customizable with the same simple properties:`,
      code: {
        title: 'icon-right variant',
        text: '<Button variant="icon-right" size="base" module="tikit.ui" title="Button" icon="fa fa-file text-violet-50" classes="text-violet-50 bg-violet-900"/>'
      }
    }
  }
}
