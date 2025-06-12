// "use client";
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Script from "next/script";
// import { IoLocationSharp } from "react-icons/io5";

// export default function ContactFooter() {
//     const [mapInitialized, setMapInitialized] = useState(false);
//     const mapRef = useRef(null);

//     useEffect(() => {
//         if (typeof window === "undefined" || !mapRef.current) return;

//         const initializeMap = () => {
//             if (!mapInitialized && window.L) {
//                 const position = [50.9738, 7.1128]; // St. Josefshaus Refrath coordinates
//                 const map = window.L.map(mapRef.current, {
//                     center: position,
//                     zoom: 13,
//                     zoomControl: false,
//                 });

//                 window.L.tileLayer(
//                     "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
//                     {
//                         attribution:
//                             '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
//                     }
//                 ).addTo(map);

//                 window.L.marker(position)
//                     .addTo(map)
//                     .bindPopup("St. Josefshaus Refrath<br>Junkersgut 10–14, 51427 Bergisch Gladbach");

//                 const zoomControl = document.createElement("div");
//                 zoomControl.className = "custom-zoom-control";
//                 zoomControl.innerHTML = `
//           <button class="zoom-in" aria-label="Zoom in">+</button>
//           <button class="zoom-out" aria-label="Zoom out">−</button>
//         `;
//                 mapRef.current.appendChild(zoomControl);

//                 document.querySelector(".zoom-in").addEventListener("click", () => map.zoomIn());
//                 document.querySelector(".zoom-out").addEventListener("click", () => map.zoomOut());

//                 setMapInitialized(true);
//             }
//         };

//         // Ensure Leaflet is loaded before initializing
//         if (window.L) {
//             initializeMap();
//         }
//     }, [mapInitialized]);

//     return (
//         <>
//             {/* External Leaflet CSS and JS */}
//             <Script
//                 src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
//                 integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
//                 crossOrigin=""
//                 onLoad={() => setMapInitialized(false)}
//             />
//             <Script
//                 src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
//                 integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
//                 crossOrigin=""
//                 onLoad={() => setMapInitialized(false)}
//             />

//             <footer className="w-full">
//                 {/* Green top border with logo */}
//                 <div className="h-5 bg-[#6cb744] flex items-center px-4">

//                 </div>
//                 <div className="max-w-[80%] border-b-3 border-gray-300 mx-auto">

//                     <div className="bg-white md:px-4">
//                         <Link href="/">
//                             <Image
//                                 src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
//                                 alt="St. Josefshaus Refrath Logo"
//                                 width={100}
//                                 height={40}
//                                 className="h-auto w-auto ml-15 mt-10"
//                                 priority
//                             />
//                         </Link>
//                         <div className="max-w-7xl b  py-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//                             {/* Contact Section */}
//                             <div className="md:col-span-1">
//                                 <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contact us anytime:</h3>
//                                 <div className="space-y-3">
//                                     <div className="flex items-start">
//                                         <div className="flex-shrink-0 mt-1">
//                                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 24 24"
//                                                     fill="currentColor"
//                                                     className="w-6 h-6 text-gray-700"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="ml-2">
//                                             <h4 className="text-base font-medium text-gray-900">Ms. Ana Schmidt</h4>
//                                             <p className="text-sm text-gray-500">Contact person (facility management)</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="flex-shrink-0 mt-1">
//                                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 24 24"
//                                                     fill="currentColor"
//                                                     className="w-6 h-6 text-gray-700"
//                                                 >
//                                                     <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
//                                                     <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="ml-2">
//                                             <h4 className="text-base font-medium text-gray-900">ana.schmidt@fliedner-haus.de</h4>
//                                             <p className="text-sm text-gray-500">e-mail</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="flex-shrink-0 mt-1">
//                                             <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 24 24"
//                                                     fill="currentColor"
//                                                     className="w-6 h-6 text-gray-700"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="ml-2">
//                                             <h4 className="text-base font-medium text-gray-900">02204 47 12 62</h4>
//                                             <p className="text-sm text-gray-500">phone</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Legal Documents */}
//                             <div className="md:col-span-1">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-4">Legal documents</h3>
//                                 <div className="space-y-3">
//                                     <Link
//                                         href="/data-protection"
//                                         className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit"
//                                     >
//                                         Data protection
//                                     </Link>
//                                     <Link
//                                         href="/imprint"
//                                         className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit"
//                                     >
//                                         Imprint
//                                     </Link>
//                                 </div>

