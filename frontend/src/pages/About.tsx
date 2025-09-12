import { Appbar } from "@/components/Appbar";
import { ButtonAscent } from "@/components/ButtonAscent";
import { Footer } from "@/components/Footer";
import { CheckCircle, Users, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />

      {/* Hero Section */}
      <section className="mt-16 pt-20 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-plus font-bold text-black mb-6">
            Making Legal Simple,{" "}
            <span className="text-primary">One Document at a Time</span>
          </h1>
          <p className="text-xl text-primary-text max-w-3xl mx-auto leading-relaxed">
            Vakil (वकील) is your AI-powered legal assistant that transforms
            complex legal jargon into clear, actionable insights you can
            understand and act upon with confidence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-plus font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-primary-text leading-relaxed mb-8">
                Legal documents shouldn't feel like a trap. We believe everyone
                deserves to understand their rights and obligations without
                needing a law degree. Our AI platform democratizes legal
                understanding, making it accessible to everyone.
              </p>
              <div className="space-y-4">
                {[
                  "Simplify complex legal language",
                  "Detect hidden risks and unfair clauses",
                  "Provide actionable legal guidance",
                  "Connect you with relevant legal experts",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-primary-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-shade-1 to-shade-2 p-8 rounded-2xl">
              <div className="text-6xl font-plus font-bold text-primary mb-4">
                10K+
              </div>
              <div className="text-lg text-primary-text">
                Documents analyzed and simplified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-plus font-bold text-center text-black mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Security",
                description:
                  "Your documents are encrypted and secure. We never store or share your sensitive information.",
              },
              {
                icon: Users,
                title: "Accessibility",
                description:
                  "Legal understanding shouldn't be a privilege. We make it accessible to everyone, everywhere.",
              },
              {
                icon: Zap,
                title: "Simplicity",
                description:
                  "Complex doesn't have to be complicated. We turn legal complexity into clear, actionable insights.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-plus font-semibold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-plus font-bold text-black mb-6">
            Ready to Understand Your Legal Documents?
          </h2>
          <p className="text-lg text-primary-text mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Vakil to make their legal
            documents clear and actionable.
          </p>
          <ButtonAscent label="Get Started Today" size={3} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

