import { createExtension, getLocale, message, registerCommand } from '@vscode-use/utils'
import * as vscode from 'vscode'

export = createExtension(() => {
  const lan = getLocale() // 获取本地语言
  const isZh = lan.includes('zh')

  // 注册复制文件路径命令
  registerCommand('show-pwd.copyFilePath', async () => {
    const activeEditor = vscode.window.activeTextEditor
    if (!activeEditor) {
      message.warn(isZh ? '没有打开的文件' : 'No active file')
      return
    }

    const filePath = activeEditor.document.uri.fsPath
    await vscode.env.clipboard.writeText(filePath)
    message.info(isZh ? `已复制文件路径: ${filePath}` : `File path copied: ${filePath}`)
  })
}, () => {

})
