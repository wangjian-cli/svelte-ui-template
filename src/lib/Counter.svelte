<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let content: string = 'hhh ';
  let count: number = 0;
  const increment = (): void => {
    count += 1;
  };
  const changeContent = () => {
    console.log('children');
    dispatch('changeContentParent', { val: 'children' });
  };
</script>

<button on:click={increment} class="bg-black text-white">
  count is {count}{content}
</button>
<button on:click={changeContent}>触发父组件方法</button>
