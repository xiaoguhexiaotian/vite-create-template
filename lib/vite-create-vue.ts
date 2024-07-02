#! /usr/bin/env node
import { program } from 'commander'
import options from './options'
import packageVersion from './utils/packageVersion'
import hasDir from './utils/hasDir'
import createDir from './utils/createDir'
async function run() {
  await packageVersion()
  program
    .version(options.version)
    .usage('<command> [options]')
  // @command: vite-vue create <app-name> => 创建基于vite的vue项目
  program.command('create <app-name>')
    .description('创建一个基于 vue3 + typescript 的项目')
    .action(async (name) => {
      await hasDir(name)
      createDir(name)
    })

  program.parse(process.argv)
}

run()
