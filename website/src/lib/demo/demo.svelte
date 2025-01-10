<script lang="ts">
  import type {ComponentId} from '$lib/types';
  import type {Component} from 'svelte';
  import {default as AccordionDemo} from './accordion.svelte';
  import {default as AlertDialogDemo} from './alert-dialog.svelte';
  import {default as AlertDemo} from './alert.svelte';
  import {default as AngleSliderDemo} from './angle-slider.svelte';
  import {default as AvatarDemo} from './avatar.svelte';
  import {default as BreadcrumbsDemo} from './breadcrumbs.svelte';
  import {default as CarouselDemo} from './carousel.svelte';
  import {default as CheckboxDemo} from './checkbox.svelte';
  import {default as ClipboardDemo} from './clipboard.svelte';
  import {default as CollapsibleDemo} from './collapsible.svelte';
  import {default as ColorPickerDemo} from './color-picker.svelte';
  import {default as ComboboxDemo} from './combobox.svelte';
  import {default as DatePickerDemo} from './date-picker.svelte';
  import {default as DialogDemo} from './dialog.svelte';
  import {default as DrawerDemo} from './drawer.svelte';
  import {default as EditableDemo} from './editable.svelte';
  import {default as FieldDemo} from './field.svelte';
  import {default as FileUploadDemo} from './file-upload.svelte';
  import {default as HighlightDemo} from './highlight.svelte';
  import {default as HoverCardDemo} from './hover-card.svelte';
  import {default as MenuDemo} from './menu.svelte';
  import {default as NumberInputDemo} from './number-input.svelte';
  import {default as PaginationDemo} from './pagination.svelte';
  import {default as PinInputDemo} from './pin-input.svelte';
  import {default as PopoverDemo} from './popover.svelte';
  import {default as ProgressCircularDemo} from './progress-circular.svelte';
  import {default as ProgressLinearDemo} from './progress-linear.svelte';
  import {default as QrCodeDemo} from './qr-code.svelte';
  import {default as RadioGroupDemo} from './radio-group.svelte';
  import {default as RatingGroupDemo} from './rating-group.svelte';
  import {default as SegmentGroupDemo} from './segment-group.svelte';
  import {default as SelectDemo} from './select.svelte';
  import {default as SignaturePadDemo} from './signature-pad.svelte';
  import {default as SliderDemo} from './slider.svelte';
  import {default as SplitterDemo} from './splitter.svelte';
  import {default as StepsDemo} from './steps.svelte';
  import {default as SwitchDemo} from './switch.svelte';
  import {default as TabsDemo} from './tabs.svelte';
  import {default as TagsInputDemo} from './tags-input.svelte';
  import {default as TimePickerDemo} from './time-picker.svelte';
  import {default as TimerDemo} from './timer.svelte';
  import {default as ToastDemo} from './toast.svelte';
  import {default as ToggleGroupDemo} from './toggle-group.svelte';
  import {default as ToggleDemo} from './toggle.svelte';
  import {default as TooltipDemo} from './tooltip.svelte';
  import {default as TourDemo} from './tour.svelte';
  import {default as TreeViewDemo} from './tree-view.svelte';

  const MAP = {
    'alert-dialog': AlertDialogDemo,
    'angle-slider': AngleSliderDemo,
    'color-picker': ColorPickerDemo,
    'date-picker': DatePickerDemo,
    'environment-provider': null,
    'file-upload': FileUploadDemo,
    'floating-panel': null,
    'hover-card': HoverCardDemo,
    'locale-provider': null,
    'number-input': NumberInputDemo,
    'pin-input': PinInputDemo,
    'progress-circular': ProgressCircularDemo,
    'progress-linear': ProgressLinearDemo,
    'qr-code': QrCodeDemo,
    'radio-group': RadioGroupDemo,
    'rating-group': RatingGroupDemo,
    'segment-group': SegmentGroupDemo,
    'signature-pad': SignaturePadDemo,
    'tags-input': TagsInputDemo,
    'time-picker': TimePickerDemo,
    'toggle-group': ToggleGroupDemo,
    'tree-view': TreeViewDemo,
    accordion: AccordionDemo,
    alert: AlertDemo,
    avatar: AvatarDemo,
    breadcrumbs: BreadcrumbsDemo,
    carousel: CarouselDemo,
    checkbox: CheckboxDemo,
    clipboard: ClipboardDemo,
    collapsible: CollapsibleDemo,
    combobox: ComboboxDemo,
    dialog: DialogDemo,
    drawer: DrawerDemo,
    editable: EditableDemo,
    field: FieldDemo,
    highlight: HighlightDemo,
    menu: MenuDemo,
    pagination: PaginationDemo,
    popover: PopoverDemo,
    portal: null,
    presence: null,
    select: SelectDemo,
    slider: SliderDemo,
    splitter: SplitterDemo,
    steps: StepsDemo,
    switch: SwitchDemo,
    tabs: TabsDemo,
    timer: TimerDemo,
    toast: ToastDemo,
    tooltip: TooltipDemo,
    tour: TourDemo,
    toggle: ToggleDemo,
  } satisfies Record<ComponentId, Component | null>;

  let {id}: {id: ComponentId} = $props();

  let Subject = $derived(MAP[id]);
</script>

{#if Subject}
  <div
    class="not-prose rounded-md bg-neutral-50 p-5 dark:border dark:border-neutral-800/40 dark:bg-neutral-900/40 md:p-10 lg:p-12"
  >
    <Subject />
  </div>
{/if}
