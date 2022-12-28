
const getters =
{
    getAllFilters({ filters })
    {
        return filters;
    },
    getFiltersWithoutDropShadow({ filters })
    {
        return filters.filter(filter => filter.name !== 'drop-shadow')
    },
    getDropShadowFilter({ filters })
    {
        const index = filters.findIndex(filter => filter.name === 'drop-shadow')

        return filters[index]
    },
    size({ size })
    {
        return size
    },
    image({ image })
    {
        return image
    },
    nameOfDownloadedImage({ nameOfDownloadedImage })
    {
        return nameOfDownloadedImage
    }
}

export default getters
