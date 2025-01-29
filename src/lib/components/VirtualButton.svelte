<script lang="ts">
let { children, color, button, key } = $props();

</script>

<button style:background-color={color}>
    {@render children()}
</button>

<style>
    button {
        border: 3px solid gray;
        border-radius: 100px;
        width: 100px;
        height: 100px;
    }

    button:active {
        border: 6px solid red;
    }
</style>