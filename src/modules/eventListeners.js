import { handleClick, handleKeyboardShortcuts } from "./helperFunctions";

const activateEventListeners = () => {
    document.body.addEventListener("click", (e) => {
        handleClick(e);
    });
    document.addEventListener("keydown", (e) => {
        handleKeyboardShortcuts(e);
    });
};

export { activateEventListeners };
