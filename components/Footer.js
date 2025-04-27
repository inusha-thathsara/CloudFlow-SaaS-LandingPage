function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 dark:bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div data-name="footer-brand" className="col-span-1">
                            <h3 className="text-xl font-bold mb-4">CloudFlow</h3>
                            <p className="text-gray-400">
                                Transforming businesses with innovative cloud solutions.
                            </p>
                        </div>
                        
                        <div data-name="footer-product">
                            <h4 className="text-lg font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-company">
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/inusha-gunasekara-9996632a5" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/inusha-thathsara" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div data-name="footer-bottom" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 CloudFlow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        reportError(error);
        return null;
    }
}
