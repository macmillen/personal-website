<script lang="ts">
  import { animate } from "$lib/actions/animate";
  import { fly } from "svelte/transition";
  import HeaderLinks from "./header-links.svelte";
  import ResumeButton from "./resume-button.svelte";
</script>

<div
  class="fixed w-full left-0 top-0 sm:h-20 h-16 flex items-center text-gray-700 sm:px-12 px-2 bg-white/90 z-50 justify-end gap-10"
  style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);"
  in:fly={{ y: -200 }}
>
  <div class="h-full items-center gap-4 flex">
    <HeaderLinks />
  </div>

  <div use:animate={{ _class: "fade-in-down", delay: 5 * 120 }} class="invisible">
    <ResumeButton />
  </div>
</div>
