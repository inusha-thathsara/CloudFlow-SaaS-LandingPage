function ThemeSwitcher() {
    try {
        const [isDark, setIsDark] = React.useState(false);

        React.useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setIsDark(true);
                document.documentElement.classList.add('dark');
            }
        }, []);

        const toggleTheme = () => {
            setIsDark(!isDark);
            if (isDark) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        };

        return (
            <button
                data-name="theme-switcher"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {isDark ? (
                    <i className="fas fa-sun text-yellow-500 text-xl"></i>
                ) : (
                    <i className="fas fa-moon text-gray-600 text-xl"></i>
                )}
            </button>
        );
    } catch (error) {
        console.error('ThemeSwitcher error:', error);
        reportError(error);
        return null;
    }
}
