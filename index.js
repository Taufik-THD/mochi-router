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
  view(props) {
    return (
      <a
        class={props.class}
        href={'#!' + props.route}
      >
        {props.children}
      </a>
    )
  }
}

export {
  Router,
  Link
}