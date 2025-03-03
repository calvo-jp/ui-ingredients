<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props}: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  {...props}
>
  <path d="M18 6L6 18M6 6L18 18"></path>
</svg>
