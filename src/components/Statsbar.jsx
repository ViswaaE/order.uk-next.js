import React from 'react';

// Data for the stats to make the component easy to update
const statsData = [
  { value: '546+', label: 'Registered Riders' },
  { value: '789,900+', label: 'Orders Delivered' },
  { value: '690+', label: 'Restaurants Partnered' },
  { value: '17,457+', label: 'Food Items' }
];

const StatsBar = () => {
  return (
    // The main orange container with rounded corners and padding
    <div className=" mt-6 bg-orange-500 rounded-xl text-white font-sans w-full max-w-5xl mx-auto">
      {/* Grid container for responsiveness:
        - 2 columns on small screens, 4 on medium screens and up.
        - `divide-y` and `divide-x` add the separator lines between grid items.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/30">
        {statsData.map((stat) => (
          <div key={stat.label} className="text-center p-6">
            <p className="text-4xl lg:text-5xl font-light">
              {stat.value}
            </p>
            <p className="text-sm lg:text-base mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;