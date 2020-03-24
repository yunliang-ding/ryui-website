import { Input } from './input/index'
import { Select } from './select/index'
import { Button } from './button/index'
import { CheckBox } from './checkbox/index'
import { Radio } from './radio/index'
import { Alert } from './alert/index'
import { Table } from './table/index'
import { Pagination } from './pagination/index'
import { Loading } from './loading/index'
import { Nav } from './nav/index'
import { Tab } from './tab/index'
import { Tree } from './tree/index'
import { Switch } from './switch/index'
import { Tooltip } from './tooltip/index'
import { Slider } from './slider/index'
import { Message } from './message/index'
import './theme.less'
const Window:any = window
const model = {
  Input,
  Select,
  Button,
  CheckBox,
  Radio,
  Alert,
  Table,
  Pagination,
  Loading,
  Nav,
  Tab,
  Tree,
  Switch,
  Tooltip,
  Slider,
  Message
}
Window.Yui = model
export {
  Input,
  Select,
  Button,
  CheckBox,
  Radio,
  Alert,
  Table,
  Pagination,
  Loading,
  Nav,
  Tab,
  Tree,
  Switch,
  Tooltip,
  Slider,
  Message
}