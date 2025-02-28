import { motion } from "framer-motion";
import { Star, Award, Trophy, Medal } from "lucide-react"; // Icons for achievements
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";

const achievements = [
  {
    id: 1,
    title: "National Robotics Championship",
    description: "Won 1st place in the National Robotics Competition.",
    icon: <Trophy className="h-12 w-12 text-red-600" />,
  },
  {
    id: 2,
    title: "Science Fair Excellence",
    description: "Best Science Project Award in state-level fair.",
    icon: <Award className="h-12 w-12 text-red-600" />,
  },
  {
    id: 3,
    title: "Top Athlete Award",
    description: "Awarded to the best performer in inter-school sports.",
    icon: <Medal className="h-12 w-12 text-red-600" />,
  },
  {
    id: 4,
    title: "Art Competition Winner",
    description: "Gold medal in the International Art Competition.",
    icon: <Star className="h-12 w-12 text-red-600" />,
  },
];

export default function AchievementsSection() {
  return (
    <div id="achievements" className="w-full py-16">
      <div className="container mx-auto px-6 text-center">
        <WordPullUp
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 font-roboto mb-12"
          words="Celebrating Success"
        />
        <WordFadeIn words="Highlighting our students achievements and milestones in various fields." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
