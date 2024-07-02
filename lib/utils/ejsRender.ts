import * as ejs from 'ejs'
import * as fs from 'fs-extra'
import * as path from 'path'
import options from '../options'

/**
 * @description ejs模板渲染函数
 * @param filePath 文件路径+名称.后缀
 */
export default async function ejsRender(filePath: string): Promise<void> {
  // path路径解析
  const file = path.parse(filePath)
  // 读取文件路径,由目标文件夹路径+文件所在相对文件夹路径+文件名.ejs
  const readFilePath = path.resolve(options.dest, file.dir, `${file.name}.ejs`)
  // 输出文件路径,由目标文件夹路径+文件路径参数
  const outputFilePath = path.resolve(options.dest, filePath)
  // 异步转同步读取文件
  const templateCode = await fs.readFile(readFilePath)
  // ejs渲染ejs文件生成目标代码
  const code = ejs.render(templateCode.toString(), options)
  await fs.outputFile(outputFilePath, code)
  await fs.remove(readFilePath)
}

