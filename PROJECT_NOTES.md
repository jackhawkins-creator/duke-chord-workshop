# Project Notes

## What you learned about the codebase
I gained a deeper understanding of the codebase structure, how different components interact, and the data flow within the application. Specifically, I explored the client-side rendering with JavaScript, the state management patterns (e.g., `InstrumentsStateManager.js` and `ViewStateManager.js`), and how events are handled to update the UI. The project utilizes a modular approach, separating concerns into different files and directories for `scripts`, `styles`, `audio`, and `images`.

## How AI assistance changed your workflow
AI assistance felt like having an extremely-literal partner that sometimes made things more complicated due to its strict interpretation of instructions but ultimately saved a lot of time. It was particularly helpful for boilerplate code, syntax checks, and suggesting common patterns.

## Challenges you encountered
One significant challenge was during the implementation of a CSS loading animation. I encountered a recursion loop when trying to add the loading CSS animation, which forced me to restart my PC. This highlighted the importance of careful incremental testing when integrating new UI elements, especially those involving animations or complex styling.

## Strategies that worked well
- **Asking for steps one at a time:** Breaking down complex tasks into smaller, manageable steps for the AI.
- **Not overloading the LLM with too much information:** Providing concise and focused prompts to get accurate and relevant responses.
- **Constant testing:** Regularly verifying AI-generated code to ensure correctness and prevent integration issues.

## Areas where AI was most/least helpful
- **Most helpful:**
    - Explaining concepts I haven't brushed up on in a while, such as `switch case` statements or specific JavaScript array methods.
    - Providing a good overview of existing code when asked for summaries or explanations.
    - Generating initial drafts of functions or components.
- **Least helpful:**
    - Sometimes, the AI would generate code that would break the existing application if the instructions weren't 100% exact or if there were subtle contextual nuances that the AI missed.
    - Debugging complex, application-specific logic sometimes required significant refinement of AI suggestions.

## Key Questions to Answer:

### How did using an agentic AI tool compare to working alone?
Using an agentic AI tool saved a lot of time if approached smartly. Directly copy-pasting code into the project without understanding or verification often led to issues. The tool significantly accelerated the initial coding phase and provided alternative perspectives, but human oversight and careful integration remained crucial.

### What was surprising about how the AI understood the code?
While the LLMs I used did cause problems at times, it was surprising how well they could often fix those problems whenever I included a detailed error message or a snippet of the problematic code. This demonstrated a strong ability to self-correct given sufficient debugging context.

### Where did you need to correct or refine AI suggestions?
I encountered some unexpected or unworkable answers for the spinning wheel loading ticket. I ended up trying another ticket instead, but I plan to revisit and attempt that ticket again in the future with refined strategies. Generally, I needed to refine suggestions related to intricate UI interactions, complex state management, or edge cases that weren't explicitly detailed in the prompts.

### How did you verify AI-generated code was correct?
Verification was primarily done through constant testing. This involved:
- **Unit testing:** For individual functions or small components.
- **Integration testing:** To ensure new features worked correctly within the existing application flow.
- **Manual browser testing:** Visually inspecting UI changes and interacting with the application to confirm functionality and responsiveness.
- **Console log monitoring:** Checking for errors or unexpected behavior during runtime.