# Visual Navigation Map - VLSI Design Centre Website

## 🗺️ Website Structure

```
┌─────────────────────────────────────────────────────────┐
│                    NAVBAR (Fixed Top)                    │
│  Logo | Home | About | Tools | Events | Collab | Projects| Faculty │
└─────────────────────────────────────────────────────────┘
                              │
                              ├─── Theme Toggle (Top Right)
                              │    └─ 🌙 / ☀️ Button
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                            │
        ▼                                            ▼
    LIGHT MODE                                  DARK MODE
    - White/Blue                               - Gray-900/800
    - Better for daylight                      - Better for night
    - Blue accents                             - Purple accents
```

## 📄 Page Hierarchy

```
🏠 Home Page (/)
│   ├─ Hero Section (Animated Icons)
│   ├─ Welcome Message
│   ├─ Quick Overview Cards (3)
│   │   ├─ World-Class Education
│   │   ├─ Cutting-Edge Research
│   │   └─ Industry Partnerships
│   └─ CTA Buttons
│       ├─ Explore Programs → /about
│       └─ View Projects → /projects
│
├─ 📖 About Page (/about)
│   ├─ Tabbed Interface
│   │   ├─ Overview
│   │   ├─ Scope
│   │   ├─ Outcome
│   │   └─ Project Areas (12 areas)
│   └─ Detailed Information
│
├─ 🛠️ Tools Page (/tools)
│   ├─ VLSI Design Tools
│   ├─ Software Platforms
│   └─ Resources
│
├─ 🎉 Events Page (/events) ⭐ NEW!
│   ├─ Filter Buttons (Top)
│   │   ├─ All Events
│   │   ├─ Conferences
│   │   ├─ Workshops
│   │   ├─ Seminars
│   │   └─ Exhibitions
│   ├─ Event Cards Grid (3 columns)
│   │   ├─ Event Image
│   │   ├─ Category Badge
│   │   ├─ Title
│   │   ├─ Date, Location, Attendees
│   │   ├─ Description Preview
│   │   └─ "View Details" Button
│   └─ Event Modal (Click any card)
│       ├─ Full-size Image
│       ├─ Complete Details
│       ├─ Event Highlights
│       └─ Close Button
│
├─ 🤝 Collaborations Page (/collaborations)
│   ├─ Industry Partners
│   └─ Academic Collaborations
│
├─ 📊 Projects Page (/projects)
│   ├─ Student Projects
│   └─ Research Initiatives
│
└─ 👨‍🏫 Faculty Page (/faculty)
    ├─ Faculty Profiles
    └─ Expertise Areas

┌─────────────────────────────────────────────────────────┐
│                    FOOTER (Bottom)                       │
│   Logo | Quick Links | Contact Info | Social Media      │
└─────────────────────────────────────────────────────────┘
```

## 🎯 User Flow Examples

### Scenario 1: Viewing Events
```
User Journey:
1. Land on Home Page
2. See "Events" in Navbar
3. Click "Events"
4. See grid of event cards
5. Click filter button (e.g., "Workshops")
6. See filtered events
7. Click event card
8. View full details in modal
9. Close modal
10. Continue browsing
```

### Scenario 2: Switching Theme
```
User Journey:
1. On any page
2. See theme toggle (top-right)
3. Click 🌙 or ☀️ icon
4. Theme switches instantly
5. Preference saved automatically
6. Works on all pages
```

### Scenario 3: Mobile Navigation
```
User Journey:
1. Open site on mobile
2. See hamburger menu (☰)
3. Tap to open menu
4. See all navigation items
5. Select desired page
6. Menu closes automatically
7. Page loads
```

## 🎨 Design Elements Map

```
┌────────────────────────────────────────────┐
│         BACKGROUND PARTICLES               │
│   • 20 floating orbs                       │
│   • Multi-color gradients                  │
│   • Smooth animations                      │
│   • Subtle blur effect                     │
└────────────────────────────────────────────┘
               │
               ├─── Color Scheme
               │    ├─ Blue (#3B82F6)
               │    ├─ Purple (#9333EA)
               │    └─ Emerald (#10B981)
               │
               └─── Animations
                    ├─ Floating motion (15-30s)
                    ├─ Hover effects (0.3s)
                    ├─ Page transitions (0.3s)
                    └─ Icon rotations (0.5s)
```

