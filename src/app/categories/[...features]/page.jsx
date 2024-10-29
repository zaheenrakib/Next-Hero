import React from 'react'

const CategoriesDetailsPage = ({ params }) => {
    if(params.features.length == 3)
        return <><h1>{params.features[2]}</h1></>
        if(params.features.length == 2)
            return <h1>{params.features[1]}</h1>
    return (
        <div className='h-screen'>
            CategoriesDetailsPage
        </div>
    )
}

export default CategoriesDetailsPage