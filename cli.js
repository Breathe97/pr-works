console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:欢迎使用PR云`)

import { input } from '@inquirer/prompts'
// import { select } from '@inquirer/prompts'
import select, { Separator } from '@inquirer/select'
{
  const answer = await input({ message: 'Enter your name' })
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:answer`, answer)
}

{
  const choices = [
    // 创建选项
    { name: 'pryun-h5', value: 'pr-admin', description: '创建一个h5模板' },
    { name: 'pryun-admin', value: 'pr-admin', description: '创建一个管理系统模板' },
    { name: 'pryun-uniapp', value: 'pr-admin', description: '创建pryun-uniapp' },
    new Separator(),
    { name: 'pr-ui', value: 'yarn', description: '不在维护' },
    { name: 'pryun-uniapp-weixin', value: 'pryun-uniapp-weixin', disabled: true },
    { name: 'pryun-h5', value: 'pnpm', disabled: '(pnpm is not available)' },
  ]
  const answer = await select({ message: '选择你需要创建的类目', choices })
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:answer`, answer)
}
