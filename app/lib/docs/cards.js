Alloy.Globals.cards = {
  title: 'Cards',
  subtitle: 'General props: variant, color and classes',
  text: `Cards help organize content in a clean, scannable format - perfect for leading users to more detailed information.

Our Card Component features 4 unique variants:
  • code
  • content
  • quote
  • showcase

Each comes in 4 color schemes: black, dark, light and white.

We've added colored backgrounds to the white variants below so you can see them better.`,
  code: {
    title: 'Card Component',
    text: '<Card variant="code" color="black" module="tikit.ui" copy="true" title="Card Title" text="Some code or text to display!"/>'
  },
  variants: {
    code: {
      title: 'code variant',
      subtitle: 'Main props: title, text and copy',
      text: `Share snippets of code beautifully with this variant.

Want users to easily grab the code? Just set 'copy' to true for a handy copy button in the corner.

The button text and success message use your app's localization strings: L('copy', 'Copy') and L('code_copied', 'Code copied to clipboard!'). Simply add these to your language files (app/i18n/xx/strings.xml) to customize them.

For the best look, install your favorite monospace font and set up 'font-mono' in './purgetss/config.js'.

Our examples use the clean 'FiraCode-Light' family.`
    },
    showcase: {
      title: 'showcase variant',
      subtitle: 'Main props: title, text and image',
      text: 'Put your visuals front and center with this eye-catching layout - perfect for highlighting projects or features with an image, title, and brief description.',
      code: {
        title: 'showcase variant',
        text: '<Card variant="showcase" color="black" title="Pocket" text=\'Mobile app marketing website\' image="images/showcase/1.png"/>'
      }
    },
    quote: {
      title: 'quote variant',
      subtitle: 'Main props: name and text',
      text: 'Let your testimonials and quotes shine with this stylish, attribution-ready card variant.',
      code: {
        title: 'quote variant',
        text: '<Card variant="quote" color="black" name="John Doe" text="Quas ullam, quis eius a blanditiis..."/>'
      }
    },
    content: {
      title: 'content variant',
      subtitle: 'Main props: title, subtitle and text',
      text: 'Perfect for blog posts or articles, this variant gives your content a polished, organized structure with prominent title, highlighted subtitle, and clean text layout.',
      code: {
        title: 'content variant, black',
        text: '<Card variant="content" color="black" title="content variant, black" subtitle="This is a subtitle" text=\'Alloy.Globals.lorem\'/>'
      }
    }
  }
}
