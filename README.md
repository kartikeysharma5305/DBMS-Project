# IILM university Portal

A comprehensive university management system built with Next.js, Prisma, and PostgreSQL. This application serves as a central hub for students, faculty, and administrators to manage academic activities and institutional operations.

## 🎓 Features

### Application Management

- Multi-step application process for different student types:
  - Undergraduate
  - Graduate
  - Transfer
  - International
- Document upload and management
- Application status tracking
- Automated email notifications

### User Management

- Role-based authentication (Student, Faculty, Admin)
- Secure login system with JWT
- User profile management

### Academic Management

- Course enrollment and management
- Assignment submission and grading
- Schedule management
- Calendar system for events and deadlines

### Administrative Tools

- User management dashboard
- System-wide announcements
- Performance monitoring
- Activity tracking
- Report generation system

## 🛠 Tech Stack

- **Frontend**:
  - Next.js 14 with App Router
  - TailwindCSS for styling
  - Framer Motion for animations
  - React Hook Form for form management

- **Backend**:
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL (Neon)
  - JWT Authentication

- **Development**:
  - TypeScript
  - ESLint
  - Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── applications/  # Application management
│   │   ├── auth/         # Authentication
│   │   ├── courses/      # Course management
│   │   └── users/        # User management
│   ├── apply/            # Application pages
│   │   ├── undergraduate/
│   │   ├── graduate/
│   │   ├── transfer/
│   │   └── international/
│   └── portal/           # Protected routes
│       ├── admin/        # Admin dashboard
│       ├── faculty/      # Faculty portal
│       └── student/      # Student portal
├── components/           # Reusable components
│   ├── forms/           # Form components
│   ├── dashboard/       # Dashboard components
│   └── ui/             # UI components
├── lib/                 # Utility functions
│   ├── prisma.ts       # Prisma client
│   └── auth.ts         # Authentication utilities
└── types/              # TypeScript types
prisma/
├── schema.prisma       # Database schema
├── migrations/        # Database migrations
└── seed.mjs          # Seed script
```

## 🔐 Authentication

The system uses JWT-based authentication with HTTP-only cookies. Different user roles (ADMIN, FACULTY, STUDENT) have access to different parts of the application.

### Test Accounts

```
Admin:
- Email: admin@school.edu
- Password: password123

Faculty:
- Email
- math.prof@school.edu (Mathematics)
- physics.prof@school.edu (Physics)
- cs.prof@school.edu (Computer Science)
- biology.prof@school.edu (Biology)
- chemistry.prof@school.edu (Chemistry)

- Password: password123

Student:
- Email
- emma.davis@student.edu (1st year)
- alex.wang@student.edu (2nd year)
- sophia.patel@student.edu (1st year)
- marcus.brown@student.edu (3rd year)
- isabella.garcia@student.edu (2nd year)

- Password: password123
```
