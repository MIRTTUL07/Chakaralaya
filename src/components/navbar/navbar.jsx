import React from "react";
import { Link } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    // {
    //     name: "Login",
    //     href: "https://www.google.com",
    //     current: true,
    //     linkto: "",
    // },
    { name: "Home", href: "#", current: false, linkto: "home_scroll" },
    { name: "About", href: "#", current: false, linkto: "about_scroll" },
    { name: "Services", href: "#", current: false, linkto: "services_scroll" },
    { name: "Pricing", href: "#", current: false, linkto: "pricing_scroll" },
    { name: "FAQs", href: "#", current: false, linkto: "faq_scroll" },
    { name: "Contact", href: "#", current: false, linkto: "contact_scroll" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <>
            <Disclosure as="nav" className="bg-dark-secondary sticky top-0 z-50">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex flex-shrink-0 items-center text-white text-3xl">
                                        CHAKARALAYA ANALYTICS
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) =>
                                                item.linkto ? (
                                                    <Link
                                                        to={item.linkto}
                                                        smooth={true}
                                                        duration={500}
                                                    >
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "bg-gray-900 text-white"
                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                "rounded-md px-3 py-2 text-sm font-medium"
                                                            )}
                                                            aria-current={
                                                                item.current
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-900 text-white"
                                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "rounded-md px-3 py-2 text-sm font-medium"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
