<template>

  <div class="container">

    <TopMenu @download="download" @clear-filters="clearFilters"></TopMenu>
    
    <div class="row">
      <div class="col-md-2">

        <Filter 
          v-for="(filter, index) in getFiltersWithoutDropShadow" 
          v-model="filter.value" 
          :key="index" 
          :filter="filter"
          @apply-filter="applyImageFilter"
        ></Filter>

        <ShadowFilter v-model="getDropShadowFilter" @apply-filter="applyImageFilter" v-if="getDropShadowFilter"></ShadowFilter>
    
      </div>
      <div class="col-md-10 p-5" style="overflow: hidden;">

        <img src="@/assets/img-2.jpg" :style="[size.unit === 'px' ? {height: size.height + size.unit}: {}, {width: size.width + size.unit}]" ref="image" />

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

  import Filter         from '@/components/Filter'
  import ShadowFilter   from '@/components/ShadowFilter'
  import TopMenu      from '@/components/TopMenu'


  export default defineComponent({
    name: 'EditImageView',
    components: {
      ShadowFilter,
      TopMenu,
      Filter
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
    watch: {
      'size.unit'(value)
      {
        if(value === '%')
        {
          this.changeImageSize({
            width: 100,
            height: 0,
            unit: '%'
          })
        }

        if(value === 'px')
        {
          this.changeImageSize({
            width: 200,
            height: 100,
            unit: 'px'
          })
        }
      }
    },
    computed: {
      ...mapGetters([
        'getAllFilters',
        'getFiltersWithoutDropShadow',
        'getDropShadowFilter',
        'size',
        'image',
        'nameOfDownloadedImage'
      ])
    },
    methods: {
      applyImageFilter()
      {
        this.applyFilters({filters: this.setFilters()})
      },
      setFilters()
      {
        const shadow = this.getDropShadowFilter
        
        let filters = ``;
        
        for(let i = 0; i < this.getFiltersWithoutDropShadow.length; i++)
        {
          filters += `${this.getFiltersWithoutDropShadow[i].name}(${this.getFiltersWithoutDropShadow[i].value}${this.getFiltersWithoutDropShadow[i].unit}) `
        }

        filters += `${shadow.name}(${shadow.x.value}px ${shadow.y.value}px ${shadow.blur.value}px ${shadow.color})`

        return filters
      },
      download()
      {
        const link    = document.createElement('a')
        const canvas  = document.createElement('canvas')

        const ctx     = canvas.getContext('2d')

        canvas.width  = this.image.width
        canvas.height = this.image.height

        ctx.filter    = this.setFilters()

        ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height)

        link.href = canvas.toDataURL('image/jpeg')

        link.download = this.nameOfDownloadedImage + '.jpg';

        document.body.appendChild(link);
        document.body.appendChild(canvas);

        link.click();
        
        document.body.removeChild(link);
        document.body.removeChild(canvas);
      },
      getDataFromServer()
      {
        this.$http.all([
          this.$http.get(this.serverDomain + this.serverRoutes.filters), 
          this.$http.get(this.serverDomain + this.serverRoutes.size)
        ]).then(this.$http.spread((...responses) => {
            const [filters, size] = responses;

            this.loadData({
              size: size.data,
              filters: filters.data
            })
          })
        )
      },
      ...mapActions([
        'loadImage',
        'clearFilters',
        'applyFilters',
        'changeImageSize',
        'loadData'
      ])
    },
    mounted() {
      this.loadImage({image: this.$refs.image})
      this.getDataFromServer()
    }
  })

</script>
