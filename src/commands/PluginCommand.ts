import * as program from 'commander';
import { ICommand, CommandOptions } from './ICommand';
import chalk from 'chalk';

const ACTION_ARR = ['create', 'build', 'publish'];

export class PluginCommand implements ICommand {
  options: CommandOptions;
  constructor(options: CommandOptions) {
    this.options = options;
    const [action] = this.options.args;
    if (ACTION_ARR.indexOf(action) === -1) {
      program.outputHelp();
      return;
    }
    console.log(chalk.greenBright('插件'), action);
  }
}
