<script lang="ts">
  import {
    getApiDoc,
    getDataAttrDoc,
    type ApiDoc,
    type ApiDocKey,
  } from '@zag-js/docs';
  import accordion from './accordion';
  import alert from './alert';
  import alertDialog from './alert-dialog';
  import avatar from './avatar';
  import breadcrumbs from './breadcrumbs';
  import carousel from './carousel';
  import checkbox from './checkbox';
  import clipboard from './clipboard';
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
    hoverCard,
    menu,
    'number-input': numberInput,
    pagination,
    popover,
    'pin-input': pinInput,
    portal,
    progress,
    qrCode,
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
    tooltip,
    'tree-view': treeView,
    tour,
  };

  let {id}: {id: ApiDocKey} = $props();

  function guard<Return, Arg>(fn: (...args: Arg[]) => Return) {
    return (...args: Arg[]): Return | null => {
      try {
        return fn(...args);
      } catch {
        return null;
      }
    };
  }

  let rootApi = $derived(guard(getApiDoc)(id));
  let dataAttr = $derived(guard(getDataAttrDoc)(id));

  interface Api {
    props?: Record<string, ApiDoc['context']>;
    dataAttr?: Record<string, string>;
  }
</script>
