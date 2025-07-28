import React from 'react'
import Herosection from './Herosection'
import Exclusivedeals from './Exclusivedeals'
import PopularCategories from './PopularCategories'
import PopularRestaurants from './PopularRestaurants'

function Landingpage() {
    return (
        <div>
            <Herosection />
            <div className="p-8 min-h-screen">
                <Exclusivedeals />
                <PopularCategories />
                <PopularRestaurants />
            </div>

        </div>
    )
}

export default Landingpage