import loadable from 'loadable-components'

export const loadable = comPath => {
    return loadable({
        loader: () => import(comPath)
    })
}