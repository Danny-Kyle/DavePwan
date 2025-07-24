"use client";

import React from "react"; // useMemo is still unused, removed from import
import { useRouter } from "next/router";
import Image from "next/image";

const PictureDetailPage = () => {
  const router = useRouter();
  const { id, title, description, src } = router.query;

  // --- UPDATED: differential array with unique download paths ---
  const differential = [
    {
      text: `<div>
        <p>Urban Legacy Site </p>
        <p>Located at Ebute kekere way, Afolabi bus stop, Igando road Lagos. Urban Legacy This land is situated in a prime location within a built-up environment, boasting excellent accessibility to major roads and public transportation. Its proximity to essential amenities such as schools and shopping centers etc, makes it an attractive option for potential buyers, investors and developers.</p>
        <p>Legacy Haven Estate, Ode-Omi</p>
        <p>Actual Price N10M</p>
        <p>▪ N1M for 300sqm</p>
        <p>The Estate is close to the following landmarks </p>
        <p>📍Lagos State University (LASU)</p>
        <p>📍IBA Housing Estate</p>
        <p>📍Alaba International Market</p>
        <p>📍Saint Michael Anglican church</p>
        <p>Subscribe and Experience Serene living in the most sought after Location In Lagos!</p>
        <p>The Estate comes with document of registered survey.</p>
        <P>The estate Has been cleared and sand filling of road channel in the estate is ongoing.</p>
      </div>`,
      // Unique download paths and filenames for Urban Legacy
      subscriptionFormUrl: "/downloads/Urban_Legacy_Sub_Form.pdf",
      flyerUrl: "/downloads/urbanLegacy.jpg",
      subscriptionFormFileName: "Urban_Legacy_Subscription_Form.pdf",
      flyerFileName: "Urban_Legacy_Flyer.jpg",
    },
    {
      text: `<div>
        <p>Eastview Premium Properties</p>
        <p>Prime Location in Owerri</p>
        <p>Starting from N5M</p>
        <p>▪ N3M for 400sqm</p>
        <p>Close to:</p>
        <p>📍Eko Atlantic City</p>
        <p>📍Victoria Island Business District</p>
        <p>📍Tafawa Balewa Square</p>
        <p>Experience luxury living at its finest!</p>
      </div>`,
      // Unique download paths and filenames for Eastview
      subscriptionFormUrl: "/downloads/eastview-subscription-form.pdf",
      flyerUrl: "/downloads/eastview-flyer.pdf",
      subscriptionFormFileName: "Eastview_Subscription_Form.pdf",
      flyerFileName: "Eastview_Flyer.png",
    },
    {
      text: `<div>
        <p>Aku Ruo Uno Development</p>
        <p>Located in Achalla  Ibusa, Asaba. Currently selling for 10m. It is also located in a buy and build environment,  with houses already in site on the property, and along a major road</p>
        <p>Premium Price N10M</p>
        <p>Aku Ruo Uno 2 has the following notable landmarks</p>
        <p>📍Government Villa Estate</p>
        <p>📍Marketsquare Supermarket</p>
        <p>📍Road Safety head office</p>
        <p>📍Immigration and Civil Defence head office</p>
        <p>📍Koka Flyover</p>
        <p>Aku Ruo Uno 2 is also 15 mins away from the Koka Flyover on Asaba- Onitsha express Road.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/AKU_RUO_UNO_PHASE 2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/akuRuo.png",
      subscriptionFormFileName: "Aku_Ruo_Uno_Subscription_Form.pdf",
      flyerFileName: "Aku_Ruo_Uno_Flyer.png",
    },
    {
      text: `<div>
        <p>Kole Ayo Estate – Buy & Build in Fast-Rising Epe</p>
        <p>Located at Anobi London Road, Irangushi, Epe, Kole Ayo Estate comes with a Freehold title and immediate allocation.</p>
        <p>It’s near major landmarks like YabaTech Epe, LASUED, and St. Augustine University. Fenced, plotted, and ready for development—ideal for investors or homebuyers in a fast-growing area.</p>
        <p>The Estate is close to the following landmarks</p>
        <p>📍Family homes estate</p>
        <p>📍Yaba Tech, Epe campus</p>
        <p>📍LASUED (Lagos State University of education)</p>
        <p>📍Micheal otedola housing estate</p>
        <p>📍St. Augustine University</p>
        <p>The estate has been fenced, plotted and allocation is immediately for buy and build.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>As the area continues to develop, the property's value is likely to appreciate, making it an attractive opportunity for investors, developers, or homebuyers.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/KOLE-AYO_SUBS_FORM.pdf",
      flyerUrl: "/downloads/koleAyo.png",
      subscriptionFormFileName: "KOLE-AYO_Subscription_Form.pdf",
      flyerFileName: "KOLE-AYO_Flyer.png",
    },
    {
      text: `<div>
        <p>Elite Empire</p>
        <p>Located in Avu-oforola.Elite Empire is located in an area with great value on high quality investment.</p>
        <p>Elite Empire has the following notable landmarks </p>
        <p>📍Control bus stop.</p>
        <p>📍.Avu Junction.</p>
        <p>📍Imo State Auto Mobile </p>
        <p>📍Deeper life Camp.Ground.</p>
        <p>📍E-park Farm.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
        <p>As the area continues to develop, the property's value is likely to appreciate, making it an attractive opportunity for investors, developers, or homebuyers.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/ELITE_EMPIRE _ESTATE _SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteEmpire.png",
      subscriptionFormFileName: "ELITE_EMPIRE _ESTATE_Subscription_Form.pdf",
      flyerFileName: "ELITE_EMPIRE _ESTATE_Flyer.png",
    },
    {
      text: `<div>
        <p>Alaoma luxury Estate </p>
        <p>Located in Ochicha, Obike , Ngor -Okpala. Alaoma Luxury is located in an area with great prospect on high return on investment.</p>
        <p>Alaoma luxury Estate has the following notable landmarks</p>
        <p>📍Tony Chukwu Factory</p>
        <p>📍Zion Ministry by Ebuka Obi </p>
        <p>📍Imo State Auto Mobile </p>
        <p>📍Umueme Market Squre.</p>
        <p>📍Ngor-Okpala Local Government.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
        <p>As the area continues to develop, the property's value is likely to appreciate, making it an attractive opportunity for investors, developers, or homebuyers.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/ALAOMA _LUXURY_ESTATE_SUBS_FORM.pdf",
      flyerUrl: "/downloads/alaomaLuxury.png",
      subscriptionFormFileName: "ALAOMA _LUXURY_ESTATE_Subscription_Form.pdf",
      flyerFileName: "ALAOMA _LUXURY_ESTATE_Flyer.png",
    },
    {
      text: `<div>
        <p>Elite Eastland Phase 2</p>
        <p>Located in Umuelu ,Umuagwo Community in owerri , it is just by the Port-Harcourt Owerri Express Road.Elite Eastland Phase 2 is located in an area with great prospect on high return on investment.</p>
        <p>Elite Eastland Estate has the following notable landmarks</p>
        <p>📍Bethel Golf Estate</p>
        <p>📍Umuagwo Palm oil Factory</p>
        <p>📍U.J match factory</p>
        <p>📍Region Hospital</p>
        <p>📍University of Agriculture and Environmental Science.</p>
        <P>Amongst others</p>
        <p>Elite Estate is also Few Minutes drive to the Obinze Army Barracks.</p>
        <p>TThe estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/Elite_Eastland_Phase_2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteEastland2.jpeg",
      subscriptionFormFileName: "Elite_Eastland_Phase_2_Subscription_Form.pdf",
      flyerFileName: "Elite_Eastland_Phase_2_Flyer.jpeg",
    },
    {
      text: `<div>
        <p>Greenview Estate</p>
        <p>Located in Ogwashi, Asaba capital city territory, Currently selling for 3.5m. It is also located in a buy and build environment,  with houses and hostels already springing up around the estate, and also along a major road</p>
        <p>Greenview has the following notable landmarks:</p>
        <p>📍DELTA STATE POLYTECHNIC OGWASHI</p>
        <p>📍63RD ARMY BRIGADE HEADQUARTERS</p>
        <p>📍ADMIRALTY UNIVERSITY</p>
        <p>📍ISSELLE ASAGBA EXPRESS JUNCTION</p>
        <p>📍NIGERIAN CORRECTION SERVICE</p>
        <p>Amongst others.</p>
        <p>GREENVIEW is also 15 mins away from the ISSELLE ASAGBA JUNCTION AND 20MINS AWAY on Asaba- Onitsha express Road AND 20MINS AWAY FROM ASABA INTERNATIONAL AIRPORT.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/GREEN_VIEW_ESTATE_SUBS_FORM.pdf",
      flyerUrl: "/downloads/greenView.jpeg",
      subscriptionFormFileName: "GREEN_VIEW_ESTATE_Subscription_Form.pdf",
      flyerFileName: "GREEN_VIEW_ESTATE_Flyer.png",
    },
    {
      text: `<div>
        <p>Ugwumgba Estate</p>
        <p>Located in Umuelu ,Umuagwo Community in owerri , it is just by the Port-Harcourt Owerri Express Road.Elite Eastland Phase 2 is located in an area with great prospect on high return on investment.</p>
        <p>Elite Eastland Estate has the following notable landmarks</p>
        <p>📍Bethel Golf Estate</p>
        <p>📍Umuagwo Palm oil Factory</p>
        <p>📍Imo State Auto Mobile </p>
        <p>📍Umueme Market Squre.</p>
        <p>📍Ngor-Okpala Local Government.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
        <p>As the area continues to develop, the property's value is likely to appreciate, making it an attractive opportunity for investors, developers, or homebuyers.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/UGWUMBA_SUBS_FORM.pdf",
      flyerUrl: "/downloads/ugwumgbaEstate.jpeg",
      subscriptionFormFileName: "UGWUMBA_Subscription_Form.pdf",
      flyerFileName: "UGWUMBA_Flyer.jpeg",
    },
    {
      text: `<div>
        <p>Elite Casa Estate</p>
        <p>Located at Idasa, Agbara. The estate title is C of O.</p>
        <p>As the area continueThe growing demand for housing, commercial spaces, and amenities in the area creates a promising environment for development projects.</p>
        <p>The Estate has the following notable landmarks</p>
        <p>📍Optic estate Agbara</p>
        <p>📍Lusada</p>
        <p>📍Crown city parks resorts</p>
        <p>📍Ijuri Catholic church</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
        <p>This land property is buy and build, it has been fenced, plotted and allocation is immediately with the right vision and planning, this land property has the potential to become a thriving hub of activity, offering a strong potential for returns on investment.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/UGWUMBA_SUBS_FORM.pdf",
      flyerUrl: "/downloads/ugwumgbaEstate.jpeg",
      subscriptionFormFileName: "UGWUMBA_Subscription_Form.pdf",
      flyerFileName: "UGWUMBA_Flyer.jpeg",
    },
    {
      text: `<div>
        <p>Elite Eastland Phase 1</p>
        <p>Located in Umuelu ,Umuagwo Community in owerri , it is just by the Port-Harcourt Owerri Express Road.Elite Eastland Phase 2 is located in an area with great prospect on high return on investment.</p>
        <p>Elite Eastland Estate has the following notable landmarks</p>
        <p>📍Bethel Golf Estate</p>
        <p>📍Umuagwo Palm oil Factory</p>
        <p>📍U.J match factory</p>
        <p>📍Region Hospital</p>
        <p>📍University of Agriculture and Environmental Science.</p>
        <P>Amongst others</p>
        <p>Elite Estate is also Few Minutes drive to the Obinze Army Barracks.</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and allocation is immediately after complete payment, and in 3months gets their Documents guaranteed and ready for pickup.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/Elite_Eastland_Phase_2_SUBS_FORM.pdf",
      flyerUrl: "/downloads/eliteEastland1.jpeg",
      subscriptionFormFileName: "Elite_Eastland_Phase_2_Subscription_Form.pdf",
      flyerFileName: "Elite_Eastland_Phase_1_Flyer.jpeg",
    },
    {
      text: `<div>
        <p>Obi-Eze</p>
        <p>Located in Umueze Ibusa, Asaba. Currently selling for 10m. It is located in a buy and build environment,  with houses coming up in the area and along a major road.</p>
        <p>Obieze 2 has the following notable landmarks</p>
        <p>📍Federal Government Girls College, Ibusa</p>
        <p>📍General Hospital Ibusa</p>
        <p>📍Ibusa Main Market</p>
        <p>Amongst others.</p>
        <p>Obieze 2 is also 18 mins away from the Koka Flyover on Asaba- Onitsha express Road.</p>
        <P>Amongst others</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate has been fenced, plotted and with a with an initial deposit of 2m , subscribers get immediate allocation and with completion of payment in 3months gets their Documents.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/OBI-EZE_PHASE_2 SUBS_FORM.pdf",
      flyerUrl: "/downloads/obiEze.png",
      subscriptionFormFileName: "OBI-EZE_PHASE_Subscription_Form.pdf",
      flyerFileName: "OBI-EZE_PHASE_2_Flyer.png",
    },
    {
      text: `<div>
        <p>Elite City</p>
        <p>Located opposite Admiralty University Ibusa, Asaba. Currently selling for 6.5m. It is located in a fast developing area with several infrastructural development coming up in the area.</p>
        <p>Elite City has the following notable landmarks</p>
        <p>📍Admiralty University of Nigeria</p>
        <p>📍The New 63 Brigade Army Command Headquarters</p>
        <p>📍Bethel's Court</p>
         <p>📍Chinese Construction company</p>
        <p>Amongst others.</p>
        <p>Elite City is also 15 mins away from the Koka Flyover on Asaba- Onitsha express Road.</p>
        <P>Amongst others</p>
        <p>The estate comes with documents such as Deeds of Assignment and Registered Survey.</p>
        <p>The estate have been fenced, plotted and with a gate house at the entrance. Allocation is immediately after complete payment.</p>
      </div>`,
      // Unique download paths and filenames for Aku Ruo Uno
      subscriptionFormUrl: "/downloads/OBI-EZE_PHASE_2 SUBS_FORM.pdf",
      flyerUrl: "/downloads/obiEze.png",
      subscriptionFormFileName: "OBI-EZE_PHASE_Subscription_Form.pdf",
      flyerFileName: "OBI-EZE_PHASE_2_Flyer.png",
    },
    // --- ADD NEW PROPERTY ENTRIES HERE WITH THEIR UNIQUE DOWNLOAD PATHS ---
    // Example for a new property (e.g., id 4, title "The Elite Heights")
    // {
    //   text: `<div>
    //     <p>The Elite Heights</p>
    //     <p>Discover luxury living at The Elite Heights, nestled in a prime area with state-of-the-art facilities. Enjoy seamless access to major business districts, recreational centers, and top-tier schools. Perfect for modern families and discerning investors seeking premium real estate opportunities.</p>
    //   </div>`,
    //   subscriptionFormUrl: "/downloads/elite-heights-subscription-form.pdf",
    //   flyerUrl: "/downloads/elite-heights-flyer.pdf",
    //   subscriptionFormFileName: "Elite_Heights_Subscription_Form.pdf",
    //   flyerFileName: "Elite_Heights_Flyer.pdf",
    // },
  ];

  const getActiveDiff = (propertyTitle) => {
    // Make sure to add logic for new titles if they map to new differential entries
    if (propertyTitle === 'Elite City') return 12;
    if (propertyTitle === 'Obi-Eze') return 11;
    if (propertyTitle === 'Elite Eastland Phase 1') return 10;
    if (propertyTitle === 'Elite Casa') return 9;
    if (propertyTitle === 'Ugwumgba Estate') return 8;
    if (propertyTitle === 'Green View') return 7;
    if (propertyTitle === 'Elite Eastland Phase 2') return 6;
    if (propertyTitle === 'Alaoma Luxury') return 5;
    if (propertyTitle === 'Elite Empire') return 4;
    if (propertyTitle === 'Kole Ayo Estate') return 3;
    if (propertyTitle === 'Aku Ruo Uno') return 2;
    if (propertyTitle === 'Eastview') return 1;
    if (propertyTitle === 'Urban Legacy') return 0; // Explicitly map Urban Legacy to index 0
    // Consider a more robust mapping if you add many properties, e.g., using a map or iterating
    // For now, this explicit mapping works. If a title doesn't match, it defaults to index 0.
    return 0;
  };

  const activeDiffIndex = getActiveDiff(title); // Renamed to activeDiffIndex for clarity

  // Basic check to ensure data is available, especially on initial load
  if (!router.isReady) {
    return <div className="text-center py-10">Loading details...</div>;
  }

  // Handle scenario where ID or other data might be missing unexpectedly
  if (!id || !title || !description || !src) {
    return (
      <div className="text-center py-10 text-red-600">
        Error: Picture details not found or incomplete.
      </div>
    );
  }

  // Get the specific differential data for the current property
  const currentDifferential = differential[activeDiffIndex];

  // If for some reason activeDiffIndex points to an undefined entry (e.g., new title not mapped yet)
  if (!currentDifferential) {
    return (
        <div className="text-center py-10 text-red-600">
            Error: Detailed information not available for this property.
        </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-16 py-12">
      <section className="w-full flex flex-col items-center mx-auto mb-8">
        <span className="font-semibold text-6xl mb-4">{title}</span>
        <p className="w-2/3 text-center leading-relaxed">{description}</p>
      </section>
      <div className="flex justify-center w-full gap-8 bg-gray-100 shadow-lg p-6 md:p-10">
        {/* Image Section */}
        <div className="w-full relative gap-14 items-center flex flex-col h-96 lg:h-[48rem] rounded-lg overflow-hidden mb-6">
          <div>
            <Image
              src={src}
              alt={title}
              width={350}
              height={500}
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8 w-full px-4">
            {/* Download Subscription Form Button - Dynamically sourced */}
            <a
              href={currentDifferential.subscriptionFormUrl} // Use dynamic URL
              download={currentDifferential.subscriptionFormFileName} // Use dynamic filename
              className="bg-red-500 cursor-pointer hover:bg-gray-300 text-white border border-gray-400 font-mono py-3 px-6 rounded-md transition-colors shadow text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Subscription Form
            </a>
            {/* Download Flyer Button - Dynamically sourced */}
            <a
              href={currentDifferential.flyerUrl} // Use dynamic URL
              download={currentDifferential.flyerFileName} // Use dynamic filename
              className="cursor-pointer text-red-400 border border-red-400 font-mono py-3 px-6 rounded-md transition-colors shadow text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Flyer
            </a>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col items-center mx-auto mt-8">
        <p className="font-medium text-xl mb-4">Gift Your Loved Ones The Gift Of <span className="text-red-400">Homeownership</span></p>
        <div className="flex flex-col items-start w-2/5">
          {/* Renders HTML string for property details */}
          <div dangerouslySetInnerHTML={{ __html: currentDifferential.text }} />
        </div>
      </section>
      <button
        onClick={() => router.back()}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow"
      >
        Go Back
      </button>
    </div>
  );
};

export default PictureDetailPage;