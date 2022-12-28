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

import { filters, initial, size } from './tmp'
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
    clearFilters(context)
    {
        context.commit(RESET_IMAGE_FILTERS, {value: initial})
        context.commit(RESET_IMAGE_SIZE, size)
        context.commit(CLEAR_FILTERS, {filters: copy(filters)})
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
        context.commit(CHANGE_IMAGE_SRC, payload)
        context.dispatch('clearFilters')
    },
    updateFilterValue(context, payload)
    {
        context.commit(UPDATE_FILTER, payload)
    }
}

export default actions
