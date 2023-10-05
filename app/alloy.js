Alloy.Globals.events = _.clone(Backbone.Events)

Alloy.Globals.events.on('savecomponent', (source) => {
  // let componentImage = source.toImage();
  // let md5 = Ti.Utils.md5HexDigest(componentImage) + '.png';
  // Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, md5).write(componentImage);
  // Ti.Media.saveToPhotoGallery(componentImage);
  // console.log('Image saved:', md5);
})

Alloy.Globals.lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat expedita hic, eveniet eligendi sunt, sapiente pariatur quibusdam dolorum blanditiis obcaecati quis harum? Ducimus quisquam incidunt sapiente optio, ut rem.\n\nRatione laboriosam distinctio fugiat ducimus nemo iure earum officiis cupiditate atque aspernatur veritatis, modi soluta debitis est odit. Doloribus hic exercitationem quos labore ab dicta, ex animi consectetur cum nostrum?'

Alloy.Globals.welcome = {
  title: 'Welcome to TiKit UI Components',
  subtitle: 'TiKit is a collection of UI components for Titanium built on top of Alloy and PurgeTSS',
  text: 'To install it, run the following command in the terminal:',
}

Alloy.Globals.installation = {
  title: 'Installing the components',
  subtitle: 'To install TiKit, run the following command in the terminal:',
  text: 'Once everything is installed on your machine, create a new Alloy project using PurgeTSS, make sure you have \'app.idprefix\' and \'app.idprefix\' settings configured. ( https://purgetss.com/docs/commands/#requirements )',
  code: {
    title: 'TiKit CLI Installation',
    text: `> [sudo] npm install -g tikit

// Make sure you have PurgeTSS as well:
> [sudo] npm install -g purgetss`,
  },
  code2: {
    title: 'the `install` command',
    text: `> tikit install
? Choose a component to install › - Use arrow-keys. Return to submit.
❯   all components
    alerts
    avatars
    buttons
    cards`
  }
}

require('docs/alerts')
require('docs/avatars')
require('docs/buttons')
require('docs/cards')
require('docs/tabs')
