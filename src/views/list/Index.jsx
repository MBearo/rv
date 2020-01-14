import React, { useState, useEffect } from 'react';
import { Button } from 'antd'
import Vue from 'vue'
import VueApp from './Index.vue'
import Converter from '../../components/converter.jsx'

export default function () {
  let content = null
  const [is, setIs] = useState(true)
  if (is) {
    content = (
      <Converter vue={VueApp}>
        {/* 这里的内容无效 */}
      </Converter>
    )
  } else {
    content = <div>另一个</div>
  }
  return (
    <>
      <div>React area</div>
      <div>React router : list</div>
      <div>test lifecycle : destroy</div>
      <Button type="primary" onClick={()=>setIs(!is)}>switch</Button>
      <div>{content}</div>
    </>
  )
}