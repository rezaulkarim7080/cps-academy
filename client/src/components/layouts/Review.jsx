import React from "react";

const Review = () => {
  return (
    <div>
      <section id="testimonies" className="py-20">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1">
                Hear from Our Students
              </div>
              <p className="text-xl text-gray-100 md:text-center md:text-5xl">
                What Students Say
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg  ring-1 ring-gray-900/5 bg-white bg-opacity-10 backdrop-filter  ">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="John Doe"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Rezaul Karim
                      </h3>
                      <p className="text-gray-500 text-md">Module-1,2</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    "The Python Basics course was amazing! The content was
                    well-structured, and the hands-on projects helped me
                    understand the concepts thoroughly."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg  ring-1 ring-gray-900/5 bg-white bg-opacity-10 backdrop-filter ">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Jane Smith"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Rezaul Karim
                      </h3>
                      <p className="text-gray-500 text-md">Level-2</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    "I loved the Web Development course! It gave me the
                    confidence to start building my own websites. Highly
                    recommended!"
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative p-6 space-y-6 leading-none rounded-lg  ring-1 ring-gray-900/5  bg-white bg-opacity-10 backdrop-filter ">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/65.jpg"
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt="Michael Lee"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Rezaul Karim
                      </h3>
                      <p className="text-gray-500 text-md">Level-1</p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    "This Data Science course exceeded my expectations. The
                    instructors were very knowledgeable, and the real-world
                    examples were invaluable."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
