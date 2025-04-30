Alloy.Globals.events = _.clone(Backbone.Events)

Alloy.Globals.lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat expedita hic, eveniet eligendi sunt, sapiente pariatur quibusdam dolorum blanditiis obcaecati quis harum? Ducimus quisquam incidunt sapiente optio, ut rem.\n\nRatione laboriosam distinctio fugiat ducimus nemo iure earum officiis cupiditate atque aspernatur veritatis, modi soluta debitis est odit. Doloribus hic exercitationem quos labore ab dicta, ex animi consectetur cum nostrum?'

Alloy.Globals.welcome = {
  title: 'Hey there! Welcome to TiKit UI Components',
  subtitle: 'TiKit gives you a sleek collection of UI components for Titanium that work seamlessly with Alloy and PurgeTSS',
  text: 'Getting started is super easy - just run this command:',
}

Alloy.Globals.installation = {
  title: 'Setting up your components',
  subtitle: 'Just run this simple command to get started:',
  text: 'After installation, create a new Alloy project with PurgeTSS and make sure your \'app.idprefix\' settings are good to go. Need more details? Check out the docs: https://purgetss.com/docs/commands/#requirements',
  code: {
    title: 'Quick TiKit Setup',
    text: `> [sudo] npm install -g tikit

// Don't forget PurgeTSS:
> [sudo] npm install -g purgetss`,
  },
  code2: {
    title: 'Pick what you need',
    text: `> tikit install
? Choose a component to install › - Use arrow-keys. Return to submit.
❯ all components
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