//                             </div>

//                             {/* Map Section */}
//                             <div className="md:col-span-1">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-4">Our location</h3>
//                                 <p className="text-sm text-gray-500 mt-2">
//                                     St. Josefshaus Refrath<br />Junkersgut 10–14, 51427 Bergisch Gladbach
//                                 </p>
//                                 {/* <div
//                                     ref={mapRef}
//                                     id="contact-map"
//                                     className="w-full h-36 rounded-md overflow-hidden relative"
//                                 >
//                                     <div className="absolute top-2 right-2 flex flex-col">
//                                         <button
//                                             className="w-6 h-6 bg-white border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100 mb-1"
//                                             onClick={() => window.L && mapRef.current && window.L.map(mapRef.current).zoomIn()}
//                                         >
//                                             +
//                                         </button>
//                                         <button
//                                             className="w-6 h-6 bg-white border border-gray-300 text-lg font-bold text-gray-700 hover:bg-gray-100"
//                                             onClick={() => window.L && mapRef.current && window.L.map(mapRef.current).zoomOut()}
//                                         >
//                                             −
//                                         </button>
//                                     </div>
//                                 </div> */}
//                                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6807.547657031743!2d74.34525417770998!3d31.447892899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906f41892fbb1%3A0x96d4c2e6686416bb!2sChungi%20Amer%20Sidhu!5e0!3m2!1sen!2s!4v1749755389850!5m2!1sen!2s" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//                             </div>
//                         </div>
//                     </div>


//                 </div>
//                 <div className="bg-gray-200   py-8">
//                     <p className="w-full max-md:px-8  md:text-center text-gray-500 text-xs">
//                         This site is not affiliated with Facebook or META Inc. This website is not endorsed by Facebook in any way. FACEBOOK is a trademark of META, Inc.</p>
//                 </div>
//             </footer>

//             {/* Inline Styles for Leaflet */}
//             <style jsx global>{`
//         .leaflet-container {
//           height: 100%;
//           width: 100%;
//           border-radius: 0.375rem;
//           overflow: hidden;
//         }
//         .leaflet-control-attribution {
//           font-size: 9px;
//           display: none; /* Hide attribution to match image */
//         }
//       `}</style>
//         </>
//     );
// }





























// "use client";
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Script from "next/script";

// export default function ContactFooter() {
//   const [mapInitialized, setMapInitialized] = useState(false);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (typeof window === "undefined" || !mapRef.current) return;

//     const initializeMap = () => {
//       if (!mapInitialized && window.L) {
//         try {
//           const position = [50.9738, 7.1128]; // St. Josefshaus Refrath coordinates
//           const map = window.L.map(mapRef.current, {
//             center: position,
//             zoom: 13,
//             zoomControl: false,
//           });

//           window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
//             attribution:
//               '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//           }).addTo(map);

//           window.L.marker(position)
//             .addTo(map)
//             .bindPopup("St. Josefshaus Refrath<br>Junkersgut 10–14, 51427 Bergisch Gladbach");

//           const zoomControl = document.createElement("div");
//           zoomControl.className = "custom-zoom-control";
//           zoomControl.innerHTML = `
//             <button class="zoom-in" aria-label="Zoom in">+</button>
//             <button class="zoom-out" aria-label="Zoom out">−</button>
//           `;
//           mapRef.current.appendChild(zoomControl);

//           const zoomInButton = zoomControl.querySelector(".zoom-in");
//           const zoomOutButton = zoomControl.querySelector(".zoom-out");

//           if (zoomInButton && zoomOutButton) {
//             zoomInButton.addEventListener("click", () => map.zoomIn());
//             zoomOutButton.addEventListener("click", () => map.zoomOut());
//           }

//           setMapInitialized(true);
//           console.log("Map initialized successfully");
//         } catch (error) {
//           console.error("Error initializing Leaflet map:", error);
//         }
//       }
//     };

//     if (window.L) {
//       initializeMap();
//     } else {
//       const checkLeaflet = setInterval(() => {
//         if (window.L) {
//           clearInterval(checkLeaflet);
//           initializeMap();
//         }
//       }, 100);
//       setTimeout(() => clearInterval(checkLeaflet), 10000);
//     }

