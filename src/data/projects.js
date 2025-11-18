export const projectsData = {
  'student-helper': {
    title: 'Student Helper - AI Assistant',
    image: 'student-helper.jpg',
    tech: ['Angular', 'Spring Boot', 'Ollama', 'Hugging Face'],
    description: 'AI-powered academic assistant with automatic text summarization, quiz generation, and plagiarism detection.',
    features: [
      'Automatic text summarization using AI models',
      'Interactive quiz generation from documents',
      'Plagiarism detection with similarity scoring',
      'CV writing assistance with AI suggestions',
      'Integration of multiple AI models (Ollama, Hugging Face)',
      'Angular frontend with Spring Boot backend'
    ],
    frontend: 'https://github.com/nadineziadi/StudentAssistant-Frontend',
    backend: 'https://github.com/nadineziadi/studentAssistant-Backend',
    images: [
      "student-helper.jpg",
      "Signin Edu.jpg",
      "signupEdu.jpg",
      "resumeCourse.jpg"
    ]
  },
  'gymini': {
    title: 'GYMINI - Fitness Mobile App',
    image: 'gymini.jpg',
    tech: ['Flutter', 'YouTube API', 'Gemini AI', 'Firebase'],
    description: 'Comprehensive fitness application with workout tracking, nutrition planning, and AI-powered recommendations.',
    features: [
      'Personalized workout plans with video demonstrations',
      'Nutrition tracking and meal planning',
      'Mental health support features',
      'AI-powered recommendations using Gemini',
      'Progress tracking and analytics'
    ],
    github: 'https://github.com/nadineziadi/ProjetMobileMegaMinds5SAE3',
    images: [
      "gymini.jpg",
      "modifierGym.jpg",
      "trainGym.jpg",
      "youtubeTrainGym.jpg",
      "AIrecGymini.jpg",
      "statsGymini.jpg"
    ]
  },
  'constructify': {
    title: 'Constructify - Project Management',
    image: 'constructify.jpg',
    tech: ['Angular', 'Spring Boot', 'Machine Learning', 'MySQL'],
    description: 'Construction project management platform with AI-powered features for content moderation and document summarization.',
    features: [
      'AI-powered conversations summarization',
      'Hate speech detection using ML algorithms',
      'Real-time project tracking and monitoring',
      'Interactive dashboard with data visualization',
      'Document management system',
      'Team collaboration features'
    ],
    frontend: 'https://github.com/nadineziadi/Constuctify-Front',
    backend: 'https://github.com/nadineziadi/Constructify',
    images: [
      'constructify.jpg',
      'convo (1).jpg',
      'folders.png'
    ]
  },
  'tournest': {
    title: 'TourNest - Travel Agency',
    image: 'tournest.jpg',
    tech: ['Spring Boot', 'Express.js', 'MongoDB', 'Docker', 'Keycloak'],
    description: 'Microservices-based travel agency platform with secure payments and containerized deployment.',
    features: [
      'Microservices architecture with API Gateway',
      'Secure authentication with Keycloak',
      'Docker containerization',
      'Real-time booking and payment processing',
      'Multi-database integration'
    ],
    frontend: 'https://github.com/nadineziadi/TourNest-AgenceVoyage-Frontend',
    backend: 'https://github.com/nadineziadi/TourNest-AgenceVoyage-Backend',
    images: [
      "tournest.jpg",
      "ajoutOffreVoyage.jpg",
      "backoffice.jpg",
      "reservation.jpg",
      "details.jpg",
      "list.jpg"
    ]
  },
  'esprit-elearn': {
    title: 'EspritE-learn - University Platform',
    image: 'esprit-elearn.jpg',
    tech: ['Symfony', 'JavaFX', 'MySQL'],
    description: 'University e-learning platform with timetable management and automatic room assignment.',
    features: [
      'Automated timetable generation and room assignment',
      'Student and faculty management system',
      'Course material distribution',
      'Grade management and reporting',
      'Interactive course scheduling'
    ],
    Symfony: 'https://github.com/nadineziadi/EspritE-LearnWebSymfony',
    JavaFX: 'https://github.com/nadineziadi/EspritE-LearnJavaFX',
    images: [
      "esprit-elearn.jpg"
    ]
  },
  'crm-dashboard': {
  title: 'CRM Sales Dashboard',
  image: 'crm-dashboard.jpg',
  tech: ['Power BI', 'MySQL', 'MongoDB', 'DAX', 'Data Modeling'],
  description: 'Power BI dashboard for CRM sales management with comprehensive analytics and regional performance insights.',
 features: [
    'KPI Overview - Key business metrics and performance indicators dashboard',
    'Agent Performance - Individual sales agent analytics and performance tracking',
    'Team Performance - Team-level performance monitoring and comparison metrics',
    'Agents by Region - Regional distribution and performance analysis of sales agents',
    'Teams by Region - Regional team performance comparisons and insights',
    'Geographic Skills Distribution - Skills mapping and competency analysis across regions'
  ],
  images: [
    "page1.jpg", 
    "page2.jpg",  
    "page3.jpg", 
    "page4.jpg",  
    "page 5.jpg", 
    "page6.jpg"   
  ]
}
};

export const projectsList = [
  {
    id: 'student-helper',
    title: 'Student Helper - AI Assistant',
    description: 'AI-powered academic assistant with automatic summarization, quiz generation, and plagiarism detection.',
    tech: ['Angular', 'Spring Boot', 'Ollama', 'Hugging Face'],
    image: 'student-helper.jpg'
  },
  {
    id: 'gymini',
    title: 'GYMINI - Fitness App',
    description: 'Comprehensive fitness mobile app with workout tracking, nutrition plans, and AI recommendations.',
    tech: ['Flutter', 'YouTube API', 'Gemini AI', 'Firebase'],
    image: 'gymini.jpg'
  },
  {
    id: 'constructify',
    title: 'Constructify - Project Management',
    description: 'Construction project management platform with AI summarization and content moderation.',
    tech: ['Angular', 'Spring Boot', 'Machine Learning', 'MySQL'],
    image: 'constructify.jpg'
  },
  {
    id: 'tournest',
    title: 'TourNest - Travel Agency',
    description: 'Microservices-based travel agency platform with secure payments and Docker deployment.',
    tech: ['Spring Boot', 'Express.js', 'MongoDB', 'Docker', 'Keycloak'],
    image: 'tournest.jpg'
  },
  {
    id: 'esprit-elearn',
    title: 'EspritE-learn - University Platform',
    description: 'University e-learning platform with timetable management and automatic room assignment.',
    tech: ['Symfony', 'JavaFX', 'MySQL'],
    image: 'esprit-elearn.jpg'
  },
  {
  id: 'crm-dashboard',
  title: 'CRM Sales Dashboard',
  description: 'Power BI dashboard for sales analytics with KPI tracking and regional performance insights.',
  tech: ['Power BI', 'MySQL', 'MongoDB', 'DAX'],
  image: 'crm-dashboard.jpg'
}
];