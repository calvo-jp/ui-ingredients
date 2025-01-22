<script lang="ts">
  import type {Component} from 'svelte';
  import Accordion from './accordion.svelte';
  import AlertDialog from './alert-dialog.svelte';
  import Alert from './alert.svelte';
  import AngleSlider from './angle-slider.svelte';
  import Avatar from './avatar.svelte';
  import Breadcrumbs from './breadcrumbs.svelte';
  import Carousel from './carousel.svelte';
  import Checkbox from './checkbox.svelte';
  import Clipboard from './clipboard.svelte';
  import Collapsible from './collapsible.svelte';
  import ColorPicker from './color-picker.svelte';
  import Combobox from './combobox.svelte';
  import DatePicker from './date-picker.svelte';
  import Dialog from './dialog.svelte';
  import Drawer from './drawer.svelte';
  import Editable from './editable.svelte';
  import Field from './field.svelte';
  import FileUpload from './file-upload.svelte';
  import HoverCard from './hover-card.svelte';
  import Menu from './menu.svelte';
  import NumberInput from './number-input.svelte';
  import Pagination from './pagination.svelte';
  import PinInput from './pin-input.svelte';
  import Popover from './popover.svelte';
  import ProgressCircular from './progress-circular.svelte';
  import ProgressLinear from './progress-linear.svelte';
  import QrCode from './qr-code.svelte';
  import RadioGroup from './radio-group.svelte';
  import RatingGroup from './rating-group.svelte';
  import SegmentGroup from './segment-group.svelte';
  import Select from './select.svelte';
  import SignaturePad from './signature-pad.svelte';
  import Slider from './slider.svelte';
  import Splitter from './splitter.svelte';
  import Steps from './steps.svelte';
  import Switch from './switch.svelte';
  import Tabs from './tabs.svelte';
  import TagsInput from './tags-input.svelte';
  import TimePicker from './time-picker.svelte';
  import Timer from './timer.svelte';
  import Toast from './toast.svelte';
  import ToggleGroup from './toggle-group.svelte';
  import Toggle from './toggle.svelte';
  import Tooltip from './tooltip.svelte';
  import Tour from './tour.svelte';
  import TreeView from './tree-view.svelte';

  const MAP: Record<string, Component | null> = {
    'alert-dialog': AlertDialog,
    'angle-slider': AngleSlider,
    'color-picker': ColorPicker,
    'date-picker': DatePicker,
    'file-upload': FileUpload,
    'floating-panel': null,
    'hover-card': HoverCard,
    'number-input': NumberInput,
    'pin-input': PinInput,
    'progress-circular': ProgressCircular,
    'progress-linear': ProgressLinear,
    'qr-code': QrCode,
    'radio-group': RadioGroup,
    'rating-group': RatingGroup,
    'segment-group': SegmentGroup,
    'signature-pad': SignaturePad,
    'tags-input': TagsInput,
    'time-picker': TimePicker,
    'toggle-group': ToggleGroup,
    'tree-view': TreeView,
    accordion: Accordion,
    alert: Alert,
    avatar: Avatar,
    breadcrumbs: Breadcrumbs,
    carousel: Carousel,
    checkbox: Checkbox,
    clipboard: Clipboard,
    collapsible: Collapsible,
    combobox: Combobox,
    dialog: Dialog,
    drawer: Drawer,
    editable: Editable,
    field: Field,
    menu: Menu,
    pagination: Pagination,
    popover: Popover,
    select: Select,
    slider: Slider,
    splitter: Splitter,
    steps: Steps,
    switch: Switch,
    tabs: Tabs,
    timer: Timer,
    toast: Toast,
    tooltip: Tooltip,
    tour: Tour,
    toggle: Toggle,
  };

  let {id}: {id: string} = $props();

  let Subject = $derived(MAP[id]);
</script>

{#if Subject}
  <div
    class="not-prose rounded-md bg-neutral-50 p-5 dark:border dark:border-neutral-800/40 dark:bg-neutral-900/40 md:p-10 lg:p-12"
  >
    <Subject />
  </div>
{/if}
