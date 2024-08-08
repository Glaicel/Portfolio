"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const [hoveredCard, setHoveredCard] = useState(null);

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className='bg-[#254336] text-white'>
            <h2 className="text-2xl font-bold">Resume</h2>
            <hr className="border-t border-[#6B8A7A] p-1 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
            <div className="space-y-4 mt-3 p-3">
              <div>
                <div className='flex flex-row space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="list-disc list-inside ml-4">
                  <p>Caraga State University</p>
                  <li>Bachelor of Science in Information Technology - (2020-2024)</li>
                  <li>Magna Cum Laude</li>
                  <li>Civil Service Professional</li>
                </ul>
              </div>
              <div>
                <div className='flex flex-row space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <ul className="list-disc list-inside ml-4">
                  <p>Virtual Learning Research Center</p>
                  <li>Full Stack Developer Intern (January 2024 - April 2024)</li>
                  <li>Web Development Freelancer (2023 - Present)</li>
                </ul>
              </div>
              <div>
                <div className='flex flex-row space-x-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                  <h3 className="text-xl font-semibold">Skills</h3>
                </div>
                <ul className="list-disc list-inside ml-4">
                  <li>JavaScript, React, Next.js, Laravel</li>
                  <li>HTML, CSS, Tailwind CSS</li>
                  <li>Figma, Canva, Adobe Premier</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            </div>
            <div>
              <div className='flex flex-row space-x-3 mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <h3 className="text-xl font-semibold">References</h3>
              </div>
              <hr className="border-t border-[#6B8A7A] p-1 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
              <ul className="list-disc list-inside ml-4">
                <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 mt-3">
                  <div className="flex flex-col bg-[#677D6A] shadow-lg p-5 rounded-xl text-white">
                    <p className="font-bold">Junrie B. Matias, DIT</p>
                    <hr className="border-t border-[#6B8A7A] my-2 opacity-100" />
                    <ul className="list-disc list-inside">
                      <li>Virtual Learning Research Center</li>
                      <li>Director</li>
                      <li>Caraga State University</li>
                    </ul>
                  </div>
                  <div className="flex flex-col bg-[#677D6A] shadow-lg p-5 rounded-xl text-white">
                    <p className="font-bold">Karl Vincent Panase</p>
                    <hr className="border-t border-[#6B8A7A] my-2 opacity-100" />
                    <ul className="list-disc list-inside">
                      <li>Instructor, IT Department</li>
                      <li>College of Computing and Information Sciences</li>
                      <li>Caraga State University</li>
                    </ul>
                  </div>
                </div>

              </ul>
            </div>
          </div>

        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Works</h2>
            <hr className="border-t border-[#6B8A7A] p-1 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
            <div className="space-y-4">
              <h3 className="text-xl text-white font-semibold">Designs</h3>
              <div className='flex flex-row space-x-5'>
                <div className='bg-[#6B8A7A] rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col'>
                  <Image
                    src="/thumbnail1.png"
                    alt="Thumbnail1"
                    width={250}
                    height={250}
                    className="w-full h-auto rounded-lg mb-2 hover:opacity-55"
                  />
                  <p>Barangay Alert System Design</p>
                  <div className="flex justify-end mt-2"> {/* Added div for alignment */}
                    <button className="bg-[#DAD3BE] hover:bg-[#254336] hover:text-white text-[#254336] font-bold py-2 px-4 rounded">
                      <a href="https://www.figma.com/design/uxw8lq1vI0wS2nF8zBlO0D/101-Final-Project?node-id=0-1&t=sLl7yjHRjWIL7Zrl-1">View Design</a>
                    </button>
                  </div>
                </div>
                <div className='bg-[#6B8A7A] rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col'>
                  <Image
                    src="/thumbnail2.png"
                    alt="Thumbnail2"
                    width={255}
                    height={255}
                    className="w-full h-auto rounded-lg mb-2 hover:opacity-55"
                  />
                  <p>LegalMind Chatbot Design</p>
                  <div className="flex justify-end mt-5"> {/* Added div for alignment */}
                    <button className="bg-[#DAD3BE] hover:bg-[#254336] hover:text-white text-[#254336] font-bold py-2 px-4 rounded">
                      <a href="https://www.figma.com/design/5FiFe768VHAkZ9RPRqxCyn/Untitled?node-id=0-1&t=u9gds6vuyQJwnLLE-1">View Design</a>
                    </button>
                  </div>
                </div>
              </div>
              <div >
                <h3 className="text-xl text-white font-semibold">Projects</h3>
                <div className="flex justify-lefts mt-5 space-x-5"> {/* Added div for alignment */}
                  <div className='bg-[#6B8A7A] rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col'>
                    <p className='font-semibold'>Smart Scan</p>
                    <hr className="border-t border-[#6B8A7A] p-1 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
                    <p>Allows the student to scan their qr code for their attendnace</p>
                    <div className="flex justify-end mt-5">
                      <button className="bg-[#DAD3BE] hover:bg-[#254336] hover:text-white text-[#254336] font-bold py-2 px-4 rounded">
                        <a href="https://attendance-olive.vercel.app/">View Page</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <hr className="border-t border-[#6B8A7A] p-1 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
            <div className="space-y-4 bg-[#6B8A7A] p-3 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <p>If you have any questions or would like to get in touch, please feel free to contact me via the following methods:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Email: glaicel.araneta@gmail.com</li>
                  <li>Phone: 09099288025</li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/glaicel-araneta-aa067b316/" className="text-white-500 hover:underline">Glaicel A. Araneta</a></li>
                </ul>
              </div>

            </div>
          </div>
        );
      default:
        return <p>Page not found.</p>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4 min-h-screen text-white ">
      <div className="w-full md:w-1/3 shadow-xl bg-[#DAD3BE] rounded-lg p-6 mb-4 md:mb-0">
        <div className="rounded-lg p-3 flex flex-col items-center">
          <Image
            src="/araneta.png"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full bg-[#677D6A]"
          />
          <p className="mt-2 font-bold text-xl text-black">GLAICEL A. ARANETA</p>
          <div className="flex items-center space-y-4 p-3 bg-[#1A3636] rounded-lg mt-2 hover:bg-[#6B8A7A] hover:text-[#254336]">
            <p className='text-white'>Web Developer</p>
          </div>
        </div>
        <hr className="border-t border-[#6B8A7A] p-1 ms-2 bg-gradient-to-r from-transparen via-neutral-500 to-transparent opacity-25" />
        <div className='flex flex-col ms-[15%] mt-2'>
          <div className='flex flex-row space-x-3 mb-3'>
            <svg className="w-6 h-6 text-[#003C43] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path fill="currentColor" d="M8 1V0v1Zm4 0V0v1Zm2 4v1h1V5h-1ZM6 5H5v1h1V5Zm2-3h4V0H8v2Zm4 0a1 1 0 0 1 .707.293L14.121.879A3 3 0 0 0 12 0v2Zm.707.293A1 1 0 0 1 13 3h2a3 3 0 0 0-.879-2.121l-1.414 1.414ZM13 3v2h2V3h-2Zm1 1H6v2h8V4ZM7 5V3H5v2h2Zm0-2a1 1 0 0 1 .293-.707L5.879.879A3 3 0 0 0 5 3h2Zm.293-.707A1 1 0 0 1 8 2V0a3 3 0 0 0-2.121.879l1.414 1.414ZM2 6h16V4H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v12h2V6h-2Zm0 12v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V6H0v12h2ZM2 6V4a2 2 0 0 0-2 2h2Zm16.293 3.293C16.557 11.029 13.366 12 10 12c-3.366 0-6.557-.97-8.293-2.707L.293 10.707C2.557 12.971 6.366 14 10 14c3.634 0 7.444-1.03 9.707-3.293l-1.414-1.414ZM10 9v2a2 2 0 0 0 2-2h-2Zm0 0H8a2 2 0 0 0 2 2V9Zm0 0V7a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Z" />
            </svg>
            <p className='text-black'><strong>Email:</strong> glaicel.araneta@gmail.com</p>
          </div>
          <div className='flex flex-row space-x-3 mb-3'>
            <svg className="w-6 h-6 text-[#003C43] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1h1a1 1 0 1 0 0-2H3v-2h1a1 1 0 1 0 0-2H3v-2h1a1 1 0 1 0 0-2H3V6h1a1 1 0 1 0 0-2H3V3h1a1 1 0 1 0 0-2H3V2a1 1 0 0 1 1-1Z" />
              <path d="M12 7a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h4ZM6.69 11.497a1 1 0 0 0 1.383-.372A3.457 3.457 0 0 1 10 10c.522 0 1.03.127 1.926 1.125a1 1 0 0 0 1.525-1.3C12.25 8.075 11.103 7 10 7a5.444 5.444 0 0 0-4.614 2.503 1 1 0 0 0 .372 1.38ZM13 12h-2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2ZM12.574 15H10a1 1 0 1 0 0 2h2.001c.313 0 .613.115.843.324l.014.012c.228.207.514.664.142 1.194a1 1 0 1 0 1.662 1.11c.882-1.32.752-2.872-.347-3.858a3.462 3.462 0 0 0-2.742-.782Z" />
            </svg>
            <p className='text-black'><strong>Phone:</strong> 09099288025</p>
          </div>
          <div className='flex flex-row space-x-3 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#003C43] dark:text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
            </svg>
            <p className='text-black'><strong>Birthday:</strong>November 19, 2001</p>
          </div>
          <div className='flex flex-row space-x-3 mb-3'>
            <svg className="w-6 h-6 text-[#003C43] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path fill="currentColor" d="M14.333 1H3.666A2.67 2.67 0 0 0 1 3.667v10.666A2.67 2.67 0 0 0 3.667 17h10.666A2.67 2.67 0 0 0 17 14.333V3.666A2.67 2.67 0 0 0 14.333 1Zm.61 2.025L9.053 8.917a.672.672 0 0 1-.962 0L3.06 3.025h11.883ZM3 13.72V3.947l3.89 3.89L3 13.72ZM4.28 15h-1.2l3.914-3.914.706.707L4.28 15ZM15 13.72l-3.89-3.89 3.89-3.89V13.72Zm0 .28h-1.28l-2.42-2.42.706-.707L15 14.28ZM10.414 10.1 9.707 9.393l3.806-3.806v1.2l-3.1 3.1Zm1.4 1.4-.707-.707 1.913-1.913.707.707-1.913 1.913Z" />
            </svg>
            <p className='text-black'><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/glaicel-araneta-aa067b316/" className="text-black hover:underline">Glaicel A. Araneta</a></p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 shadow-lg rounded-lg p-6 overflow-y-auto bg-[#254336]" style={{ maxHeight: '100vh' }}>
        <div className="flex flex-row items-center justify-between mb-4"> {/* Change flex direction to row */}
          <nav className="text-black rounded-lg p-3 w-full bg-[#DAD3BE] md:bg-[#DAD3BE]"> {/* Added responsive background colors */}
            <ul className="flex justify-left space-x-5 text-black">
              <li className="group">
                <a
                  href="#"
                  onClick={() => setCurrentPage(1)}
                  className={` ${currentPage === 1 ? 'border-b-4 border-[#135D66]' : ''}`}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentPage(2)}
                  className={` ${currentPage === 2 ? 'border-b-4 border-[#135D66]' : ''}`}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setCurrentPage(3)}
                  className={` ${currentPage === 3 ? 'border-b-4 border-[#135D66]' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 border-b-4 border-transparent bg-[#DAD3BE] rounded-lg text-black p-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="hidden md:inline">Resume</span> {/* Hide text on smaller screens */}
          </div>
        </div>

        <div className="mt-4 bg-[#254336] rounded-lg p-4">
          {renderPageContent()}
        </div>
      </div>

    </div>
  );
}
