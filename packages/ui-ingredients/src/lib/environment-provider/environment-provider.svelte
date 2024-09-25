<script lang="ts" context="module">
  import type {Snippet} from 'svelte';

  export interface EnvironmentProviderProps {
    rootNode?:
      | ShadowRoot
      | Document
      | Node
      | (() => ShadowRoot | Document | Node);
    children: Snippet;
  }
</script>

<script lang="ts">
  import {getDocument, getWindow} from '@zag-js/dom-query';
  import {setEnvironmentContext} from './enviroment-provider-context.svelte.js';

  let {rootNode, children}: EnvironmentProviderProps = $props();

  let elem: HTMLSpanElement | null = $state(null);

  function getRootNode() {
    if (rootNode) {
      return typeof rootNode === 'function' ? rootNode() : rootNode;
    } else {
      return elem?.ownerDocument ?? document;
    }
  }

  setEnvironmentContext({
    getRootNode,
    getDocument: () => getDocument(getRootNode()),
    getWindow: () => getWindow(getRootNode()),
  });
</script>

{@render children()}

{#if !rootNode}
  <span bind:this={elem} hidden></span>
{/if}
