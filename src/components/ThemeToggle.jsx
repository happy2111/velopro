import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg border border-transparent hover:border-red-600 transition-colors duration-200 flex items-center"
    aria-label="Переключить тему"
  >
    {theme === 'dark' ? (
      <Sun className="h-5 w-5 text-yellow-400" />
    ) : (
      <Moon className="h-5 w-5 text-gray-700" />
    )}
  </button>
);
export default ThemeToggle;