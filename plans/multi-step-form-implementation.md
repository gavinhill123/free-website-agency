# Multi-Step Form Implementation Plan

## Overview
Replace the hero section content with a multi-step form similar to the "Triple Glazing Windows & Doors" example. The form will collect business information through 4 questions, then show a contact form.

## Requirements Analysis

### Form Structure
- **Total Steps**: 5 (4 questions + 1 contact form)
- **Visual Style**: White card with rounded corners, centered on hero background
- **Progress Indicator**: Green progress bar at the top of the card
- **Privacy Message**: Lock icon with text at bottom of card

### Questions and Options

#### Step 1: Business Type
**Question**: "What type of business do you run?"
- Trades (Plumber, Electrician, Builder, etc.)
- Local Service Business
- E-commerce
- Professional Services
- Other

#### Step 2: Current Website Status
**Question**: "Which best describes your current website?"
- I don't have a website
- I have one, but it doesn't generate leads
- I have one, but it looks outdated
- I'm not sure

#### Step 3: Business Goals
**Question**: "What would more leads mean for your business?"
- More phone calls & leads
- More bookings
- I just need a professional online presence

#### Step 4: Timeline
**Question**: "How soon would you like to get started?"
- ASAP
- Within 30 days
- Just researching

#### Step 5: Contact Form
**Fields**:
- Name (required)
- Email (required)
- Phone (required)
- Submit button

## Technical Implementation

### HTML Structure

```
hero section
├── hero-background (existing)
├── container
│   └── multi-step-form-wrapper
│       └── multi-step-form-card
│           ├── progress-bar-container
│           │   └── progress-bar-fill
│           ├── form-step (step-1) - visible
│           │   ├── question-title
│           │   └── options-container
│           │       └── option-button × 5
│           ├── form-step (step-2) - hidden
│           ├── form-step (step-3) - hidden
│           ├── form-step (step-4) - hidden
│           ├── form-step (step-5) - hidden (contact form)
│           └── privacy-message
└── hero-wave (existing)
```

### CSS Styling Requirements

#### Multi-Step Form Card
- Background: white
- Border-radius: 20px
- Max-width: 700px
- Padding: 40px
- Box-shadow: 0 20px 60px rgba(0,0,0,0.3)
- Centered horizontally and vertically

#### Progress Bar
- Height: 8px
- Background: #E0E0E0 (light gray)
- Border-radius: 10px
- Fill color: #4CAF50 (green)
- Smooth transition animation
- Width calculation: (currentStep / totalSteps) × 100%

#### Question Title
- Font-size: 28px
- Font-weight: 700
- Color: var(--primary-purple) or dark blue
- Text-align: center
- Margin-bottom: 30px

#### Option Buttons
- Display: block or flex
- Width: 100%
- Padding: 20px 30px
- Background: white
- Border: 2px solid #E0E0E0
- Border-radius: 12px
- Font-size: 18px
- Font-weight: 600
- Cursor: pointer
- Transition: all 0.3s ease
- Margin-bottom: 15px

**Hover State**:
- Border-color: var(--accent-blue)
- Background: rgba(25, 118, 210, 0.05)
- Transform: translateX(5px)

**Selected State**:
- Border-color: var(--accent-blue)
- Background: rgba(25, 118, 210, 0.1)
- Box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2)

#### Privacy Message
- Display: flex
- Align-items: center
- Gap: 10px
- Font-size: 14px
- Color: #757575
- Margin-top: 30px
- Padding-top: 20px
- Border-top: 1px solid #E0E0E0

#### Contact Form (Step 5)
- Input fields: same styling as existing contact form
- Full width inputs
- Padding: 15px 20px
- Border: 2px solid #E0E0E0
- Border-radius: 10px
- Margin-bottom: 20px

### JavaScript Functionality

#### Core Functions Needed

1. **initMultiStepForm()**
   - Initialize form state
   - Set up event listeners
   - Show first step

2. **showStep(stepNumber)**
   - Hide all steps
   - Show target step
   - Update progress bar
   - Scroll to top of form

