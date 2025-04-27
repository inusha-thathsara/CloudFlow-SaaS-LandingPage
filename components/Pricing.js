function Pricing() {
    try {
        const plans = [
            {
                name: "Starter",
                price: "29",
                features: [
                    "Up to 5 team members",
                    "Basic analytics",
                    "24/7 support",
                    "1 workspace"
                ],
                isPopular: false
            },
            {
                name: "Professional",
                price: "99",
                features: [
                    "Up to 20 team members",
                    "Advanced analytics",
                    "Priority support",
                    "5 workspaces",
                    "AI automation"
                ],
                isPopular: true
            },
            {
                name: "Enterprise",
                price: "299",
                features: [
                    "Unlimited team members",
                    "Custom analytics",
                    "Dedicated support",
                    "Unlimited workspaces",
                    "Advanced AI features",
                    "Custom integrations"
                ],
                isPopular: false
            }
        ];

        return (
            <section data-name="pricing-section" id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="pricing-title" className="text-3xl font-bold mb-4 dark:text-white">Simple, Transparent Pricing</h2>
                        <p data-name="pricing-subtitle" className="text-gray-600 dark:text-gray-300">Choose the plan that's right for you</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index}
                                 data-name={`pricing-card-${index}`}
                                 className={`pricing-card bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 ${
                                     plan.isPopular ? 'border-2 border-indigo-600' : ''
                                 }`}>
                                {plan.isPopular && (
                                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold mt-4 dark:text-white">{plan.name}</h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-4xl font-bold dark:text-white">${plan.price}</span>
                                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                            <i className="fas fa-check text-green-500 mr-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-2 rounded-lg ${
                                    plan.isPopular 
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                                        : 'border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900'
                                }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing error:', error);
        reportError(error);
        return null;
    }
}
