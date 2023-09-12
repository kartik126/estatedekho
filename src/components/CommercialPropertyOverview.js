import React, { useEffect } from 'react';

function CommercialPropertyOverview({ data }) {
  return (
    <div className="commercial-overview">
      <div>
        <p>No. of Cabins</p>
        <h1>{data?.NoOfCabins || 'n/a'}</h1>
      </div>
      <div>
        <p>Min no. of Seats</p>
        <h1>{data?.minNoOfSeats || 'n/a'}</h1>
      </div>
      <div>
        <p>Max no. of Seats</p>
        <h1>{data?.maxNoOfSeats || 'n/a'}</h1>
      </div>
      <div>
        <p>No. of Public Washroom</p>
        <h1>{data?.pubWashroom || 'n/a'}</h1>
      </div>
      <div>
        <p>No. of Private Washroom</p>
        <h1>{data?.pvtWashroom || 'n/a'}</h1>
      </div>
      <div>
        <p>No. of Conference Rooms</p>
        <h1>{data?.confRoom || 'n/a'}</h1>
      </div>
      <div>
        <p>No. of Meeting Rooms</p>
        <h1>{data?.NoOfMeetingRooms || 'n/a'}</h1>
      </div>
      <div>
        <p>No. of Service Lifts</p>
        <h1>{data?.Servlifts || 'n/a'}</h1>
      </div>
    </div>
  );
}

export default CommercialPropertyOverview;
