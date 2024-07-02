#! /usr/bin/env node
import { program } from 'commander'
import config from './config'
import packageVersion from './utils/packageVersion'
import hasDir from './utils/hasDir'
async function run() {
  await packageVersion()
  program
    .version(config.version)
    .usage('<command> [options]')
  // @command: vite-vue create <app-name> => 创建基于vite的vue项目
  program.command('create <app-name>')
    .description('创建一个基于 vue3 + typescript 的项目')
    .action(async (name) => {
      await hasDir(name)
      // creator(name)
    })

  program.parse(process.argv)
}

run()
