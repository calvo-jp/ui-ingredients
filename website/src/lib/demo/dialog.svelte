<script lang="ts">
  import {Button, Input, Label} from '$lib/ui';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Dialog, Field, Portal} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Dialog.Root lazyMount>
    <Dialog.Trigger class="mx-auto w-auto">
      {#snippet asChild(attrs)}
        <Button variant="outline" {...attrs}>Open dialog</Button>
      {/snippet}
    </Dialog.Trigger>

    <Portal>
      <Dialog.Backdrop
        class="fixed inset-0 z-overlay bg-white/50 backdrop-blur data-open:animate-fade-in data-closed:animate-fade-out dark:bg-black/50"
      />

      <Dialog.Positioner>
        <Dialog.Content
          class="fixed top-0 z-modal h-full w-full border border-neutral-200 bg-white p-5 data-open:animate-fade-in data-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900 lg:left-1/2 lg:top-16 lg:h-auto lg:w-[24rem] lg:-translate-x-1/2 lg:rounded lg:p-8"
        >
          <Dialog.CloseTrigger class="absolute right-4 top-4">
            <XCloseIcon />
          </Dialog.CloseTrigger>

          <h2 class="text-2xl font-bold">Sign In</h2>
          <p class="text-neutral-600 dark:text-neutral-400">
            Sign in to continue using the app
          </p>

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
                  <Input type="email" placeholder="Email" {...attrs} />
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
                  <Input type="password" placeholder="Password" {...attrs} />
                {/snippet}
              </Field.Input>
            </Field.Root>

            <Button type="submit" fullWidth class="mt-8">Sign In</Button>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
</Container>
