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


const mutations =
{
    [LOAD_DATA](state, payload)
    {
        state.size      = payload.size
        state.filters   = payload.filters
    },
    [LOAD_IMAGE](state, payload)
    {
        state.image = payload.image
    },
    [CLEAR_FILTERS](state, payload)
    {
        state.filters = payload.filters
    },
    [APPLY_FILTERS](state, payload)
    {
        state.image.style.filter = payload.filters
    },
    [RESET_IMAGE_FILTERS](state, payload)
    {
        state.image.style.filter = payload.value
    },
    [RESET_IMAGE_SIZE](state, payload)
    {
        state.size = { ...payload }
    },
    [UPDATE_DOWNLOADED_IMAGE_NAME](state, payload)
    {
        state.nameOfDownloadedImage = payload.name
    },
    [CHANGE_IMAGE_SRC](state, payload)
    {
        state.image.src = payload.src
    },
    [UPDATE_FILTER](state, payload)
    {
        state.filters[payload.index] = payload.value
    }
}

export default mutations
