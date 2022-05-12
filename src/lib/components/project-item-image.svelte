<script lang="ts">
  export { classes as class };
  export let imgSrc: string;

  let classes = "";
</script>

<img src={imgSrc} class="w-32 h-32 object-cover rounded-2xl border {classes}" alt="" />
