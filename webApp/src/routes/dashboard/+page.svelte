<script>
	import { error } from "@sveltejs/kit";

    let todoList = ["Do what you want to do!"];
    let currTodo = "";
    let err = false;

    function addTodo() {
        err = false;
        if (!currTodo){
        err = true;
        }
        todoList = [...todoList, currTodo];
        currTodo = "";
    }

    /**
	 * @param {number} index
	 */
    function editTodo(index) {
        console.log(index);
        let newTodoList = [...todoList].filter((val, i) => 
        {console.log (i, index, i !== index);
            return i !=index;
        });
        currTodo = todoList[index];
        todoList = newTodoList;
    }

    /**
	 * @param {number} index
	 */
    function remTodo(index) {
        let newTodoList = [...todoList].filter((val, i) => 
        {console.log (i, index, i !== index);
            return i !=index;
        });
        todoList = newTodoList;
    }
</script>


<div class="mainContainer">
    <div class="headerContainer">
        <h1>Tode List</h1>
        <div class="headerBtns">
            <button><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
            <button><i class="fa-solid fa-right-from-bracket"></i><p>Logout</p></button>

        </div>
    </div>

    <main>
        {#if todoList.length == 0}
        <p>
            You have noting to do!
        </p>
        {/if}
        {#each todoList as todo, index}
        <div class="todo">
            <p>
                {index+1}. {todo}
            </p>
            <div class="actions">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <i on:click={() => {editTodo(index)}} 
                    on:keydown={() => {}} class="fa-solid fa-pen" />

                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <i  on:click={() => {remTodo(index)}} 
                    on:keydown={() => {}} class="fa-solid fa-trash"/>

            </div>
        </div>
        {/each}
    </main>

    <div class={"enterTodo" + (err ? "errBorde" : "")}>
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button on:click={addTodo}>ADD</button>
    </div>
</div>

<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        /*background: green;*/
        min-height: 100vh;
        gap: 24px;
        padding: 24px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .headerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .headerBtns {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .headerContainer button {
        background: #003c5b;
        color: white;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .headerContainer button i {
        font-size: 1.1rem;
    }

    .headerContainer button:hover {
        opacity: 0.7;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .todo {
        border-left: 1px solid cyan;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 1.3rem;
    }

    .actions i {
        cursor: pointer;
    }

    .actions i:hover {
        color: coral;

    }

    .enterTodo {
        display: flex;
        align-items: stretch;
        border: 1px solid rgb(0, 95, 95);
        border-radius: 5px;
        overflow: hidden;
    }

    .errBorder {
        border-color: coral !important;
    }

    .enterTodo input{
        background: transparent;
        border: none;
        padding: 14px;
        color: white;
        flex: 1;
    }

    .enterTodo input:focus {
        outline: none;
    }

    .enterTodo button {
        padding: 0 28px;
        background: #003c5b;
        border: none;
        color: cyan;
        font-weight: 600;
        cursor: pointer;
    }

    .enterTodo button:hover {
        background: transparent;
    }
</style>