<script>
    import LinkItem from "./components/LinkItem.vue"
    import { randomColor } from "./utils/randomColor"
    import { randomIndex } from "./utils/randomIndex"

    import { links } from "./assets/data"

    const possibleSalutations = [":)", ":3", "c:", ">.<", "uwu", ":D", ":p"]

    export default {
        data() {
            return {
                links,
                color: randomColor,
                salutation: possibleSalutations[randomIndex(possibleSalutations.length)]
            }
        },
        methods: {
            changeColor() {
                document.getElementById("colorPicker").click()
                this.salutation = possibleSalutations[randomIndex(possibleSalutations.length)]
            }
        },
        components: { LinkItem }
    }
</script>

<template>
    <main>
        <div class="main-content">
            <header @click="changeColor">
                <h1>Welcome!! {{ salutation }}</h1>
            </header>
            <input type="color" name="color-picker" id="colorPicker" v-model="this.color" />

            <div class="section-container">
                <h2>Where to find me</h2>
                <section>
                    <LinkItem v-for="(link, index) of links" v-bind:key="index" :item="link" :index="index" />
                </section>
            </div>
        </div>
        <footer>Icons from <a href="https://www.freepik.com/">Freepik</a></footer>
    </main>
</template>

<style lang="scss" scoped>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
    }

    header {
        width: 100%;
        background-color: v-bind(color);
        transition: background-color 1s ease-in-out;
        text-align: center;

        h1 {
            padding: 4rem 1rem 1rem;
            color: white;
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
        margin-top: 1rem;
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
        }
    }

    footer,
    footer a {
        transition: color 1s ease-in-out;
        color: v-bind(color);
        margin: 1rem 0;
    }

    @media screen and (min-width: 920px) and (orientation: landscape) {
        .section-container {
            margin-top: 10rem;
            width: 70vw;

            h2 {
                margin: 3rem;
            }

            section {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
</style>
