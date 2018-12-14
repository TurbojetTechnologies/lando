'use strict';

const path = require('path');
const chalk = require('chalk');
const utils = require('./../lib/utils');

module.exports = lando => {
  const table = lando.cli.makeTable();
  return {
    command: 'start',
    describe: 'Starts your app',
    run: options => {
      // Try to get our app
      const app = lando.getApp(path.resolve(process.cwd(), lando.config.landoFile));
      // Start it if we can!
      if (app) {
        console.log(chalk.green('Let\'s get this party started! Starting app..'));
        return utils.appToggle(app, 'start', table, lando.cli.makeArt());
      }
    },
  };
};
