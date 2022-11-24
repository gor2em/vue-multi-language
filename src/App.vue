<script setup>
import Locale from "./components/Locale.vue"
</script>

<template>
    <div class="container">

        <Locale />

    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1f1f1;
    font-family: 'Arial' sans-serif;
    text-align: center;
    gap: 40px;
}

.langs {
    display: flex;
    gap: 20px;
}

.active {
    background-color: #333;
    color: white;
}

.langs button {
    border: 1px solid #333;
    padding: 10px 40px
}

.head-text {
    color: #333;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}
</style>