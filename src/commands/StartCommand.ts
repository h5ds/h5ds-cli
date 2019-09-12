import { ICommand, CommandOptions } from './ICommand';
import chalk from 'chalk';

export class StartCommand implements ICommand {
  options: CommandOptions;
  constructor(options: CommandOptions) {
    this.options = options;
    const [version] = this.options.args;
    console.log(chalk.greenBright('当前命令：h5ds init\nvesion ='), version);
  }
}
