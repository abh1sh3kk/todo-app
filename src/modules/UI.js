import "./../styles/style.scss";
import { activateEventListeners } from "./eventListeners";
import { initializeLocalStorage, refreshTaskData } from "./localStorage.js";
import { renderProjectList, renderTaskList } from "./renderData";

const UI = (() => {
    // -----------------------------------------/ DRIVER CODE /------------------------------------------------------

    const renderPage = (() => {
        initializeLocalStorage();

        refreshTaskData();

        renderProjectList();
        renderTaskList();

        activateEventListeners();
    })();
})();
