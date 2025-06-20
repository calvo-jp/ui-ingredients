<script lang="ts">
  import {
    AccordionAnatomyIcon,
    AvatarAnatomyIcon,
    CarouselAnatomyIcon,
    CheckboxAnatomyIcon,
    ClipboardAnatomyIcon,
    ColorPickerAnatomyIcon,
    ComboboxAnatomyIcon,
    DatePickerAnatomyIcon,
    DialogAnatomyIcon,
    EditableAnatomyIcon,
    FieldAnatomyIcon,
    FileUploadAnatomyIcon,
    HoverCardAnatomyIcon,
    MenuAnatomyIcon,
    NumberInputAnatomyIcon,
    PaginationAnatomyIcon,
    PasswordInputAnatomyIcon,
    PinInputAnatomyIcon,
    PopoverAnatomyIcon,
    CircularProgressAnatomyIcon as ProgressCircularAnatomyIcon,
    LinearProgressAnatomyIcon as ProgressLinearAnatomyIcon,
    QrCodeAnatomyIcon,
    RadioGroupAnatomyIcon,
    RatingGroupAnatomyIcon,
    SegmentedControlAnatomyIcon as SegmentGroupAnatomyIcon,
    SelectAnatomyIcon,
    SignaturePadAnatomyIcon,
    SliderAnatomyIcon,
    SplitterAnatomyIcon,
    StepsAnatomyIcon,
    SwitchAnatomyIcon,
    TabsAnatomyIcon,
    TagsInputAnatomyIcon,
    TimePickerAnatomyIcon,
    ToastAnatomyIcon,
    ToggleGroupAnatomyIcon,
    TooltipAnatomyIcon,
    TourAnatomyIcon,
    TreeViewAnatomyIcon,
  } from '$lib/icons/anatomy';
  import {createGradient} from '@zag-js/anatomy-icons';
  import type {Component} from 'svelte';

  const MAP: Record<string, Component | null> = {
    'alert-dialog': DialogAnatomyIcon,
    'angle-slider': null,
    'color-picker': ColorPickerAnatomyIcon,
    'date-picker': DatePickerAnatomyIcon,
    'file-upload': FileUploadAnatomyIcon,
    'floating-panel': null,
    'hover-card': HoverCardAnatomyIcon,
    'number-input': NumberInputAnatomyIcon,
    'pin-input': PinInputAnatomyIcon,
    'progress-circular': ProgressCircularAnatomyIcon,
    'progress-linear': ProgressLinearAnatomyIcon,
    'qr-code': QrCodeAnatomyIcon,
    'radio-group': RadioGroupAnatomyIcon,
    'rating-group': RatingGroupAnatomyIcon,
    'segment-group': SegmentGroupAnatomyIcon,
    'signature-pad': SignaturePadAnatomyIcon,
    'tags-input': TagsInputAnatomyIcon,
    'time-picker': TimePickerAnatomyIcon,
    'toggle-group': ToggleGroupAnatomyIcon,
    'tree-view': TreeViewAnatomyIcon,
    accordion: AccordionAnatomyIcon,
    alert: null,
    avatar: AvatarAnatomyIcon,
    breadcrumbs: null,
    carousel: CarouselAnatomyIcon,
    checkbox: CheckboxAnatomyIcon,
    clipboard: ClipboardAnatomyIcon,
    collapsible: null,
    combobox: ComboboxAnatomyIcon,
    dialog: DialogAnatomyIcon,
    drawer: null,
    editable: EditableAnatomyIcon,
    field: FieldAnatomyIcon,
    menu: MenuAnatomyIcon,
    pagination: PaginationAnatomyIcon,
    popover: PopoverAnatomyIcon,
    select: SelectAnatomyIcon,
    slider: SliderAnatomyIcon,
    splitter: SplitterAnatomyIcon,
    steps: StepsAnatomyIcon,
    switch: SwitchAnatomyIcon,
    tabs: TabsAnatomyIcon,
    timer: null,
    toast: ToastAnatomyIcon,
    toggle: null,
    tooltip: TooltipAnatomyIcon,
    tour: TourAnatomyIcon,
    'password-input': PasswordInputAnatomyIcon,
  };

  let {id}: {id: string} = $props();

  let Subject = $derived(MAP[id]);
</script>

{#if Subject}
  <div
    style={Object.entries({
      '--bg-dark': createGradient('#6366f1').value,
      '--bg-light': createGradient('#a5b4fc').value,
    })
      .map(([k, v]) => `${k}:${v}`)
      .join(';')}
    class={[
      'not-prose h-auto w-full overflow-hidden rounded-md',
      '[background:var(--bg-light)] dark:[background:var(--bg-dark)]',
    ]}
  >
    <Subject class="h-auto w-full" />
  </div>
{/if}
