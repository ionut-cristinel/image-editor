<template>
    
    <div class="position-relative mb-2" @mouseenter="handleFilterVisibility" @mouseleave="handleFilterVisibility">
    
        <div class="p-2 bg-info bg-opacity-10 border border-info" :class="[isHover ? 'border-bottom-0 rounded-top': 'rounded']">
            <div class="mb-2 name">{{ modelValue.name }}</div>
            <span class="d-flex justify-content-between">
                <strong>{{ modelValue.x.value }}</strong>
                <strong>{{ modelValue.y.value }}</strong>
                <strong>{{ modelValue.blur.value }}</strong>
                <strong>{{ modelValue.color }}</strong>
            </span>
        </div>

        <div v-show="isHover" class="p-2 bg-info bg-opacity-10 border border-info border-top-0 rounded-bottom">
            <div class="row mt-3">
                <div class="col-sm-4"><strong>X</strong></div>
                <div class="col-sm-8">
                    <input type="range" class="form-range" v-model="modelValue.x.value" @input="$emit('update:modelValue.x.value', $event.target.value);$emit('apply-filter')" :min="modelValue.x.min" :max="modelValue.x.max" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4"><strong>Y</strong></div>
                <div class="col-sm-8">
                    <input type="range" class="form-range" v-model="modelValue.y.value" @input="$emit('update:modelValue.y.value', $event.target.value);$emit('apply-filter')" :min="modelValue.y.min" :max="modelValue.y.max" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4"><strong>Blur</strong></div>
                <div class="col-sm-8">
                    <input type="range" class="form-range" v-model="modelValue.blur.value" @input="$emit('update:modelValue.blur.value', $event.target.value);$emit('apply-filter')" :min="modelValue.blur.min" :max="modelValue.blur.max" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4"><strong>Color</strong></div>
                <div class="col-sm-8">
                    <input type="color" class="form-control form-control-color" style="width: 100%;" v-model="modelValue.color" @input="$emit('update:modelValue.color', $event.target.value);$emit('apply-filter')" />
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'ShadowFilter',
        props: [ 'modelValue' ],
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

    .name { 
        text-align: left;
        text-transform: capitalize;
    }

    table 
    {
        margin: 25px 0px 50px;

        th {
            text-align: left;
            text-transform: capitalize;
        }
      
        td, th {
            border: none;
            padding-top: 0px;
        }
    }
</style>