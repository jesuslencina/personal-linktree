<script setup>
    import { defineProps } from "vue"
    import { useI18n } from "vue-i18n"
    const { t } = useI18n()

    const { color } = defineProps(["color"])
</script>

<template>
    <footer>
        <strong>
            Jesús Lencina
            <img width="16" height="16" src="/img/no-copyright.svg" alt="No copyright" />
            2024
        </strong>
        <p>
            {{ t("icons_by") }}
            <a href="https://www.freepik.com/">Freepik</a>
        </p>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: color 1s ease-in-out;
        color: v-bind(color);

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
</style>
