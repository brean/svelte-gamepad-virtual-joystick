<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet,
    style?: string,
    cssclass?: string,
    hovering?: number,
    selected?: number,
    onpress: () => void
  }

  let {
    children,
    style = '',
    cssclass = 'vlist',
    selected = 0,
    hovering = 0,
    onpress = () => {}
  }: Props = $props();

  let items: HTMLElement[] = [];

  let lstParent: HTMLElement;
  $effect(() => {
    items = [];
    let i = 0;
    console.log(selected);
    lstParent.childNodes.forEach(element => {
      if ((element as HTMLElement).tagName === 'LI') {
        const child: HTMLElement = (element as HTMLElement);
        items.push(child);
        if (i == selected) {
          child.classList.add('selected')
        }
        if (i == hovering) {
          child.classList.add('hovering')
        }
        console.log(child.classList)
        child.setAttribute('data-item', i.toString())
        element.addEventListener('pointerdown', () => {
          console.log('pointer down', child, child.getAttribute('data-item'));
        });
        i++;
      }
    });
  })

</script>

<ul bind:this={lstParent} {style} class={cssclass}>
  {@render children()}
</ul>