3. **updateProgressBar()**
   - Calculate progress percentage
   - Animate progress bar width
   - Formula: (currentStep / totalSteps) × 100

4. **handleOptionClick(option, stepNumber)**
   - Store selected answer
   - Highlight selected option
   - Auto-advance to next step after 500ms delay

5. **collectFormData()**
   - Gather all answers from steps 1-4
   - Collect contact form data
   - Prepare for submission

6. **submitForm()**
   - Validate contact form fields
   - Submit data (console.log or API call)
   - Show success message
   - Optional: redirect to thank you page

#### Data Storage Structure

```javascript
const formData = {
  businessType: '',
  websiteStatus: '',
  businessGoals: '',
  timeline: '',
  contact: {
    name: '',
    email: '',
    phone: ''
  }
};
```

### Responsive Design

#### Desktop (> 1024px)
- Form card: max-width 700px
- Font-size: 28px for questions
- Option buttons: full width with padding

#### Tablet (768px - 1024px)
- Form card: max-width 600px
- Font-size: 24px for questions
- Reduce padding slightly

#### Mobile (< 768px)
- Form card: max-width 95%
- Font-size: 22px for questions
- Option buttons: smaller padding
- Stack elements vertically
- Reduce margins and spacing

## Implementation Steps

### Phase 1: HTML Structure
1. Locate hero section in [`index.html`](index.html:49)
2. Replace hero-content div with multi-step-form-wrapper
3. Create 5 form-step divs (4 questions + 1 contact form)
4. Add progress bar HTML
5. Add privacy message HTML
6. Keep hero-background and hero-wave unchanged

### Phase 2: CSS Styling
1. Add multi-step form styles to [`css/style.css`](css/style.css:1)
2. Style form card container
3. Style progress bar and animation
4. Style question titles
5. Style option buttons with hover/active states
6. Style privacy message
7. Add responsive media queries to [`css/responsive.css`](css/responsive.css:1)

### Phase 3: JavaScript Logic
1. Create new file or add to [`js/main.js`](js/main.js:1)
2. Implement step navigation
3. Add progress bar updates
4. Handle option selection
5. Implement data collection
6. Add contact form validation
7. Handle form submission

### Phase 4: Testing
1. Test each step transition
2. Verify progress bar updates correctly
3. Test option selection and data storage
4. Validate contact form submission
5. Test responsive behavior on mobile
6. Check browser compatibility

## Design Specifications

### Colors
- Progress bar: #4CAF50 (green)
- Primary text: #2C3E50 or var(--primary-purple)
- Border default: #E0E0E0
- Border hover/active: var(--accent-blue) #1976D2
- Background: white
- Privacy text: #757575

### Typography
- Question: 28px, bold, Montserrat
- Options: 18px, semi-bold, Open Sans
- Privacy: 14px, regular, Open Sans

### Spacing
- Card padding: 40px
- Option margin: 15px bottom
- Progress bar margin: 20px bottom
- Privacy margin: 30px top

### Animations
- Progress bar: 0.5s ease
- Option hover: 0.3s ease
- Step transition: 0.4s fade

## Files to Modify

1. **[`index.html`](index.html:49)** - Replace hero section content
2. **[`css/style.css`](css/style.css:206)** - Add multi-step form styles
3. **[`css/responsive.css`](css/responsive.css:1)** - Add responsive styles
4. **[`js/main.js`](js/main.js:1)** - Add form logic

## Success Criteria

- ✅ Form displays correctly in hero section
- ✅ Progress bar updates smoothly
- ✅ All 4 questions display with correct options
- ✅ Options are clickable and visually respond
- ✅ Auto-advance to next step after selection
- ✅ Contact form appears on step 5
- ✅ Form data is collected and can be submitted
- ✅ Responsive on all device sizes
- ✅ Header/navigation remains unchanged
- ✅ Smooth animations and transitions

## Notes

- Keep existing hero background image
- Maintain existing color scheme where possible
- Ensure accessibility (keyboard navigation, ARIA labels)
- Consider adding back button for steps 2-5
- Add loading state for form submission
- Consider adding form validation messages
