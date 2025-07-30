import React from 'react'
import Advertisement from './Advertisement'
import Offers from './Offers'
import Food from './Food'
import Similar from './Similar-Restaurant'
import Information from './Information'

export default function Restaurant() {
    return (
        <div>
            <Advertisement />
            <Offers />
            <Food />
            <Information />
            <Similar />
        </div>
    )
}