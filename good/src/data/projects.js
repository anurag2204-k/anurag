export const projects = [
  {
    id: 'newzsage',
    title: 'Newz Sage',
    shortDescription: 'A collaborative platform for news posting',
    description: 'Led a team of four to design and develop a responsive news-sharing platform with a modern UI using ShadCN. Facilitated team collaboration using Git, integrating features like article sharing, interactive voting, and media uploads. Integrated ClaimBuster news verification API with 75% accuracy for content validation and reduced bundle size by 40% using code splitting and lazy loading techniques.',
    thumbnail: 'newzsage/image.png',
    images: [
      '/newzsage/signup.png',
      '/newzsage/singuppage.png',
      '/newzsage/news.png',
      '/newzsage/newsMedia.png',
      '/newzsage/comment.png',
      '/newzsage/create.png',
      '/newzsage/contact.png',
      '/newzsage/info.png'
    ],
    technologies: [
      'Vite',
      'TypeScript',
      'Tailwind',
      'ShadCN',
      'Cloudinary',
      'MongoDB'
    ],
    features: [
      'Article sharing and voting',
      'News verification with ClaimBuster API',
      'Interactive media uploads',
      'Responsive modern UI',
      'Optimized performance with lazy loading'
    ],
    liveUrl: 'https://newz-sage.vercel.app'
  },
  {
    id: 'moviegig',
    title: 'MovieGig',
    shortDescription: 'A personal movie watchlist platform',
    description: 'Developed a full-stack movie application using the PERN stack, featuring seamless TMDb API integration handling over 1,000 daily requests. Implemented a robust JWT-based authentication system and achieved 99% uptime with a reliable backend structure.',
    thumbnail: '/moviegig/filmroll.png',
    images: [
      '/moviegig/dashboard.png',
      '/moviegig/landing.png',
      '/moviegig/trending.png',
      '/moviegig/watchlist.png',
      '/moviegig/signup.png'
    ],
    technologies: [
      'React',
      'Vite',
      'Express.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma'
    ],
    features: [
      'Custom watchlists',
      'JWT-based authentication',
      'TMDb API integration',
      'Responsive design',
      'Efficient backend with Prisma and PostgreSQL'
    ],
    liveUrl: 'https://moviegig.onrender.com/'
  },
  {
    id: 'discord',
    title: 'Discord Clone',
    shortDescription: 'Team management and collaboration platform',
    description: 'Built a Discord-like platform with Next.js, TypeScript, and Tailwind using ShadCN for a modern UI. Integrated LiveKit for seamless video/audio calls, Socket.IO for real-time messaging, and Clerk for secure user authentication.',
    thumbnail: '/discord/discord.jpg',
    images: [
      '/projects/betterteam/screen1.png',
      '/projects/betterteam/screen2.png',
      '/projects/betterteam/screen3.png'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'TailwindCSS',
      'UploadThing',
      'ShadcnUI',
      'Clerk',
      'Socket.io',
      'LiveKit'

    ],
    features: [
      'Client form validation and handling using react-hook-form',
      'POST, DELETE, and GET routes in route handlers (app/api & pages)',
      'Real-time messaging using Socket.io',
      'Send attachments as messages using UploadThing',
      'Delete & Edit messages in real time for all users',
      'Create Text, Audio and Video call Channels',
      '1:1 conversation between members',
      '1:1 video calls between members',
      'Member management (Kick, Role change Guest / Moderator)',
      'Unique invite link generation & full working invite system',
      'Infinite loading for messages in batches of 10 (tanstack/query)',
      'Server creation and customization',
      'Beautiful UI using TailwindCSS and ShadcnUI',
      'Full responsivity and mobile UI',
      'Light / Dark mode',
      'Websocket fallback: Polling with alerts',
      'ORM using Prisma',
      'MySQL database using neondb',
      'Authentication with Clerk',
      
       

    ],
    liveUrl: 'https://discordd-vert.vercel.app'
  }
];
