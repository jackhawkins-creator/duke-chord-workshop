const container = document.querySelector("#content");

export const changeView = (view) => {
  history.pushState(null, "view", view === "" ? "?" : `?view=${view}`);
  const popStateEvent = new PopStateEvent('popstate', { state: { view } });
  window.dispatchEvent(popStateEvent);
};

export const getURLParameter = (name = "home") => {
  return (
    decodeURIComponent(
      (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(location.search) || [
        null,
        "",
      ])[1].replace(/\+/g, " ") // escaped + and replace with space
    ) || null
  );
};

// --- Helper functions for validation ---

// Returns true if the view is one of the recognized views
export const isValidView = (view) => {
  const validViews = [
    "home",
    "sell",
    "store",
    "instrument",
    "classes",
    "class",
    "about",
    "login",
    "register",
  ];
  return validViews.includes(view);
};

// Returns true if the value is a valid positive integer
export const isValidId = (value) => {
  const num = parseInt(value);
  return !isNaN(num) && num > 0;
};
