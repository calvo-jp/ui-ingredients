---
id: signature-pad
title: Signature Pad
description: A component for capturing and displaying handwritten signatures.
---

## Anatomy

## Usage

```svelte
<script>
  import {SignaturePad} from 'ui-ingredients';
</script>

<SignaturePad.Root>
  {#snippet children(context)}
    <SignaturePad.Label>Label</SignaturePad.Label>

    <SignaturePad.Control>
      <SignaturePad.Segment>
        {#each context.paths as path}
          <SignaturePad.SegmentPath {path} />
        {/each}

        <SignaturePad.CurrentSegmentPath />
      </SignaturePad.Segment>
      <SignaturePad.Guide />
    </SignaturePad.Control>
    <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
  {/snippet}
</SignaturePad.Root>
```

## API Reference

## Accessibility

### Keyboard Support
