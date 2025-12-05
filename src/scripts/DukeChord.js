import { Home } from "./Home.js";
import { NavBar } from "./nav/NavBar.js";
import { ClassDetails } from "./classes/ClassDetails.js";
import { ClassList } from "./classes/ClassList.js";
import { getURLParameter, isValidView } from "./data/ViewStateManager.js";
import { InstrumentDetail } from "./instruments/InstrumentDetail.js";
import { InstrumentForm } from "./instruments/InstrumentForm.js";
import { InstrumentList } from "./instruments/InstrumentList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { InvalidView } from "./errors/InvalidView.js";
import { NotFound } from "./errors/NotFound.js";

export const DukeChord = () => {
  return `
        ${NavBar()}
        ${buildView()}
    `;
};

const buildView = () => {
  const view = getURLParameter("view");
  const instrumentId = getURLParameter("instrumentId");
  const classId = getURLParameter("classId");

  if ((view === null || view === "") && (instrumentId !== null || classId !== null)) {
    return NotFound();
  }

  if (view !== null && view !== "" && !isValidView(view)) {
    return InvalidView(view);
  }

  switch (view) {
    case "home":
      return Home();

    case "sell":
      return InstrumentForm();

    case "store":
      return InstrumentList();

    case "instrument":
      return InstrumentDetail();

    case "classes":
      return ClassList();

    case "class":
      return ClassDetails();

    case "about":
      return EmployeeList();

    case null:
    case "":
      return Home();

    default:
      return InvalidView(view); // Show InvalidView for unrecognized views
  }
};
