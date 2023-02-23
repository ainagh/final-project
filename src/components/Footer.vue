<!-- HTML HERE -->
<template>
<footer>
<div class="footer-text">
    <h3>© tasks &#x2601. created with love by: Aina &#x2764</h3>
</div>
</footer>

</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
</script>
<!-- CSS HERE -->
<style scoped>

footer {
    width: 100%;
    height: 30vh;
    background: linear-gradient(45deg, #3f3d40, #666468, #858287);
    opacity: 0.7;
    color: #FAF0F2;
    margin-top: 20%;
}

.footer-text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

