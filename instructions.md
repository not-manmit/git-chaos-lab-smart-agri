# Leveling Up for SIH 2026: The Git Chaos Lab Challenge

Team,

As we approach August 15th, our biggest edge in the hackathon won't just be the AI tools we use. It will be how cleanly we work as a unit. In a high-pressure 36-to-48-hour sprint, code management is where most teams crash and burn.

To ensure we build a rock-solid, production-grade project without stepping on each other's toes, I have set up our official Git Chaos Lab sandbox repository.

This repository is built to simulate real hackathon friction. I have intentionally introduced broken code, missing files, and potential conflict traps. Your mission over the next few days is to jump in, break things safely, fix them, and master our team's version control workflow.

## Our Hackathon Branching Architecture

We will be implementing a strict Gatekeeper Workflow. This ensures our codebase stays stable and no one accidentally pushes breaking changes that stall the rest of the team.

```text
                  [ main ]  <--- Sacred Branch
                     ^
                     | (Merged after thorough testing)
                  [ dev ]   <--- Integration Branch
                     ^
     +---------------+---------------+
     |               |               |
[ user1-dev ]   [ user2-dev ]   [ user3-dev ] <--- Your Personal Sandboxes
```

`main`: The sacred branch. Pushes are restricted. Only the repository maintainer will touch this for stable milestones.

`dev`: The working integration branch. This is where our individual features will meet.

`<your-name>-dev`: Your isolated sandbox branch. You will do 100% of your work here, pushing changes safely without affecting anyone else.

## The Step-by-Step Workflow Blueprint

When we begin working, you must memorize and strictly follow this loop. Treat these commands as muscle memory.

## Step 1: Clone the Sandbox and Stay Updated

First, clone the repository to your local machine and ensure your `dev` branch matches remote:

```bash
git clone <repository-url>
git checkout dev
git pull origin dev
```

## Step 2: Create Your Personal Branch

Never code directly on `dev`. Spin up your own dedicated branch from the latest `dev` state:

```bash
git checkout -b <your-name>-dev
```

## Step 3: Write Code and Commit Intellectually

As you work, save your progress in small, descriptive increments. These are called atomic commits.

```bash
# Check what files you changed
git status

# Stage your changes
git add .

# Write a clear, short commit message
git commit -m "feat: added login screen UI layout"
```

## Step 4: Push to Your Isolated Remote Branch

Push your progress to GitHub under your own branch name:

```bash
git push origin <your-name>-dev
```

## Step 5: Open a Pull Request

1. Go to the GitHub repository page.
2. Click on **Compare & pull request**.
3. Set the base branch to `dev` and the compare branch to `<your-name>-dev`.
4. Submit the PR for review.
5. Do not attempt to merge it yourself. I will review, test, and merge it into `dev`.

## Step 6: Sync Back with the Team

Once a PR is merged, or during our scheduled sync intervals, you must pull down the team's combined updates back into your local workspace:

```bash
# Switch to dev and grab the latest team updates
git checkout dev
git pull origin dev

# Switch back to your working branch
git checkout <your-name>-dev

# Merge the updated dev into your personal branch
git merge dev
```

## 3 Golden Rules for the Sandbox and the Hackathon

1. Atomic PRs only: Keep your pull requests small and focused. A PR containing a single UI element or one API integration takes 60 seconds to review. A 500-line mega-PR slows down the entire pipeline.

2. Always pull before you branch: Before creating any new branch or working on a new feature, always run `git pull origin dev` to ensure you are not building on top of stale code.

3. Use the terminal: While GUI wrappers are nice, practice using the terminal commands listed above. Understanding the CLI ensures you know exactly what Git is doing under the hood if things get complicated.

## The Chaos Lab Challenges Awaiting You

Go ahead and check out the repository. I have set up a few intentional issues for you to tackle on your personal branches:

Challenge 1: Fix the broken syntax error inside the core utility file.

Challenge 2: Resolve the intentional merge conflict I have created on the shared layout config.

Challenge 3: Ensure your environment files are correctly hidden using `.gitignore` before submitting your PR.

Let's dive in, break some things, and make our workflow bulletproof long before August 15th.
