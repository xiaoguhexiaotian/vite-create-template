interface Options {
  name?: string
  version?: string
  src?: string
  dest?: string
  components?: string
  pluginType?: 'component' | 'hook' | 'directive'
  plugins?: string[]
  allPackages?: any[]
  precss?: 'less' | 'scss' | ''
  vueVersion?: string
  versionControl?: boolean
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

// vue3:模板文件名数组列表，ejs模板编译的文件名列表
export function fetchVue3TemplateFiles(): string[] {
  return [
    'package.json',
    'babel.config.js',
    '.stylelintrc.js',
    'vite.config.ts',
    'src/App.vue',
    'src/main.ts',
  ]
}

