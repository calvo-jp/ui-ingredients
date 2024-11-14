<script lang="ts">
  import {Button, Input, Label} from '$lib/ui';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Dialog, Field, Portal} from 'ui-ingredients';
</script>

<Dialog.Root lazyMount>
  <Dialog.Trigger class="mx-auto w-auto">
    {#snippet asChild(attrs)}
      <Button {...attrs}>Open dialog</Button>
    {/snippet}
  </Dialog.Trigger>

  <Portal>
    <Dialog.Backdrop
      class={twMerge(
        'z-overlay',
        'fixed',
        'inset-0',
        'bg-black/75',
        'backdrop-blur-sm',
        'data-open:animate-fade-in',
        'data-closed:animate-fade-out',
      )}
    />

    <Dialog.Positioner>
      <Dialog.Content
        class={twMerge(
          'z-modal',
          'bg-neutral-900',
          'fixed',
          'top-0',
          'border',
          'border-neutral-800',
          'p-5',
          'w-full',
          'h-full',
          'data-open:animate-fade-in',
          'data-closed:animate-fade-out',
          'lg:p-8',
          'lg:w-[24rem]',
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

        <h2 class="text-2xl font-bold">Sign In</h2>
        <p class="text-neutral-400">Sign in to continue using the app</p>

        <form
          onsubmit={(e) => {
            e.preventDefault();
          }}
          class="mt-8"
        >
          <Field.Root>
            <Field.Label>
              {#snippet asChild(attrs)}
                <Label {...attrs}>Email</Label>
              {/snippet}
            </Field.Label>
            <Field.Input>
              {#snippet asChild(attrs)}
                <Input
                  type="email"
                  placeholder="Email"
                  class="border-neutral-700"
                  {...attrs}
                />
              {/snippet}
            </Field.Input>
          </Field.Root>
          <Field.Root class="mt-4">
            <Field.Label>
              {#snippet asChild(attrs)}
                <Label {...attrs}>Password</Label>
              {/snippet}
            </Field.Label>
            <Field.Input>
              {#snippet asChild(attrs)}
                <Input
                  type="password"
                  placeholder="Password"
                  class="border-neutral-700"
                  {...attrs}
                />
              {/snippet}
            </Field.Input>
          </Field.Root>

          <Button type="submit" fullWidth class="mt-8">Sign In</Button>
        </form>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
