<script lang="ts">
  export let selected: boolean;
</script>

<div class="flex items-center" on:click>
  <p
    class="font-bold px-4 py-2 rounded-full transition cursor-pointer
      {selected ? 'bg-gray-900 hover:bg-gray-700 text-white' : 'hover:bg-gray-200 text-gray-800'}"
  >
    <slot />
  </p>
  <div class="sm:flex hidden items-center w-12 flex-shrink-0">
    <div class="h-px bg-coolTurquoise transition-all {selected ? 'w-9' : 'invisible w-0'}" />
    <div class="w-3 h-3 bg-coolTurquoise rounded-full transition {selected ? '' : 'invisible'}" />
  </div>
</div>
