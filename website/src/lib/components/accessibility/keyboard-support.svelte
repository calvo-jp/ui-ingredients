<script lang="ts">
  import {getAccessibilityDoc, type AccessibilityDoc} from '@zag-js/docs';
  import Table from '../ui/table';

  const MAP: Record<string, AccessibilityDoc | null> = {
    'alert-dialog': getAccessibilityDoc('dialog'),
    'angle-slider': getAccessibilityDoc('slider'),
    'color-picker': getAccessibilityDoc('color-picker'),
    'date-picker': getAccessibilityDoc('date-picker'),
    'file-upload': null,
    'floating-panel': null,
    'hover-card': null,
    'number-input': getAccessibilityDoc('number-input'),
    'pin-input': getAccessibilityDoc('pin-input'),
    'progress-circular': null,
    'progress-linear': null,
    'qr-code': null,
    'radio-group': getAccessibilityDoc('radio-group'),
    'rating-group': getAccessibilityDoc('rating-group'),
    'segment-group': getAccessibilityDoc('radio-group'),
    'signature-pad': null,
    'tags-input': getAccessibilityDoc('tags-input'),
    'time-picker': getAccessibilityDoc('time-picker'),
    'toggle-group': getAccessibilityDoc('toggle-group'),
    'tree-view': getAccessibilityDoc('tree-view'),
    accordion: getAccessibilityDoc('accordion'),
    alert: null,
    avatar: null,
    breadcrumbs: null,
    carousel: null,
    checkbox: null,
    clipboard: null,
    collapsible: getAccessibilityDoc('collapsible'),
    combobox: getAccessibilityDoc('combobox'),
    dialog: getAccessibilityDoc('dialog'),
    drawer: getAccessibilityDoc('dialog'),
    editable: getAccessibilityDoc('editable'),
    field: null,
    menu: getAccessibilityDoc('menu'),
    pagination: null,
    popover: getAccessibilityDoc('popover'),
    select: getAccessibilityDoc('select'),
    slider: getAccessibilityDoc('slider'),
    splitter: null,
    steps: null,
    switch: getAccessibilityDoc('switch'),
    tabs: getAccessibilityDoc('tabs'),
    timer: null,
    toast: null,
    toggle: null,
    tooltip: getAccessibilityDoc('tooltip'),
    tour: getAccessibilityDoc('tour'),
  };

  let {id}: {id: string} = $props();

  let subject = $derived(MAP[id]);
</script>

{#if subject?.keyboard}
  <Table.Container class="not-prose">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Heading class="w-1/4">Key</Table.Heading>
          <Table.Heading>Description</Table.Heading>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each subject.keyboard as item}
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
