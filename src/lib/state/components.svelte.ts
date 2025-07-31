import InputComponent from "$lib/input_handling/InputComponent.js";

// all input handler
export const component_store = $state<{
  components: {[context: string]: InputComponent[]};
  activeComponents: InputComponent[];
  showHints: boolean;
  context: string;
}>({
  components: {},
  activeComponents: [],
  showHints: false,
  context: 'default'
});

export const registerComponent = (
    context: string[], 
    component: InputComponent) => {
  context.forEach((ctx) => {
    if (!component_store.components[ctx]) {
      component_store.components[ctx] = [];
    }
    component_store.components[ctx].push(component);
  });
  // set all components active in the beginning that do not require focus,
  // if they are in the default context
  // TODO: focus first element, add first focusable element to activecomponents
  if (!component.requiresFocus && context.includes('default')) {
    component_store.activeComponents.push(component);
  }

  if (component.focusElement && component.requiresFocus) {
    component.focusElement.addEventListener('focus', () => {
      if (context.includes(component_store.context)) {
        component_store.activeComponents.push(component);
      }
    })
    component.focusElement.addEventListener('blur', () => {
      component_store.activeComponents.splice(
        component_store.activeComponents.indexOf(component), 1);
    })
  }

};

export const unregisterComponent = (
    context: string[], 
    component: InputComponent) => {
  context.forEach((ctx) => {
    if (component_store.components[ctx]) {
      component_store.components[ctx].splice(component_store.components[ctx].indexOf(component), 1);
    }
  });
  if (component_store.activeComponents.includes(component)) {
    component_store.activeComponents.slice(component_store.activeComponents.indexOf(component));
  }
}

