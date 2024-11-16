<script lang="ts">
  import {
    getApiDoc,
    getDataAttrDoc,
    type ApiDoc,
    type ApiDocKey,
  } from '@zag-js/docs';
  import {guard} from './guard';

  let {id}: {id: ApiDocKey} = $props();

  let rootApi = $derived(guard(getApiDoc)(id));
  let dataAttr = $derived(guard(getDataAttrDoc)(id));

  interface Api {
    props?: Record<string, ApiDoc['context']>;
    dataAttr?: Record<string, string>;
  }
</script>
