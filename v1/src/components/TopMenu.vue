<template>
 
    <div class="row mb-3">
      <div class="col-md-2">
        <input class="form-control me-auto" type="file" ref="uploadImage" @change="upload" style="display:none;">
        <div class="vstack mx-auto">
            <Button @on-click="triggerUpload" classes="btn-outline-primary" title="Upload"><i class="bi bi-upload"></i></Button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="hstack gap-3">
            <div class="vr"></div>
            W <input type="number" class="form-control me-auto" v-model="size.width">
            H <input type="number" class="form-control me-auto" :readonly="size.unit === '%'" v-model="size.height">
            U
            <select class="form-select me-auto" v-model="size.unit">
                <option value="%">%</option>
                <option value="px">px</option>
            </select>
            <div class="vr"></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="hstack gap-3">
            <input class="form-control me-auto" type="text" v-model="nameOfDownloadedImage">
            <Button @on-click="$emit('download')" classes="btn-outline-secondary" title="Download"><i class="bi bi-download"></i></Button>
            <div class="vr"></div>
            <Button @on-click="$emit('clear-filters')" classes="btn-outline-danger" title="Clear Filters"><i class="bi bi-trash3"></i></Button>
        </div>
      </div>
    </div>

</template>

<script>

    import { defineComponent }  from 'vue'
    import { 
        mapGetters, 
        mapActions 
    } from 'vuex'
    import Button               from './Button'

    export default defineComponent({
        name: 'TopMenu',
        emits: [ 'download', 'clear-filters' ],
        components: {
            Button
        },
        data(){
            return {
                serverRoutes: {
                    filters: '/filters',
                    size: '/size'
                },
                serverDomain: 'http://localhost:3030'
            }
        },
        computed: {
            ...mapGetters([
                'size',
                'image'
            ]),
            nameOfDownloadedImage: {
                get () {
                    return this.$store.state.nameOfDownloadedImage
                },
                set (value) {
                    this.updateDownloadedImageName({name: value})
                }
            }
        },
        methods: {
            triggerUpload(){
                this.$refs.uploadImage.click()
            },
            upload(){
                const [img] = this.$refs.uploadImage.files
                this.changeImageSrc({
                    src: URL.createObjectURL(img),
                    serverDomain: this.serverDomain,
                    serverRoutes: this.serverRoutes
                })
            },
            ...mapActions([
                'updateDownloadedImageName',
                'changeImageSrc'
            ])
        }
    })

</script>

<style lang="scss" scoped>

    div {
        .unit {
            min-width: 75px;
        }
    }

</style>
