

function customRender(reactElement, root) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.child;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//   root.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.child;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  root.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  child: "click me to visit google",
};

const root = document.getElementById("root");

customRender(reactElement, root);
