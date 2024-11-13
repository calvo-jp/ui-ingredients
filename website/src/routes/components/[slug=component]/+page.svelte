<script lang="ts">
  import {Table} from '$lib/ui/index.js';
  import Prose from '$lib/ui/prose.svelte';

  let {data} = $props();

  let context = $derived(Object.entries(data.apiDoc?.context ?? {}));
</script>

<svelte:head>
  <title>{data.name.formal} | UI Ingredients</title>
</svelte:head>

<Prose>
  <h1 class="mb-0">{data.name.pascal}</h1>
  <p class="m-0 mt-2.5">{data.description}</p>

  {#if data.anatomyIcon}
    <h2>Anatomy</h2>

    {@html data.anatomyIcon}
  {/if}

  {@html data.html}

  {#if context.length > 0}
    <h2>API Reference</h2>

    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Heading>Property</Table.Heading>
          <Table.Heading>Type</Table.Heading>
          <Table.Heading>Description</Table.Heading>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each context as [k, o]}
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
</Prose>
