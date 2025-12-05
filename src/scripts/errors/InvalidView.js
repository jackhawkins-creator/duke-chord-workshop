// InvalidView.js
export const InvalidView = (view) => {
    return `
        <section class="error error--invalid-view">
            <h2>Invalid View</h2>
            <p>The view parameter "${view}" is not recognized.</p>
        </section>
    `;
};