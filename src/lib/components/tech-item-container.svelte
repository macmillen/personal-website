<script lang="ts">
  export { classes as class };

  let classes = "";
</script>

<div class="flex gap-x-2 gap-y-2 flex-wrap {classes}">
  <slot />
</div>
