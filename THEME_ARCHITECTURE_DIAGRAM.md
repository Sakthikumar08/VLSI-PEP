# Theme Management Architecture Diagram

## 🏗️ Complete Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        main.jsx                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    ThemeProvider                           │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │              ThemeContext State                      │  │  │
│  │  │  • isDark: boolean                                   │  │  │
│  │  │  • theme: "dark" | "light"                          │  │  │
│  │  │  • toggleTheme: () => void                          │  │  │
│  │  │  • setTheme: (theme) => void                        │  │  │
│  │  │  • localStorage persistence                          │  │  │
│  │  │  • System preference detection                       │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                           │                                │  │
│  │                           ▼                                │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │                   Router (App.jsx)                   │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Context Available to All
                              ▼
        ┌─────────────────────────────────────────────┐
        │         Components Using useTheme()         │
        └─────────────────────────────────────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                            │
        ▼                                            ▼
┌───────────────┐                          ┌───────────────┐
│  UI Components│                          │ Page Components│
└───────────────┘                          └───────────────┘
        │                                            │
        ├─ ThemeToggle                              ├─ HomePage
        ├─ Navbar                                   ├─ AboutPage
        ├─ Hero                                     ├─ ToolsPage
        ├─ About                                    ├─ EventsPage
        ├─ Tools                                    ├─ CollaborationsPage
        ├─ Projects                                 ├─ ProjectsPage
        ├─ Faculty                                  └─ FacultyPage
        ├─ Collaborations
        ├─ Footer
        └─ BackgroundParticles

```

## 🔄 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  User clicks ThemeToggle button                                 │
│  └─> onClick={toggleTheme}                                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  ThemeContext.toggleTheme()                                      │
│  └─> setIsDark(prev => !prev)                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  useEffect triggered                                             │
│  ├─> Update document.documentElement class                      │
│  │    ├─ Add "dark" class if isDark = true                      │
│  │    └─ Remove "dark" class if isDark = false                  │
│  └─> Save to localStorage                                       │
│       └─ localStorage.setItem("theme", isDark ? "dark" : "light")│
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Context value updates                                           │
│  └─> All components using useTheme() receive new value          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Components re-render with new theme                             │
│  └─> Tailwind CSS applies dark: classes automatically           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  UI UPDATED - Theme changed!                                     │
└─────────────────────────────────────────────────────────────────┘
```

## 🎨 Component Structure

### Before (Prop Drilling)
```
App.jsx (manages state)
├─ isDark state
├─ toggleTheme function
└─ Passes props down ▼

    Navbar ({ isDark })
    ├─ Receives isDark as prop
    └─ Must pass down to children ▼
    
        NavItem ({ isDark })
        └─ Receives isDark as prop
        
    Hero ({ isDark })
    └─ Receives isDark as prop
    
    About ({ isDark })
    └─ Receives isDark as prop
    
    (And so on for all components...)

PROBLEMS:
❌ Props passed through many levels
❌ Tight coupling
❌ Hard to maintain
❌ Difficult to refactor
```

### After (Context API)
```
ThemeProvider (manages state)
├─ isDark state
├─ toggleTheme function
└─ Provides context to all ▼

    App.jsx
    └─ useTheme() ✅
    
    Navbar
    └─ useTheme() ✅
    
    Hero
    └─ useTheme() ✅
    
    About
    └─ useTheme() ✅
    
    (All components access theme directly!)

BENEFITS:
✅ No prop drilling
✅ Loose coupling
✅ Easy to maintain
✅ Simple to refactor
```

## 🔌 Context Connection Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     ThemeContext.jsx                          │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  1. Create Context                                      │  │
│  │     const ThemeContext = createContext(undefined)       │  │
│  └────────────────────────────────────────────────────────┘  │
│                            │                                  │
│                            ▼                                  │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  2. Create Provider Component                           │  │
│  │     export const ThemeProvider = ({ children }) => {    │  │
│  │       const [isDark, setIsDark] = useState(...)         │  │
│  │       return (                                           │  │
│  │         <ThemeContext.Provider value={{ ... }}>        │  │
│  │           {children}                                     │  │
│  │         </ThemeContext.Provider>                        │  │
│  │       )                                                  │  │
│  │     }                                                    │  │
│  └────────────────────────────────────────────────────────┘  │
│                            │                                  │
│                            ▼                                  │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  3. Create Custom Hook                                  │  │
│  │     export const useTheme = () => {                     │  │
│  │       const context = useContext(ThemeContext)          │  │
│  │       if (!context) throw new Error(...)                │  │
│  │       return context                                    │  │
│  │     }                                                    │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                        main.jsx                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  4. Wrap App with Provider                             │  │
│  │     <ThemeProvider>                                     │  │
│  │       <App />                                           │  │
│  │     </ThemeProvider>                                    │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                   Any Component.jsx                           │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  5. Use the Hook                                        │  │
│  │     const MyComponent = () => {                         │  │
│  │       const { isDark, toggleTheme } = useTheme()        │  │
│  │       return (                                           │  │
│  │         <div className={isDark ? 'dark' : 'light'}>    │  │
│  │           <button onClick={toggleTheme}>Toggle</button> │  │
│  │         </div>                                           │  │
│  │       )                                                  │  │
│  │     }                                                    │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## 🎯 State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│              Initial State (on app load)                     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  Check localStorage     │
              │  theme === "dark"?      │
              └─────────────────────────┘
                     │             │
                    YES           NO
                     │             │
                     ▼             ▼
        ┌──────────────┐    ┌────────────────┐
        │ isDark = true│    │Check System    │
        └──────────────┘    │Preference      │
                            │prefers dark?   │
                            └────────────────┘
                                 │       │
                                YES     NO
                                 │       │
                                 ▼       ▼
                    ┌──────────────┐  ┌────────────┐
                    │isDark = true │  │isDark=false│
                    └──────────────┘  └────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   Apply to DOM          │
              │   <html class="dark">   │
              └─────────────────────────┘
