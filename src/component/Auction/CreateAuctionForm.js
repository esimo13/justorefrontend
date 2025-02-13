// import React, { useState } from "react";

// const CreateAuctionForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     startingBid: "",
//     endTime: "",
//     images: null,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e) => {
//     setFormData({
//       ...formData,
//       images: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataForUpload = new FormData();
//     formDataForUpload.append("title", formData.title);
//     formDataForUpload.append("description", formData.description);
//     formDataForUpload.append("startingBid", formData.startingBid);
//     formDataForUpload.append("endTime", formData.endTime);
//     formDataForUpload.append("images", formData.images);

//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/v1/admin/auction/new",
//         {
//           method: "POST",
//           body: formDataForUpload,
//         }
//       );

//       if (response.ok) {
//         console.log("Auction created successfully!");
//         // Optionally, you can redirect the user or perform other actions on success.
//       } else {
//         console.error("Failed to create auction");
//         // Handle error response
//       }
//     } catch (error) {
//       console.error("Error creating auction:", error);
//       // Handle network or other errors
//     }
//   };

//   return (
//     <div>
//       <h2>Create Auction</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Starting Bid:
//           <input
//             type="number"
//             name="startingBid"
//             value={formData.startingBid}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           End Time:
//           <input
//             type="datetime-local"
//             name="endTime"
//             value={formData.endTime}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Images:
//           <input
//             type="file"
//             accept="image/*"
//             name="images"
//             onChange={handleImageChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Create Auction</button>
//       </form>
//     </div>
//   );
// };

// export default CreateAuctionForm;
