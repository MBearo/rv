import React, { useState, useEffect } from 'react'
import Vue from 'vue'
import VueApp from './Index.vue'
import { Button } from 'antd'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  selfAdd() {
    console.log(this)
    this.setState({count:this.state.count+1})
  }
  add() {
    console.log('add')
    this.vueInstance.$children[0].valueAdd()
  }
  render() {
    return (
      <div style={{ border: "1px solid rgb(97, 218, 251)", padding: "10px" }}>
        <div>React area</div>
        <div>React router : home</div>
        <div>{this.state.count}</div>
        <Button type="primary" onClick={() => this.selfAdd()}>修改react的值+1</Button>
        <Button type="primary" onClick={() => this.add()}>修改vue的值+1</Button>
        <div id="r-home"></div>
      </div>
    )
  }
  componentDidMount() {
    this.vueInstance = new Vue({
      render: h => h(VueApp)
    }).$mount('#r-home')
    this.vueInstance.$children[0].$$selfAdd=()=>this.selfAdd()
    console.log(VueApp)
    console.log(this.vueInstance)
  }
}
export default Home
// export default function () {
//   let vueInstance = null
//   useEffect(() => {
//     vueInstance = new Vue({
//       render: h => h(VueApp)
//     }).$mount('#r-home')
//     //vueInstance = new Vue.extend(VueApp).$mount('#r-home')
//     // vueInstance=new VueApp().$mount('#r-home')
//     vueInstance.$children[0].$$selfAdd=selfAdd
//     console.log(VueApp)
//     console.log(vueInstance)
//   }, []);

//   function add() {
//     console.log('add')
//     vueInstance.$children[0].valueAdd()
//     //VueApp.methods.valueAdd()
//   }

//   const [count, setCount] = useState(1)
//   function selfAdd() {
//     setCount(count+1)
//   }
//   return (
//     <div style={{ border: "1px solid rgb(97, 218, 251)", padding: "10px" }}>
//       <div>React area</div>
//       <div>React router : home</div>
//       <div>{count}</div>
//       <Button type="primary" onClick={selfAdd}>修改react的值+1</Button>
//       <Button type="primary" onClick={add}>修改vue的值+1</Button>
//       <div id="r-home"></div>
//     </div>
//   )
// }