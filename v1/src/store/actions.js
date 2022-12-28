import axios from 'axios'

import {
    LOAD_DATA,
    LOAD_IMAGE,
    CLEAR_FILTERS,
    APPLY_FILTERS,
    RESET_IMAGE_FILTERS,
    RESET_IMAGE_SIZE,
    UPDATE_DOWNLOADED_IMAGE_NAME,
    CHANGE_IMAGE_SRC,
    UPDATE_FILTER
} from './mutation-types'

import { copy } from '../utils'


const actions =
{
    loadData(context, payload)
    {
        context.commit(LOAD_DATA, {
            size: {...payload.size},
            filters: [...payload.filters]
        })
    },
    loadImage(context, payload)
    {
        context.commit(LOAD_IMAGE, payload)
    },
    clearFilters(context, payload)
    {
        axios.all([
            axios.get(payload.serverDomain + payload.serverRoutes.filters), 
            axios.get(payload.serverDomain + payload.serverRoutes.size)
          ]).then(axios.spread((...responses) => {
              const [filters, size] = responses;
              
              context.commit(RESET_IMAGE_FILTERS, {value: 'initial'})
              context.commit(RESET_IMAGE_SIZE, size.data)
              context.commit(CLEAR_FILTERS, {filters: copy(filters.data)})
            })
        )
    },
    applyFilters(context, payload)
    {
        context.commit(APPLY_FILTERS, payload)
    },
    changeImageSize(context, payload)
    {
        context.commit(RESET_IMAGE_SIZE, payload)
    },
    updateDownloadedImageName(context, payload)
    {
        context.commit(UPDATE_DOWNLOADED_IMAGE_NAME, payload)
    },
    changeImageSrc(context, payload)
    {
        context.commit(CHANGE_IMAGE_SRC, {src: payload.src})
        context.dispatch('clearFilters', {
            serverDomain: payload.serverDomain,
            serverRoutes: payload.serverRoutes
        })
    },
    updateFilterValue(context, payload)
    {
        context.commit(UPDATE_FILTER, payload)
    }
}

export default actions
