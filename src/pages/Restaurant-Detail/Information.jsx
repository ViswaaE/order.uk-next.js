import React from 'react'

const Information = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-md">

            <div>
                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <img src="/images/Tracking.png"/> Delivery information
                </h2>
                <ul className="text-sm leading-6">
                    <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
                    <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">Estimated time until delivery: <strong>20 min</strong></p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <img src="/images/ID Verified.png"/> Contact information
                </h2>
                <p className="text-sm mb-2">If you have allergies or other dietary restrictions, please contact the restaurant.
                    The restaurant will provide food-specific information upon request.</p>
                <p className="text-sm"><strong>Phone number:</strong> +934443–43</p>
                <p className="text-sm"><strong>Website:</strong> <a href="http://mcdonalds.uk/"
                    className="text-blue-600 underline">http://mcdonalds.uk/</a></p>
            </div>

            <div className="bg-[#0c0f1f] text-white rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <img src="/images/Clock 1.png"/> Operational Times
                </h2>
                <ul className="text-sm leading-6">
                    <li><strong>Monday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
                    <li><strong>Sunday:</strong> 8:00 AM–3:00 AM</li>
                </ul>
            </div>
        </div>
    )
}

export default Information