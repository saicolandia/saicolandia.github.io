# Medical Quiz Game with Three.js

An engaging 3D medical quiz application built with Three.js that allows users to test their medical knowledge through interactive quizzes with multiple-choice questions, track their progress with animated visualizations, and create custom quizzes.

## Features

### 3D Medical Environment
- Animated DNA helix with rotating structure
- Medical symbols (caduceus) with floating animation
- Pulsing heart model with anatomical details
- Rotating brain model with interactive elements
- Floating medical particles throughout the environment
- Interactive 3D objects (stethoscope, clipboard, medical book)

### Quiz Functionality
- Multiple-choice questions with support for multiple correct answers
- Visual feedback for correct and incorrect answers
- Comprehensive scoring system
- Animated responses with particle effects
- Sample quizzes on anatomy and medical terminology

### Progress Tracking Dashboard
- 2D charts showing quiz performance history
- 3D visualization of scores with animated bars
- Statistics tracking with percentages and counts
- Visual achievements and progress indicators

### Quiz Management
- Create new quizzes with custom medical topics
- Add/edit questions with multiple answers
- Configure which answers are correct
- Save and manage multiple quizzes

## Usage Instructions

### Taking a Quiz
1. Click on the stethoscope in the 3D environment or use the "Start Quiz" button
2. Read the question carefully
3. Select all answers you believe are correct by clicking on them
4. Click "Submit Answer" to check your response
5. Review the feedback and correct answers
6. Click "Next Question" to continue
7. After completing all questions, view your results in the dashboard

### Viewing Progress
1. Click on the clipboard in the 3D environment or use the "View Progress" button
2. Explore your quiz history in the 2D chart
3. Check your statistics and performance metrics
4. View the 3D visualization of your scores

### Managing Quizzes
1. Click on the medical book in the 3D environment or use the "Manage Quizzes" button
2. Select an existing quiz to edit or click "Create New Quiz"
3. Add a title and description for your quiz
4. Create questions by entering the question text
5. Add multiple answer options
6. Check the boxes for correct answers (multiple can be selected)
7. Add more questions as needed
8. Click "Save Quiz" when finished

## Technical Details

This application is built with:
- Three.js for 3D rendering and animations
- JavaScript for application logic
- HTML/CSS for user interface
- Local Storage for saving quiz data and progress

## Development

To run the application locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser at the provided URL

To build for production:
```
npm run build
```

## License

ISC License
