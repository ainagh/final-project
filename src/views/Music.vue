<!-- HTML HERE -->
<template>
    <Nav />
    <div class="title-music">
        <h2>A few recommendations to keep you company... &#x1F90D</h2>
    </div> 
    <div class="background-music">
        <div class="youtube-playlist">
            <h4>relaxing <br> piano <br> soundtrack</h4>
            <iframe width="315" height="175" src="https://www.youtube.com/embed/IhYs50GJzIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/hj83cwfOF3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/Ex1RWBVZWpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="youtube-playlist">
            <h4>classic <br> lofi hip hop/ <br> chill beats </h4>
            <iframe width="315" height="175" src="https://www.youtube.com/embed/lTRiuFIWV54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/oCgfLHIX7H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/n61ULEU7CO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="youtube-playlist">
            <h4>ambient music <br> for concentration <br> and memorization</h4>
            <iframe width="315" height="175" src="https://www.youtube.com/embed/WPni755-Krg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/jXZAbnn1kTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe width="315" height="175" src="https://www.youtube.com/embed/KJWoyM1Q1tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>
    <Footer />
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import Nav from '../components/Nav.vue';
import Footer from '../components/Footer.vue';
</script>
<!-- CSS HERE -->
<style scoped>

h2 {
    font-size: 30px;
}

.title-music {
    margin-left: 5%;
    margin-top: 5%;
}
.background-music {
    margin-top: 7%;
    margin-left: 3%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

h4 {
    background-image: url(../../public/cloud.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0%;
}

iframe {
    border-radius: 10px;
}

.youtube-playlist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}
</style>