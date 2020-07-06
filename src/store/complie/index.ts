import { observable, action, runInAction } from 'mobx'
import { transform } from 'babel-standalone'
const $:any = document.querySelector.bind(document)
class Compile {
  scope = {
    'react': require('react'),
    'react-dom': require('react-dom'),
    'react-ryui': require('react-ryui')
  }
  require = key => {
    if (this.scope[key] === void 0) throw new Error(`${key} is not define`)
    return this.scope[key]
  }
  scopeArr = [this.require]
  @observable codeError = false
  @observable code = null
  @observable codeErrorMessage = ''
  @action setCode = (code: string) => {
    this.code = code
    this.excuteCode()
  }
  compileCode = () => {
    const es6 = transform(`${this.code}`, { presets: ['es2015', 'react', 'stage-1'] }).code
    return transform(`
      ((require) => {
        ${es6}
      });
    `, { presets: ['es2015', 'react', 'stage-1'] }).code
  }
  excuteCode = () => {
    try {
      const a = this.compileCode()
      eval(a).apply(null, this.scopeArr)
      runInAction(() => {
        this.codeError = false
        $('#error-message').innerHTML = null
        $('#error-message').style.display = 'none'
      })
    } catch (e) {
      runInAction(() => {
        this.codeError = true
        $('#error-message').innerHTML = e
        $('#error-message').style.display = 'block'
      })
    }
  }
}
const compile = new Compile()
export {
  compile
}