//     return () => {
//       if (mapRef.current) {
//         const zoomInButton = mapRef.current.querySelector(".zoom-in");
//         const zoomOutButton = mapRef.current.querySelector(".zoom-out");
//         if (zoomInButton) zoomInButton.removeEventListener("click", () => {});
//         if (zoomOutButton) zoomOutButton.removeEventListener("click", () => {});
//       }
//     };
//   }, [mapInitialized]);

//   return (
//     <>
//       <Script
//         src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
//         integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
//         crossOrigin=""
//         referrerPolicy="no-referrer-when-downgrade"
//         onLoad={() => {
//           setMapInitialized(false);
//           console.log("Leaflet CSS loaded");
//         }}
//         onError={(e) => console.error("Error loading Leaflet CSS:", e)}
//       />
//       <Script
//         src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
//         integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
//         crossOrigin=""
//         referrerPolicy="no-referrer-when-downgrade"
//         onLoad={() => {
//           setMapInitialized(false);
//           console.log("Leaflet JS loaded");
//         }}
//         onError={(e) => console.error("Error loading Leaflet JS:", e)}
//       />

//       <footer className="w-full">
//         <div className="h-5 bg-[#6cb744] flex items-center px-4"></div>
//         <div className="max-w-[80%] border-b-3 border-gray-300 mx-auto">
//           <div className="bg-white md:px-4">
//             <Link href="/">
//               <Image
//                 src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
//                 alt="St. Josefshaus Refrath Logo"
//                 width={100}
//                 height={40}
//                 className="h-auto w-auto ml-15 mt-10"
//                 priority
//               />
//             </Link>
//             <div className="max-w-7xl py-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="md:col-span-1">
//                 <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contact us anytime:</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="w-6 h-6 text-gray-700"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="ml-2">
//                       <h4 className="text-base font-medium text-gray-900">Ms. Ana Schmidt</h4>
//                       <p className="text-sm text-gray-500">Contact person (facility management)</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="w-6 h-6 text-gray-700"
//                         >
//                           <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
//                           <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="ml-2">
//                       <h4 className="text-base font-medium text-gray-900">ana.schmidt@fliedner-haus.de</h4>
//                       <p className="text-sm text-gray-500">e-mail</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="w-6 h-6 text-gray-700"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="ml-2">
//                       <h4 className="text-base font-medium text-gray-900">02204 47 12 62</h4>
//                       <p className="text-sm text-gray-500">phone</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="md:col-span-1">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Legal documents</h3>
//                 <div className="space-y-3">
//                   <Link
//                     href="/data-protection"
//                     className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit"
//                   >
//                     Data protection
//                   </Link>
//                   <Link href="/imprint" className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit">
//                     Imprint
//                   </Link>
//                 </div>
//               </div>

//               <div className="md:col-span-1">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Our location</h3>
//                 <p className="text-sm text-gray-500 mt-2">
//                   St. Josefshaus Refrath
//                   <br />
//                   Junkersgut 10–14, 51427 Bergisch Gladbach
//                 </p>
//                 <div
//                   ref={mapRef}
//                   id="contact-map"
//                   className="w-full h-36 rounded-md overflow-hidden relative"
//                   style={{ minHeight: "144px", backgroundColor: "#f0f0f0" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-200 py-8">
//           <p className="w-full max-md:px-8 md:text-center text-gray-500 text-xs">
//             This site is not affiliated with Facebook or META Inc. This website is not endorsed by Facebook in any way.
//             FACEBOOK is a trademark of META, Inc.
//           </p>
//         </div>
//       </footer>

//       <style jsx global>{`
//         .leaflet-container {
//           height: 60%;
//           width: 100%;
//           border-radius: 0.375rem;
//           overflow: hidden;
//           z-index: 0;
//         }
//         .leaflet-control-attribution {
//           font-size: 9px;
//           display: none;
//         }
//         .custom-zoom-control {
//           position: absolute;
//           top: 8px;
//           right: 8px;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//           z-index: 1000;
//         }
//         .zoom-in,
//         .zoom-out {
//           width: 24px;
//           height: 24px;
//           background: white;
//           border: 1px solid #d1d5db;
//           color: #374151;
//           font-weight: bold;
//           font-size: 16px;
//           line-height: 24px;
//           text-align: center;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }
//         .zoom-in:hover,
//         .zoom-out:hover {
//           background-color: #f3f4f6;
//         }
//       `}</style>
//     </>
//   );
// }










































