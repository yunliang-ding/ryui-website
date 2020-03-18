import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import { textMateService } from './syntaxHighlighter'
const { typescriptDefaults, javascriptDefaults }: any = monaco.languages.typescript
class MonacoServices{
  editorMonaco: monaco.editor.IStandaloneCodeEditor
  compilerOptions = {
    target: 99,
    plugins: [
      {
        "name": "typescript-tslint-plugin"
      }
    ],
    jsx: 'react',
    module: 'commonjs',
    allowJs: true,  /* Allow javascript files to be compiled. */
    checkJs: false, /* Report errors in .js files. */
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    allowNonTsExtensions: true
  }
  /**
   * 负责一个文件打开之后 所有 Monaco初始化的工作
   */
  init = (dom, options): void => {
    let oldDecorations = []
    let editorMonaco: monaco.editor.IStandaloneCodeEditor = monaco.editor.create(dom,  {
      selectOnLineNumbers: true,
      automaticLayout: true,
      fontSize: 12,
      fontWeight: "400",
      language: options.language,
      theme: options.theme,
      value: options.value,
      minimap: {
        enabled: false
      }
    })
    editorMonaco.onDidChangeModelContent(() => { // onChange 事件
      oldDecorations = this.textMateColor(editorMonaco, options.language, editorMonaco.getValue(), oldDecorations)
    })
    this.editorMonaco = editorMonaco
    oldDecorations = this.textMateColor(editorMonaco, options.language, options.value, oldDecorations)
    typescriptDefaults._compilerOptions = this.compilerOptions
    javascriptDefaults._compilerOptions = this.compilerOptions
  }
  setValue = (value) => {
    this.editorMonaco.setValue(value)
  }
  dispose = (editorMonaco: monaco.editor.IStandaloneCodeEditor) => {
    editorMonaco.dispose()
  }
  getUri = (filePath) => {
    return monaco.Uri.file(filePath)
  }
  /**
   * 更新主题
   */
  setTheme = (theme) => {
    monaco.editor.setTheme(theme)
  }
  /**
   * textMateColor
   */
  textMateColor = (editorMonaco, language, value, oldDecorations) => {
    if (['javascript', 'typescript'].indexOf(language) > -1) {
      return editorMonaco.deltaDecorations(
        oldDecorations,
        textMateService(value)
      )
    }
    return []
  }
}
const monacoServices = new MonacoServices()
export {
  monacoServices
}