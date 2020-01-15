<script>
import React from "react";
import ReactDOM from "react-dom";

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName ||
      Component.name ||
      "Component"}`;

    constructor(props) {
      super(props);
      this.state = { ...props };
    }

    render() {
      const { ...rest } = this.state;
      console.log(this.state);
      return <Component {...rest}></Component>;
    }
  };
};

export default {
  props: ["component"],
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler() {
        this.reactComponentRef.setState({ ...this.$attrs });
      },
      deep: true
    },
    $listeners: {
      handler() {
        this.reactComponentRef.setState({ ...this.$listeners });
      },
      deep: true
    }
  },
  render(h) {
    return h("div", { ref: "react" });
  },
  beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },
  mounted() {
    const Component = makeReactContainer(this.$props.component);
    const children =
      this.$slots.default !== undefined
        ? { children: this.$slots.default }
        : {};
    ReactDOM.render(
      <Component
        {...this.$attrs}
        {...this.$listeners}
        {...children}
        ref={ref => (this.reactComponentRef = ref)}
      />,
      this.$refs.react
    );
  }
};
</script>
