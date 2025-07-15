# Issue Tracker Assessment

## 🔨 Task Summary
**Issue Tracking Application**

Complete a simple issue tracking application that allows users to submit, view, and manage software bugs or feature requests. This project will demonstrate your ability to use React, TypeScript, TailwindCSS and Node.js.

**Important: This assessment uses a fork-and-PR workflow.** Please ensure you have forked this repository to your own GitHub account before starting.

## 🎯 Assessment Overview
This is a **two-part assessment** with **minimal setup**:
1. **Technical Implementation** (8-12 hours) - Build the application
2. **Live Discussion** (45-60 minutes) - Architectural review and scaling discussion

The applications are configured but **not implemented** - this is intentional to evaluate your approach to building the application.

### What We're Evaluating:
- Build full-stack features using React, TypeScript, Node.js
- Write clean, maintainable, and testable code
- Apply foundational backend practices (API design, error handling)
- Demonstrate awareness of cloud architecture (preferably Microsoft Azure) *[Live Discussion]*
- Think critically about code quality and scalability *[Live Discussion]*

## 📦 What's Provided

### Frontend (React + TypeScript + TailwindCSS)
- ✅ Basic Vite + React + TypeScript setup
- ✅ TailwindCSS configured and ready
- ✅ Single App component with placeholder content
- ✅ Development server configuration

### Backend (Express + TypeScript)
- ✅ Basic Express server setup
- ✅ TypeScript configuration
- ✅ CORS middleware configured
- ✅ Placeholder API endpoints with TODO comments
- ✅ Health check endpoint

## 📋 Part 1: Technical Implementation (8-12 hours)

### Frontend Application
Build a React application using TypeScript and TailwindCSS. A basic single page app has been provided for you with TypeScript, Vitest, and TailwindCSS configured.

**Users must be able to:**
- Submit a new issue (title, description, priority, status)
- View a list of all issues
- Filter the list by status or priority
- Update the status of an issue (e.g. open → in progress → resolved)

**Requirements:**
- The UI should be clean and responsive, using TailwindCSS to style
- State should be well-managed (e.g. with hooks, context, or a state library)
- You should include unit tests for as much of your code as possible
- The front end should communicate with the back-end API detailed below

### Backend API
Build an Express API to serve the front end application above. A basic Express app has been set up for you with TypeScript and Vitest configured, with empty GET, PUT, and POST endpoints defined.

**Write code for the endpoints in the app to allow:**
- Creating an issue
- Retrieving all issues
- Updating an issue's status

**Requirements:**
- Use in-memory data (e.g. a basic JSON object) to store changes. There is no need for persistence
- You should include as many unit tests as you deem necessary
- RESTful API design with proper HTTP status codes and response structure
- Input validation and error handling

### Source Control & Submission Process

**Important: Follow this submission process carefully**

1. **Work on your forked repository** (not the original repository)
2. **Create a feature branch** from main for your implementation:
   ```bash
   git checkout -b feature/issue-tracker-implementation
   ```
3. **Make small, logical commits** with clear and descriptive messages
4. **Push your branch** to your forked repository:
   ```bash
   git push origin feature/issue-tracker-implementation
   ```
5. **Create a Pull Request** from your feature branch to **your fork's main branch** (not the original repository)
6. **Add our team as collaborators** to your forked repository with "Read" access.
7. **Share the Pull Request link** with us for review

## 🎁 Bonus Challenge (Optional)
Both apps have a pipeline that should deploy them to Azure. However, there is a bug in both pipelines that is preventing the code from being deployed. Can you fix it?

### Evaluation Criteria
- **Code Quality**: Clean, idiomatic code using best practices in both front end and back end
- **Structure & Design**: Well-structured components, clear separation of concerns
- **UI/UX**: Usability, responsiveness, and polish of the front end
- **API Design**: RESTful, secure, and scalable endpoints
- **GitHub Usage**: Commit hygiene, overall repo structure, PR detail

You may use AI in your solution, but you will be asked to talk through the code, and why you chose to do things the way you did. 

Similarly you can use third party packages, but you will need to explain why you chose them.

### Time Expectation
We estimate this task should take 8-12 hours. Please don't worry about building a full production-ready app; we're more interested in seeing how you approach architecture, code quality, and clarity.


