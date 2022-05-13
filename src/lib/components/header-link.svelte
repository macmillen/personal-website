<script lang="ts">
  export let href: string;
  export let n: string;
</script>

<a {href} class="hover:bg-blue-500/10 transition h-full px-2 py-4 font-mono" on:click>
  <div class="h-full flex items-center">
    <span class="text-blue-500 pr-1">{n}</span>
    <slot />
  </div>
</a>
