import { motion } from "framer-motion";
import "./Team.css";

const FRIENDS = [
  {
    name: "Abhash Somkuwar",
    img: "./somkuwar.jpeg",
    role: "Full Stack Developer & Automation Expert",
    link: "https://www.linkedin.com/in/abhassomkuwar03?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    intro: `Dedicated to building self-optimizing systems and user-centric applications.`
  },
  {
    name: "Shrasti Gupta",
    img: "./shrasti.jpeg",
    role: "Frontend + UI Designer",
    link: "https://www.linkedin.com/in/shrasti-gupta-125b45281?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    intro: `Crafting intelligent systems, decoding data, and solving real-world problems with purpose.`
  }
];


export function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="team-title"
      >
        My <span className="grad">Creative Companions</span>
      </motion.h2>

      <div className="team-grid">
        {FRIENDS.map((f, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <img src={f.img} className="team-photo" />

            <div className="team-info">
              <h3 className="team-name">{f.name}</h3>
              <p className="team-role">{f.role}</p>
              <p className="team-intro">{f.intro}</p>

              <motion.a
                href={f.link}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="team-link"
              >
                Visit Profile →
              </motion.a>
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}
