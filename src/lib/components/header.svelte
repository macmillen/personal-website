<script lang="ts">
  import { fly } from "svelte/transition";
  import HeaderLinks from "./header-links.svelte";
  import ResumeButton from "./resume-button.svelte";
</script>

<div
  class="fixed w-full left-0 top-0 sm:h-20 h-16 flex items-center text-gray-700 sm:px-12 px-2 bg-white/90 z-50"
  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);"
  in:fly={{ y: -200 }}
>
  <div class="h-full items-center sm:gap-1 flex">
    <HeaderLinks />
  </div>

  <div class="flex-grow" />

  <ResumeButton />
</div>
