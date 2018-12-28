import m from 'mithril'

class Router {
  constructor(defaultRoute, components) {
    m.route(
      document.body,
      defaultRoute,
      components
    )
  }
}

class Link {
  state = {
    prefix: '#!'
  }
  view(props) {
    return (
      <a
        class={props.class}
        href={this.state.prefix + props.route}
      >
        {props.children}
      </a>
    )
  }
}

export default {
  Router,
  Link
}