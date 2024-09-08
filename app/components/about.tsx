const About = () => {
  return (
    <section id="about" className=" py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>

        {/* Overview Section */}
        <div className="mb-12">
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Our mission is to provide a safe, quality, and loving learning
            environment for children ages 12 months to school age. Our role is
            to encourage and support each child in all areas of development
            according to their individual learning styles.
          </p>
        </div>

        {/* History Section */}
        <div className="p-6 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold mb-4">Our History</h3>
          <p className="text-base text-gray-700 leading-relaxed">
            All Kids Academy (formerly known as Lots of Love Child Care Center)
            has been family-owned and operated for over 30 years. We are
            dedicated to providing love and care to children so they will have a
            special place to come to away from home.
          </p>
        </div>

        {/* Educational Philosophy Section */}
        <div className="p-6 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold mb-4">
            Educational Philosophy
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            We believe that a well-planned child-centered environment that
            encourages play and creative interaction among children and adults
            is essential to the development of young children. We encourage the
            development of the children in our care socially, emotionally,
            physically, cognitively, and in language through the activities that
            we provide. We believe that building a positive, strong self-esteem
            and respect in all of our children will help prepare them for a
            successful future and a good life.
          </p>
        </div>

        {/* Commitment Section */}
        <div className="p-6 rounded-lg border mb-6">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            We believe that communication with professionals in the field of
            childcare will consistently improve the quality of our program. We
            use numerous resources to gain the most effective knowledge and
            information. We believe that the care that we provide must be an
            extension of the good practices of each family. We will consistently
            communicate with parents in order to provide the best care that we
            can. We believe that our responsibility is to your child above all
            and that they deserve patience and kind guidance. Our priority is
            YOUR CHILD and we will practice this responsibility consistently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
