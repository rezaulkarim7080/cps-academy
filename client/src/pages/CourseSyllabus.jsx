import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

const CourseSyllabus = () => {
  return (
    <div className="px-5 my-5">
      {/* /////////////---------- */}

      <div className=" brounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
        <div className="flex flex-col justify-center items-center text-center my-auto mx-auto rounded-xl">
          <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
            Complete Competitive Programming Basic to Intermediate Level Course
          </h1>
          {/* Description */}
          <h1 className="text-base text-gray-200  p-5">
            CPS Academy এর সব Competitive Programming Course একসাথে (যার Total
            ফি ৮২০০/-) Enroll করতে পারবে সুধু মাত্র ৩৫০০/- দিয়ে। তবে ৩৫০০/- এ
            Offer april এর ১০ তারিখ পর্যন্ত এর পর ফি হবে ৫০০০/-. So Hurry up
            guys. ইন শা আল্লাহ্‌ Class শুরু হবে ১৫, মে ২০২৩ থেকে। এখনই Enroll
            করলে পাচ্ছ আগের Batch এর Class গুলির Video. তাই Enroll করার সাথে
            সাথে Course শুরু করে দিতে পারবে।
          </h1>
        </div>
      </div>
      {/* /////////////---------- */}
      <div>
        <div className=" grid md:grid-cols-3 grid-cols-1 justify-center text-center py-10">
          <div>
            <span className="font-medium  text-slate-400 text-xl">
              Enrollment Ends
            </span>{" "}
            <br />
            <span className="font-medium text-2xl">
              Before 17 December 2023
            </span>
          </div>
          <div>
            <span className="font-medium  text-slate-400 text-xl">
              Orientation Starts
            </span>{" "}
            <br />
            <span className="font-medium text-2xl"> 17 December 2023</span>
          </div>
          <div>
            <span className="font-medium  text-slate-400 text-xl">
              Class Starts
            </span>{" "}
            <br />
            <span className="font-medium text-2xl"> 18 December 2023</span>
          </div>
        </div>
      </div>
      {/* ///----- */}
      <div className="text-center py-10 ">
        <Link to={"/"} className="btn ">
          Enroll Now
        </Link>
      </div>

      {/* ///////------*/}
      <div>
        <h1 className="text-5xl font-semibold text-center py-5">
          What are the features of the course?
        </h1>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 py-10 ">
          <div className="bg-white bg-opacity-10 backdrop-filter p-5 rounded-xl">
            <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              {" "}
              Module-1: Basic C/C++ Programming and Problem-solving (25 live
              classes):
            </span>
            <br />
            <span className="font-medium  text-slate-400 text-xl">
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Basic C and C++ ( if-else, loop, array, string, function)
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Complexity analysis brouteforce, greedy
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Constructive built-in functions of C/C++
              </span>
            </span>{" "}
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter p-5 rounded-xl">
            <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              Module-2: Basic Data structure (20 classes Live) :
            </span>
            <br />
            <span className="font-medium  text-slate-400 text-xl">
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Partial sum, sliding window, range sum query, recursion,
                sorting,
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                PBDS, binary search, bisection (integer and fraction)
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                The lower and upper bound, sliding windows (range sum query)
              </span>
            </span>{" "}
          </div>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 py-10">
          <div className="bg-white bg-opacity-10 backdrop-filter p-5 rounded-xl">
            <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              Module-3: Number theory (15 class Live) :
            </span>
            <br />
            <span className="font-medium  text-slate-400 text-xl">
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Number theory
              </span>
            </span>{" "}
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter p-5 rounded-xl">
            <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
              (Level2 and 3) : Graph, Dynamic Programming, and Data Structure
              Video Course (55 hours) :
            </span>
            <br />
            <span className="font-medium  text-slate-400 text-xl">
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Graph: DFS, BFS, Tree, Dijkstra, Floyd Warshal, Bellman-Ford,
                Minimum Spanning Tree
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Dynamic Programming: 0-1Knapsack, Coin change, DP Solution
                Print, LIS, LCS, Digit DP
              </span>
              <span className="flex gap-2">
                <IoMdCheckmarkCircleOutline size={25} />
                Data Structure: DSU, Segment tree, Lazy Propagation, Merge Sort
                Tree.
              </span>
            </span>{" "}
          </div>
        </div>

        {/* ///////-----Topics will be Covered */}
        <div>
          <div className=" flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              {/* /// Module-1*/}
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-5 text-2xl">
                  Module-1: Topics will be Covered
                </summary>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">C/C++</span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Basic I/O
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Operators ( +, -, *, /, &, |, ^ )
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Conditions ( if/else )
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Loops ( for, while, do-while )
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Array/Strings
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Greedy
                  </span>
                </h1>

                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Bruteforce
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Constructive
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Functions
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  {" "}
                  <IoIosCheckmarkCircle size={25} />{" "}
                  <span className="px-4 py-1  font-medium text-lg ">
                    Built-in functions in both C and C++
                  </span>
                </h1>
              </details>
              {/* /// Module-2*/}
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-5 text-2xl ">
                  Module-2: Topics will be Covered
                </summary>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Partial Sum
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Sliding windows Range Sum Query
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Contribution Technique{" "}
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Policy-Based Data structure
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Bit masking
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Recursion
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Structure
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Structure Sorting
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Pointer
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Sorting ( Bubble, Insertion )
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Binary Search
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Upper bound / Lower bound
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Integer Bisection
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Fractional Bisection
                  </span>
                </h1>
              </details>
              {/* /// Module-3 */}
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-5 text-2xl ">
                  Module-3: Topics will be Covered
                </summary>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Harmony Series
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Sieve of Erythrose
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Prime Factorization
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Number of Divisors
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Euler Phi Function
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Sum of divisors
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Modular arithmetics
                  </span>
                </h1>
              </details>
              {/* /// */}
              {/* ///Level-2 */}
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-5 text-2xl ">
                  Level-2 : Topics will be Covered
                </summary>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Basics of Graph Theory
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Adjacency matrix, Adjacency list, and tree
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Depth-first search (DFS)
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Breadth-first search (BFS)
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    The shortest path on the unweighted graph
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Basics of Dynamic Programming
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    0-1 knapsack
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Coin change
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Dp solution print
                  </span>
                </h1>
              </details>
              {/* ///  Level-3 */}
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-5 text-2xl">
                  Level-3: Topics will be Covered
                </summary>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Dijkstra
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Belman ford
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Floyd warshal
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Disjoint set union
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Minimum spanning tree
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Intermediate-level Dynamic Programming
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Longest Common subsequence
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Longest Increasing subsequence in both dp and binary search
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Bitmask dp
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Digit dp
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Intermediate-level Data structure
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Segmentree
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Lazy Propagation
                  </span>
                </h1>
                <h1 className="flex items-center ">
                  <IoIosCheckmarkCircle size={25} />
                  <span className="px-4 py-1  font-medium text-lg ">
                    Merge sort tree
                  </span>
                </h1>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSyllabus;
