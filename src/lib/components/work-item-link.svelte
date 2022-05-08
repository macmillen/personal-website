<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string;
  export let link: string;
</script>

<a
  href={link}
  target="_blank"
  class="rounded-full bg-gray-100 text-blue-500 p-2 flex items-center gap-1"
>
  <Icon {icon} class="w-5 h-5" />
</a>
