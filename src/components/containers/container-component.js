import {get, kebabCase} from 'lodash'

const ContainerComponent = (Component, initValues) => function containerWrappedComponent(props) {
    let values
    if (typeof initValues === 'function') {
        values = initValues(props)
    }
    else {
        values = initValues
    }
    const { WrapperTag, wrapperClass, backgroundImage, styles, id, variant, componentData = {} } = values
    props = (Object.keys(props).length !== 0) ? props : componentData
    const componentContainerClassName = `cc--${wrapperClass}`
    const componentWrapperclassName = `c--${wrapperClass}`
    const classes = [componentContainerClassName]
    variant && classes.push(variant)
    let backgroundImageUrl
    console.log(classes)
    if (backgroundImage) backgroundImageUrl = get(props, backgroundImage)
    return (
        <WrapperTag
            className={classes.map(className => styles[className]).join(' ')}
            {...(id ? {id: kebabCase(get(props, id))} : {})}
            {...(backgroundImageUrl ? {style: {backgroundImage: `url('/_next/image?url=${encodeURIComponent(backgroundImageUrl)}&w=1200&q=75')`}} : {})}
            key={`wrapper-${props.key}`}
        >
            <div className={styles[componentWrapperclassName]}>
                <Component {...props}/>
            </div>
        </WrapperTag>
    )
}


export default ContainerComponent
