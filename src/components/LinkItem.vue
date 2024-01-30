<script>
    export default {
        props: {
            item: Object,
            index: Number
        },
        data() {
            return {
                color: this.item.color,
                bg: this.item.bg,
                delay: `${this.index / 3}s`
            }
        }
    }
</script>

<template>
    <article>
        <div class="img-container">
            <img :src="item.icon" width="25" height="25" :alt="item.iconAlt" />
        </div>
        <div>
            <h3>
                <a :href="item.url" target="_blank"> {{ item.label }}</a>
            </h3>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    article {
        position: relative;
        animation: pop-in 0.5s ease-in-out backwards;
        transition: transform 0.25s ease-in-out;
        animation-delay: v-bind(delay);
        display: flex;
        align-items: center;
        justify-content: end;
        height: 4rem;
        background: v-bind(bg);
        padding: 0.5rem 1.5rem;
        border: 1pt solid v-bind(color);
        border-radius: 12px;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        .img-container {
            position: absolute;
            left: 20px;
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
        }

        a {
            display: block;

            color: v-bind(color);
            text-decoration: none;
        }

        &:hover {
            transform: scale(1.05) rotate(-3deg);
        }
    }
</style>
