<script lang="ts">
  import Counter from '@/lib/Counter.svelte';
  import Counter2 from '@/lib/Counter2.svelte';
  let content: string = 'nihao';
  const changeContentParent = (val: { detail: { val: string } }) => {
    content = val.detail.val;
  };
</script>

<main>
  <div class="card">
    <Counter {content} on:changeContentParent={changeContentParent} />
    <Counter2 />
  </div>
</main>

<style lang="less">
  .card {
    background-color: red;
  }
</style>
