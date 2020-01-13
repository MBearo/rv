import React, { useEffect } from 'react';
import Vue from 'vue'
import VueApp from './Index.vue'

export default function () {
  useEffect(() => {
    new Vue({
      render: h => h(VueApp)
    }).$mount('#r-home')
  }, []);
  return (
    <>
      <div>React area</div>
      <div>React router : list</div>
      <div id="r-home"></div>
    </>
  )
}