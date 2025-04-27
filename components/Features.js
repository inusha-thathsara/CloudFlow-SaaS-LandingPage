function Features() {
    try {
        const features = [
            {
                icon: "fas fa-bolt",
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure"
            },
            {
                icon: "fas fa-shield-alt",
                title: "Secure by Design",
                description: "Enterprise-grade security with end-to-end encryption"
            },
            {
                icon: "fas fa-chart-line",
                title: "Real-time Analytics",
                description: "Get instant insights with our powerful analytics dashboard"
            },
            {
                icon: "fas fa-magic",
                title: "AI-Powered",
                description: "Leverage advanced AI to automate your workflows"
            },
            {
                icon: "fas fa-users",
                title: "Team Collaboration",
                description: "Work seamlessly with your team in real-time"
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Mobile Ready",
                description: "Access your workspace from any device, anywhere"
            }
        ];

        return (
            <section data-name="features-section" id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="features-title" className="text-3xl font-bold mb-4 dark:text-white">Powerful Features</h2>
                        <p data-name="features-subtitle" className="text-gray-600 dark:text-gray-300">Everything you need to scale your business</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} 
                                 data-name={`feature-card-${index}`}
                                 className="feature-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                                    <i className={`${feature.icon} text-indigo-600 dark:text-indigo-400 text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features error:', error);
        reportError(error);
        return null;
    }
}
