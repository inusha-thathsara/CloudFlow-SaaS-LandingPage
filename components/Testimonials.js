function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "CEO at TechStart",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                quote: "CloudFlow has transformed how we operate. The productivity gains have been remarkable."
            },
            {
                name: "Mark Thompson",
                role: "CTO at InnovateCorp",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                quote: "The best SaaS platform we've used. The AI features are game-changing for our workflow."
            },
            {
                name: "Emily Chen",
                role: "Product Manager",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                quote: "Incredible support team and robust features. CloudFlow has exceeded our expectations."
            }
        ];

        return (
            <section data-name="testimonials-section" id="testimonials" className="py-20 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-3xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
                        <p data-name="testimonials-subtitle" className="text-gray-600 dark:text-gray-300">Trusted by thousands of companies worldwide</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} 
                                 data-name={`testimonial-card-${index}`}
                                 className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials error:', error);
        reportError(error);
        return null;
    }
}
