Alloy.Globals.alerts = {
  title: 'Alerts',
  subtitle: 'General props: variant, color and classes',
  text: `Alerts grab your user's attention with important messages without disrupting their workflow.

Our Alert Component comes in 3 flavors:
  • callout
  • pop
  • solid

Each variant works with 6 standard colors: success, danger, warning, info, dark and light.

We've also included 2 special colors you can customize: primary and secondary.

Want your own colors? Just use the PurgeTSS 'shades' command:`,
  code: {
    title: 'shades command in PurgeTSS',
    text: `> purgetss shades '#hexcode1' primary
> purgetss shades '#hexcode2' secondary`
  },
  extra: {
    title: 'Additional Props',
    subtitle: 'delay, duration and dismissible',
    text: `Need some timing control? Use 'delay' to show the alert after a certain period and 'duration' to control animation speed. Both are in milliseconds.

Make your alerts interactive by setting 'dismissible' to true - users can tap anywhere on the alert to close it.`,
    code: {
      title: 'Dismissible Alert with a delay',
      text: '<Alert variant="pop" color="info" delay="500" dismissible="true" module="tikit.ui" title="Dismissible Alert" text="Lorem ipsum dolor sit..."/>'
    }
  },
  variants: {
    callout: {
      title: 'callout variant',
      subtitle: 'Main props: title and text',
      text: 'Clean and simple - just a title with a brief message.',
      code: {
        title: 'callout variant',
        text: '<Alert variant="callout" color="success" module="tikit.ui" title="Callout variant" text="Lorem ipsum dolor sit..."/>'
      }
    },
    pop: {
      title: 'pop variant',
      subtitle: 'Main props: title, text and icon',
      text: `Add some visual punch with icons to emphasize your message.

You're free to use FontAwesome, Material Icons, or any other icon font you've added to your project.

Switch up the icon using the 'icon' property and resize it with PurgeTSS's font classes:`,
      code: {
        title: 'pop variant with custom icon',
        text: '<Alert variant="pop" color="primary" module="tikit.ui" title="Primary Alert with custom Icon" text="Lorem ipsum dolor sit..." icon="mi mi-pending_actions text-3xl"/>'
      }
    },
    solid: {
      title: 'solid variant',
      subtitle: 'Main props: title and icon',
      text: `Need something bold? This full-width banner with icon definitely stands out.

Just like with 'pop', customize your icon using the 'icon' property and tweak its size with PurgeTSS font classes.`,
      code: {
        title: 'solid variant',
        text: '<Alert variant="solid" color="primary" title="Primary Alert with custom Icon" icon="mi mi-pending_actions text-2xl" module="tikit.ui"/>'
      }
    }
  }
}
