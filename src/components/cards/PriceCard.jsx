import React from "react";
import { Fade } from "react-awesome-reveal";

function PriceCard() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 dark:text-white mx-auto max-w-7xl">
                <h2 className="text-4xl font-medium text-white">Choose a Plan</h2>
                <h3 className="text-2xl text-center my-4 font-light text-white">Choose the features and functionality your team need today. Easily Upgrade as your company grows. Choose the most suitable plan for your team and contact us to get a quote.</h3>

                {/* <!-- Component Start --> */}
                <div className="flex flex-wrap items-center justify-center w-full  mt-8">
                    <div className="flex flex-col max-w-4xl mt-8 overflow-hidden bg-white dark:bg-dark-secondary rounded-lg shadow-lg">
                        <div className="flex flex-col items-center p-10 bg-gray-200 dark:bg-dark-accent">
                            <span className="font-semibold dark:text-white">Basic</span>
                            <div className="flex items-center">
                                <span className="text-3xl dark:text-white">Rs.500</span>
                                {/* <span className="text-5xl font-bold">0</span>
                                <span className="text-2xl text-gray-500">
                                    /mo
                                </span> */}
                            </div>
                            <div className="font-semibold">
                                Up to 25 units
                            </div>
                        </div>
                        <div className="p-5">
                            <ul>
                                <li className="flex items-center dark:text-gray-100">
                                    <svg
                                        className="w-5 h-5 text-green-600 dark:text-green-400 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Vendor Dashboard</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Invoicing</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Online Payments</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Branded Website</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Dedicated Account Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Premium Apps</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg hover:bg-gray-500">
                                Join now
                            </button>
                        </div>
                    </div>
                    <div className="z-10 flex flex-col max-w-8xl mt-8 overflow-hidden transform bg-white dark:bg-dark-secondary rounded-lg shadow-lg md:scale-110">
                        <div className="flex flex-col items-center p-10 bg-gray-200 dark:bg-dark-accent">
                            <span className="font-semibold">Profesional</span>
                            <div className="flex items-center">
                                <span className="text-3xl">Rs.1500</span>
                                {/* <span className="text-6xl font-bold">250</span>
                                <span className="text-2xl text-gray-500">
                                    /mo
                                </span> */}
                            </div>
                            <div className="font-semibold">
                                Up to 300 units
                            </div>
                        </div>
                        <div className="p-5">
                            <ul className="dark:text-gray-100">
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Vendor Dashboard</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Invoicing</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Online Payments</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Branded Website</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Dedicated Account Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Premium Apps</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg hover:bg-gray-500">
                                Join now
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden bg-white dark:bg-dark-secondary rounded-lg shadow-lg mt-19 max-w-8xl">
                    <div className="flex flex-col items-center p-10 bg-gray-200 dark:bg-dark-accent">
                            <span className="font-semibold">Business</span>
                            <div className="flex items-center">
                                <span className="text-3xl">Rs.800</span>
                                {/* <span className="text-5xl font-bold">70</span>
                                <span className="text-2xl text-gray-500">
                                    /mo
                                </span> */}
                            </div>
                            <div className="font-semibold">
                                Up to 75 units
                            </div>
                        </div>
                        <div className="p-5">
                            <ul>
                            <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Vendor Dashboard</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Invoicing</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Online Payments</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Branded Website</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Dedicated Account Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2">Premium Apps</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg hover:bg-gray-500">
                                Join now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceCard;
