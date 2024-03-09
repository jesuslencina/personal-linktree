<script setup>
    import { ref } from "vue"
    import { useI18n } from "vue-i18n"
    import LinksSection from "./components/LinksSection.vue"
    import { randomColor } from "./utils/randomColor"

    const { t } = useI18n()

    const color = ref(randomColor)

    const changeColor = () => {
        document.getElementById("colorPicker").click()
    }
</script>

<template>
    <main>
        <div class="title-content">
            <div class="top-line" />

            <div class="text">
                <h1 @click="changeColor">{{ t("hello_world") }}!</h1>
                <p>{{ t("desc") }}</p>
            </div>
            <input type="color" name="color-picker" id="colorPicker" v-model="color" />
        </div>
        <Transition mode="out-in" name="shrink">
            <KeepAlive>
                <Suspense>
                    <template #default>
                        <LinksSection :color="color" />
                    </template>
                    <template #fallback>
                        <div class="loading-screen">
                            <img src="/img/loading.gif" :alt="t('loading')" width="80" />
                        </div>
                    </template>
                </Suspense>
            </KeepAlive>
        </Transition>
    </main>
</template>

<style lang="scss" scoped>
    main {
        min-height: 90vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 20% 80%;
        justify-items: center;
        align-items: start;
    }

    .title-content {
        display: flex;
        flex-direction: column;
        width: 100%;

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
    }

    #colorPicker {
        opacity: 0;
        position: absolute;
        left: 40vw;
        top: 40vh;
        z-index: -1;
    }

    .loading-screen {
        min-height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .shrink-leave-active {
        animation: shrink 0.2s ease-out;
    }
    .shrink-leave-to {
        transform: scale(0);
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
