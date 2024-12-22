<script lang="ts">
  import {twMerge} from 'tailwind-merge';
  import {
    createGradient,
    getComponent,
    type ComponentAnatomyName,
  } from 'ui-ingredients-anatomy-icons';

  interface AnatomyProps {
    id: ComponentAnatomyName;
    style?: string;
    class?: string;
  }

  let {id, style, ...props}: AnatomyProps = $props();

  let Component = $derived(getComponent(id));

  let cssVars = Object.entries({
    '--bg-dark': createGradient('#6366f1').value,
    '--bg-light': createGradient('#a5b4fc').value,
  })
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
</script>

<div
  {id}
  style="{cssVars};{style}"
  class={twMerge(
    'not-prose h-auto w-full overflow-hidden rounded-md',
    '[background:var(--bg-light)] dark:[background:var(--bg-dark)]',
    props.class,
  )}
>
  <Component class="h-auto w-full" />
</div>
