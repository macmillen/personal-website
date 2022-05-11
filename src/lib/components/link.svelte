<script lang="ts">
  export let href: string;
</script>

<a {href} class="text-coolTurquoise italic hover:text-grayBlue transition-colors" target="_blank">
  <slot />
</a>
