<script>
    import { redirect } from "@/utils/redirect"

    export default {
        props: {
            items: Array,
            closeHandler: Function,
            accent: String
        },

        data() {
            return { color: this.accent }
        },

        methods: {
            sendToUrl(url) {
                redirect(url, true)
            }
        }
    }
</script>

<template>
    <div class="modal-content">
        <section>
            <p class="empty" v-if="!items.length">Nothing here at the moment...</p>
            <article v-for="(item, index) of items" v-bind:key="index" @click="sendToUrl(item.url)">
                <img width="40" height="40" :src="item.icon" :alt="item.iconAlt" />
                <strong>{{ item.label }}</strong>
                <img width="25" height="25" src="/img/arrow.svg" alt="Redirect arrow icon" />
            </article>
        </section>
        <button class="close" @click="closeHandler">Close</button>
    </div>
</template>

<style lang="scss" scoped>
    .modal-content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 80vw;
        height: 80vh;

        border-radius: 14px;
    }

    .empty {
        margin-top: 2rem;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }

    article {
        display: grid;
        grid-template-columns: 50px 1fr 50px;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        justify-items: center;
        padding: 1rem;
        text-align: center;
        border-bottom: 1pt solid #9e9e9e;
        cursor: pointer;

        strong {
            text-wrap: nowrap;
            font-size: 1.15rem;
        }

        &:hover strong {
            text-decoration: underline;
        }
    }

    button.close {
        all: unset;
        display: block;
        padding: 1rem 0;
        background-color: v-bind(color);
        border-radius: 0 0 12px 12px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }

    @media screen and (min-width: 920px) and (orientation: landscape) {
        .modal-content {
            width: 30vw;
            height: 50vh;
        }
    }

    @media (prefers-color-scheme: dark) {
        .modal-content {
            background-color: black;
        }

        article {
            border-color: #fff;
        }

        button.close {
            color: black;
        }
    }
</style>
