<script lang="ts">
  import { animate } from "$lib/actions/animate";

  export let href: string;
  export let n: number;
</script>

<a {href} class="hover:bg-blue-500/10 transition h-full px-2 py-4 font-mono" on:click>
  <div
    class="h-full flex items-center invisible"
    use:animate={{ _class: "fade-in-down", delay: n * 120 }}
  >
    <span class="text-blue-500 pr-1">0{n}.</span>
    <slot />
  </div>
</a>
