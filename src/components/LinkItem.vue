<script setup>
    import { defineProps } from "vue"
    import { redirect } from "@/utils/redirect"

    const { item, index } = defineProps(["item", "index"])

    const bg = item.bg
    const color = item.color
    const delay = `${index / 3}s`

    const sendToUrl = () => {
        redirect(item.url, true)
    }
</script>

<template>
    <article @click="sendToUrl">
        <div class="img-container">
            <img :src="item.icon" width="25" height="25" :alt="item.iconAlt" />
        </div>
        <div>
            <h3>
                {{ item.label }}
            </h3>
        </div>
    </article>
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
        background: v-bind(bg);
        padding: 0.5rem 1.5rem;
        border: 1pt solid v-bind(color);
        border-radius: 12px;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        .img-container {
            display: flex;
            place-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            background-color: #fff;
            border-radius: 99px;
        }

        h3 {
            margin: 0;
            color: v-bind(color);
        }

        &:hover {
            transform: scale(1.05) rotate(-3deg);
        }

        @media screen and (min-width: 920px) and (orientation: landscape) {
            width: 16vw;
        }
    }
</style>
