<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  let {...props}: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  {...props}
>
  <path
    fill="currentColor"
    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
  ></path>
</svg>
