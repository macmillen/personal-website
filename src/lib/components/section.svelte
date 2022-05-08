<script lang="ts">
  export let n: string;
  export let id: string;
</script>

<h1 class="text-3xl text-gray-700 mt-36 mb-20 pt-24" {id}>
  <span class="font-mono text-blue-500 text-2xl">{n}</span>
  <slot />
</h1>
