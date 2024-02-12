<script setup>
    import { ref } from "vue"
    import { randomColor } from "./utils/randomColor"
    import { links } from "./assets/data"
    import LinkItem from "./components/LinkItem.vue"
    import GuidesItem from "./components/GuidesItem.vue"

    const color = ref(randomColor)

    const changeColor = () => {
        document.getElementById("colorPicker").click()
    }
</script>

<template>
    <main>
        <div class="top-line" />
        <div class="text">
            <h1 @click="changeColor">Hello world!!</h1>
            <p>Here's where I leave my internet stuff.</p>
        </div>
        <input type="color" name="color-picker" id="colorPicker" v-model="color" />

        <div class="section-container">
            <h2>Where to find me</h2>
            <section>
                <LinkItem v-for="(link, index) of links" v-bind:key="index" :item="link" :index="index" />
                <GuidesItem :delayInt="links.length" :accentHex="color" />
            </section>
        </div>

        <footer>
            <strong>
                Jesús Lencina
                <img width="16" height="16" src="/img/no-copyright.svg" alt="No copyright" />
                2024
            </strong>
            <p>
                Icons from
                <a href="https://www.freepik.com/">Freepik</a>
            </p>
        </footer>
    </main>
</template>

<style lang="scss" scoped>
    main {
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .top-line {
        width: 100%;
        height: 0.75rem;
        background-color: v-bind(color);
        transition: background-color 1s ease-in-out;
        text-align: center;
    }

    .text {
        margin-top: 2rem;
        text-align: center;

        h1 {
            transition: color 1s ease-in-out;
            color: v-bind(color);
            margin: 0;
        }
    }

    #colorPicker {
        opacity: 0;
        position: absolute;
        left: 40vw;
        top: 40vh;
        z-index: -1;
    }

    .section-container {
        width: 80%;
        display: flex;
        flex-direction: column;

        h2 {
            transition: color 1s ease-in-out;
            color: v-bind(color);
            text-align: center;
        }

        section {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 2rem;
        }
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: color 1s ease-in-out;
        color: v-bind(color);
        margin: 1rem 0;

        img {
            transform: translateY(3px);
        }

        strong,
        p {
            margin: 0.25rem;
        }

        a {
            color: inherit;
        }
    }

    @media screen and (min-width: 920px) and (orientation: landscape) {
        .section-container {
            width: 70vw;

            h2 {
                margin: 3rem;
            }

            section {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
</style>
