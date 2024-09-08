import { Link } from "@remix-run/react";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between">
        <div className="flex flex-col space-y-2">
          {/* All Kids Academy Header */}
          <h3 className="text-2xl">All Kids Academy</h3>
          <p className="">152 Weaverville Road</p>
          <p className="">Asheville, NC 28804</p>
          <p className="mt-4 ">
            <strong>Hours:</strong>
          </p>
          <p>Monday - Friday: 7:00am - 5:30pm</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
        <div className="flex flex-col space-y-2">
          {/* Footer Menu Links */}
          <Link to="#about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="#curriculum" className="text-white hover:text-gray-300">
            Curriculum
          </Link>
          <Link to="#policies" className="text-white hover:text-gray-300">
            Policies
          </Link>
          <Link to="#contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div>
          {/* Facebook Icon as a Link */}
          <a
            href="https://www.facebook.com/AllKidsAcademyAsheville"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white hover:text-gray-300 text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
