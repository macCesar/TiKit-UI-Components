Alloy.Globals.tabsSection = {
  title: 'Tabs',
  subtitle: 'General props: title, icon and activeIcon',
  text: `The Tab component returns an instance of Titanium.UI.Tab that includes a custom icon created with an icon font such as FontAwesome, Material Icons or any other icon font of your choice.

By setting the 'title', 'icon' and 'activeIcon' (iOS only) properties, you'll get a Tab component with the icons nicely rendered.

The 'icon' property is defined with the icon font name and the icon code, for example: 'fa fa-home' or 'mi mi-home'.`,
  code: {
    title: 'Tab Component',
    text: `<Tab title="Email" icon="far fa-envelope" activeIcon="fas fa-envelope" module="tikit.ui">
  <!-- tab's-window-content -->
</Tab>`
  },
  extra: {
    title: 'Additional Props',
    subtitle: 'Any property for Ti.UI.Tab',
    text: `These are regular Titanium.UI.Tab objects, so you can use all the properties and methods available for them.

For example you can set active tint and title color for each tab by using the 'activeTintColor' and 'activeTitleColor' properties, just like this current tab:`,
    code: {
      title: 'Tab Component',
      text: `<Tab class="active-tint-violet-900 active-title-violet-900" title="Tabs" icon="mio mi-security_update_good text-3xl" activeIcon="mit mi-security_update_good text-3xl" module="tikit.ui">
  <Require src="sections/tabs"/>
</Tab>`
    }
  },
  copyFonts: {
    title: 'Free Icon Libraries',
    subtitle: 'copy-fonts command in PurgeTSS',
    text: 'To copy the free versions of Font Awesome, Material Icons, Material Symbols or Framework7 Icons to your project, use the \'copy-font\' command in PurgeTSS:',
    code: {
      title: 'copy-fonts command in PurgeTSS',
      text: `> purgetss copy-fonts --vendor=fa,mi,ms,f7

• fa, fontawesome = Font Awesome Icons
• mi, materialicons = Material Icons
• ms, materialsymbol = Material Symbols
• f7, framework7 = Framework7 Icons`
    }
  }
}
