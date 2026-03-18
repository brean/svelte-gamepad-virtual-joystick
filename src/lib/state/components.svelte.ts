import InputComponent from "$lib/input_handling/InputComponent.js";

// all input handler
export const component_state = $state<{
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

export const addActiveComponent = (component: InputComponent) => {
  if (!component_state.activeComponents.includes(component)) {
    component_state.activeComponents.push(component);
  }
}

export const registerComponent = (
    context: string[], 
    component: InputComponent) => {
  context.forEach((ctx) => {
    if (!component_state.components[ctx]) {
      component_state.components[ctx] = [];
    }
    if (!component_state.components[ctx].includes(component)) {
      component_state.components[ctx].push(component);
    }
  });
  // set all components active in the beginning that do not require focus,
  // if they are in the default context
  // TODO: focus first element, add first focusable element to activecomponents
  if (!component.requiresFocus && context.includes('default')) {
    addActiveComponent(component);
  }

  if (component.focusElement && component.requiresFocus) {
    const onFocus = () => {
      if (context.includes(component_state.context)) {
        addActiveComponent(component);
      }
    };
    const onBlur = () => {
      removeActiveComponent(component);
    };

    component.focusElement.addEventListener('focus', onFocus);
    component.focusElement.addEventListener('blur', onBlur);

    // @ts-ignore - dynamic property for internal management
    component._focusCleanup = () => {
      component.focusElement?.removeEventListener('focus', onFocus);
      component.focusElement?.removeEventListener('blur', onBlur);
    };
  }
};

export const removeActiveComponent = (component: InputComponent) => {
  component_state.activeComponents = component_state.activeComponents.filter(
    (c) => c !== component
  );
};

export const unregisterComponent = (
    context: string[], 
    component: InputComponent) => {

  context.forEach((ctx) => {
    if (component_state.components[ctx]) {
      component_state.components[ctx] = component_state.components[ctx].filter(
        (c) => c !== component);
    }
  });
  
  removeActiveComponent(component);

  // @ts-ignore
  if (component._focusCleanup) {
    // @ts-ignore
    component._focusCleanup();
  }
}

