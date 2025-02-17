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
/>

<Highlight {text} {query} ignoreCase />