## 📱 Responsive Layout

```
DESKTOP (> 1024px)
┌───────────────────────────────────────┐
│           NAVBAR (Horizontal)          │
├───────────────────────────────────────┤
│                                        │
│   [Content in 3 columns for events]   │
│   [Card] [Card] [Card]                │
│   [Card] [Card] [Card]                │
│                                        │
├───────────────────────────────────────┤
│            FOOTER                      │
└───────────────────────────────────────┘

TABLET (768px - 1024px)
┌──────────────────────────────┐
│    NAVBAR (Horizontal)       │
├──────────────────────────────┤
│                              │
│  [Content in 2 columns]      │
│  [Card] [Card]              │
│  [Card] [Card]              │
│                              │
├──────────────────────────────┤
│         FOOTER               │
└──────────────────────────────┘

MOBILE (< 768px)
┌─────────────────┐
│  LOGO   ☰ MENU │
├─────────────────┤
│                 │
│  [Single Col]   │
│  [Card]        │
│  [Card]        │
│  [Card]        │
│                 │
├─────────────────┤
│    FOOTER       │
└─────────────────┘
```

## 🎯 Interactive Elements

```
CLICKABLE ELEMENTS:

1. Navigation Links
   └─ Click → Navigate to page

2. Theme Toggle
   └─ Click → Switch theme

3. CTA Buttons (Home)
   └─ Click → Navigate to About/Projects

4. Event Cards
   └─ Click → Open modal

5. Filter Buttons (Events)
   └─ Click → Filter events

6. Logo
   └─ Click → Go to home

7. Footer Links
   └─ Click → Navigate to page

8. Modal Close
   └─ Click → Close modal
```

## 🎊 Events Page Detailed Flow

```
EVENTS PAGE (/events)
│
├─── HEADER
│    ├─ Title: "Events & Activities"
│    └─ Subtitle: Description
│
├─── FILTERS
│    ├─ [All Events]
│    ├─ [Conferences]
│    ├─ [Workshops]
│    ├─ [Seminars]
│    └─ [Exhibitions]
│
├─── EVENT CARDS (Grid)
│    │
│    ├─ CARD 1: International VLSI Symposium
│    │   ├─ Image
│    │   ├─ Badge: Conference
│    │   ├─ Title
│    │   ├─ 📅 March 15-17, 2024
│    │   ├─ 📍 Main Auditorium
│    │   ├─ 👥 500+ Attendees
│    │   └─ [View Details]
│    │
│    ├─ CARD 2: FPGA Design Workshop
│    │   ├─ Image
│    │   ├─ Badge: Workshop
│    │   └─ ... (same structure)
│    │
│    └─ ... (8 total events)
│
└─── MODAL (When card clicked)
     ├─ Full-size Image
     ├─ Event Details
     │   ├─ Category Badge
     │   ├─ Title
     │   ├─ Date/Location/Attendees
     │   ├─ Full Description
     │   └─ Highlights List
     └─ [Close] Button
```

## 🌈 Color Reference

### Light Theme
```
Background: White → Light Blue
Text: Dark Gray
Accents: Blue, Purple, Emerald
Cards: White with shadows
```

### Dark Theme
```
Background: Dark Gray-900 → Gray-800
Text: Light Gray / White
Accents: Light Blue, Light Purple, Light Emerald
Cards: Gray-800 with dark shadows
```

## 🚀 Quick Access

```
FROM ANYWHERE:
├─ Top-Left Logo → Go Home
├─ Top-Right Button → Toggle Theme
├─ Navbar → Navigate Pages
└─ Footer Links → Quick Navigation
```

---

**This visual guide helps you understand the complete structure and navigation flow of your enhanced VLSI Design Centre website!**
