// import emailjs from "@emailjs/browser";
// import { useState, useRef } from "react";

// const Contacts = () => {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const [messageSent, setMessageSent] = useState(false);

//   const form = useRef();
//   const sendEmail = (e) => {
//     setLoading(true);
//     console.log(e);
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         import.meta.env.SERVICE_CODE,
//         import.meta.env.TEMPLATE_CODE,
//         form.current,
//         import.meta.env.USER_ID
//       )
//       .then(
//         (result) => {
//           setSuccess(true);
//           setError(false);
//           setMessageSent(true);
//           setLoading(false);
//         },
//         (error) => {
//           setSuccess(false);
//           setError(true);
//           setLoading(false);
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="bg-[#171717] pt-8 pb-8 text-[#e0e0e0]">
//       <div className="flex justify-center">
//         <h2 className="mx-auto text-5xl font-semibold">
//           Lets <span className="blue"> Talk</span>.
//         </h2>
//       </div>
//       <div className="mt-12 flex justify-center">
//         <form
//           className="flex w-3/5 flex-col justify-center overflow-hidden rounded-lg bg-[#181818] p-5 "
//           style={{ boxShadow: "20px 20px 80px 0 rgb(0, 0, 0, 1)" }}
//           ref={form}
//         >
//           <div className="mx-auto my-1">
//             <input
//               disabled={messageSent || loading}
//               type="text"
//               className="mt-2] w-[550px] rounded-md border border-white bg-[#0f0f0f] p-2 text-xl text-[#e0e0e0] "
//               placeholder="Name..."
//               required
//               name="name"
//             />
//           </div>
//           <div className="mx-auto my-1">
//             <input
//               disabled={messageSent || loading}
//               type="email"
//               name="email"
//               placeholder="E-mail..."
//               required
//               className="mt-2 w-[550px] rounded-lg border border-white bg-[#0f0f0f] p-2 text-xl text-[#e0e0e0]"
//             />
//           </div>
//           <div className="mx-auto my-1">
//             <textarea
//               disabled={messageSent || loading}
//               name="message"
//               placeholder="Message..."
//               required
//               className="mt-2 h-72 w-[550px] resize-none rounded-md border border-white bg-[#0f0f0f] p-2 text-xl text-[#e0e0e0]"
//             />
//           </div>
//           {!loading && (
//             <button
//               className="contact__form--btn text-[#e0e0e0] "
//               onClick={(e) => sendEmail(e)}
//             >
//               <div className="svg-wrapper-1">
//                 <div className="svg-wrapper">
//                   <svg viewBox="0 0 24 24" width="24" height="24">
//                     <path fill="none" d="M0 0h24v24H0z"></path>
//                     <path
//                       fill="currentColor"
//                       d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//               <span className="form__submit">Send</span>
//             </button>
//           )}
//           {success && (
//             <div className="mt-4 -mb-6 flex justify-center rounded-t-2xl bg-green-700 p-1 text-[#e0e0e0]">
//               Success! your message has successfully reached me.
//             </div>
//           )}
//           {error && (
//             <div className="mt-4 -mb-6 flex justify-center rounded-t-2xl  bg-red-700 p-1 text-[#e0e0e0]">
//               Error! seems like there is something wrong...
//             </div>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contacts;
