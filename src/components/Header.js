import React from 'react'
import _ from 'lodash'

import {toStyleObj, withPrefix} from '../utils'
import Branding from './Branding'
import Navigation from './Navigation'
import Search from './Search'

export default class Header extends React.Component {
  render() {
    return (
        <header id="masthead" className="site-header">
          {_.get(this.props, 'image', null) ?
              (
                  <div id="header-bg" className="site-header-bg"
                       style={toStyleObj('background-image:url(\'' +
                           withPrefix(_.get(this.props, 'image', null)) +
                           '\')')}/>
              ) :
              (_.get(this.props, 'site.siteMetadata.header.background_img',
                  null) && (
                  <div id="header-bg" className="site-header-bg"
                       style={toStyleObj('background-image:url(\'' + withPrefix(
                           _.get(this.props,
                               'site.siteMetadata.header.background_img',
                               null)) + '\')')}/>
              ))}
          <div className="site-header-scroll">
            <div className="site-header-inside">
              <div className="row">
                <div className="site-header-top">
                  <Search {...this.props} />
                </div>
              </div>
              <div className="row">
                <div className="site-header-vertical">
                  <Branding {...this.props} />
                  <Navigation {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </header>
    )
  }
}
