Alloy.Globals.avatars = {
  title: 'Avatars',
  subtitle: 'General props: variant, size and classes',
  text: `Use Avatars to portray people or objects. It can be used as a visual identifier for a user profile on your app.

TiKit Avatar Component contains 6 variants:
  • chip
  • circular
  • square
  • portrait
  • landscape
  • stacked

With 6 different sizes each: xs, sm, md, lg, xl and 2xl.`,
  code: {
    title: 'Avatar Component',
    text: '<Avatar variant="chip" size="base" module="tikit.ui" name="John Doe" image="link-to-image.jpg"/>'
  },
  variants: {
    chip: {
      title: 'chip variant',
      subtitle: 'Main props: name and image',
      text: `Set the name of the person and an image to display, using a local filesystem path, a remote URL, or a Blob object containing image data.

The default colors are bg-gray-200 and text-gray-500. To change them use the 'classes' property, like the example below.`,
      code: {
        title: 'chip variant with custom colors',
        text: '<Avatar variant="chip" size="base" name="Mr. John Doe" image="https://randomuser.me/api/portraits/men/86.jpg" classes="bg-violet-900 text-violet-50"/>'
      }
    },
    circular: {
      title: 'circular variant',
      subtitle: 'Main props: name, image and border',
      text: `Set 'border' to true to show a white border around the image.

Use the 'classes' prop to change the border color.`,
      code: {
        title: 'circular variant',
        text: '<Avatar variant="circular" size="base" module="tikit.ui" border="true" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    square: {
      title: 'square variant',
      subtitle: 'Main props: name, image and border',
      text: `Set 'border' to true to show a white border around the image.

Use the 'classes' prop to change the border color.`,
      code: {
        title: 'square variant',
        text: '<Avatar variant="square" size="base" module="tikit.ui" border="true" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    portrait: {
      title: 'portrait variant',
      subtitle: 'Main props: name and image',
      text: `Use the 'classes' prop to change the border color.

The default border color is border-gray-500, use the 'classes' prop to change it.`,
      code: {
        title: 'portrait variant',
        text: '<Avatar variant="portrait" size="base" module="tikit.ui" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    landscape: {
      title: 'landscape variant',
      subtitle: 'Main props: name and image',
      text: `Use the 'classes' prop to change the border color.

The default border color is border-gray-500, use the 'classes' prop to change it.`,
      code: {
        title: 'landscape variant',
        text: '<Avatar variant="landscape" size="base" module="tikit.ui" classes="border-violet-900" image="https://randomuser.me/api/portraits/men/86.jpg"/>'
      }
    },
    stacked: {
      title: 'stacked variant',
      subtitle: 'Main props: title, icon and last',
      text: 'To properly adjust the right margin of the last avatar in a stack, set its \'last\' property to true.',
      code: {
        title: 'stacked variant',
        text: `<View class="horizontal">
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/86.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/87.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" image="https://randomuser.me/api/portraits/men/62.jpg"/>
  <Avatar variant="stacked" size="base" module="tikit.ui" last="true" image="https://randomuser.me/api/gs/men/88.jpg"/>
</View>`
      }
    },
  }
}
