import { AboutAgain } from "@/features/AboutAgain";
import AboutContentBlock from "@/features/AboutContentBlock";
import AboutHeroSection from "@/features/AboutHeroSection";
import AboutImageGrid from "@/features/AboutImageGrid";
import { AboutVisionCard } from "@/features/AboutVisionCard";
import AboutWhyChooseBelow from "@/features/AboutWhyChooseBelow";
import React from "react";

const index = () => {
  const visionData = [
    {
      title: "Our Purpose",
      description:
        "To be the most influential real estate in the world within a budget, homes around the world.",
    },
    {
      title: "Our Vision",
      description:
        "Exposing clients to the goldmine that is land and housing globally, enabling diaspora.",
    },
    {
      title: "Our Vision",
      description:
        "We are ELITE, upholding excellence, in our dealings with clients with efficiency.",
    },
  ];

  const whoWeAreContent = `PWAN ELITE is a real estate marketing, development and management company; a subsidiary of the PWAN (Property World Africa Network) Group, a company with a vision to make home ownership dreams reality.
PWAN ELITE is passionate about revealing the amazing potentials available in the real estate industry to the world by providing cost-effective luxury properties to help clients become land/home owners easily and faster. Just as the thrill of an online casino wazamba experience can captivate players, we aim to captivate our clients with our commitment to transparency and trust. We are also dedicated to regaining the lost trust of many in the real estate industry, especially Nigerians in the diaspora. 

We guarantee scam-free properties and transactions, preventing fraudulent real estate dealings. We have years of experience and expertise in the real estate industry and will only deliver the very best of services to our clients.`;

  return (
    <div>
      <AboutHeroSection
        title="About Our Real Estate Journey"
        description="Exposing clients to goldmine that abounds in land and housing globally and spreading empowerment through real estate opportunities."
      />
      <main className="max-w-7xl mx-auto p-6">
        <section className="my-12">
          <AboutImageGrid />
          <p className="text-2xl leading-relaxed text-center px-4 max-w-3xl mx-auto font-semibold mb-4">
            <span className="text-red-500">PWAN</span>{" "}
            <span className="text-blue-500">ELITE</span> is passionate about
            revealing the amazing potentials available in the real estate
            industry to the world by providing cost-effective luxury properties
            to help clients become land/home owners easily and faster.
          </p>

          {/* <article className="flex flex-row justify-between my-12">
            <div>
              <p className="gap-2 flex flex-row">
                <span>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.35817 1.07169L1.85817 3.13419C1.14317 3.40919 0.666504 4.08752 0.666504 4.85752V9.17502C0.666504 13.8042 3.79234 18.1217 7.99984 19.1759C12.2073 18.1217 15.3332 13.8042 15.3332 9.17502V4.85752C15.3325 4.48449 15.2181 4.12054 15.0052 3.81425C14.7922 3.50796 14.4909 3.27391 14.1415 3.14335L8.6415 1.08085C8.229 0.915853 7.77067 0.915853 7.35817 1.07169ZM6.37734 12.5942L4.434 10.6509C4.34914 10.566 4.28182 10.4652 4.23589 10.3544C4.18996 10.2435 4.16632 10.1246 4.16632 10.0046C4.16632 9.88458 4.18996 9.76574 4.23589 9.65485C4.28182 9.54397 4.34914 9.44322 4.434 9.35835C4.51887 9.27349 4.61962 9.20617 4.73051 9.16024C4.84139 9.11431 4.96023 9.09067 5.08025 9.09067C5.20027 9.09067 5.31912 9.11431 5.43 9.16024C5.54089 9.20617 5.64164 9.27349 5.7265 9.35835L7.019 10.6509L10.264 7.40585C10.3489 7.32099 10.4496 7.25367 10.5605 7.20774C10.6714 7.16181 10.7902 7.13817 10.9103 7.13817C11.0303 7.13817 11.1491 7.16181 11.26 7.20774C11.3709 7.25367 11.4716 7.32099 11.5565 7.40585C11.6414 7.49072 11.7087 7.59147 11.7546 7.70235C11.8005 7.81324 11.8242 7.93208 11.8242 8.0521C11.8242 8.17212 11.8005 8.29097 11.7546 8.40185C11.7087 8.51273 11.6414 8.61349 11.5565 8.69835L7.66984 12.585C7.3215 12.9517 6.73484 12.9517 6.37734 12.5942Z"
                      fill="#FF0000"
                    />
                  </svg>
                </span>
                Values
              </p>
              <h2 className="text-3xl font-semibold mb-4">Our Purpose</h2>
            </div>

            <div className="w-2xl">
              Lorem ipsum dolor sit amet consectetur. Feugiat tortor morbi
              dictum egestas donec mus at porttitor. Magna facilisis duis nunc
              porttitor metus suspendisse turpis dignissim.
            </div>
          </article> */}

          <article className="flex flex-col lg:flex-row justify-between my-8 lg:my-12 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full lg:w-1/2">
    <p className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700 mb-2">
      <span>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.35817 1.07169L1.85817 3.13419C1.14317 3.40919 0.666504 4.08752 0.666504 4.85752V9.17502C0.666504 13.8042 3.79234 18.1217 7.99984 19.1759C12.2073 18.1217 15.3332 13.8042 15.3332 9.17502V4.85752C15.3325 4.48449 15.2181 4.12054 15.0052 3.81425C14.7922 3.50796 14.4909 3.27391 14.1415 3.14335L8.6415 1.08085C8.229 0.915853 7.77067 0.915853 7.35817 1.07169ZM6.37734 12.5942L4.434 10.6509C4.34914 10.566 4.28182 10.4652 4.23589 10.3544C4.18996 10.2435 4.16632 10.1246 4.16632 10.0046C4.16632 9.88458 4.18996 9.76574 4.23589 9.65485C4.28182 9.54397 4.34914 9.44322 4.434 9.35835C4.51887 9.27349 4.61962 9.20617 4.73051 9.16024C4.84139 9.11431 4.96023 9.09067 5.08025 9.09067C5.20027 9.09067 5.31912 9.11431 5.43 9.16024C5.54089 9.20617 5.64164 9.27349 5.7265 9.35835L7.019 10.6509L10.264 7.40585C10.3489 7.32099 10.4496 7.25367 10.5605 7.20774C10.6714 7.16181 10.7902 7.13817 10.9103 7.13817C11.0303 7.13817 11.1491 7.16181 11.26 7.20774C11.3709 7.25367 11.4716 7.32099 11.5565 7.40585C11.6414 7.49072 11.7087 7.59147 11.7546 7.70235C11.8005 7.81324 11.8242 7.93208 11.8242 8.0521C11.8242 8.17212 11.8005 8.29097 11.7546 8.40185C11.7087 8.51273 11.6414 8.61349 11.5565 8.69835L7.66984 12.585C7.3215 12.9517 6.73484 12.9517 6.37734 12.5942Z"
            fill="#FF0000"
          />
        </svg>
      </span>
      Values
    </p>
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 leading-tight">Our Purpose</h2>
  </div>

  <div className="w-full lg:w-1/2 text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose">
    Lorem ipsum dolor sit amet consectetur. Feugiat tortor morbi
    dictum egestas donec mus at porttitor. Magna facilisis duis nunc
    porttitor metus suspendisse turpis dignissim.
  </div>
</article>

          {/* <AboutContentBlock
            title="Our Purpose and Values"
            items={purposeAndValues}
            columns={3}
          /> */}
        </section>

<section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Guiding Principles</h2> {/* Added a section title */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionData.map((vision, index) => (
              <AboutVisionCard
                key={index}
                title={vision.title}
                description={vision.description}
              />
            ))}
          </div>
        </div>
      </section>

      </main>
      <div>
      <AboutAgain />
        <AboutWhyChooseBelow />
      </div>
    </div>
  );
};

export default index;
