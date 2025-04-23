# Spoonful
Project Name: Spoonful

Application Description: Everyone needs a to do list to get done with the things that they need to do in the day. However, motivation, disability, other issues, or a combination of these factors can make some days harder than others. Spoonful seeks to first contextualize how it's user is feeling during the day, before suggesting a more manageable list of tasks to get done so its user still takes advantage of their time and feels good about whatever progress they may make while not overwhelming them with the vastness of what they might need to do. It's a task manager that's designed with empathy first.

Features + Tools/Technologies: Describe the functionalities of the app. For each feature, mention the tools/technologies that you may need to implement this feature.

1. Daily Spoon Check-In
Before showing the task list, the app prompts users to input how they’re feeling or how many “spoons” (units of energy) they have for the day. This helps tailor the task list to their capacity.

Tools:
HTML/CSS for the input UI (e.g., sliders, emoji buttons, or number input)
JavaScript to store and process user input
MongoDB to retain input throughout the session or over time

2. Spoon Estimation Quiz
For users unsure how many spoons they have, a short daily quiz estimates their current energy levels based on mood, sleep, pain levels, etc.

HTML/CSS to create quiz interface
JavaScript to handle logic and scoring

3. Editable Task List
Users can input tasks, assign an estimated spoon cost, and check them off when complete. The app filters and prioritizes tasks based on available spoons.

React for dynamic list rendering and task editing
JavaScript for spoon-budget logic
MongoDB or LocalStorage to persist tasks
HTML/CSS for task layout and interaction

4. Spoon Bar (Energy Meter)
A visual meter tracks how many spoons are left as tasks are completed. Completing a task reduces the spoon count, helping users pace themselves.

HTML/CSS for the visual bar design
JavaScript to update spoon count in real time

5. Celebration Message / Animation
Once users finish using their spoons for the day (by completing tasks), a gentle animation or message congratulates them for their effort.

CSS animations or JavaScript-based animations (e.g., Lottie for lightweight celebratory effects)
React for conditionally triggering animation based on spoon depletion

6. Progress Sharing & Spoon Theory Education
The app includes a simple way for users to share their task progress with family, friends, or colleagues, with optional educational blurbs about Spoon Theory for increased understanding.

HTML/CSS for the progress summary display
JavaScript to generate a sharable report (e.g., downloadable PDF, email-friendly format, or shareable link)


Timeline: When do you plan to work on certain portions of your project, and in what order? What work will you aim to complete by certain checkpoints? How will you and your team split up the work? Will your team be setting up regular meetings? If so, will they be virtual or in-person?
Schedule for the project:

4/22 - Submit proposal
4/23 - 4/25 Get main interface up/ editable task list online
4/26 - 4/28 Work on intake quiz
4/29 - 5/2 Work on tidying it up and adding remaining features

Figma link: https://www.figma.com/design/ZHkSZdn8C0jWvQxO5Oo1yQ/Untitled?node-id=0-1&t=kHP5935Bqe6kijUp-1
