


// import { useState, useEffect } from 'react';
// // import { useUploadDocumentMutation } from '../../redux/documentapi';
// import { Link } from 'react-router-dom';
// import { useUploadDocumentMutation } from '../../redux/documentapi';

// const Uploaddocument = () => {
//   const [selectedDocType, setSelectedDocType] = useState('cnic');
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [uploadDocument, { isLoading, isError, isSuccess }] = useUploadDocumentMutation();
  
//   // Reset images when document type changes
//   useEffect(() => {
//     setFrontImage(null);
//     setBackImage(null);
//   }, [selectedDocType]);

//   const handleDocTypeChange = (event) => {
//     setSelectedDocType(event.target.value);
//   };

//   const handleImageUpload = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (selectedDocType === 'passport') {
//       if (!frontImage) {
//         alert("Please upload passport image");
//         return;
//       }
//     } else {
//       if (!frontImage || !backImage) {
//         alert("Please upload both front and back images");
//         return;
//       }
//     }

//     const formData = new FormData();
//     formData.append('documentType', selectedDocType);
//     formData.append('frontImage', frontImage);
    
//     // Only append backImage if not passport
//     if (selectedDocType !== 'passport') {
//       formData.append('backImage', backImage);
//     }

//     // try {
//     //  const response= await uploadDocument(formData).unwrap();
//     //  console.log(response)
//     //   alert('Document uploaded successfully');
//     // } catch (error) {
//     //   console.error('Upload failed:', error);
//     // }
  
  
//     try {
//       // Explicitly log what you're sending to verify
//       console.log('Sending documentType:', selectedDocType);
      
//       // Try passing the data differently
//       const response = await uploadDocument({
//         documentType: selectedDocType,
//         frontImage,
//         backImage: selectedDocType !== 'passport' ? backImage : undefined
//       }).unwrap();
      
//       console.log(response);
//       alert('Document uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }

//   };


//   return (
//     <div className='bg-[#23282B] w-full flex items-center min-h-screen'>
//       <div className="max-w-full mx-auto p-6 bg-[#2C3235] rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">Document Verification</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-8">
//             <h3 className="text-lg text-white font-semibold mb-4">Select Document Type</h3>
//             <div className="flex flex-wrap gap-4">
//               {['cnic', 'license', 'passport'].map((type) => (
//                 <div className="flex items-center" key={type}>
//                   <input
//                     type="radio"
//                     id={type}
//                     name="documentType"
//                     value={type}
//                     checked={selectedDocType === type}
//                     onChange={handleDocTypeChange}
//                     className="mr-2 h-5 w-5 cursor-pointer"
//                   />
//                   <label htmlFor={type} className="text-white font-medium cursor-pointer">{type.toUpperCase()}</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-lg text-white font-semibold mb-4">Upload Document Images</h3>
//             <div className={`grid ${selectedDocType === 'passport' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
//               <div>
//                 <input 
//                   type="file" 
//                   id="frontImageInput" 
//                   accept="image/*" 
//                   onChange={(e) => handleImageUpload(e, setFrontImage)} 
//                   className="hidden" 
//                 />
//                 <div 
//                   onClick={() => document.getElementById('frontImageInput').click()} 
//                   className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
//                 >
//                   {frontImage ? (
//                     <img src={URL.createObjectURL(frontImage)} alt="Front Side" className="h-full w-full object-cover rounded-lg" />
//                   ) : (
//                     <>
//                       <div className="text-4xl text-white mb-2">+</div>
//                       <p className="text-sm text-white">
//                         {selectedDocType === 'passport' ? 'Passport Image' : 'Front Side'}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
              
//               {selectedDocType !== 'passport' && (
//                 <div>
//                   <input 
//                     type="file" 
//                     id="backImageInput" 
//                     accept="image/*" 
//                     onChange={(e) => handleImageUpload(e, setBackImage)} 
//                     className="hidden" 
//                   />
//                   <div 
//                     onClick={() => document.getElementById('backImageInput').click()} 
//                     className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
//                   >
//                     {backImage ? (
//                       <img src={URL.createObjectURL(backImage)} alt="Back Side" className="h-full w-full object-cover rounded-lg" />
//                     ) : (
//                       <>
//                         <div className="text-4xl text-white mb-2">+</div>
//                         <p className="text-sm text-white">Back Side</p>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
// {/* <Link to={"/profile/trade/verifyresidence"}> */}
//           <button 
//             type="submit" 
//             className="w-full py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition" 
//             disabled={isLoading}
//             >
//             {isLoading ? 'Uploading...' : 'Submit Document'}
//           </button>
//               {/* </Link> */}

