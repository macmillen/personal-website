<script lang="ts">
  import { animate } from "$lib/actions/animate";

  export let n: string;
  export let id: string;
</script>

<h1
  class="text-3xl text-gray-700 my-10 pt-24 invisible"
  {id}
  use:animate={{ _class: "fade-in-up", delay: 400 }}
>
  <span class="font-mono text-blue-500 text-2xl">{n}</span>
  <slot />
</h1>
