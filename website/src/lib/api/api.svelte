<script lang="ts">
  import {Table} from '$lib/ui';
  import {MinusIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import accordion from './accordion';
  import alert from './alert';
  import alertDialog from './alert-dialog';
  import avatar from './avatar';
  import breadcrumbs from './breadcrumbs';
  import carousel from './carousel';
  import checkbox from './checkbox';
  import clipboard from './clipboard';
  import collapsible from './collapsible';
  import colorPicker from './color-picker';
  import combobox from './combobox';
  import datePicker from './date-picker';
  import dialog from './dialog';
  import drawer from './drawer';
  import editable from './editable';
  import field from './field';
  import fileUpload from './file-upload';
  import floatingPanel from './floating-panel';
  import highlight from './highlight';
  import hoverCard from './hover-card';
  import menu from './menu';
  import numberInput from './number-input';
  import pagination from './pagination';
  import pinInput from './pin-input';
  import popover from './popover';
  import portal from './portal';
  import progress from './progress';
  import qrCode from './qr-code';
  import radioGroup from './radio-group';
  import ratingGroup from './rating-group';
  import segmentGroup from './segment-group';
  import select from './select';
  import signaturePad from './signature-pad';
  import slider from './slider';
  import splitter from './splitter';
  import steps from './steps';
  import switch_ from './switch';
  import tabs from './tabs';
  import tagsInput from './tags-input';
  import timePicker from './time-picker';
  import timer from './timer';
  import toast from './toast';
  import toggle from './toggle';
  import toggleGroup from './toggle-group';
  import tooltip from './tooltip';
  import tour from './tour';
  import treeView from './tree-view';

  let API = {
    accordion,
    'alert-dialog': alertDialog,
    alert,
    avatar,
    breadcrumbs,
    carousel,
    checkbox,
    clipboard,
    collapsible,
    'color-picker': colorPicker,
    combobox,
    'date-picker': datePicker,
    dialog,
    drawer,
    editable,
    field,
    'file-upload': fileUpload,
    'floating-panel': floatingPanel,
    highlight,
    'hover-card': hoverCard,
    menu,
    'number-input': numberInput,
    pagination,
    popover,
    'pin-input': pinInput,
    portal,
    progress,
    'qr-code': qrCode,
    'radio-group': radioGroup,
    'rating-group': ratingGroup,
    'segment-group': segmentGroup,
    select,
    'signature-pad': signaturePad,
    slider,
    splitter,
    steps,
    switch: switch_,
    tabs,
    'tags-input': tagsInput,
    timer,
    'time-picker': timePicker,
    toast,
    toggle,
    'toggle-group': toggleGroup,
    tooltip,
    'tree-view': treeView,
    tour,
  };

  type ID = keyof typeof API;

  let {id}: {id: ID} = $props();

  let item = $derived(API[id]);
</script>

{#each Object.entries(item) as [i, j]}
  <h3>{i}</h3>

  <Table.Container class="not-prose">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Heading>Prop</Table.Heading>
          <Table.Heading>Default</Table.Heading>
          <Table.Heading>Description</Table.Heading>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each Object.entries(j.context) as [k, l]}
          <Table.Row>
            <Table.Cell>
              {@render code(k)}
            </Table.Cell>
            <Table.Cell>
              {#if l.defaultValue}
                {@render code(l.defaultValue)}
              {:else}
                <MinusIcon
                  class="size-3 text-neutral-400 dark:text-neutral-600"
                />
              {/if}
            </Table.Cell>
            <Table.Cell>
              {@render code(l.type)}

              <span class="mt-2 block">
                {l.description}
              </span>
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </Table.Container>

  {#if j.dataAttr}
    <Table.Container class="not-prose mt-8">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Heading>Data Attribute</Table.Heading>
            <Table.Heading>Value</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each Object.entries(j.dataAttr) as [k, v]}
            <Table.Row>
              <Table.Cell>
                {@render code(k)}
              </Table.Cell>
              <Table.Cell>{@html v}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </Table.Container>
  {/if}
{/each}

{#snippet code(
  children: string,
  opts?: {
    id?: string;
    style?: string;
    class?: string;
  },
)}
  <code
    id={opts?.id}
    style={opts?.style}
    class={twMerge(
      'inline-block whitespace-pre rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-mono text-xs font-medium [tab-size:0.75rem] dark:border-neutral-800 dark:bg-neutral-800/50',
      opts?.class,
    )}
  >
    {children}
  </code>
{/snippet}
