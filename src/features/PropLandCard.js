// features/PropLandCard.jsx
import Link from 'next/link';
import Image from 'next/image';

const PropLandCard = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  subscriptionFormUrl,
  flyerUrl,
  subscriptionFormFileName,
  flyerFileName,
}) => {
  if (!id || !title || !description || !imageSrc || !subscriptionFormUrl || !subscriptionFormFileName) {
    console.warn("PropLandCard is missing required props for navigation or download:", {
      id, title, description, imageSrc, subscriptionFormUrl, subscriptionFormFileName
    });
    return (
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden flex-shrink-0">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          <span className="text-gray-400 font-semibold">Details/Downloads Unavailable</span>
        </div>
      </div>
    );
  }

  // --- CORRECTED PATHNAME FOR /pages/picture/[id].js ---
  const detailPageHref = {
    pathname: `/picture/${id}`, // Dynamic path segment for the ID
    query: {
      title: title,
      description: description,
      src: imageSrc.src, // Access the actual image path string
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 space-y-4 md:space-y-0 md:space-x-6">
      <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col w-full md:w-2/3">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={subscriptionFormUrl}
            download={subscriptionFormFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center text-sm flex-shrink-0"
          >
            Download Subscription Form
          </a>
          <Link href={detailPageHref} legacyBehavior>
            <a className="border border-black text-black hover:bg-gray-100 font-semibold py-2 px-4 rounded transition-colors text-center text-sm flex-shrink-0">
              View Details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropLandCard;