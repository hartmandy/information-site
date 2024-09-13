export default function Hero() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            It began with Lots of Love
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            At All Kids Academy we are dedicated to providing love and care to
            children so they can have a special place to come away from home.
          </p>
          <a
            href="mailto:academyallkids@gmail.com"
            className="inline-block bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-[#621114] transition"
          >
            Contact Us
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src="/hero.jpg"
            alt="Photo of business, A&B Tires"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
