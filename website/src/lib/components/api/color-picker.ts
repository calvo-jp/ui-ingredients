import {omit} from '$lib/omit';
import {getApiDoc, getDataAttrDoc} from '@zag-js/docs';
import {colorPickerAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

const dataAttrDoc = getDataAttrDoc('color-picker');
const rootContext = getApiDoc('color-picker').context;

export default apiEntryFromAnatomy(colorPickerAnatomy)({
  Area: {
    dataAttr: dataAttrDoc.Area,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  AreaBackground: {
    dataAttr: dataAttrDoc.AreaBackground,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  AreaThumb: {
    dataAttr: dataAttrDoc.AreaThumb,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ChannelInput: {
    dataAttr: dataAttrDoc.ChannelInput,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      channel: {
        type: 'ExtendedColorChannel',
      },
      orientation: {
        type: 'Orientation',
      },
    },
  },
  ChannelSlider: {
    dataAttr: dataAttrDoc.ChannelSlider,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      channel: {
        type: 'ColorChannel',
      },
      orientation: {
        type: 'Orientation',
      },
    },
  },
  ChannelSliderLabel: {
    dataAttr: dataAttrDoc.ChannelSliderLabel,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ChannelSliderThumb: {
    dataAttr: dataAttrDoc.ChannelSliderThumb,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ChannelSliderTrack: {
    dataAttr: dataAttrDoc.ChannelSliderTrack,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ChannelSliderValueText: {
    dataAttr: dataAttrDoc.ChannelSliderValueText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Content: {
    dataAttr: dataAttrDoc.Content,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Control: {
    dataAttr: dataAttrDoc.Control,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  EyeDropperTrigger: {
    dataAttr: dataAttrDoc.EyeDropperTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  FormatSelect: {
    dataAttr: dataAttrDoc.FormatSelect,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  FormatTrigger: {
    dataAttr: dataAttrDoc.FormatTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Label: {
    dataAttr: dataAttrDoc.Label,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Positioner: {
    dataAttr: dataAttrDoc.Positioner,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  Root: {
    dataAttr: dataAttrDoc.Root,
    context: {
      ...omit(rootContext, 'dir', 'getRootNode', 'open.controlled'),

      ids: {
        type: '{\n\troot?: string;\n\tcontrol?: string;\n\ttrigger?: string;\n\tlabel?: string;\n\tinput?: string;\n\thiddenInput?: string;\n\tcontent?: string;\n\tarea?: string;\n\tareaGradient?: string;\n\tpositioner?: string;\n\tformatSelect?: string;\n\tareaThumb?: string;\n\tchannelInput(id: string)?: string;\n\tchannelSliderTrack(id: ColorChannel)?: string;\n}',
        description:
          'The ids of the elements in the color picker. Useful for composition.',
      },
      openControlled: {
        type: 'boolean',
        description:
          'Whether the color picker open state is controlled by the user',
      },
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      lazyMount: {
        type: 'boolean',
        description: 'Whether to enable lazy mounting.',
      },
      keepMounted: {
        type: 'boolean',
        description: 'Whether to keep the component mounted after exit.',
      },
    },
  },
  Swatch: {
    dataAttr: dataAttrDoc.Swatch,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      value: {
        type: 'string | Color',
        description: 'The color value of the swatch.',
      },
      respectAlpha: {
        type: 'boolean',
        description: 'Whether to respect the alpha channel of the color.',
      },
    },
  },
  SwatchGroup: {
    dataAttr: dataAttrDoc.SwatchGroup,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  SwatchIndicator: {
    dataAttr: dataAttrDoc.SwatchIndicator,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  SwatchTrigger: {
    dataAttr: dataAttrDoc.SwatchTrigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      value: {
        type: 'string | Color',
        description: 'The color value of the swatch.',
      },
      disabled: {
        type: 'boolean',
        description: 'Whether the swatch is disabled.',
      },
    },
  },
  TransparencyGrid: {
    dataAttr: dataAttrDoc.TransparencyGrid,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      size: {
        type: 'string',
      },
    },
  },
  Trigger: {
    dataAttr: dataAttrDoc.Trigger,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  ValueSwatch: {
    dataAttr: dataAttrDoc.Swatch,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
      respectAlpha: {
        type: 'boolean',
      },
    },
  },
  ValueText: {
    dataAttr: dataAttrDoc.ValueText,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  View: {
    dataAttr: dataAttrDoc.View,
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
  HiddenInput: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
  },
});
