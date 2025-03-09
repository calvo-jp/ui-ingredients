<script lang="ts">
  import {toaster} from '../toaster.svelte.js';
</script>

<button
  onclick={() => {
    toaster.create({
      title: 'Yesss!',
      description: 'This is a toast message',
    });
  }}
  style="padding:0px 14px;height:40px;border:1px solid var(--border-default);"
>
  Click me
</button>

<style>
  :global([data-scope='toast'][data-part='root']) {
    background: white;
    padding: 14px;
    border: 1px solid var(--border-default);
    min-width: 300px;
    height: var(--height, auto);
    opacity: var(--opacity, 1);
    position: relative;
    scale: var(--scale, 1);
    translate: var(--x, 0) var(--y, 0) 0;
    z-index: var(--z-index);
    will-change: translate, opacity, scale;
    transition-duration: 250ms;
    transition-property: translate, scale, opacity, height;
    transition-timing-function: ease-in-out;
  }

  :global([data-scope='toast'][data-part='title']) {
    font-size: 18px;
  }

  :global([data-scope='toast'][data-part='description']) {
    color: var(--color-muted);
  }

  :global([data-scope='toast'][data-part='close-trigger']) {
    margin-top: 16px;
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    width: 100%;
  }
</style>
