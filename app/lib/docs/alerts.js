Alloy.Globals.alerts = {
  title: 'Alerts',
  subtitle: 'General props: variant, color and classes',
  text: `An alert displays a short and important message attracting the user's attention without interrupting the user's task.

TiKit Alert Component contains 3 variants:
  • callout
  • pop
  • solid

With 6 main colors each: success, danger, warning, info, dark and light.

And 2 custom colors for each variant called: primary and secondary.

You can add your own color values using the 'shades' command in PurgeTSS:`,
  code: {
    title: 'shades command in PurgeTSS',
    text: `> purgetss shades '#hexcode1' primary
> purgetss shades '#hexcode2' secondary`
  },
  extra: {
    title: 'Additional Props',
    subtitle: 'delay, duration and dismissible',
    text: `Use 'delay' to display the alert after a period of time and 'duration' to set the speed of the animation. Both properties are in milliseconds.

Set the 'dismissible' property to true to close it when the user clicks/taps on it.`,
    code: {
      title: 'Dismissible Alert with a delay',
      text: '<Alert variant="pop" color="info" delay="500" dismissible="true" module="tikit.ui" title="Dismissible Alert" text="Lorem ipsum dolor sit..."/>'
    }
  },
  variants: {
    callout: {
      title: 'callout variant',
      subtitle: 'Main props: title and text',
      text: 'A simple Alert with a title and brief description.',
      code: {
        title: 'callout variant',
        text: '<Alert variant="callout" color="success" module="tikit.ui" title="Callout variant" text="Lorem ipsum dolor sit..."/>'
      }
    },
    pop: {
      title: 'pop variant',
      subtitle: 'Main props: title, text and icon',
      text: `Alerts with a predefined icon to emphasize a message.

You can use icon fonts such as FontAwesome, Material Icons or any other icon font of your choice.

Change the icon using the 'icon' property and its size with any of PurgeTSS's font size classes:`,
      code: {
        title: 'pop variant with custom icon',
        text: '<Alert variant="pop" color="primary" module="tikit.ui" title="Primary Alert with custom Icon" text="Lorem ipsum dolor sit..." icon="mi mi-pending_actions text-3xl"/>'
      }
    },
    solid: {
      title: 'solid variant',
      subtitle: 'Main props: title and icon',
      text: `A full-width, solid banner with a title and a predefined icon.

Just like the 'pop' variant, you can change its icon using the 'icon' property and its size with any of PurgeTSS's font size classes.`,
      code: {
        title: 'solid variant',
        text: '<Alert variant="solid" color="primary" title="Primary Alert with custom Icon" icon="mi mi-pending_actions text-2xl" module="tikit.ui"/>'
      }
    }
  }
}
