// import PropTypes from 'prop-types';

// const DisplayCouponDetails = ({brand}) => {
//     return (
//         <div className="min-h-screen bg-gray-100 p-5">
//             <div className="bg-white shadow-md rounded-md p-5 flex items-center mb-6">
//                 <img
//                     src={brand?.brand_logo}
//                     alt={`brand Logo`}
//                     className="w-20 h-20 rounded-md border-2 border-gray-200 mr-5"
//                 />
//                 <div>
//                     <h1 className="text-2xl font-bold text-gray-800">{brand?.brand_name}</h1>
//                     <div className="flex items-center text-yellow-500">
//                         <span className="text-lg">★★★★☆</span>
//                         <span className="ml-2 font-bold">{brand?.rating}</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 gap-6">
//                 {brand?.coupons.map((coupon, index) => (
//                     <div
//                         key={index}
//                         className="bg-white shadow-md rounded-md p-5 flex justify-between items-center"
//                     >
//                         {/* Coupon Details */}
//                         <div>
//                             <h2 className="text-lg font-bold text-gray-800">{coupon?.coupon_code}</h2>
//                             <p className="text-gray-600">{coupon?.description}</p>
//                             <p className="text-sm text-gray-500">
//                                 Expiry: {coupon?.expiry_date} | Condition: {coupon?.condition}
//                             </p>
//                             <p className="text-sm text-blue-600">Type: {coupon?.coupon_type}</p>
//                         </div>

//                         {/* Actions */}
//                         <div className="flex flex-col items-end">
//                             {/* <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}> */}
//                             <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//                                 Copy Code
//                             </button>
//                             {/* </CopyToClipboard> */}
//                             <a
//                                 href={brand?.shop_Link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
//                             >
//                                 Use Now
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// DisplayCouponDetails.propTypes = {
//     brand: PropTypes.object
// }
// export default DisplayCouponDetails;