## 🎤 Part 2: Live Discussion (45-60 minutes)

After reviewing your code submission, we'll have a discussion covering:

- Code Review & Decisions (15 minutes)
- Cloud Architecture & Azure (15 minutes)
- Scalability & Performance (15 minutes)
- Quality & Maintenance (10 minutes)

## 🕒 Time Allocation

**Technical Implementation (8-10 hours):**
- Backend API: 3-4 hours
- Frontend Components: 3-4 hours
- Testing: 1-2 hours
- Documentation: 1 hour

**Live Discussion (45-60 minutes):**
- Scheduled after code submission
- Come prepared to discuss your decisions
- Screen sharing to walk through your code

## 📊 Evaluation Criteria

### Technical Implementation (60%)
- Code quality and structure
- TypeScript usage and type safety
- Testing approach and coverage
- Error handling and validation
- Feature completeness

### Live Discussion (40%)
- **Cloud Architecture Knowledge** (15%) - Azure services, deployment strategies
- **Scalability Thinking** (15%) - Performance optimisation, bottleneck identification
- **Problem Solving** (10%) - Decision justification, trade-off analysis

## 🚀 Getting Started

**Setup Instructions:** See the main README.md for forking and setup commands.

**Your Implementation Approach:**
1. **Fork this repository** to your own GitHub account
2. **Clone your fork** and set up the development environment
3. **Create a feature branch** for your implementation
4. **Plan your approach** - what will you build first?
5. **Start with either frontend or backend** - your choice
6. **Make small, logical commits** with clear messages
7. **Write tests as you go** - don't leave them to the end
8. **Focus on clean, maintainable code**
9. **Prepare for the discussion** - think about your decisions

## 📝 Submission Requirements

**Create a pull request on your forked repository with:**
- Complete working application
- Unit tests for key functionality
- README with setup instructions
- Screenshots of the working application

**PR Description Template:**
```markdown
# Issue Tracker Assessment - [Your Name]

## Features Implemented
- [ ] Issue creation
- [ ] Issue listing with filters
- [ ] Status updates
- [ ] Responsive UI
- [ ] Error handling
- [ ] Unit tests

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install` (in both frontend and backend directories)
3. Start backend: `cd backend && npm run dev`
4. Start frontend: `cd frontend && npm run dev`
5. Run tests: `npm test`

## Screenshots
[Include screenshots of your working application]

## Challenges & Solutions
[Describe any obstacles you encountered and how you solved them]

## Time Spent
[Approximate time spent on different parts of the assessment]

## Future Enhancements
[What you would improve or add given more time]
```

## 📤 Final Submission Steps

1. **Complete your implementation** in your forked repository
2. **Create a pull request** from your feature branch to your fork's main branch
3. **Add our team as collaborators** to your repository with "Read" access:
   - `@echeequorum` (Hiring Manager)
   - `@FraserMuir` (Lead Engineer)
4. **Share the pull request link** with your recruiter
5. **Ensure your repository is accessible** to our team for review

**Repository Access Instructions:**
- Go to your forked repository settings
- Navigate to "Manage access" → "Invite a collaborator"
- Add each team member with "Read" role
- They will receive an invitation to access your repository

## ⚠️ Important Reminders

**Public Repository Guidelines:**
- This is a **public repository** - anyone can see it
- **Do not include sensitive information** (API keys, passwords, personal data)
- **Use placeholder data** for any examples or testing
- **Follow professional standards** as this represents your work publicly
- **Be respectful** in all communications and code comments

**Assessment Integrity:**
- Complete this assessment **independently**
- You may use AI tools and online resources, but be prepared to explain your code
- **Do not share solutions** with other candidates
- **Do not copy code** from other assessment submissions

## 📞 Interview Preparation

Come prepared to discuss:
- Your architectural decisions and why you made them
- How you would scale this application
- Azure deployment strategy
- Performance optimisation approaches
- Testing and code quality practices

We'll review your code together and have a technical discussion about real-world deployment considerations.

**Remember:** We're more interested in **how you think** than a perfect implementation:
- Your architectural decisions
- Code quality and structure
- Testing approach
- Git workflow
- Time management

Good luck! 🚀
