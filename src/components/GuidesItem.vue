<script>
    import { guides } from "@/assets/data"
    import ExpandableModal from "./ExpandableModal.vue"
    import ModalLinksList from "./ModalLinksList.vue"

    export default {
        props: {
            delayInt: Number,
            accentHex: String
        },
        data() {
            return {
                guides,
                accent: this.accent,
                modalOpen: false,
                delay: `${this.delayInt / 3}s`
            }
        },
        methods: {
            toggleModal() {
                this.modalOpen = !this.modalOpen
            },
            redirect() {
                window.open(this.item.url)
            }
        },
        components: { ExpandableModal, ModalLinksList }
    }
</script>

<template>
    <article @click="toggleModal">
        <div class="img-container">
            <img src="/img/link.webp" width="25" height="25" alt="Link emoji" />
        </div>
        <div>
            <h3>Content</h3>
        </div>
    </article>
    <ExpandableModal :isOpen="modalOpen" :toggleHandler="toggleModal">
        <ModalLinksList :items="guides" :closeHandler="toggleModal" :accent="accentHex" />
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
        background: #fff;
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
    }
</style>
