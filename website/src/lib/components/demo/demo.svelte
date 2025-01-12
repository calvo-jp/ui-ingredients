<script lang="ts">
  import type {ComponentId} from '$lib/types';
  import type {Component} from 'svelte';
  import AccordionDemo from './accordion.svelte';
  import AlertDialogDemo from './alert-dialog.svelte';
  import AlertDemo from './alert.svelte';
  import AngleSliderDemo from './angle-slider.svelte';
  import AvatarDemo from './avatar.svelte';
  import BreadcrumbsDemo from './breadcrumbs.svelte';
  import CarouselDemo from './carousel.svelte';
  import CheckboxDemo from './checkbox.svelte';
  import ClipboardDemo from './clipboard.svelte';
  import CollapsibleDemo from './collapsible.svelte';
  import ColorPickerDemo from './color-picker.svelte';
  import ComboboxDemo from './combobox.svelte';
  import DatePickerDemo from './date-picker.svelte';
  import DialogDemo from './dialog.svelte';
  import DrawerDemo from './drawer.svelte';
  import EditableDemo from './editable.svelte';
  import FieldDemo from './field.svelte';
  import FileUploadDemo from './file-upload.svelte';
  import HoverCardDemo from './hover-card.svelte';
  import MenuDemo from './menu.svelte';
  import NumberInputDemo from './number-input.svelte';
  import PaginationDemo from './pagination.svelte';
  import PinInputDemo from './pin-input.svelte';
  import PopoverDemo from './popover.svelte';
  import ProgressCircularDemo from './progress-circular.svelte';
  import ProgressLinearDemo from './progress-linear.svelte';
  import QrCodeDemo from './qr-code.svelte';
  import RadioGroupDemo from './radio-group.svelte';
  import RatingGroupDemo from './rating-group.svelte';
  import SegmentGroupDemo from './segment-group.svelte';
  import SelectDemo from './select.svelte';
  import SignaturePadDemo from './signature-pad.svelte';
  import SliderDemo from './slider.svelte';
  import SplitterDemo from './splitter.svelte';
  import StepsDemo from './steps.svelte';
  import SwitchDemo from './switch.svelte';
  import TabsDemo from './tabs.svelte';
  import TagsInputDemo from './tags-input.svelte';
  import TimePickerDemo from './time-picker.svelte';
  import TimerDemo from './timer.svelte';
  import ToastDemo from './toast.svelte';
  import ToggleGroupDemo from './toggle-group.svelte';
  import ToggleDemo from './toggle.svelte';
  import TooltipDemo from './tooltip.svelte';
  import TourDemo from './tour.svelte';
  import TreeViewDemo from './tree-view.svelte';

  const MAP = {
    'alert-dialog': AlertDialogDemo,
    'angle-slider': AngleSliderDemo,
    'color-picker': ColorPickerDemo,
    'date-picker': DatePickerDemo,
    'file-upload': FileUploadDemo,
    'floating-panel': null,
    'hover-card': HoverCardDemo,
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
    menu: MenuDemo,
    pagination: PaginationDemo,
    popover: PopoverDemo,
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
