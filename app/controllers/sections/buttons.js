function doClick({ source }) {
  Alloy.Globals.events.trigger('savecomponent', source)
}
