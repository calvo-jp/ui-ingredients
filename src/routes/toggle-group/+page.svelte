<script lang="ts">
  import {ToggleGroup} from '$lib/index.js';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<ToggleGroup.Root
  class="flex"
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  multiple
>
  <ToggleGroup.Item
    class="size-11 flex items-center justify-center border aria-pressed:bg-gray-50"
    value="1"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M6 12H14C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4H6V12ZM6 12H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H6V12Z"
      ></path>
    </svg>
  </ToggleGroup.Item>
  <ToggleGroup.Item
    class="size-11 flex items-center justify-center border border-l-0 transition-colors duration-200 aria-pressed:bg-gray-50"
    value="2"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 4H10M14 20H5M15 4L9 20"></path>
    </svg>
  </ToggleGroup.Item>
  <ToggleGroup.Item
    class="size-11 flex items-center justify-center border border-l-0 transition-colors duration-200 aria-pressed:bg-gray-50"
    value="3"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 21H20"></path>
    </svg>
  </ToggleGroup.Item>
</ToggleGroup.Root>
