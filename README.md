# Interior Design AI Generator

A React TypeScript application that generates interior design visualizations using Google's Gemini API. The application features user authentication and a modern UI built with Chakra UI.

## Features

- User authentication with Firebase
- Interior design generation using Gemini API
- Modern and responsive UI with Chakra UI
- Room type and style selection
- Custom prompt input for personalized designs

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Google Cloud account with Gemini API access

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd interior-design-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and enable Authentication and Firestore.

4. Create a `.env` file in the root directory with the following variables:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

5. Update the Firebase configuration in `src/config/firebase.ts` with your Firebase project details.

6. Update the Gemini API configuration in `src/config/gemini.ts` with your API key.

7. Start the development server:
```bash
npm run dev
```

## Usage

1. Sign up for a new account or log in with existing credentials
2. Select a room type and design style
3. Enter additional details about your vision
4. Click "Generate Design" to create an interior design visualization
5. View and save your generated designs

## Technologies Used

- React
- TypeScript
- Firebase (Authentication & Firestore)
- Google Gemini API
- Chakra UI
- React Router
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
