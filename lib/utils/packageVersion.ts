import * as fs from 'fs-extra'
import * as path from 'path'
import config from '../options'

// 获取脚手架版本
export default async function (): Promise<void> {
  const packageFile = path.resolve(__dirname, '../../package.json')
  const packageCode = await fs.readFile(packageFile)
  const packageJson = JSON.parse(packageCode.toString())
  config.version = packageJson.version
}
