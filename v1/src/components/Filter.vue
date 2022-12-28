<template>

    <div class="position-relative mb-2" @mouseenter="handleFilterVisibility" @mouseleave="handleFilterVisibility">
    
        <div class="d-flex p-2 bg-info bg-opacity-10 border border-info" :class="[isHover ? 'border-end-0 rounded-start': 'rounded']">
            <span class="me-auto">{{ filter.name }}</span>
            <span><strong>{{ modelValue }}</strong> &nbsp; {{ filter.unit }}</span>
        </div>
    
        <div v-show="isHover" class="rounded-end range">
            <div class="d-flex justify-content-center p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                <input 
                    type="range" 
                    class="form-range m-0" 
                    :value="modelValue" 
                    :min="filter.min" 
                    :max="filter.max" 
                    @input="$emit('update:modelValue', $event.target.value);$emit('apply-filter')" 
                />
            </div>
        </div>
    
    </div>

</template>

<script>

    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Filter',
        props: [ 'modelValue', 'filter' ],
        emits: [ 'update:modelValue', 'apply-filter' ],
        data(){
            return {
                isHover: false
            }
        },
        methods: {
            handleFilterVisibility()
            {
                this.isHover = ! this.isHover;
            }
        }
    })

</script>

<style lang="scss" scoped>

    .me-auto { text-transform: capitalize; }

    .range {
        background-color:#ffffff;
        z-index: 1;
        position:absolute;
        width: 100%;
        top: 0;
        right: -100%;
    }

</style>