import React from 'react';
import PreviewData from './PreviewData';
import { useSelector } from 'react-redux';

const PreviewSection = () => {
  const data=useSelector(state=>state)

  return (
    <div>
      {/* <!-- Preview Data --> */}
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {/* ----data--- */}
            {
              data?.length? data.map(dt=><PreviewData data={dt}/>):<p className='text-center'>Empty cart !</p>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewSection;