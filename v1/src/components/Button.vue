<template>
 
    <div class="d-grid gap-2">
        <button type="button" class="btn" :class="classes" @click="$emit('on-click')">
            <slot/>
        </button>
    </div>

</template>

<script>

    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Button',
        props: [ 'classes' ],
        emits: [ 'on-click' ]
    })

</script>

<style lang="scss" scoped>

</style>