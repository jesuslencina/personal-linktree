<script>
    export default {
        props: {
            isOpen: Boolean,
            toggleHandler: Function
        }
    }
</script>

<template>
    <Transition>
        <div v-if="isOpen" @click.self="toggleHandler" @wheel.prevent @touchmove.prevent @scroll.prevent class="modal-container">
            <slot />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    .modal-container {
        z-index: 2;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(20, 20, 20, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
