import { FaEnvelope, FaPhone } from "react-icons/fa";
import map from "../../public/map.png";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-left mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2">
            <p className="mb-4">
              If you have questions about the opportunities available in our
              programs, feel free to send us a message. We will get back to you
              as soon as possible.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="">152 Weaverville Road</p>
              <p className="">Asheville, NC 28804</p>
              <p className="mt-4 ">
                <strong>Hours:</strong>
              </p>
              <p>Monday - Friday: 7:00am - 5:30pm</p>
              <p>Saturday - Sunday: Closed</p>
              <div className="mt-4">
                <p className="flex items-center ">
                  <FaPhone className="mr-2" />
                  <span>828-658-3466</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span>academyallkids@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-1/2">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={map}
                alt="Map to All Kids Academy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
