import React, { useState, useEffect } from 'react'
import Vue from 'vue'

export default class Wrapper extends React.Component {
  createVueInstance(targetElement) {
    this.targetElement = targetElement
  }
  componentDidUpdate() {
    console.log(this.vueInstance);
    for (const key in this.props) {
      if (this.props.hasOwnProperty(key)) {
        this.vueInstance[key] = this.props[key]
      }
    }
  }
  componentDidMount() {
    this.vueInstance = new Vue({
      // el: this.targetElement,
      ...this.props.is
    })
    console.log(this.vueInstance);
    for (const key in this.props) {
      if (this.props.hasOwnProperty(key)) {
        console.log(typeof this.props[key])
        if (typeof this.props[key] === 'function') {
          this.vueInstance.$on(key, this.props[key])
        } else {
          this.vueInstance[key] = this.props[key]
        }
      }
    }
    this.vueInstance.$mount(this.targetElement)
  }
  componentWillUnmount() {
    this.vueInstance.$destroy()
  }
  render() {
    return <div ref={e => this.createVueInstance(e)}>789</div>
  }
}