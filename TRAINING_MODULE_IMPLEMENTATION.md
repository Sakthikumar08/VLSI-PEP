# Training Module Implementation

## Overview
A comprehensive training module section has been added to showcase the VLSI Centre's educational offerings, inspired by a circular diagram design that highlights various training programs.

## Files Created

### 1. **TrainingModules.jsx** (`/src/components/TrainingModules.jsx`)
A reusable component featuring:
- **Circular Diagram Design**: Central "Our Offerings" circle with 5 training modules positioned around it
- **Training Modules**:
  - VLSI Design & Verification
  - Internet of Things
  - Mechanical (FEA)
  - Radio Frequency & Antenna Design
  - Additive Manufacturing
- **Interactive Features**:
  - Animated connections between center and modules
  - Hover effects on module cards
  - Icon-based module identification
  - Smooth reveal animations

### 2. **TrainingPage.jsx** (`/src/pages/TrainingPage.jsx`)
A dedicated full page for training programs featuring:
- **Hero Section**: Professional introduction with CTA buttons
- **Statistics Section**: Key metrics (500+ students, 50+ corporate clients, etc.)
- **Training Modules Section**: Embedded TrainingModules component
- **Benefits Section**: 6 key benefits with icons
- **Contact CTA**: Call-to-action for enrollment

## Files Modified

### 1. **HomePage.jsx** (`/src/pages/HomePage.jsx`)
- Added TrainingModules component to homepage
- Positioned after "Quick Overview" section

### 2. **Navbar.jsx** (`/src/components/Navbar.jsx`)
- Added "Training" navigation item
- Link positioned between "About" and "Tools"

### 3. **App.jsx** (`/src/App.jsx`)
- Added TrainingPage route: `/training`
- Imported TrainingPage component

## Design Features

### Central Circle (Our Offerings)
- Blue gradient background (from-blue-600 to-blue-700)
- Dark banner with "OUR OFFERINGS" title
- Lists 5 program types:
  - Corporate Training
  - Career Builder Programs
  - Internship Programs
  - Faculty Development Program
  - Short-Term Programs

### Module Cards
Each training module includes:
- **Icon Circle**: Gradient background with lucide-react icons
- **Title**: Module name
- **Description**: Brief overview
- **Connection Dot**: Visual link to center circle
- **Hover Effect**: "Learn More →" text appears on hover
- **Animations**: Smooth scale and position transitions

### Color Scheme
- VLSI Design & Verification: Blue gradient
- Internet of Things: Purple gradient
- Mechanical (FEA): Cyan gradient
- Radio Frequency & Antenna Design: Indigo gradient
- Additive Manufacturing: Emerald gradient

## Responsive Design
- **Desktop**: Full circular layout with absolute positioning
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Cards adapt to smaller screens (may need further optimization)

## Animations
- **Framer Motion** powered animations:
  - Fade-in effects on scroll
  - Staggered reveals for module cards
  - SVG line drawing for connections
  - Hover scale and lift effects
  - Smooth transitions throughout

## Theme Support
- Fully supports both light and dark themes
- Dynamic colors based on `isDark` state from ThemeContext
- Gradient adjustments for optimal contrast

## Usage

### Homepage Integration
The training module automatically displays on the homepage after the "Quick Overview" section.

### Standalone Page
Access the full training page at `/training` or via the navigation menu.

### Component Reuse
The TrainingModules component can be embedded in other pages:
```jsx
import TrainingModules from "../components/TrainingModules"

// In your component
<TrainingModules />
```

## Future Enhancements
1. Add individual detail pages for each training module
2. Implement course catalog with pricing
3. Add enrollment forms
4. Include testimonials from past trainees
5. Add downloadable brochure functionality
6. Integrate with backend for dynamic content
7. Optimize mobile layout for better circular display
8. Add video introductions for each module

## Technical Stack
- **React 19**: Component framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Tailwind CSS**: Styling framework
- **React Router**: Navigation

## Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Hover and focus states
- Screen reader friendly content

## Performance
- Optimized animations with GPU acceleration
- Lazy loading via viewport detection
- Minimal re-renders
- Efficient SVG rendering
