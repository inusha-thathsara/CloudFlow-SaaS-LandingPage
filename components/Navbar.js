function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span data-name="logo" className="text-xl font-bold gradient-text">CloudFlow</span>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <a data-name="features-link" href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
                            <a data-name="pricing-link" href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
                            <a data-name="testimonials-link" href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Testimonials</a>
                            <ThemeSwitcher />
                            <button data-name="get-started-btn" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                                Get Started
                            </button>
                        </div>

                        <div className="md:hidden flex items-center space-x-4">
                            <ThemeSwitcher />
                            <button data-name="mobile-menu-btn" 
                                    className="flex items-center" 
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div data-name="mobile-menu" className="md:hidden bg-white dark:bg-gray-900">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#features" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Features</a>
                            <a href="#pricing" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Pricing</a>
                            <a href="#testimonials" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Testimonials</a>
                            <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        reportError(error);
        return null;
    }
}
