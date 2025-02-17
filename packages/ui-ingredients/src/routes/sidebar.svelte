<script lang="ts">
  import {page} from '$app/state';
  import {links} from './utils.js';

  let currentLink = $derived(
    links.find((item) => item.path === page.url.pathname),
  );
</script>

<svelte:head>
  <title>{currentLink?.label}</title>
</svelte:head>

<div>
  <nav>
    <ul>
      {#each links as link}
        <li>
          <a href={link.path}>
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
