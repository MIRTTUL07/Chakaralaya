import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-#0A0A0A pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <div className=" text-5xl font-semibold text-white ">
                            FAQs

                            </div>
                            <h2 className="mb-4 text-3xl font-semibold text-white my-5">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-white">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-16 ">
                        <AccordionItem
                            header="What is Chakaralaya Analytics Pvt Ltd?"
                            text="Chakaralaya Analytics is a forward-thinking startup incubated in VNEST (VIT-Chennai) dedicated to transforming the Manufacturing industry. Our co-founders, Dr. Sudarsanam, Dr. Venkatesh, Dr. Neelanarayanan, and Dr. Sasikumar, lead our team in providing innovative Software-as-a-Service (SaaS) products and services."
                        />
                        <AccordionItem
                            header=" What sets Chakaralaya Analytics apart from other companies?"
                            text="Our unique approach combines affordability and ease of implementation with a focus on No-Code/Low-Code Platforms. We pride ourselves on delivering solutions that are agile, efficient, and customizable to meet the diverse needs of the Manufacturing Industry."
                        />
                        <AccordionItem
                            header="How can I benefit from the Supply Market Intelligence product?"
                            text="Our Supply Market Intelligence product assists Purchase Managers in shortlisting vendors for their procurement needs. It provides valuable insights, utilizing AI-based algorithms to identify the best suppliers. Customizable for any manufacturing company, it's available as a COTS package for large organizations and as a SaaS product for MSMEs."
                        />
                        <AccordionItem
                            header="Are your products scalable for different business sizes?"
                            text="Absolutely! Our products are designed to be scalable, catering to the needs of both large manufacturing organizations (offered as COTS packages) and MSMEs (offered as SaaS products)."
                        />
                        {/* <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        /> */}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0"
                            />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0.096144"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Accordion;
