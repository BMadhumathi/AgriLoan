import { Suspense } from "react";
import PropTypes from 'prop-types'
const LazyLayout=({component: Componenet, ...rest}) => {
    return(
        <Suspense fallback="Loading...">
        <Componenet {...rest}/></Suspense>
    )
}

LazyLayout.propTypes ={
    component: PropTypes.elementType.isRequired
}

export default LazyLayout