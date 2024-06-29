import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-gray-500 p-6 md:p-10 rounded-xl border-2 shadow-lg max-w-5xl w-full md:w-4/5 lg:w-3/4 xl:w-2/3'>
                {/* Skills Section */}
                <div className='mb-8'>
                    <div className='text-white flex flex-col items-center text-3xl md:text-4xl py-4 font-semibold md:-mt-16'>
                        <h1 className='text-white text-center text-3xl md:text-4xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Skills
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-4" />
                    </div>
                    <div className='text-white justify-center flex flex-wrap md:flex-nowrap gap-6 md:gap-9 py-2 mt-24 font-bold text-xl md:text-2xl md:-mt-9'>
                        <ul className='space-y-3 md:space-y-5'>
                            <li className='list-disc'>ReactJs</li>
                            <li className="list-disc">JavaScript</li>
                            <li className="list-disc">HTML & CSS</li>
                            <li className="list-disc">TailwindCSS</li>
                        </ul>
                        <ul className='space-y-3 md:space-y-5'>
                            <li className="list-disc">DSA</li>
                            <li className='list-disc'>C</li>
                            <li className='list-disc'>Vite.js</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-4 ml-40" />

                </div>

                {/* Education Section */}
                <div className='mb-8'>
                    <div className='text-white flex flex-col items-center text-3xl md:text-4xl py-4 font-semibold md:-mt-14'>
                        <h1 className='text-white text-center text-3xl md:text-4xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Education
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-4" />
                    </div>
                    <div className='text-white justify-center flex gap-6 md:gap-9 py-6 md:py-9 font-bold text-xl md:text-2xl md:-mt-16 ml-6 md:ml-9'>
                        <ul className='space-y-3 md:space-y-5'>
                            <li className='list-disc'>BSc (Computer Science): Barwale College, Jalna-431203</li>
                            <li className='list-disc'>MSc (Scientific Computing): Savitribai Phule Pune University, Pune-411011</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-4 ml-40 -mt-9" />

                </div>

                {/* Hobbies Section */}
                <div>
                    <div className='text-white flex flex-col items-center text-4xl py-4 font-semibold -mt-9'>
                        <h1 className='text-white text-center text-4xl py-2 px-4 font-bold inline-block rounded-xl'>
                            Hobbies
                        </h1>
                        <hr className="border-t-4 border-green-500 w-2/3 my-4" />
                    </div>
                    <div className="text-white flex items-center justify-center gap-9 font-bold text-2xl shadow-lg py-9 -mt-16">
                        <ul className='space-y-5 text-center'>
                            <li className=''>Designing</li>
                            <li className=''>Sketching</li>
                            <li className=''>Dance</li>
                            <li className=''>Baking</li>
                            <li className=' w-2/3 ml-28'>Management / Organizing Different Activities</li>
                        </ul>
                    </div>
                    <hr className="border-t-4 border-green-500 w-2/3 my-4 ml-40 -mt-9" />

                </div>
            </div>
        </div>
    );
}

export default About;


