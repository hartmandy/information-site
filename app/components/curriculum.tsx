const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Curriculum</h2>
          <a
            href="https://img1.wsimg.com/blobby/go/2f1b3fbf-3055-4ca0-8e4a-e615a02d74d6/downloads/AKA%20policy.docx%20(1).pdf?ver=1725133074289"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold text-2xl hover:text-gray-900"
          >
            View Our Policies
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        {/* Grid Layout for Side by Side Sections */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Toddler Curriculum */}
          <div className="p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Toddler</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              In our toddler classrooms, we use{" "}
              <strong>Experience Toddler</strong>. This is a research-based
              curriculum. Experience Toddler supports each child's individual
              natural growth and development through responsive care and sensory
              learning experiences.
            </p>
          </div>

          {/* Preschool Curriculum */}
          <div className="p-6 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-4">Preschool</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              In our Preschool classrooms, we use{" "}
              <strong>Experience Preschool</strong>. With this curriculum, your
              child will learn foundational skills. Your child will enjoy
              activities involving math, music and movement, literacy, science,
              art, and social skills daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
