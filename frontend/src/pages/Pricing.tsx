import { Appbar } from "@/components/Appbar";
import { ButtonAscent } from "@/components/ButtonAscent";
import { ButtonWhite } from "@/components/ButtonWhite";
import { Footer } from "@/components/Footer";
import { Check, X } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    document.title = "Vakil - Pricing";
    document
      .getElementById("pricing-cards")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out Vakil",
      features: [
        { text: "3 document analyses per month", included: true },
        { text: "Basic document simplification", included: true },
        { text: "Risk level detection", included: true },
        { text: "Email support", included: true },
        { text: "Advanced anomaly detection", included: false },
        { text: "Legal case insights", included: false },
        { text: "Document drafting", included: false },
        { text: "Priority support", included: false },
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For individuals and small businesses",
      features: [
        { text: "50 document analyses per month", included: true },
        { text: "Advanced document simplification", included: true },
        { text: "Comprehensive risk analysis", included: true },
        { text: "Legal case insights", included: true },
        { text: "Advanced anomaly detection", included: true },
        { text: "Document drafting assistance", included: true },
        { text: "Priority email support", included: true },
        { text: "Phone support", included: false },
      ],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For law firms and large organizations",
      features: [
        { text: "Unlimited document analyses", included: true },
        { text: "Full suite of AI features", included: true },
        { text: "Custom legal templates", included: true },
        { text: "Legal expert consultations", included: true },
        { text: "Advanced security features", included: true },
        { text: "Team collaboration tools", included: true },
        { text: "24/7 phone & chat support", included: true },
        { text: "Custom integrations", included: true },
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />

      {/* Hero Section */}
      <section className="mt-16 pt-20 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-plus font-bold text-black mb-6">
            Simple, <span className="text-primary">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-primary-text max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. All plans include our core
            AI-powered document analysis features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing-cards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-primary shadow-md scale-105"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-plus font-bold text-black mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-plus font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-primary-text ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-primary-text">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    {plan.popular ? (
                      <ButtonAscent label={plan.button} size={2} />
                    ) : (
                      <ButtonWhite label={plan.button} size={2} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-plus font-bold text-center text-black mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "Is there a free trial available?",
                answer:
                  "Yes! Our Professional plan comes with a 14-day free trial. No credit card required to get started.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely. You can cancel your subscription at any time. No long-term commitments or cancellation fees.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Yes, we use enterprise-grade encryption and security measures. Your documents are processed securely and never stored permanently.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your money.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-plus font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

