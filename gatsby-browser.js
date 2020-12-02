/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const LogRocket = require('logrocket')

exports.onInitialClientRender = () => {
  if ('onGatsbyInitialClientRender' in window &&
      typeof window.onGatsbyInitialClientRender === 'function') {
    window.onGatsbyInitialClientRender()
  }
}

exports.onRouteUpdate = () => {
  if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate ===
      'function') {
    window.onGatsbyRouteUpdate()
  }
}

exports.onPreRouteUpdate = () => {
  if ('onGatsbyPreRouteUpdate' in window &&
      typeof window.onGatsbyPreRouteUpdate === 'function') {
    window.onGatsbyPreRouteUpdate()
  }
}

exports.onClientEntry = () => {
  LogRocket.init('ch20tr/uni-orders')
}
