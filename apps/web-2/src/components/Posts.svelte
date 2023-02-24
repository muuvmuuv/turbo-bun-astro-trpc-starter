<script lang="ts">
  import { onMount } from "svelte"

  import type { Post } from "server/routes/post"
  import { trpc } from "../lib/trpc"

  let posts: Post[] = []

  onMount(async () => {
    console.log("HEY")

    try {
      posts = await trpc().post.get.query()
    } catch (error) {
      console.error(error)
    }
  })
</script>

<h3>Posts</h3>

<div class="posts">
  {#each posts as post}
    <div class="post">
      <h4>{post.name}</h4>
    </div>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>

<style lang="scss">
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;

    .post {
      padding: 1rem;
      background-color: rgb(237, 235, 235);
      border-radius: 0.65rem;
    }
  }
</style>
