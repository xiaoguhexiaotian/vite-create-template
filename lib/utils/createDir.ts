import * as path from 'path'
import * as fs from 'fs-extra'
import createQuestions from '../questions/index'
import options, { fetchVue3TemplateFiles } from '../options'
import ejsRender from './ejsRender'
import chalk from 'chalk'

export default async function (name: string): Promise<void> {
  // 获取name并为options设置name，并设置dest(目标文件夹)为该项目文件夹路径
  options.name = name
  options.dest = path.resolve(process.cwd(), name)
  await createQuestions()
  // CLI 模板文件夹路径
  if (options.vueVersion === 'vue3') {
    options.src = path.resolve(__dirname, '../../template/vue/vue3-template')
  }
  // 从模板文件夹拷贝基础模板文件到目标文件夹
  await fs.copy(options.src, options.dest)
  // 处理需要动态编译的 模板文件
  if (options.vueVersion === 'vue3') {
    await Promise.all(fetchVue3TemplateFiles().map((filePath: string) => ejsRender(filePath)))
  }
  console.log(`> 项目模板生成于目录： ${chalk.yellow(options.dest)}`)
  console.log(`> 项目已经创建成功，请输入以下命令继续...`)
  console.log('')
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`))
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm install'))
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run dev'))
}
