<script setup>
    import { ref } from "vue"
    import { useI18n } from "vue-i18n"

    import { getData } from "../utils/getData"

    import LinkItem from "./LinkItem.vue"
    import ContentItem from "./ContentItem.vue"
    import FooterComp from "./FooterComp.vue"

    const { color } = defineProps(["color"])

    const { t } = useI18n()

    const links = ref(await getData("links"))
</script>

<template>
    <div class="section-container">
        <h2>{{ t("links") }}</h2>
        <section>
            <LinkItem v-for="(link, index) of links" v-bind:key="index" :item="link" :index="index" />
            <ContentItem :delayInt="links.length" :accentHex="color" />
        </section>
    </div>
    <FooterComp :color="color" />
</template>

<style lang="scss" scoped>
    .section-container {
        min-height: 50vh;
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
