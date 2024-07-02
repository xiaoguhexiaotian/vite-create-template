import createQuestions from '../questions/index'

export default async function (name: string): Promise<void> {
  await createQuestions()
}
