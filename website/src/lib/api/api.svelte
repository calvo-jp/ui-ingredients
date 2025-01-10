<script lang="ts">
  import type {ComponentId} from '$lib/types';
  import {Table} from '$lib/ui';
  import {MinusIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import accordion from './accordion';
  import alert from './alert';
  import alertDialog from './alert-dialog';
  import angleSlider from './angle-slider';
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
  import environmentProvider from './environment-provider';
  import field from './field';
  import fileUpload from './file-upload';
  import floatingPanel from './floating-panel';
  import highlight from './highlight';
  import hoverCard from './hover-card';
  import localeProvider from './locale-provider';
  import menu from './menu';
  import numberInput from './number-input';
  import pagination from './pagination';
  import pinInput from './pin-input';
  import popover from './popover';
  import portal from './portal';
  import presence from './presence';
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
  import switchApi from './switch';
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
  import type {ApiEntries} from './utils';

  const MAP = {
    'alert-dialog': alertDialog,
    'angle-slider': angleSlider,
    'color-picker': colorPicker,
    'date-picker': datePicker,
    'environment-provider': environmentProvider,
    'file-upload': fileUpload,
    'floating-panel': floatingPanel,
    'hover-card': hoverCard,
    'locale-provider': localeProvider,
    'number-input': numberInput,
    'pin-input': pinInput,
    'progress-circular': progress,
    'progress-linear': progress,
    'qr-code': qrCode,
    'radio-group': radioGroup,
    'rating-group': ratingGroup,
    'segment-group': segmentGroup,
    'signature-pad': signaturePad,
    'tags-input': tagsInput,
    'time-picker': timePicker,
    'toggle-group': toggleGroup,
    'tree-view': treeView,
    accordion,
    alert,
    avatar,
    breadcrumbs,
    carousel,
    checkbox,
    clipboard,
    collapsible,
    combobox,
    dialog,
    drawer,
    editable,
    field,
    highlight,
    menu,
    pagination,
    popover,
    portal,
    presence,
    select,
    slider,
    splitter,
    steps,
    switch: switchApi,
    tabs,
    timer,
    toast,
    toggle,
    tooltip,
    tour,
  } satisfies Record<ComponentId, ApiEntries>;

  let {id}: {id: ComponentId} = $props();

  let subject = $derived(MAP[id]);
  let parts = $derived(
    Object.entries(subject).toSorted(([a], [b]) => {
      if (a.toLowerCase() === 'root') return -1;
      if (b.toLowerCase() === 'root') return 1;
      return a.localeCompare(b);
    }),
  );
</script>

{#each parts as [i, j]}
  <h2>API Reference</h2>
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
        {@const ctx = Object.entries(j?.context ?? {}).toSorted(([a], [b]) => {
          if (a.toLowerCase() === 'aschild') return 1;
          if (b.toLowerCase() === 'aschild') return -1;
          return a.localeCompare(b);
        })}

        {#each ctx as [k, l]}
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

              {#if l.description}
                <span class="mt-2 block">
                  {l.description}
                </span>
              {/if}
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </Table.Container>

  {#if j?.dataAttr}
    <Table.Container class="not-prose mt-8">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Heading>Data Attribute</Table.Heading>
            <Table.Heading>Value</Table.Heading>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each Object.entries(j.dataAttr).toSorted( ([a], [b]) => a.localeCompare(b), ) as [k, v]}
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
