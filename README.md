# How It Works
#  Backend:

GET /api/questionnaire: Fetches the list of questions.
POST /api/questionnaire: Adds a new question.
POST /api/questionnaire/submit: Submits answers and returns the user's risk profile.
Business Logic: Calculates the risk profile based on the total score from the answers.


# Frontend:

Users answer questions one by one.
Answers are submitted to the backend.
The risk profile (e.g., Low, Moderate, High) is displayed on the result screen.

# Project Structure

frontend/
├── src/
│   ├── screens/           # React-Native screens (QuestionScreen, ResultScreen)
│   ├── redux/             # Redux slices for state management
│   ├── navigation/        # Navigation setup
│   ├── services/          # API configuration
├── App.js                 # Main entry point
├── package.json           # Dependencies

# How to run

 # 1) Navigate to the React-Native folder
cd frontend
# 2) Install dependencies
npm install
# 3) Update the API URL in src/services/api.js
const API_URL = "http://<your-backend-ip>:8080/api";
# 4) Start the app
npx expo start
# 5) Scan the QR code in the Expo CLI using your mobile device or an emulator.

# Running Tests

# 1) Add a testing library like Jest or React Testing Library.
# 2) Run tests:
npm test

