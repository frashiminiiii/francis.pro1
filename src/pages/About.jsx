import React from "react";
import { Briefcase, Globe, Book, Code } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";

export const About = ({ profile }) => (
  <PageWrapper title="About Me">
    <div className="bg-gray-900/70 p-8 md:p-12 rounded-4xl border border-gray-800 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-28 -right-28 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* About text with moderate sizes */}
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 relative z-10">
        <span className="text-xl md:text-2xl font-semibold text-white">
          I am Francis,
        </span>{" "}
        a dedicated Computer Engineering student with a passion for{" "}
        <span className="text-teal-400 font-bold">Full Stack Development</span>{" "}
        and{" "}
        <span className="text-teal-400 font-bold">Network Administration</span>.
        I focus on building scalable web applications, designing
        high-performance networks, and integrating software and hardware
        seamlessly.
      </p>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
        With every project, I strive for clean code, efficient algorithms, and
        innovative solutions to complex problems. I continually learn new
        technologies to stay ahead and provide reliable, modern solutions in
        both software and networking domains.
      </p>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-800 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Book size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Education
            </h4>
            <p className="text-white font-bold text-sm">
              Bachelor of Science in Computer Engineering
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Globe size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Major
            </h4>
            <p className="text-white font-bold text-sm">
              Network Administration
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Profession
            </h4>
            <p className="text-white font-bold text-sm">
              Full Stack Developer & Network Engineer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Code size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Skills Focus
            </h4>
            <p className="text-white font-bold text-sm">
              Web Development, Networking, API Integration, Database Management
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);
