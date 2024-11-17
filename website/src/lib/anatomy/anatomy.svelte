<script lang="ts">
  import {twMerge} from 'tailwind-merge';
  import {
    AccordionAnatomyIcon,
    AvatarAnatomyIcon,
    CarouselAnatomyIcon,
    CheckboxAnatomyIcon,
    CircularProgressAnatomyIcon,
    ClipboardAnatomyIcon,
    ColorPickerAnatomyIcon,
    ComboboxAnatomyIcon,
    DatePickerAnatomyIcon,
    DialogAnatomyIcon,
    EditableAnatomyIcon,
    FieldAnatomyIcon,
    FieldsetAnatomyIcon,
    FileUploadAnatomyIcon,
    HoverCardAnatomyIcon,
    LinearProgressAnatomyIcon,
    MenuAnatomyIcon,
    NumberInputAnatomyIcon,
    PaginationAnatomyIcon,
    PinInputAnatomyIcon,
    PopoverAnatomyIcon,
    QrCodeAnatomyIcon,
    RadioGroupAnatomyIcon,
    RatingGroupAnatomyIcon,
    SegmentGroupAnatomyIcon,
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
  } from '../icons';
  import Container from './container.svelte';

  const Anatomy = {
    accordion: AccordionAnatomyIcon,
    avatar: AvatarAnatomyIcon,
    carousel: CarouselAnatomyIcon,
    checkbox: CheckboxAnatomyIcon,
    'circular-progress': CircularProgressAnatomyIcon,
    clipboard: ClipboardAnatomyIcon,
    'color-picker': ColorPickerAnatomyIcon,
    combobox: ComboboxAnatomyIcon,
    'date-picker': DatePickerAnatomyIcon,
    dialog: DialogAnatomyIcon,
    editable: EditableAnatomyIcon,
    field: FieldAnatomyIcon,
    fieldset: FieldsetAnatomyIcon,
    'file-upload': FileUploadAnatomyIcon,
    'hover-card': HoverCardAnatomyIcon,
    'linear-progress': LinearProgressAnatomyIcon,
    menu: MenuAnatomyIcon,
    'number-input': NumberInputAnatomyIcon,
    pagination: PaginationAnatomyIcon,
    'pin-input': PinInputAnatomyIcon,
    popover: PopoverAnatomyIcon,
    'qr-code': QrCodeAnatomyIcon,
    'radio-group': RadioGroupAnatomyIcon,
    'rating-group': RatingGroupAnatomyIcon,
    'segment-group': SegmentGroupAnatomyIcon,
    select: SelectAnatomyIcon,
    'signature-pad': SignaturePadAnatomyIcon,
    slider: SliderAnatomyIcon,
    splitter: SplitterAnatomyIcon,
    steps: StepsAnatomyIcon,
    switch: SwitchAnatomyIcon,
    tabs: TabsAnatomyIcon,
    'tags-input': TagsInputAnatomyIcon,
    'time-picker': TimePickerAnatomyIcon,
    toast: ToastAnatomyIcon,
    'toggle-group': ToggleGroupAnatomyIcon,
    tooltip: TooltipAnatomyIcon,
    tour: TourAnatomyIcon,
    'tree-view': TreeViewAnatomyIcon,
  };

  type AnatomyId = keyof typeof Anatomy;

  interface AnatomyProps {
    id: AnatomyId;
    style?: string;
    class?: string;
  }

  let {id, style, ...props}: AnatomyProps = $props();

  let Component = $derived(Anatomy[id]);
</script>

<div
  {id}
  {style}
  class={twMerge(
    'not-prose h-auto w-full overflow-hidden rounded-md',
    props.class,
  )}
>
  <Container>
    <Component class="h-auto w-full" />
  </Container>
</div>
