<script lang="ts">
  import {Highlight} from '$lib/index.js';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';

  let query = $state('lorem');
</script>

<input
  value={query}
  oninput={(e) => {
    query = e.currentTarget.value;
  }}
  style="padding:0px 14px;height:40px;border:1px solid var(--border-default);"
/>

<Highlight {text} {query} ignoreCase />

<style>
  :global([data-scope='highlight'][data-part='root']) {
    margin-top: 12px;
    max-width: 400px;
  }
</style>
