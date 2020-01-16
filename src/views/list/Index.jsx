import React, { useState, useEffect } from 'react';
import Vue from 'vue'
import VueApp from './Index.vue'
import Converter from '../../components/converter.jsx'

export default function () {
  let content = null
  const [is, setIs] = useState(true)
  return (
    <>
      <div>React area</div>
      <div>React router : list</div>
      <div>test lifecycle : destroy</div>
      <Converter component={VueApp}>
      </Converter>
    </>
  )
}