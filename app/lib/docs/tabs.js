Alloy.Globals.tabsSection = {
  title: 'Tabs',
  subtitle: 'General props: title, icon and activeIcon',
  text: `Navigate with style using our Tab component - a powerful wrapper for Titanium.UI.Tab that brings icon fonts to your navigation.

Simply set the 'title', 'icon', and 'activeIcon' (iOS only) properties to create beautiful, consistent tabs with custom icons.

Choose icons from FontAwesome, Material Icons, or any other icon font you've added to your project - just use the format 'fa fa-home' or 'mi mi-home'.`,
  code: {
    title: 'Tab Component',
    text: `<Tab title="Email" icon="far fa-envelope" activeIcon="fas fa-envelope" module="tikit.ui">
  <!-- tab's-window-content -->
</Tab>`
  },
  extra: {
    title: 'Additional Props',
    subtitle: 'Any property for Ti.UI.Tab',
    text: `These are fully-powered Titanium.UI.Tab objects, so all the native properties and methods work exactly as you'd expect.

Want branded tab highlights? Add 'activeTintColor' and 'activeTitleColor' properties - just like we did with this tab:`,
    code: {
      title: 'Tab Component',
      text: `<Tab class="active-tint-violet-900 active-title-violet-900" title="Tabs" icon="mio mi-security_update_good text-3xl" activeIcon="mit mi-security_update_good text-3xl" module="tikit.ui">
  <Require src="sections/tabs"/>
</Tab>`
    }
  },
  copyFonts: {
    title: 'Free Icon Libraries',
    subtitle: 'icon-library command in PurgeTSS',
    text: 'Need the icon fonts? Grab ready-to-use versions of Font Awesome, Material Icons, Material Symbols or Framework7 Icons with one simple command:',
    code: {
      title: 'icon-library command in PurgeTSS',
      text: `> purgetss icon-library --vendor=fa,mi,ms,f7

- fa, fontawesome = Font Awesome Icons
- mi, materialicons = Material Icons
- ms, materialsymbol = Material Symbols
- f7, framework7 = Framework7 Icons`
    }
  }
}
