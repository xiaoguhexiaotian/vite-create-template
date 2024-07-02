interface Options {
  name?: string // 项目名称
  version?: string // 脚手架版本
  src?: string // 模板文件夹路径
  dest?: string // 创建项目路径
  uiComponents?: string // UI框架
  allPackages?: any[] // 所有的依赖
  precss?: 'less' | 'scss' | '' // css预处理器
  vueVersion?: string // vue版本
  versionControl?: boolean // git初始化
}

export interface Choice {
  name: string
  type: string
  message: string
  choices: { name: string, value: any[] | string | boolean }[]
}

// 关键对象options，所有的配置与安装均围绕options展开 同时用于存储安装过程的用户选择的值
const options: Options = {}
export default options

// ejs模板编译的文件名列表
export function fetchVue3TemplateFiles(): string[] {
  return [
    'package.json',
  ]
}

