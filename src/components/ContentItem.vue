<script setup>
    import { defineProps, ref } from "vue"
    import { useI18n } from "vue-i18n"

    import ExpandableModal from "./ExpandableModal.vue"
    import ModalLinksList from "./ModalLinksList.vue"
    import { getData } from "@/utils/getData"

    const { t } = useI18n()

    const content = ref(await getData("content"))

    const { delayInt, accentHex } = defineProps(["delayInt", "accentHex"])
    const modalOpen = ref(false)

    const delay = ref(`${delayInt / 3}s`)

    const toggleModal = () => {
        modalOpen.value = !modalOpen.value
    }
</script>

<template>
    <article @click="toggleModal">
        <div class="img-container">
            <img src="/img/link.webp" width="25" height="25" alt="Link emoji" />
        </div>
        <div>
            <h3>{{ t("more_stuff") }}</h3>
        </div>
    </article>
    <ExpandableModal :isOpen="modalOpen" :toggleHandler="toggleModal">
        <ModalLinksList :items="content" :closeHandler="toggleModal" :accent="accentHex" />
    </ExpandableModal>
</template>

<style lang="scss" scoped>
    article {
        animation: pop-in 0.5s ease-in-out backwards;
        transition: transform 0.25s ease-in-out;
        animation-delay: v-bind(delay);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4rem;
        background-color: #fff;
        padding: 0.5rem 1.5rem;
        border: 1pt solid #1a1717;
        border-radius: 12px;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        .img-container {
            display: flex;
            place-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            border: 1pt solid #1a1717;
            border-radius: 99px;
        }

        h3 {
            margin: 0;
            color: #1a1717;
        }

        &:hover {
            transform: scale(1.05) rotate(-3deg);
        }

        @media screen and (min-width: 920px) and (orientation: landscape) {
            width: 16vw;
        }

        @media (prefers-color-scheme: dark) {
            background-color: transparent;
            border-color: #fff;

            .img-container {
                border-color: #fff;
            }

            h3 {
                color: #fff;
            }
        }
    }
</style>
