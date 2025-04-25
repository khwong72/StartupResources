import { motion } from "framer-motion";
import { Building2, Cpu, BarChart, CheckCircle } from "lucide-react";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: <Cpu className="h-6 w-6" />,
      industry: "Blockchain",
      stage: "Series B Startup",
      challenge: "Founder struggled to hire Solidity developers through traditional agencies.",
      solution: "We took ownership of the entire recruitment process – from detailed job briefs through to extending offers.",
      result: "Two specialized blockchain developers hired within 4 weeks. 100% retention rate with only a 10% placement fee.",
      color: "from-blue-500/20 to-indigo-500/20",
      iconBg: "bg-blue-100 text-blue-700",
      resultBg: "bg-blue-50",
      resultBorder: "border-blue-700",
      resultText: "text-blue-700"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      industry: "Energy SaaS",
      stage: "EMEA Scale-Up",
      challenge: "No internal recruitment team. Urgent need to expand sales operations across EMEA markets.",
      solution: "Executed comprehensive hiring campaign for key commercial positions.",
      result: "Secured Head of Sales, two Business Development Managers, and a Customer Success Manager in just 7 weeks. Q2 sales targets exceeded by 120%.",
      color: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-100 text-emerald-700",
      resultBg: "bg-emerald-50",
      resultBorder: "border-emerald-700",
      resultText: "text-emerald-700"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      industry: "Data & Analytics",
      stage: "Post-Acquisition Growth",
      challenge: "Internal hiring team overwhelmed post-acquisition, causing critical hiring to stall.",
      solution: "Stepped in as fractional recruiter to take full ownership of technical hiring.",
      result: "Successfully recruited a data scientist and data engineer within 5 weeks. Both hires now leading strategic projects for the company.",
      color: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-100 text-purple-700",
      resultBg: "bg-purple-50",
      resultBorder: "border-purple-700",
      resultText: "text-purple-700"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Case Studies</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real results from real clients we've helped scale
          </p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.industry}
              className="relative"
              variants={slideIn('up', 'tween', index * 0.1, 0.7)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} -z-10`}></div>
              <motion.div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${study.iconBg} mb-6`}>
                  {study.icon}
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{study.industry}</h3>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {study.stage}
                  </span>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Challenge</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Solution</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div className={`${study.resultBg} p-5 rounded-xl border-l-4 ${study.resultBorder} mt-6 shadow-sm relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 rounded-full bg-white/20 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 -ml-4 -mb-4 rounded-full bg-white/30 z-0"></div>
                    <div className="relative z-10 flex items-start">
                      <CheckCircle className={`w-5 h-5 ${study.resultText} mr-2 mt-0.5 flex-shrink-0`} />
                      <div>
                        <h4 className={`text-sm font-bold ${study.resultText} uppercase mb-2`}>Result</h4>
                        <p className="text-gray-800 font-medium">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 