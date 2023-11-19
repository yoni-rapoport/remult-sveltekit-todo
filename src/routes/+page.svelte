<script lang="ts">
  import { remult } from "remult";
  import { onMount } from "svelte";
  import { Task } from "../shared/Task";

  let tasks: Task[] = [];

  onMount(async () => {
    tasks = await remult.repo(Task).find();
  });

  let newTaskTitle = ""; 
  const addTask = async () => {
    const newTask = await remult.repo(Task).insert({ title: newTaskTitle });
    tasks = [...tasks, newTask];
    newTaskTitle = "";
  };
</script>

<div>
  <h1>todos</h1>
  <main>
    <form method="POST" on:submit|preventDefault={addTask}>
      <input bind:value={newTaskTitle} placeholder="What needs to be done?" />
      <button>Add</button>
    </form>
    {#each tasks as task}
      <div>
        <input type="checkbox" bind:checked={task.completed} />
        <span>{task.title}</span>
      </div>
    {/each}
  </main>
</div>
