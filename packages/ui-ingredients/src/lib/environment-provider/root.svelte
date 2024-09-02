<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {type Environment} from './context.svelte.js';

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
  import {setEnvironmentContext} from './context.svelte.js';

  let {rootNode, children}: EnvironmentProviderProps = $props();

  let elem: HTMLSpanElement | null = $state(null);

  let getRootNode = $derived.by(() => {
    if (rootNode) {
      return typeof rootNode === 'function' ? rootNode : () => rootNode;
    } else {
      return () => elem?.ownerDocument ?? document;
    }
  });

  let environment: Environment = $derived({
    getRootNode,
    getDocument: () => getDocument(getRootNode()),
    getWindow: () => getWindow(getRootNode()),
  });

  setEnvironmentContext(() => environment);
</script>

{@render children()}

{#if !rootNode}
  <span bind:this={elem} hidden></span>
{/if}
