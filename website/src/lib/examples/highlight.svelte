<script lang="ts">
  import {Input} from '$lib/ui';
  import {twMerge} from 'tailwind-merge';
  import {Highlight} from 'ui-ingredients';

  let text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente consequatur, eos explicabo architecto exercitationem? Consequuntur repellat laboriosam ullam adipisci?';

  let query = $state('lorem');
</script>

<div class="w-full lg:max-w-[32rem]">
  <Input
    value={query}
    oninput={(e) => {
      query = e.currentTarget.value;
    }}
  />

  <Highlight
    {text}
    {query}
    ignoreCase
    class={twMerge(
      'p-4',
      'mt-5',
      'border',
      'rounded',
      '[&_mark]:bg-indigo-500',
      '[&_mark]:text-white',
      '[&_mark]:font-medium',
      '[&_mark]:inline-block',
      '[&_mark]:px-1.5',
    )}
  />
</div>
