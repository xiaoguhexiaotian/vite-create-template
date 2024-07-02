// 该文件用于处理 选项配置
import { prompt, QuestionCollection } from 'inquirer'
import options, { Choice } from '../options'
import version from './vue-version-choice'
import uiComponents from './vue3-questions/uiComponents'
import utils from './vue3-questions/utils'
// 命令行交互提问函数，将用户选项通过Object.assign复制到options配置项中
async function createQuestion(questions: Choice) {
  const result: QuestionCollection = await prompt([questions])
  Object.assign(options, result)
  return Promise.resolve()
}

async function createQuestions(): Promise<void> {
  // 根据用户选择vue的版本来切换问题
  await createQuestion(version)
  if (options.vueVersion === 'vue3') {
    await createQuestion(uiComponents)
    await createQuestion(utils)
  }
}

export default createQuestions