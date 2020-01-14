import React, { useState, useEffect } from 'react'
import Vue from 'vue'
let id = 1

export default function (props) {
  let vueInstance = null
  useEffect(() => {
    vueInstance = new Vue({
      render: h => h(props.vue)
    }).$mount(`#v${id}`)
    return function cleanup() {
      vueInstance.$destroy()
    }
  }, []);
  return (
    <div id={'v' + id}></div>
  )
}