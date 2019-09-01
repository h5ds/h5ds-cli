import { Command } from 'commander';

export type CommandOptions = {
  args: string[];
  cmd: Command;
};

export interface ICommand {
  options: CommandOptions;
}
