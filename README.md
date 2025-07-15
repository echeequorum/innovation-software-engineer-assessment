# Issue Tracker Assessment

**A technical assessment for mid-level software engineers**

## 📋 Assessment Overview

This repository contains a coding assessment designed to evaluate:
- Full-stack development skills (React, TypeScript, Node.js)
- Code quality and testing practices
- API design and backend fundamentals
- Cloud architecture awareness (Azure)
- Scalability and performance thinking

**Please read `ASSESSMENT.md` for complete instructions.**

## 🍴 Getting Started

### Step 1: Fork This Repository
1. Click the "Fork" button in the top right corner of this repository
2. This will create a copy of the repository in your own GitHub account
3. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/innovation-software-engineer-assessment.git
   cd innovation-software-engineer-assessment
   ```

### Step 2: Set Up Your Development Environment

### Prerequisites
- Node.js 18+
- npm

### Getting Started
1. **Backend Setup:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Start Building!** Follow the instructions in `ASSESSMENT.md`

### Step 3: Grant Repository Access
Once you've completed the assessment and created your pull request, please:
1. **Add our team as collaborators** to your forked repository with **"Read"** access
2. **Share the Pull Request link** with us for review

**Team members to add:**
   - `@echeequorum` (Hiring Manager)
   - `@FraserMuir` (Lead Engineer)

*Replace the usernames above with actual GitHub usernames provided by your recruiter*

## 🏗️ Project Structure

```
innovation-software-engineer-assessment/
├── frontend/                 # React TypeScript starter
│   ├── src/
│   │   ├── App.tsx          # Placeholder component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # Express TypeScript starter
│   ├── src/
│   │   └── index.ts         # Basic server with TODO endpoints
│   ├── package.json
│   └── tsconfig.json
├── .github/workflows/        # GitHub Actions (with intentional bugs)
├── ASSESSMENT.md             # Complete candidate instructions
└── README.md                # This file
```

## 🔧 Known Issues (Intentional)

The deployment pipelines contain bugs for you to fix as part of the bonus challenge:

1. **Frontend Pipeline** (`.github/workflows/frontend-deploy.yml`):
   - `output_location: "build"` should be `"dist"` for Vite

2. **Backend Pipeline** (`.github/workflows/backend-deploy.yml`):
   - `package: 'backend/dist'` should be `'backend'`

## 📚 Additional Resources

- **Assessment Instructions**: `ASSESSMENT.md` - Complete requirements and evaluation criteria
- **PR Template**: `.github/PULL_REQUEST_TEMPLATE.md` - Structured submission format

## ⚠️ Important Notes

- **This is a public repository** - Do not include sensitive information
- **Use your own fork** - Do not push directly to this repository
- **Time management** - This assessment should take 8-12 hours

**Team members to add as collaborators:**
   - `@echeequorum` (Hiring Manager)
   - `@FraserMuir` (Lead Engineer)

*Replace the usernames above with actual GitHub usernames provided by your recruiter*

---

**Ready to demonstrate your full-stack skills?** 🚀

For complete instructions and requirements, please see `ASSESSMENT.md`.