```

## 🔄 Theme Toggle Flow

```
User clicks toggle button
        │
        ▼
┌─────────────────┐
│  toggleTheme()  │
└─────────────────┘
        │
        ▼
┌─────────────────────────┐
│ setIsDark(prev => !prev)│
└─────────────────────────┘
        │
        ▼
┌─────────────────────────────────────┐
│        State Changes                │
│  isDark: true → false               │
│     OR                              │
│  isDark: false → true               │
└─────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────┐
│     useEffect Triggered             │
└─────────────────────────────────────┘
        │
        ├──────────────────┬─────────────────┐
        ▼                  ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Update DOM   │  │ Save to      │  │ Update CSS   │
│ class        │  │ localStorage │  │ (automatic)  │
└──────────────┘  └──────────────┘  └──────────────┘
        │                  │                 │
        └──────────────────┴─────────────────┘
                          │
                          ▼
              ┌─────────────────────┐
              │  Components         │
              │  Re-render          │
              └─────────────────────┘
                          │
                          ▼
              ┌─────────────────────┐
              │  UI Updated!        │
              └─────────────────────┘
```

## 🧩 Component Integration

```
╔═══════════════════════════════════════════════════════════╗
║                    ThemeProvider                          ║
║  (Provides theme context to entire app)                  ║
╚═══════════════════════════════════════════════════════════╝
                          │
      ┌───────────────────┴───────────────────┐
      │                                        │
      ▼                                        ▼
┌──────────┐                            ┌──────────┐
│ App.jsx  │                            │  Pages   │
└──────────┘                            └──────────┘
      │                                        │
      ├─ useTheme()                           ├─ HomePage
      └─ Renders routes                       ├─ AboutPage
                                               ├─ ToolsPage
                                               ├─ EventsPage
      ▼                                        └─ ...
┌──────────────┐
│  Components  │
└──────────────┘
      │
      ├─ ThemeToggle (calls toggleTheme)
      ├─ Navbar (displays theme-based styles)
      ├─ Hero (uses isDark for colors)
      ├─ About (theme-based backgrounds)
      ├─ Tools (conditional classes)
      ├─ Projects (theme colors)
      ├─ Faculty (styled per theme)
      ├─ Collaborations (dynamic styles)
      ├─ Footer (theme-aware)
      └─ BackgroundParticles (theme colors)
```

## 🎨 CSS Class Application

```
┌─────────────────────────────────────────────────────────────┐
│                  When isDark = true                          │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  <html class="dark">                                         │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  Tailwind CSS activates dark: classes                       │
│  Example:                                                    │
│  <div class="bg-white dark:bg-gray-800">                   │
│               ├─────┘    └────────────┘                    │
│               │                 │                            │
│          Light mode        Dark mode (active!)              │
└─────────────────────────────────────────────────────────────┘
```

## 📱 Responsive Theme Toggle

```
Desktop View:
┌─────────────────────────────────────────────────┐
│  VLSI Design Centre        [Home][About]... 🌙 │ ← Toggle
└─────────────────────────────────────────────────┘

Mobile View:
┌──────────────────────────┐
│  VLSI Design      ☰   🌙 │ ← Toggle
└──────────────────────────┘
                      │
                      ▼ (tap ☰)
┌──────────────────────────┐
│  Home                    │
│  About                   │
│  Tools                   │
│  Events                  │
│  ...                     │
└──────────────────────────┘
```

## 🔐 Error Handling

```
┌─────────────────────────────────────────┐
│  Component tries to use useTheme()      │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Is component inside ThemeProvider?     │
└─────────────────────────────────────────┘
        │                    │
       YES                  NO
        │                    │
        ▼                    ▼
┌───────────────┐   ┌──────────────────────┐
│ Return theme  │   │ Throw Error:         │
│ context       │   │ "useTheme must be    │
│               │   │  used within a       │
│               │   │  ThemeProvider"      │
└───────────────┘   └──────────────────────┘
```

## 📊 Performance Optimization

```
Traditional Prop Drilling:
Parent changes → All children re-render

Context API:
Provider changes → Only consumers re-render

Example:
┌──────────────────────────────────────────┐
│ ThemeProvider (state changes)            │
└──────────────────────────────────────────┘
                  │
                  ▼
Only these re-render:
├─ Components using useTheme() ✅
├─ Not using useTheme() ❌ (no re-render)
└─ Optimized with React.memo if needed
```

## 🎯 Summary

```
┌─────────────────────────────────────────────────────────────┐
│                    THEME SYSTEM                              │
├─────────────────────────────────────────────────────────────┤
│  ThemeProvider                                               │
│    └─> Wraps entire app                                     │
│    └─> Manages global theme state                           │
│    └─> Provides context to all components                   │
│                                                              │
│  useTheme() Hook                                             │
│    └─> Access theme from any component                      │
│    └─> No props needed                                      │
│    └─> Simple API                                            │
│                                                              │
│  ThemeToggle Component                                       │
│    └─> Beautiful UI                                          │
│    └─> Smooth animations                                     │
│    └─> Calls toggleTheme()                                   │
│                                                              │
│  localStorage                                                │
│    └─> Persists user preference                             │
│    └─> Loads on app start                                   │
│                                                              │
│  System Preference                                           │
│    └─> Detects OS dark mode                                 │
│    └─> Fallback if no saved preference                      │
└─────────────────────────────────────────────────────────────┘
```

---

**This diagram shows the complete architecture of the theme management system using React Context API! 🎨**
