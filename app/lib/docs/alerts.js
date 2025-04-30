Alloy.Globals.alerts = {
  title: 'Alerts',
  subtitle: 'General props: variant, color and classes',
  text: `Grab your users' attention with stylish alerts that deliver important messages without disrupting their flow.

Our Alert Component comes in 3 distinctive styles:
  • callout
  • pop
  • solid

Each style works perfectly with 8 colors: success, danger, warning, info, dark, light, primary and secondary.

Want your own color scheme? Just use the PurgeTSS 'shades' command:`,
  code: {
    title: 'shades command in PurgeTSS',
    text: `> purgetss shades '#hexcode1' primary
> purgetss shades '#hexcode2' secondary`
  },
  defaults: {
    title: 'Default Values',
    subtitle: 'Smart defaults make your code cleaner',
    text: `Our alerts use these sensible defaults when properties aren't specified:

• color: "dark" - The alert's color scheme
• variant: "pop" (with text) or "solid" (without text) - The alert's visual style

This means you can create effective alerts with minimal code:`,
    code: {
      title: 'Alert with default values',
      text: '<Alert module="tikit.ui" title="Simple Alert" text="With default values" />'
    }
  },
  extra: {
    title: 'Additional Props',
    subtitle: 'delay, duration and dismissible',
    text: `Fine-tune your alerts with timing controls - use 'delay' to show alerts after a pause and 'duration' to set animation speed. Both are in milliseconds.

Let users dismiss alerts by setting 'dismissible' to true - a simple tap anywhere on the alert will close it.`,
    code: {
      title: 'Dismissible Alert with a delay',
      text: '<Alert variant="pop" color="info" delay="500" dismissible="true" module="tikit.ui" title="Dismissible Alert" text="Lorem ipsum dolor sit..."/>'
    }
  },
  variants: {
    callout: {
      title: 'callout variant',
      subtitle: 'Main props: title and text',
      text: 'Simple and effective - just a title and message in a clean, attention-grabbing format.',
      code: {
        title: 'callout variant',
        text: '<Alert variant="callout" color="success" module="tikit.ui" title="Callout variant" text="Lorem ipsum dolor sit..."/>'
      }
    },
    pop: {
      title: 'pop variant',
      subtitle: 'Main props: title, text and icon',
      text: `Add visual impact with icons that reinforce your message.

Works with FontAwesome, Material Icons, or any other icon font in your project.

Customize the icon and size with simple properties:`,
      code: {
        title: 'pop variant with custom icon',
        text: '<Alert variant="pop" color="primary" module="tikit.ui" title="Primary Alert with custom Icon" text="Lorem ipsum dolor sit..." icon="mi mi-pending_actions text-3xl"/>'
      }
    },
    solid: {
      title: 'solid variant',
      subtitle: 'Main props: title and icon',
      text: `Make a statement with this bold, full-width banner featuring an eye-catching icon.

Customize the look just like with 'pop' - choose your icon and size with simple properties.`,
      code: {
        title: 'solid variant',
        text: '<Alert variant="solid" color="primary" title="Primary Alert with custom Icon" icon="mi mi-pending_actions text-2xl" module="tikit.ui"/>'
      }
    }
  }
}
