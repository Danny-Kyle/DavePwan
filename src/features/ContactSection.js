import React from "react";

const ContactSection = () => {
  return (
    <div className="py-14 px-18 gap-16 mx-12 rounded-lg flex flex-row">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <span className="flex flex-row text-wrap gap-8">
          <p>
            <strong>Email:</strong> info@pwanelite.com, pwanelites@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +234 803 494 6564, +234 702 569 7591
          </p>
        </span>
        <p className="max-w-md">
          <strong>Our Address:</strong> Lilly Estate: 25 David Adekunle Street,
          by MRS Filling Station, Amuwo Odofin, Festac Town, Lagos
        </p>
      </div>
      <div className="mt-4 bg-gray-300 p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Get in touch with us</h3>
        <form>
          <div className="flex flex-row gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 mb-2 border rounded"
          />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 mb-2 border rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-1/3 bg-red-600 text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
