### Mental Health Support App

#### Overview
The Mental Health Support App is a web-based application designed to provide mental health resources and support for individuals affected by social injustice or political unrest. It offers access to licensed counselors, a community forum, self-help resources, and an early warning system for detecting high-risk behaviors. The app is developed using modern web technologies and ensures user privacy and security.

#### Tech Stack
- **Frontend**: React + Tailwind CSS
- **Backend**: Firebase
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Deployment**: Vercel

---

### Table of Contents
1. [Features](#features)
2. [Project Setup](#project-setup)
3. [Folder Structure](#folder-structure)
4. [Environment Variables](#environment-variables)
5. [Firebase Setup](#firebase-setup)
6. [Authentication](#authentication)
7. [Database Structure](#database-structure)
8. [Deploying to Vercel](#deploying-to-vercel)
9. [Contributing](#contributing)
10. [License](#license)

---

### Features

1. **Access to Licensed Counselors**
   - Users can schedule online sessions with certified counselors.
   - Counselors can provide mental health support through video, chat, or messaging.

2. **Community Forum**
   - A space where users can engage in discussions about their experiences, share resources, and provide support.
   - Moderated to ensure respectful and constructive conversations.

3. **Self-Help Resources**
   - Articles, videos, and guides that provide tips and techniques for improving mental health.
   - Organized into categories such as anxiety, stress, trauma, etc.

4. **Early Warning System**
   - A system that analyzes user input (e.g., self-assessment forms, forum posts) to detect high-risk behaviors.
   - Provides alerts and recommendations for seeking help if patterns indicate potential harm.

---

### Project Setup

#### Prerequisites
- Node.js installed
- Firebase project created
- Vercel account for deployment

#### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mental-health-support-app.git
   cd mental-health-support-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   This will run the app in development mode at `http://localhost:3000`.

---

### Folder Structure
```bash
mental-health-support-app/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── firebase.js
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

- **components/**: Contains reusable React components.
- **contexts/**: Context API for managing global state (e.g., authentication, theme).
- **pages/**: Different page views such as Home, Forum, Resources, etc.
- **services/**: Contains Firebase service functions (e.g., Firestore interactions, authentication).
- **utils/**: Helper functions and utilities.
- **firebase.js**: Firebase configuration and initialization.

---

### Environment Variables

In the root directory, create a `.env` file and add the following variables:

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
```

---

### Firebase Setup

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and enable Firestore and Authentication.

2. **Enable Firebase Authentication:**
   - Navigate to the Authentication section in Firebase.
   - Enable Email/Password authentication and Google Authentication.

3. **Configure Firestore:**
   - Set up the following collections:
     - **users**: To store user details.
     - **counselors**: To store counselor profiles.
     - **forumPosts**: For community discussions.
     - **resources**: For articles, videos, and other self-help resources.
     - **warnings**: To track any high-risk alerts detected by the early warning system.

---

### Authentication

- **Sign-up/Login**: The app supports both email/password and Google authentication using Firebase.
- **Protected Routes**: Some features like counselor access and the community forum are restricted to authenticated users.
- **Logout**: A logout button is available in the user profile section.

Firebase Authentication is set up using React Context API to manage the authentication state. Example:

```js
import { useContext, createContext, useEffect, useState } from 'react';
import { auth } from './firebase'; // Firebase config

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

### Database Structure

The database uses Firebase Firestore with the following collections:

- **users**: Stores user details including name, email, profile photo, and type (patient or counselor).
- **counselors**: Stores counselor-specific details such as qualifications, specialties, and availability.
- **forumPosts**: A collection for storing community forum posts, each document having fields like `content`, `author`, `timestamp`.
- **resources**: Self-help articles and materials, organized into categories (e.g., stress management, coping mechanisms).
- **warnings**: Data for the early warning system to track alerts for users displaying high-risk behaviors.

Example structure:

```json
{
  "users": [
    {
      "id": "user1",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "patient"
    }
  ],
  "counselors": [
    {
      "id": "counselor1",
      "name": "Dr. Smith",
      "specialty": "Trauma Counselor",
      "availability": ["Monday", "Wednesday"]
    }
  ],
  "forumPosts": [
    {
      "id": "post1",
      "content": "How do you cope with anxiety?",
      "author": "user1",
      "timestamp": 1632456789
    }
  ],
  "resources": [
    {
      "id": "resource1",
      "title": "Managing Stress",
      "category": "Stress",
      "content": "Lorem ipsum..."
    }
  ],
  "warnings": [
    {
      "id": "warning1",
      "user": "user1",
      "riskLevel": "high",
      "timestamp": 1632456789
    }
  ]
}
```

---

### Deploying to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy the app:**
   ```bash
   vercel
   ```

3. **Connect your GitHub repository** if prompted, and set the appropriate environment variables in the Vercel dashboard.

---

### Contributing

We welcome contributions from the community. Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

