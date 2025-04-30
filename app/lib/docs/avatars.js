Alloy.Globals.avatars = {
  title: 'Avatars',
  subtitle: 'General props: variant, size and classes',
  text: `Give your app a personal touch with avatars that showcase users or objects.

Our Avatar Component comes in 6 distinct styles:
  • chip
  • circular
  • square
  • portrait
  • landscape
  • stacked

Each style scales perfectly with 6 different sizes: xs, sm, md, lg, xl and 2xl.`,
  code: {
    title: 'Avatar Component',
    text: '<Avatar variant="chip" size="base" module="tikit.ui" name="John Doe" image="link-to-image.jpg"/>'
  },
  defaults: {
    title: 'Default Values',
    subtitle: 'Smart defaults make your code cleaner',
    text: `Our avatars use these sensible defaults when properties aren't specified:

• size: "base" - The avatar's size
• variant: "chip" (with name) or "square" (without name) - The avatar's shape and style

This means you can create effective avatars with minimal code:`,
    code: {
      title: 'Avatar with default values',
      text: '<Avatar module="tikit.ui" image="path/to/image.jpg" />'
    }
  },
  variants: {
    chip: {
      title: 'chip variant',
      subtitle: 'Main props: name and image',
      text: `Just provide a name and image - we'll handle the rest. The image can be from your local filesystem, a remote URL, or even a Blob object.

Not feeling the default gray theme? Change it up with the 'classes' property as shown below.`,
      code: {
        title: 'chip variant with custom colors',
        text: '<Avatar variant="chip" size="base" name="Mr. John Doe" image="https://randomuser.me/api/portraits/men/86.jpg" classes="bg-violet-900 text-violet-50"/>'
      }
    },
    circular: {
      title: 'circular variant',
      subtitle: 'Main props: name, image and border',
      text: `Want to make your avatar pop? Set 'border' to true for a clean white frame.

Need a different border color? No problem - just tweak it with the 'classes' prop.`,
      code: {
        title: 'circular variant',
        text: '<Avatar variant="circular" size="base" module="tikit.ui" border="true" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    square: {
      title: 'square variant',
      subtitle: 'Main props: name, image and border',
      text: `Clean edges, sharp look. Set 'border' to true for a framed effect.

Customize the border color easily through the 'classes' prop.`,
      code: {
        title: 'square variant',
        text: '<Avatar variant="square" size="base" module="tikit.ui" border="true" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    portrait: {
      title: 'portrait variant',
      subtitle: 'Main props: name and image',
      text: `This variant features a subtle border that enhances your portrait images.

The default gray border works with everything, but feel free to customize it with the 'classes' prop.`,
      code: {
        title: 'portrait variant',
        text: '<Avatar variant="portrait" size="base" module="tikit.ui" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    landscape: {
      title: 'landscape variant',
      subtitle: 'Main props: name and image',
      text: `Perfect for wider shots or scenery with your subject.

Change up the default gray border with your brand colors using the 'classes' prop.`,
      code: {
        title: 'landscape variant',
        text: '<Avatar variant="landscape" size="base" module="tikit.ui" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    stacked: {
      title: 'stacked variant',
      subtitle: 'Main props: image and last',
      text: 'Creating a team display? This variant is perfect for overlapping avatars. Just remember to mark the final avatar with last="true" to get the spacing right.',
      code: {
        title: 'stacked variant',
        text: `<View class="horizontal">
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/86.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/87.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/62.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" last="true" image="https://randomuser.me/api/portraits/men/88.jpg"/>
</View>`
      }
    },
  }
}
