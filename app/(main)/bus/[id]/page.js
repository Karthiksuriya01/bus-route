

// import busdata from '@/data/dummy';
// import React from 'react';

// const Bus = async ({params}) => {
//     const {id} = await params
//     const busId = Number(id)
//     const bus = busdata.find(bus => bus.id === busId)
//     console.log(bus);
    
    
    
//   return (
//     <div>
//        <h1 >Bus {bus}</h1>
//     </div>
//   )
                
// }

// export default Bus;


import React from 'react';
import busdata from '@/data/dummy'; 
import rootes from '@/data/routes'; 

const BusDetail = async ({params}) => {
   const {id} = await params 
//    const busId = Number(id)

    const bus = busdata.find(b => b.busNumber === decodeURIComponent(id));

  if (!bus) {
    return <div>Bus not found</div>;
  }

  const startStop = rootes.find(route => route.ID === bus.start);
  const endStop = rootes.find(route => route.ID === bus.end);

  return (
    <div>
      <h1>Bus Number: {bus.busNumber}</h1>
      <div>
        Start: {startStop ? startStop.Name : "Unknown"} | End: {endStop ? endStop.Name : "Unknown"}
      </div>
      <h3>Stops:</h3>
      <ul>
        {bus.stops.map((stopId, index) => {
          const stop = rootes.find(route => route.ID === stopId);
          return (
            <li key={index}>{stop ? stop.Name : "Unknown Stop"}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default BusDetail; 