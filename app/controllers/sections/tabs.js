function doClick(e) {
  Alloy.Globals.events.trigger('savecomponent', e.source)
}
