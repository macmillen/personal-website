<script lang="ts">
  import type { MappedSet } from "$lib/utils/type-helpers";

  export let size: Size = "sm";

  type Size = "sm" | "lg";

  const sizeMap: MappedSet<Size> = {
    sm: "text-base",
    lg: "text-xl",
  };
</script>

<div class="text-gray-600 sm:text-xl {sizeMap[size]}">
  <slot />
</div>
