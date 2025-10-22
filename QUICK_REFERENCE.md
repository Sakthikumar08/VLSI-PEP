# Theme Context API - Quick Reference Card

## 🚀 Quick Start

### Import the Hook
```jsx
import { useTheme } from '../context/ThemeContext'
```

### Use in Component
```jsx
const MyComponent = () => {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
```

---

## 📋 Available Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `isDark` | boolean | Current theme state | `isDark ? 'dark' : 'light'` |
| `theme` | string | Theme as string | `theme === 'dark'` |
| `toggleTheme` | function | Toggle between themes | `onClick={toggleTheme}` |
| `setTheme` | function | Set specific theme | `setTheme('dark')` |

---

## 💡 Common Patterns

### Conditional Classes
```jsx
const { isDark } = useTheme()

// Pattern 1: Ternary
<div className={isDark ? 'bg-gray-800' : 'bg-white'}>

// Pattern 2: Template literal
<div className={`card ${isDark ? 'dark' : 'light'}`}>

// Pattern 3: Tailwind dark mode (RECOMMENDED)
<div className="bg-white dark:bg-gray-800">
```

### Toggle Button
```jsx
const { isDark, toggleTheme } = useTheme()

<button onClick={toggleTheme}>
  {isDark ? '☀️' : '🌙'}
</button>
```

### Set Specific Theme
```jsx
const { setTheme } = useTheme()

<button onClick={() => setTheme('dark')}>Dark</button>
<button onClick={() => setTheme('light')}>Light</button>
```

### Check Theme
```jsx
const { theme } = useTheme()

{theme === 'dark' && <DarkModeFeature />}
{theme === 'light' && <LightModeFeature />}
```

---

## 🎨 Styling Examples

### Text Colors
```jsx
const { isDark } = useTheme()

<h1 className={isDark ? 'text-white' : 'text-gray-900'}>

// OR with Tailwind dark mode
<h1 className="text-gray-900 dark:text-white">
```

### Backgrounds
```jsx
<div className={isDark ? 'bg-gray-800' : 'bg-white'}>

// OR with Tailwind
<div className="bg-white dark:bg-gray-800">
```

### Borders
```jsx
<div className={isDark ? 'border-gray-600' : 'border-gray-200'}>

// OR with Tailwind
<div className="border-gray-200 dark:border-gray-600">
```

### Gradients
```jsx
<div className={
  isDark 
    ? 'bg-gradient-to-r from-gray-800 to-gray-700'
    : 'bg-gradient-to-r from-blue-50 to-purple-50'
}>
```

---

## 🔧 Setup (Already Done)

### main.jsx
```jsx
import { ThemeProvider } from './context/ThemeContext'

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Any Component
```jsx
import { useTheme } from '../context/ThemeContext'

const Component = () => {
  const { isDark } = useTheme()
  // Use isDark for styling
}
```

---

## ✅ Do's and Don'ts

### ✅ DO
```jsx
// Use the hook
const { isDark } = useTheme()

// Destructure only what you need
const { toggleTheme } = useTheme()

// Use Tailwind dark mode classes
className="bg-white dark:bg-gray-800"

// Combine with template literals
className={`card ${isDark ? 'shadow-lg' : 'shadow-md'}`}
```

### ❌ DON'T
```jsx
// Don't access context directly
const context = useContext(ThemeContext)

// Don't destructure everything if not needed
const { isDark, theme, toggleTheme, setTheme } = useTheme()

// Don't create local state for theme
const [dark, setDark] = useState(isDark) // Wrong!

// Don't pass as props (defeats the purpose)
<Component isDark={isDark} /> // Wrong!
```

---

## 🎯 Real-World Examples

### Card Component
```jsx
const Card = ({ children }) => {
  const { isDark } = useTheme()
  
  return (
    <div className={`
      rounded-lg p-6 shadow-lg
      ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
    `}>
      {children}
    </div>
  )
}
```

### Button Component
```jsx
const Button = ({ onClick, children }) => {
  const { isDark } = useTheme()
  
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded
        ${isDark 
          ? 'bg-blue-600 hover:bg-blue-700' 
          : 'bg-blue-500 hover:bg-blue-600'
        }
        text-white
      `}
    >
      {children}
    </button>
  )
}
```

### Navigation
```jsx
const Nav = () => {
  const { isDark } = useTheme()
  
  return (
    <nav className={
      isDark 
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900'
    }>
      {/* Navigation items */}
    </nav>
  )
}
```

---

## 🐛 Troubleshooting

### Error: "useTheme must be used within a ThemeProvider"
**Solution:** Ensure ThemeProvider wraps your app in main.jsx

### Theme not persisting
**Solution:** Check localStorage is enabled in browser

### Theme not applying
**Solution:** Verify 'dark' class is added to `<html>` element

---

## 📱 Mobile Example
```jsx
const MobileMenu = () => {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <div className={`
      p-4 rounded-lg
      ${isDark ? 'bg-gray-800' : 'bg-white'}
    `}>
      <button onClick={toggleTheme}>
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  )
}
```

---

## 🎨 Color Scheme Reference

### Light Mode
- Background: `bg-white`, `bg-gray-50`
- Text: `text-gray-900`, `text-gray-700`
- Borders: `border-gray-200`, `border-gray-300`

### Dark Mode
- Background: `bg-gray-900`, `bg-gray-800`
- Text: `text-white`, `text-gray-300`
- Borders: `border-gray-700`, `border-gray-600`

---

## 🔥 Pro Tips

1. **Use Tailwind Dark Mode Classes**
   ```jsx
   className="bg-white dark:bg-gray-800"
   // Cleaner than conditionals
   ```

2. **Combine with CSS Variables**
   ```css
   :root {
     --bg-primary: white;
   }
   .dark {
     --bg-primary: #1a1a1a;
   }
   ```

3. **Memoize Components**
   ```jsx
   export default React.memo(MyComponent)
   ```

4. **Use Theme for More Than Colors**
   ```jsx
   const { isDark } = useTheme()
   const fontSize = isDark ? 'large' : 'normal'
   ```

---

## 📚 Related Files

- `src/context/ThemeContext.jsx` - Context implementation
- `src/components/ThemeToggle.jsx` - Toggle button
- `CONTEXT_API_IMPLEMENTATION.md` - Full documentation
- `THEME_ARCHITECTURE_DIAGRAM.md` - Visual diagrams

---

## 🚀 One-Liner Examples

```jsx
// Get theme state
const { isDark } = useTheme()

// Toggle theme
const { toggleTheme } = useTheme()

// Set specific theme
const { setTheme } = useTheme(); setTheme('dark')

// Get theme string
const { theme } = useTheme(); console.log(theme) // "dark" or "light"

// Complete access
const { isDark, theme, toggleTheme, setTheme } = useTheme()
```

---

**Keep this reference handy for quick lookups! 📌**
