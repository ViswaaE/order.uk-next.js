import React from 'react'
import Herosection from './Herosection'
import Exclusivedeals from './Exclusivedeals'
import PopularCategories from './PopularCategories'
import PopularRestaurants from './PopularRestaurants'
import FaqSection from '@/components/Faq'
import StatsBar from '@/components/Statsbar'

function Landingpage() {
    return (
        <div>
            <Herosection />
            <div className="p-8 min-h-screen">
                <Exclusivedeals />
                <PopularCategories />
                <PopularRestaurants />
                <FaqSection />
                <StatsBar />
            </div>

        </div>
    )
}

export default Landingpage