import InputComponent from "$lib/input_handling/InputComponent.js";

// all input handler
export const component_store = $state<{
  components: {[context: string]: InputComponent[]};
  activeComponents: InputComponent[];
  showHints: boolean;
}>({
  components: {},
  activeComponents: [],
  showHints: false
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
};

export const unregisterComponent = (
    context: string[], 
    component: InputComponent) => {
  context.forEach((ctx) => {
    if (component_store.components[ctx]) {
      component_store.components[ctx].splice(component_store.components[ctx].indexOf(component), 1);
    }
  });
}

