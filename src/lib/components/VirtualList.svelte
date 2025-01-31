<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet,
    style?: string,
    cssclass?: string
  }

  let {
    children,
    style = '',
    cssclass = 'vlist'
  }: Props = $props();

  let items: HTMLElement[] = [];

  let lstParent: HTMLElement;
  $effect(() => {
    items = [];
    let i = 0;
    lstParent.childNodes.forEach(element => {
      if ((element as HTMLElement).tagName === 'LI') {
        const child: HTMLElement = (element as HTMLElement);
        items.push(child);
        if (i == 0) {
          child.classList = ['selected']
        }
        child.setAttribute('data-item', i.toString())
        element.addEventListener('pointerdown', () => {
          console.log('pointer down', child, child.getAttribute('data-item'));
        });
        i++;
      }
    });
  })

</script>

<ul bind:this={lstParent}>
  {@render children()}
</ul>