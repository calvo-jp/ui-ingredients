<script lang="ts">
  import {Button, Input, Label, toaster} from '$lib/ui';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Dialog, Field, Portal} from 'ui-ingredients';

  let open = $state(false);
</script>

<Dialog.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <Dialog.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Click me</Button>
    {/snippet}
  </Dialog.Trigger>

  <Portal>
    <Dialog.Backdrop
      class={twMerge(
        'z-overlay',
        'fixed',
        'inset-0',
        'bg-black/50',
        'backdrop-blur-sm',
        'data-open:animate-fade-in',
        'data-closed:animate-fade-out',
      )}
    />

    <Dialog.Positioner>
      <Dialog.Content
        class={twMerge(
          'z-modal',
          'bg-light',
          'fixed',
          'top-0',
          'border',
          'p-5',
          'w-full',
          'h-full',
          'data-open:animate-fade-in',
          'data-closed:animate-fade-out',
          'lg:p-8',
          'lg:w-[30rem]',
          'lg:h-auto',
          'lg:top-16',
          'lg:left-1/2',
          'lg:-translate-x-1/2',
          'lg:rounded',
        )}
      >
        <Dialog.CloseTrigger class="absolute right-4 top-4">
          <XCloseIcon />
        </Dialog.CloseTrigger>

        <h2 class="text-2xl font-bold text-neutral-100">Sign In</h2>
        <p>Sign in to continue using the app</p>

        <form
          onsubmit={(e) => {
            e.preventDefault();

            toaster.success({
              title: 'Success',
              description: 'Signed in successfully!',
            });

            open = false;
          }}
          class="mt-8"
        >
          <Field.Root>
            <Field.Label>
              {#snippet asChild(attrs)}
                <Label class="text-neutral-300" {...attrs}>Email</Label>
              {/snippet}
            </Field.Label>
            <Field.Input>
              {#snippet asChild(attrs)}
                <Input type="email" class="border-neutral-700" {...attrs} />
              {/snippet}
            </Field.Input>
          </Field.Root>
          <Field.Root class="mt-4">
            <Field.Label>
              {#snippet asChild(attrs)}
                <Label class="text-neutral-300" {...attrs}>Password</Label>
              {/snippet}
            </Field.Label>
            <Field.Input>
              {#snippet asChild(attrs)}
                <Input class="border-neutral-700" {...attrs} />
              {/snippet}
            </Field.Input>
          </Field.Root>

          <Button type="submit" fullWidth class="mt-8">Sign In</Button>
        </form>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
