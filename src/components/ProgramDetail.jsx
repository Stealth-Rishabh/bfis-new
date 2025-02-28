import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ProgramDetail = ({ subjects }) => {
  const { programId } = useParams();
  const navigate = useNavigate();

  const currentSubject = subjects.find((subject) => subject.id === programId);

  if (!currentSubject) return null;

  return (
    <>
      <Helmet>
        <title>{currentSubject.meta.title}</title>
        <meta name="description" content={currentSubject.meta.description} />
      </Helmet>
      <div className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header Section */}
            <div
              className="h-64 relative"
              style={{ backgroundColor: currentSubject.bgColor }}
            >
              <img
                src={currentSubject.image}
                alt={currentSubject.title}
                className="w-full h-full object-cover opacity-75"
              />
              <button
                onClick={() => navigate("/program")}
                className="absolute top-4 left-4 bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                ← Back to Programs
              </button>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: currentSubject.bgColor }}
              >
                {currentSubject.title}
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                  <p className="text-gray-700">{currentSubject.description}</p>
                </div>

                {currentSubject.highlight && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Highlight</h3>
                    <p className="text-gray-700">{currentSubject.highlight}</p>
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Detailed Information
                  </h2>
                  <div className="prose max-w-none">
                    {currentSubject.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                {currentSubject.languages && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      Available Languages
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {currentSubject.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetail;
