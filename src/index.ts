import * as program from 'commander';
import { InitCommand, StartCommand, PluginCommand } from './commands';
const packageJson = require('../package.json');

const version = `h5ds-cli: ${packageJson.version}`;

program
  .version(version)
  .description('h5ds cli tool')
  .usage('<command> [options]');

// 初始化项目
program
  .command('init [version]')
  .description('Init h5ds editor')
  .action((...args) => {
    const cmd = args.pop();
    new InitCommand({ args, cmd });
  });

// 启动开发
program
  .command('start')
  .description('Run dev environment')
  .action((...args) => {
    const cmd = args.pop();
    new StartCommand({ args, cmd });
  });

// 创建插件
program
  .command('plugin <action>')
  .description('Plugin create/build/publish')
  .action((...args) => {
    const cmd = args.pop();
    new PluginCommand({ args, cmd });
  });

// 解析命令
program.parse(process.argv);

//如果直接使用，那么显示help
if (process.argv.length === 2) {
  program.outputHelp();
}
