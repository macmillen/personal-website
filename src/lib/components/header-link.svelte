<script lang="ts">
  export let href: string;
</script>

<a {href} class="hover:bg-blue-500/10 transition h-full px-3">
  <div class="h-full flex items-center">
    <slot />
  </div>
</a>
