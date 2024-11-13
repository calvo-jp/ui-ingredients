<script lang="ts">
  import Metadata from '$lib/metadata.svelte';
  import {Prose, Table} from '$lib/ui';

  let {data} = $props();
</script>

<svelte:head>
  <title>{data.name.formal} | UI Ingredients</title>
</svelte:head>

<Metadata title={data.name.formal} description={data.description} />

<Prose>
  <h1 class="mb-0">{data.name.pascal}</h1>
  <p class="m-0 mt-2.5">{data.description}</p>

  {#if data.anatomyIcon}
    <h2>Anatomy</h2>

    {@html data.anatomyIcon}
  {/if}

  {@html data.html}

  {#if data.apiDoc}
    <h2>API Reference</h2>

    {#each Object.entries(data.apiDoc) as [part, obj]}
      <div>
        <h3>{part}</h3>

        <Table.Container>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Heading>Property</Table.Heading>
                <Table.Heading>Type</Table.Heading>
                <Table.Heading>Default Value</Table.Heading>
                <Table.Heading>Description</Table.Heading>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each Object.entries(obj.context) as [k, v]}
                <Table.Row>
                  <Table.Cell>{@render inlineCodeBlock(k)}</Table.Cell>
                  <Table.Cell>{@render inlineCodeBlock(v.type)}</Table.Cell>
                  <Table.Cell>
                    {@render inlineCodeBlock(v.defaultValue)}
                  </Table.Cell>
                  <Table.Cell>{v.description}</Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
        </Table.Container>
      </div>
    {/each}
  {/if}

  {#if data.dataAttrDoc}
    <h2>Data Attributes</h2>

    {#each Object.entries(data.dataAttrDoc) as [part, obj]}
      <div>
        <h3>{part}</h3>

        <Table.Container>
          <Table.Root>
            <Table.Body>
              {#each Object.entries(obj) as [k, v]}
                <Table.Row>
                  <Table.Cell>{@render inlineCodeBlock(k)}</Table.Cell>
                  <Table.Cell>{v}</Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
        </Table.Container>
      </div>
    {/each}
  {/if}

  {#if data.accessibilityDoc}
    <h2>Accessibility</h2>

    <div>
      <h3>Keyboard Support</h3>
      <Table.Container>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Heading>Key</Table.Heading>
              <Table.Heading>Description</Table.Heading>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {#each data.accessibilityDoc.keyboard as item}
              <Table.Row>
                <Table.Cell class="whitespace-nowrap">
                  {@render inlineCodeBlock(item.keys.join(' + '))}
                </Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
              </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      </Table.Container>
    </div>
  {/if}
</Prose>

{#snippet inlineCodeBlock(label?: string)}
  {#if label}
    <span class="inline-block rounded-sm bg-neutral-800/50 px-1 font-mono">
      {label}
    </span>
  {:else}
    <span class="font-mono text-neutral-600">-</span>
  {/if}
{/snippet}
