import * as commander from 'commander';
import { InitCommand } from './commands';
const packageJson = require('../package.json');

const version = `h5ds-cli: ${packageJson.version}`;

commander
  .version(version)
  .description('h5ds cli tool')
  .usage('<command> [options]');

// 初始化项目
commander
  .command('init [version]')
  .description('Init h5ds editor')
  .action((...args) => {
    const cmd = args.pop();
    new InitCommand({ args, cmd });
  });

// 解析命令
commander.parse(process.argv);

//如果直接使用，那么显示help
if (process.argv.length === 2) {
  commander.outputHelp();
}
