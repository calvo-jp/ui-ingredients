<script lang="ts">
  import {Table} from '$lib/ui/index.js';
  import Prose from '$lib/ui/prose.svelte';

  let {data} = $props();

  let api = $derived(Object.entries(data.apiJson ?? {}));
</script>

<svelte:head>
  <title>{data.name} | UI Ingredients</title>
</svelte:head>

<h1 class="text-4xl font-bold">{data.name}</h1>
<p class="mb-12 mt-4 text-lg leading-normal text-neutral-300">
  {data.description}
</p>

<!-- TODO: Demo -->

{#if data.anatomyIcon}
  <h2 class="text-2xl font-bold">Anatomy</h2>
  <div class="mb-12 mt-5 overflow-hidden rounded-lg">
    {@html data.anatomyIcon}
  </div>
{/if}

<Prose>
  {@html data.html}
</Prose>

{#if api.length > 0}
  <h2 class="mt-12 text-2xl font-bold">API Reference</h2>

  <Table.Root class="mt-5">
    <Table.Header>
      <Table.Row>
        <Table.Heading>Property</Table.Heading>
        <Table.Heading>Type</Table.Heading>
        <Table.Heading>Description</Table.Heading>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each api as [k, o]}
        <Table.Row>
          <Table.Cell>
            <span
              class="inline-block rounded-sm bg-neutral-800/50 px-1 font-mono"
            >
              {k}
            </span>
          </Table.Cell>
          <Table.Cell>
            <span
              class="inline-block rounded-sm bg-neutral-800/50 px-1 font-mono"
            >
              {o.type}
            </span>
          </Table.Cell>
          <Table.Cell>
            {o.description}
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
{/if}
