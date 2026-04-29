Alloy.Globals.forms = {
  title: 'Forms',
  subtitle: 'General props: variant, color and classes',
  text: `Collecting user input is essential for any app. TiKit's Forms section brings you flexible, beautiful input components that make data entry a breeze.

Our Input Component is designed for clarity, accessibility, and easy customization. Use it for login screens, search bars, settings, and anywhere you need user data.

Key features:
  • Multiple variants for different use cases
  • Color schemes to match your brand
  • Easy styling with PurgeTSS classes

Below you'll find examples and best practices for using TiKit Input components.`,
  defaults: {
    title: 'Default Values',
    subtitle: 'Smart defaults for quick forms',
    text: `Inputs come with sensible defaults so you can get started fast:

• color: "dark" - The input's color scheme
• variant: "filled" (default) or "outline" - The input's visual style

This means you can create effective forms with minimal code:`,
    code: {
      title: 'Input with default values',
      text: '<Input module="tikit.ui" placeholder="Type here..." />'
    }
  },
  code: {
    title: 'Input Component',
    text: '<Input variant="outline" color="black" module="tikit.ui" placeholder="Your email" />'
  },
  variants: {
    filled: {
      title: 'filled variant',
      subtitle: 'Main props: placeholder, value, onChange',
      text: 'A modern, solid background input. Great for most forms and quick data entry.',
      code: {
        title: 'filled variant',
        text: '<Input variant="filled" color="dark" placeholder="Username" />'
      }
    },
    outline: {
      title: 'outline variant',
      subtitle: 'Main props: placeholder, value, onChange',
      text: 'A clean, outlined input for a more minimal look. Perfect for settings or search bars.',
      code: {
        title: 'outline variant',
        text: '<Input variant="outline" color="black" placeholder="Search..." />'
      }
    }
  }
}