//           {isSuccess && <p className="text-green-500 mt-2">Document uploaded successfully!</p>}
//           {isError && <p className="text-red-500 mt-2">Failed to upload document</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Uploaddocument;







// import { useState, useEffect } from 'react';
// // import { useUploadDocumentMutation } from '../../redux/documentapi';
// import { Link } from 'react-router-dom';
// import { useUploadDocumentMutation } from '../../redux/documentapi';

// const Uploaddocument = () => {
//   const [selectedDocType, setSelectedDocType] = useState('cnic');
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [uploadDocument, { isLoading, isError, isSuccess }] = useUploadDocumentMutation();
  
//   // Reset images when document type changes
//   useEffect(() => {
//     setFrontImage(null);
//     setBackImage(null);
//   }, [selectedDocType]);

//   const handleDocTypeChange = (event) => {
//     setSelectedDocType(event.target.value);
//   };

//   const handleImageUpload = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (selectedDocType === 'passport') {
//       if (!frontImage) {
//         alert("Please upload passport image");
//         return;
//       }
//     } else {
//       if (!frontImage || !backImage) {
//         alert("Please upload both front and back images");
//         return;
//       }
//     }

//     const formData = new FormData();
//     formData.append('documentType', selectedDocType);
//     formData.append('frontImage', frontImage);
    
//     // Only append backImage if not passport
//     if (selectedDocType !== 'passport') {
//       formData.append('backImage', backImage);
//     }

//     // try {
//     //  const response= await uploadDocument(formData).unwrap();
//     //  console.log(response)
//     //   alert('Document uploaded successfully');
//     // } catch (error) {
//     //   console.error('Upload failed:', error);
//     // }
  
  
//     try {
//       // Explicitly log what you're sending to verify
//       console.log('Sending documentType:', selectedDocType);
      
//       // Try passing the data differently
//       const response = await uploadDocument({
//         documentType: selectedDocType,
//         frontImage,
//         backImage: selectedDocType !== 'passport' ? backImage : undefined
//       }).unwrap();
      
//       console.log(response);
//       alert('Document uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }

//   };


//   return (
//     <div className='bg-[#23282B] w-full flex items-center min-h-screen'>
//       <div className="max-w-full mx-auto p-6 bg-[#2C3235] rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">Document Verification</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-8">
//             <h3 className="text-lg text-white font-semibold mb-4">Select Document Type</h3>
//             <div className="flex flex-wrap gap-4">
//               {['cnic', 'license', 'passport'].map((type) => (
//                 <div className="flex items-center" key={type}>
//                   <input
//                     type="radio"
//                     id={type}
//                     name="documentType"
//                     value={type}
//                     checked={selectedDocType === type}
//                     onChange={handleDocTypeChange}
//                     className="mr-2 h-5 w-5 cursor-pointer"
//                   />
//                   <label htmlFor={type} className="text-white font-medium cursor-pointer">{type.toUpperCase()}</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-lg text-white font-semibold mb-4">Upload Document Images</h3>
//             <div className={`grid ${selectedDocType === 'passport' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
//               <div>
//                 <input 
//                   type="file" 
//                   id="frontImageInput" 
//                   accept="image/*" 
//                   onChange={(e) => handleImageUpload(e, setFrontImage)} 
//                   className="hidden" 
//                 />
//                 <div 
//                   onClick={() => document.getElementById('frontImageInput').click()} 
//                   className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
//                 >
//                   {frontImage ? (
//                     <img src={URL.createObjectURL(frontImage)} alt="Front Side" className="h-full w-full object-cover rounded-lg" />
//                   ) : (
//                     <>
//                       <div className="text-4xl text-white mb-2">+</div>
//                       <p className="text-sm text-white">
//                         {selectedDocType === 'passport' ? 'Passport Image' : 'Front Side'}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
              
//               {selectedDocType !== 'passport' && (
//                 <div>
//                   <input 
//                     type="file" 
//                     id="backImageInput" 
//                     accept="image/*" 
//                     onChange={(e) => handleImageUpload(e, setBackImage)} 
//                     className="hidden" 
//                   />
//                   <div 
//                     onClick={() => document.getElementById('backImageInput').click()} 
//                     className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
//                   >
//                     {backImage ? (
//                       <img src={URL.createObjectURL(backImage)} alt="Back Side" className="h-full w-full object-cover rounded-lg" />
//                     ) : (
//                       <>
//                         <div className="text-4xl text-white mb-2">+</div>
//                         <p className="text-sm text-white">Back Side</p>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
{/* <Link to={"/profile/trade/verifyresidence"}> */}
//           <button 
//             type="submit" 
//             className="w-full py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition" 
//             disabled={isLoading}
//             >
//             {isLoading ? 'Uploading...' : 'Submit Document'}
//           </button>
//               {/* </Link> */}

