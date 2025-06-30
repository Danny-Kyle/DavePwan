import React from "react";

const AboutContentBlock = ({ title, items, content, image, columns }) => {
  return (
    <div className="my-6">
      {image ? <Image src={image} alt="image" /> : <></>}
      {content ? (
        <p className="text-white">{content}</p>
      ) : (
        <div
          className={`grid grid-cols-1 ${
            columns === 3 ? "md:grid-cols-3" : "md:grid-cols-1"
          } gap-4`}
        >
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutContentBlock;
