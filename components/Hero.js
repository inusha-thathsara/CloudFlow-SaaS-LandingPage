function Hero() {
    try {
        return (
            <div data-name="hero-section" className="pt-24 pb-16 hero-gradient dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6 fade-in dark:text-white">
                            Transform Your Business with 
                            <span className="gradient-text"> CloudFlow</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl text-gray-600 dark:text-gray-300 mb-8 slide-up">
                            Streamline your workflow, boost productivity, and scale your operations effortlessly
                        </p>
                        <div data-name="hero-cta" className="flex justify-center space-x-4">
                            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors">
                                Watch Demo
                            </button>
                        </div>
                        <div data-name="hero-stats" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "10K+", label: "Active Users" },
                                { number: "98%", label: "Satisfaction Rate" },
                                { number: "24/7", label: "Support" },
                                { number: "99.9%", label: "Uptime" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero error:', error);
        reportError(error);
        return null;
    }
}
