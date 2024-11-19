<script lang="ts">
  import {getAccessibilityDoc, type AccessibilityDocKey} from '@zag-js/docs';
  import {Table} from '../ui';

  let {id}: {id: AccessibilityDocKey} = $props();

  let {keyboard} = $derived(getAccessibilityDoc(id));
</script>

<h3>Keboard support</h3>

{#if keyboard}
  <Table.Container class="not-prose">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Heading>Key</Table.Heading>
          <Table.Heading>Description</Table.Heading>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each keyboard as item}
          <Table.Row>
            <Table.Cell>
              <span
                class="whitespace-nowrap rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-xs leading-none dark:border-neutral-800 dark:bg-neutral-800/50"
              >
                {item.keys.join(' + ')}
              </span>
            </Table.Cell>
            <Table.Cell>{@html item.description}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </Table.Container>
{/if}
