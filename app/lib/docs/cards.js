Alloy.Globals.cards = {
  title: 'Cards',
  subtitle: 'General props: variant, color and classes',
  text: `Cards are used to group and display content in a way that is easily readable, it serves as an entry point to more detailed information.

TiKit Card Component contains 4 variants:
  • code
  • content
  • quote
  • showcase

With 4 colors each: black, dark, light and white.

All white variant examples have a colored background so you can see them more clearly.`,
  code: {
    title: 'Card Component',
    text: '<Card variant="code" color="black" module="tikit.ui" copy="true" title="Card Title" text="Some code or text to display!"/>'
  },
  variants: {
    code: {
      title: 'code variant',
      subtitle: 'Main props: title, text and copy',
      text: `To display small snippets of code.

Use the 'copy' property to display a copy button at the top-right corner.

The button's title and the alert message are set with Titanium's localization function: L('copy', 'Copy') and L('code_copied', 'Code copied to clipboard!') respectibly, so add both strings: 'copy' and 'code_copied' to your app's target languages (app/i18n/xx/strings.xml) for personalization and translation.

Install a monotype family of your preference and create a 'font-mono' style in './purgetss/config.js'.

We are using 'FiraCode-Light' font family in all examples.`
    },
    showcase: {
      title: 'showcase variant',
      subtitle: 'Main props: title, text and image',
      text: 'When you need to display an image with a title and a small description.',
      code: {
        title: 'showcase variant',
        text: '<Card variant="showcase" color="black" title="Pocket" text=\'Mobile app marketing website\' image="images/showcase/1.png"/>'
      }
    },
    quote: {
      title: 'quote variant',
      subtitle: 'Main props: name and text',
      text: 'When you need to display a quote from someone.',
      code: {
        title: 'quote variant',
        text: '<Card variant="quote" color="black" name="John Doe" text="Quas ullam, quis eius a blanditiis..."/>'
      }
    },
    content: {
      title: 'content variant',
      subtitle: 'Main props: title, subtitle and text',
      text: 'Display a block of text with a large title, a highlighted subtitle and paragraphs of text.',
      code: {
        title: 'content variant, black',
        text: '<Card variant="content" color="black" title="content variant, black" subtitle="This is a subtitle" text=\'Alloy.Globals.lorem\'/>'
      }
    }
  }
}
