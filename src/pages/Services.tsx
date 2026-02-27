import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceData = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning Consulting",
    subtitle: "Enterprise AI Strategy, Engineering & Deployment",
    intro: "At Venus Solutions LLC, AI is approached as a strategic transformation initiative — not an experimental project. We design, build, deploy, and govern production-ready AI systems that integrate directly into enterprise operations.",
    capabilities: [
      "Predictive analytics & forecasting",
      "Intelligent process automation",
      "Natural Language Processing (NLP)",
      "Recommendation systems",
      "Anomaly detection",
      "Document intelligence",
      "Model monitoring & lifecycle management",
    ],
    engagementModel: [
      { step: "1", title: "Business Use Case Definition", desc: "Identify high-impact opportunities aligned with revenue, cost reduction, or operational efficiency goals." },
      { step: "2", title: "Data Readiness & Architecture Assessment", desc: "Evaluate data quality, governance maturity, integration complexity, and compliance requirements." },
      { step: "3", title: "Model Development & Validation", desc: "Develop explainable, validated models with bias mitigation and reproducibility controls." },
      { step: "4", title: "Production Deployment & Integration", desc: "Embed AI into enterprise workflows via APIs, dashboards, or system integrations." },
      { step: "5", title: "Governance & Monitoring", desc: "Implement drift detection, retraining pipelines, audit documentation, and performance tracking." },
    ],
    outcomes: [
      "Increased forecasting accuracy",
      "Automation of manual processes",
      "Improved customer targeting",
      "Enhanced decision-making speed",
      "Reduced operational risk",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Consulting & Modernization",
    subtitle: "Secure, Scalable Digital Infrastructure",
    intro: "We help organizations modernize legacy environments and transition to resilient cloud ecosystems designed for performance, security, and cost optimization.",
    capabilities: [
      "Cloud strategy & roadmap development",
      "Infrastructure assessment",
      "Cloud migration (Lift-and-Shift, Re-platforming, Refactoring)",
      "Hybrid & multi-cloud architecture",
      "DevOps & CI/CD implementation",
      "Infrastructure as Code (IaC)",
      "Security & compliance architecture",
    ],
    governance: [
      "Migration sequencing & rollback planning",
      "Security audits",
      "Cost monitoring frameworks",
      "Identity & access controls",
      "Performance benchmarking",
    ],
    outcomes: [
      "Increased scalability & resilience",
      "Reduced infrastructure overhead",
      "Faster deployment cycles",
      "Improved security posture",
      "Cost transparency & optimization",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data Engineering & Enterprise Analytics",
    subtitle: "Building Modern Data Ecosystems",
    intro: "We design and implement enterprise data platforms that unify fragmented systems into high-performance analytics environments.",
    capabilities: [
      "Enterprise data warehouse design",
      "Data lake & lakehouse implementation",
      "ETL / ELT pipeline engineering",
      "Real-time streaming integration",
      "Data modeling & optimization",
      "BI dashboard implementation",
      "Master Data Management (MDM)",
      "Data governance frameworks",
    ],
    approach: [
      "Scalability",
      "Data quality",
      "Performance optimization",
      "Governance controls",
      "Long-term maintainability",
    ],
    outcomes: [
      "Single source of truth",
      "Reliable executive reporting",
      "Improved strategic visibility",
      "Reduced data redundancy",
      "Scalable analytics architecture",
    ],
  },
  {
    id: "appdev",
    icon: Code2,
    title: "Application Development & Managed Services",
    subtitle: "Custom Software Built for Longevity",
    intro: "Venus Solutions LLC delivers secure, scalable, and high-performance applications tailored to enterprise needs.",
    capabilities: [
      "Custom web applications",
      "Enterprise system integrations",
      "API development",
      "Application modernization",
      "Workflow automation",
      "Performance optimization",
      "Ongoing maintenance & support",
    ],
    methodology: [
      "Discovery & requirements engineering",
      "Architecture-first design",
      "Agile development cycles",
      "Secure coding practices",
      "Code review & automated testing",
      "DevOps-driven deployment",
      "SLA-based support models",
    ],
    outcomes: [
      "Faster time-to-market",
      "Reduced technical debt",
      "Improved user adoption",
      "Scalable system architecture",
      "Long-term system reliability",
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              Enterprise-grade technology consulting and implementation solutions, from strategy through execution and ongoing support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceData.map((s, idx) => (
        <section key={s.id} id={s.id} className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-muted/50"}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {/* Header */}
              <motion.div variants={fadeUp} custom={0} className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center shrink-0">
                  <s.icon size={28} className="text-gold" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">{s.title}</h2>
                  <p className="text-gold font-medium mt-1">{s.subtitle}</p>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
                {s.intro}
              </motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Capabilities */}
                <motion.div variants={fadeUp} custom={2} className="bg-card rounded-lg p-8 shadow-card">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-5">
                    {s.id === "ai-ml" ? "Our AI Capabilities" : s.id === "cloud" ? "Our Cloud Services" : s.id === "data" ? "Core Capabilities" : "Our Capabilities"}
                  </h3>
                  <div className="space-y-3">
                    {s.capabilities.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm text-foreground">
                        <ChevronRight size={14} className="text-gold shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Secondary list */}
                <motion.div variants={fadeUp} custom={3} className="bg-card rounded-lg p-8 shadow-card">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-5">
                    {s.engagementModel ? "Structured Engagement Model" : s.governance ? "Governance & Risk Controls" : s.approach ? "Our Approach" : "Development Methodology"}
                  </h3>
                  <div className="space-y-3">
                    {(s.engagementModel || s.governance || s.approach || s.methodology || []).map((item: any, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                        {typeof item === "string" ? (
                          <>
                            <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                            {item}
                          </>
                        ) : (
                          <>
                            <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                            <div>
                              <span className="font-medium">{item.title}</span>
                              <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Outcomes */}
              <motion.div variants={fadeUp} custom={4} className="mt-8">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Business Outcomes</h3>
                <div className="flex flex-wrap gap-3">
                  {s.outcomes.map((o) => (
                    <span key={o} className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-foreground text-sm font-medium">
                      {o}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-deep mb-4">
            Need a Certified MBE Technology Partner?
          </h2>
          <p className="text-navy-deep/70 mb-8">Schedule a strategic consultation to discuss your technology objectives.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
          >
            Schedule a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
