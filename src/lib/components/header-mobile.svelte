<script lang="ts">
  import { headerIsOpen } from "$lib/stores/header.store";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import HeaderLinks from "./header-links.svelte";
  import ResumeButton from "./resume-button.svelte";
</script>

<div
  class="fixed w-full left-0 top-0 h-16 flex items-center justify-between px-4 bg-white/90 z-50"
  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);"
  in:fly={{ y: -200 }}
>
  <h1 class="text-xl text-gray-600 font-mono">MJ</h1>
  <div on:click={() => ($headerIsOpen = !$headerIsOpen)}>
    <Icon icon="material-symbols:menu-rounded" class="w-10 h-10 text-blue-500" />
  </div>
</div>

{#if $headerIsOpen}
  <div
    transition:fly={{ x: 200 }}
    class="fixed w-9/12 h-full right-0 top-0 flex text-gray-700 px-8 py-5 bg-white/95 z-50 flex-row-reverse"
    style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);"
  >
    <div on:click={() => ($headerIsOpen = false)} class="absolute right-5 top-5">
      <Icon icon="clarity:close-line" class="w-10 h-10 text-blue-500" />
    </div>
    <div class="h-full w-full gap-3 flex flex-col justify-center">
      <div class="flex justify-center">
        <div class="flex flex-col items-ends">
          <HeaderLinks on:click={() => ($headerIsOpen = false)} />
        </div>
      </div>

      <div class="mt-10" />

      <ResumeButton />
    </div>

    <div class="flex-grow" />
  </div>
{/if}
