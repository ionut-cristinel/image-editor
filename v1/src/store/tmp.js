
export const initial = 'initial'

export const size = {width: 100, height: 0, unit: '%'}

export const filters = [
    {
        value:  0,
        min:    0,
        max:    15,
        name:  'blur',
        unit:   'px'
    },
    {
        value:  100,
        min:    0,
        max:    2500,
        name:  'brightness',
        unit:   '%'
    },
    {
        value:  100,
        min:    0,
        max:    2500,
        name:  'contrast',
        unit:   '%'
    },
    {
        value:  0,
        min:    0,
        max:    100,
        name:  'grayscale',
        unit:   '%'
    },
    {
        value:  0,
        min:    0,
        max:    360,
        name:  'hue-rotate',
        unit:   'deg'
    },
    {
        value:  0,
        min:    0,
        max:    10,
        name:  'invert',
        unit:   '%'
    },
    {
        value:  100,
        min:    0,
        max:    100,
        name:  'opacity',
        unit:   '%'
    },
    {
        value:  100,
        min:    0,
        max:    2500,
        name:  'saturate',
        unit:   '%'
    },
    {
        value:  0,
        min:    0,
        max:    100,
        name:  'sepia',
        unit:   '%'
    },
    {
        x: {
        value:  0,
        min:    -100,
        max:    100,
        name:  'x'
        },
        y: {
        value:  0,
        min:    -100,
        max:    100,
        name:  'y'
        },
        blur: {
        value:  0,
        min:    0,
        max:    100,
        name:  'blur'
        },
        color: '#000000',
        name:  'drop-shadow'
    }
]
