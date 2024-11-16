<script lang="ts">
  import {
    getApiDoc,
    getDataAttrDoc,
    type ApiDoc,
    type ApiDocKey,
  } from '@zag-js/docs';

  let {id}: {id: ApiDocKey} = $props();

  function guard<Return, Arg>(fn: (...args: Arg[]) => Return) {
    return (...args: Arg[]): Return | null => {
      try {
        return fn(...args);
      } catch {
        return null;
      }
    };
  }

  let rootApi = $derived(guard(getApiDoc)(id));
  let dataAttr = $derived(guard(getDataAttrDoc)(id));

  interface Api {
    props?: Record<string, ApiDoc['context']>;
    dataAttr?: Record<string, string>;
  }
</script>