"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactFooter() {
    const [mapInitialized, setMapInitialized] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined" || !mapRef.current) return;

        const initializeMap = () => {
            if (!mapInitialized && window.L) {
                const position = [50.9738, 7.1128]; // St. Josefshaus Refrath coordinates
                const map = window.L.map(mapRef.current, {
                    center: position,
                    zoom: 13,
                    zoomControl: false,
                });

                window.L.tileLayer(
                    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                    {
                        attribution:
                            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
                    }
                ).addTo(map);

                window.L.marker(position)
                    .addTo(map)
                    .bindPopup("St. Josefshaus Refrath<br>Junkersgut 10–14, 51427 Bergisch Gladbach");

                const zoomControl = document.createElement("div");
                zoomControl.className = "custom-zoom-control";
                zoomControl.innerHTML = `
          <button class="zoom-in" aria-label="Zoom in">+</button>
          <button class="zoom-out" aria-label="Zoom out">−</button>
        `;
                mapRef.current.appendChild(zoomControl);

                document.querySelector(".zoom-in").addEventListener("click", () => map.zoomIn());
                document.querySelector(".zoom-out").addEventListener("click", () => map.zoomOut());

                setMapInitialized(true);
            }
        };

        // Ensure Leaflet is loaded before initializing
        if (window.L) {
            initializeMap();
        }
    }, [mapInitialized]);

    return (
        <>
            {/* External Leaflet CSS and JS */}
            <Script
                src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossOrigin=""
                onLoad={() => setMapInitialized(false)}
            />
            <Script
                src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                crossOrigin=""
                onLoad={() => setMapInitialized(false)}
            />

            <footer className="w-full">
                {/* Green top border with logo */}
                <div className="h-5 bg-[#6cb744] flex items-center px-4">

                </div>
                <div className="max-w-[80%] border-b-3 border-gray-300 mx-auto">

                    <div className="bg-white md:px-4">
                        <Link href="/">
                            <Image
                                src="https://onecdn.io/media/b983cc99-b038-41eb-8fd1-54d411d67dab/md2x"
                                alt="St. Josefshaus Refrath Logo"
                                width={100}
                                height={40}
                                className="h-auto w-auto ml-15 mt-10"
                                priority
                            />
                        </Link>
                        <div className="max-w-7xl b  py-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Contact Section */}
                            <div className="md:col-span-1">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Contact us anytime:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6 text-gray-700"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-2">
                                            <h4 className="text-base font-medium text-gray-900">Ms. Ana Schmidt</h4>
                                            <p className="text-sm text-gray-500">Contact person (facility management)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6 text-gray-700"
                                                >
                                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-2">
                                            <h4 className="text-base font-medium text-gray-900">ana.schmidt@fliedner-haus.de</h4>
                                            <p className="text-sm text-gray-500">e-mail</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6 text-gray-700"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-2">
                                            <h4 className="text-base font-medium text-gray-900">02204 47 12 62</h4>
                                            <p className="text-sm text-gray-500">phone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legal Documents */}
                            <div className="md:col-span-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal documents</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/data-protection"
                                        className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit"
                                    >
                                        Data protection
                                    </Link>
                                    <Link
                                        href="/imprint"
                                        className="block hover:text-green-700 font-bold border-b-2 border-[#6cb744] pb-1 w-fit"
                                    >
                                        Imprint
                                    </Link>
                                </div>

                            </div>

                            {/* Map Section */}
                            <div className="md:col-span-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Our location</h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    St. Josefshaus Refrath<br />Junkersgut 10–14, 51427 Bergisch Gladbach
                                </p>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.276258258258!2d7.110613!3d50.9738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2e6b8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sJunkersgut%2010-14%2C%2051427%20Bergisch%20Gladbach%2C%20Germany!5e0!3m2!1sen!2s!4v1749755389850!5m2!1sen!2s" 
                                    width="100%" 
                                    height="250" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full rounded-md overflow-hidden mt-2"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 py-8">
                    <p className="w-full max-md:px-8 md:text-center text-gray-500 text-xs">
                        This site is not affiliated with Facebook or META Inc. This website is not endorsed by Facebook in any way. FACEBOOK is a trademark of META, Inc.</p>
                </div>
            </footer>

            {/* Inline Styles for Leaflet */}
            <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          border-radius: 0.375rem;
          overflow: hidden;
        }
        .leaflet-control-attribution {
          font-size: 9px;
          display: none; /* Hide attribution to match image */
        }
      `}</style>
        </>
    );
}