//           {isSuccess && <p className="text-green-500 mt-2">Document uploaded successfully!</p>}
//           {isError && <p className="text-red-500 mt-2">Failed to upload document</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Uploaddocument;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUploadDocumentMutation } from '../../redux/documentapi';

const Uploaddocument = () => {
  const [selectedDocType, setSelectedDocType] = useState('cnic');
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [uploadDocument, { isLoading, isError, isSuccess }] = useUploadDocumentMutation();
  
  // Reset images when document type changes
  useEffect(() => {
    setFrontImage(null);
    setBackImage(null);
  }, [selectedDocType]);

  const handleDocTypeChange = (event) => {
    setSelectedDocType(event.target.value);
  };

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (selectedDocType === 'passport') {
      if (!frontImage) {
        alert("Please upload passport image");
        return;
      }
    } else {
      if (!frontImage || !backImage) {
        alert("Please upload both front and back images");
        return;
      }
    }

    // Create FormData object for file upload
    const formData = new FormData();
    formData.append('documentType', selectedDocType);
    
    // Add images to the document array instead of separate fields
    formData.append('document', frontImage);
    
    if (selectedDocType !== 'passport' && backImage) {
      formData.append('document', backImage);
    }

    try {
      console.log('Sending documentType:', selectedDocType);
      console.log('Sending document images:', frontImage, backImage);
      
      // Send the formData with the correct structure
      const response = await uploadDocument(formData).unwrap();
      
      console.log(response);
      alert('Document uploaded successfully');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div className='bg-[#23282B] w-full flex items-center min-h-screen'>
      <div className="max-w-full mx-auto p-6 bg-[#2C3235] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Document Verification</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h3 className="text-lg text-white font-semibold mb-4">Select Document Type</h3>
            <div className="flex flex-wrap gap-4">
              {['cnic', 'license', 'passport'].map((type) => (
                <div className="flex items-center" key={type}>
                  <input
                    type="radio"
                    id={type}
                    name="documentType"
                    value={type}
                    checked={selectedDocType === type}
                    onChange={handleDocTypeChange}
                    className="mr-2 h-5 w-5 cursor-pointer"
                  />
                  <label htmlFor={type} className="text-white font-medium cursor-pointer">{type.toUpperCase()}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg text-white font-semibold mb-4">Upload Document Images</h3>
            <div className={`grid ${selectedDocType === 'passport' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <input 
                  type="file" 
                  id="frontImageInput" 
                  accept="image/*" 
                  onChange={(e) => handleImageUpload(e, setFrontImage)} 
                  className="hidden" 
                />
                <div 
                  onClick={() => document.getElementById('frontImageInput').click()} 
                  className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
                >
                  {frontImage ? (
                    <img src={URL.createObjectURL(frontImage)} alt="Front Side" className="h-full w-full object-cover rounded-lg" />
                  ) : (
                    <>
                      <div className="text-4xl text-white mb-2">+</div>
                      <p className="text-sm text-white">
                        {selectedDocType === 'passport' ? 'Passport Image' : 'Front Side'}
                      </p>
                    </>
                  )}
                </div>
              </div>
              
              {selectedDocType !== 'passport' && (
                <div>
                  <input 
                    type="file" 
                    id="backImageInput" 
                    accept="image/*" 
                    onChange={(e) => handleImageUpload(e, setBackImage)} 
                    className="hidden" 
                  />
                  <div 
                    onClick={() => document.getElementById('backImageInput').click()} 
                    className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
                  >
                    {backImage ? (
                      <img src={URL.createObjectURL(backImage)} alt="Back Side" className="h-full w-full object-cover rounded-lg" />
                    ) : (
                      <>
                        <div className="text-4xl text-white mb-2">+</div>
                        <p className="text-sm text-white">Back Side</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition" 
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Submit Document'}
          </button>

          {isSuccess && <p className="text-green-500 mt-2">Document uploaded successfully!</p>}
          {isError && <p className="text-red-500 mt-2">Failed to upload document</p>}
        </form>
      </div>
    </div>
  );
};

export default Uploaddocument;
