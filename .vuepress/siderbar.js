const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const PERFORM_PATH = '/blogs/perform'
const LIFE_PATH = '/blogs/life'
const GIT_PATH = '/blogs/git'
const HTML_PATH = '/blogs/html'
const JQ_PATH = '/blogs/jq'
const OTHER_PATH = '/blogs/other'
const VUE_PATH = '/blogs/vue'
const REACT_PATH = '/blogs/react'

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS基础', CSS_PATH)],
  [VUE_PATH]: [createSideBarConfig('vue', VUE_PATH)],
  [REACT_PATH]: [createSideBarConfig('react', REACT_PATH)],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
  [LIFE_PATH]: [createSideBarConfig('生活', LIFE_PATH)],
  [GIT_PATH]: [createSideBarConfig('git', GIT_PATH)],
  [HTML_PATH]: [createSideBarConfig('HTML', HTML_PATH)],
  [JQ_PATH]: [createSideBarConfig('jq', JQ_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
}
