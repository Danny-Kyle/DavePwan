// features/PropPropertiesCard.jsx
import Link from 'next/link';

const PropPropertiesCard = ({ id, title, location, description, src }) => {
  // This warning helps you debug if data is missing, but it's not the cause of the 404.
  if (!id || !title || !description || !src) {
    console.warn("PropPropertiesCard is missing required props for navigation:", { id, title, description, src });
    return (
      <div className="bg-white rounded shadow p-3 md:p-4 max-w-xs sm:max-w-sm md:w-[22rem] w-full h-auto min-h-32 flex flex-col justify-center">
        <h3 className="font-bold text-gray-800">{title || "Unknown Property"}</h3>
        <p className="text-gray-600">{location || "Unknown Location"}</p>
        <span className="text-gray-400 font-semibold mt-2">See more (Details missing for link)</span>
      </div>
    );
  }

  // --- CORRECTED: Ensure the pathname points to your dynamic route correctly ---
  const detailPageHref = {
    pathname: `/picture/${id}`, // This creates URLs like /picture/ul1, /picture/kae1 etc.
    query: {
      title: title,
      description: description,
      src: src.src, // Access the actual image path string from the imported image object
    },
  };

  return (
    <div className="bg-white rounded shadow p-3 md:p-4 max-w-xs sm:max-w-sm md:w-[22rem] w-full h-auto min-h-32 flex flex-col justify-center">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{location}</p>
      <Link href={detailPageHref} legacyBehavior>
        <a className="text-red-600 font-semibold mt-2 hover:underline">
          See more
        </a>
      </Link>
    </div>
  )
}

export default PropPropertiesCard;