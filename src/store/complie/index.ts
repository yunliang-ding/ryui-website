import { observable, action, runInAction } from 'mobx'
import { transform } from 'babel-standalone'
class Compile {
  scope = {
    'react': require('react'),
    'react-dom': require('react-dom'),
    'Yui': require('Yui')
  }
  require = key => {
    if (this.scope[key] === void 0) throw new Error(`${key} is not define`)
    return this.scope[key]
  }
  scopeArr = [this.require]
  @observable codeError = false
  @observable code = null
  @action setCode = (code: string) => {
    this.code = code
    this.excuteCode()
  }
  compileCode = () => {
    return transform(`
      ((require, mountNode) => {
        ${this.code}
      });
    `, { presets: ['es2015', 'react', 'stage-1'] }).code
  }
  excuteCode = () => {
    try {
      const a = this.compileCode()
      eval(a).apply(null, this.scopeArr)
      runInAction(() => {
        this.codeError = false
      })
    } catch (e) {
      runInAction(() => {
        this.codeError = true
        console.log('err', e)
      })
    }
  }
}
const compile = new Compile()
export {
  compile
}