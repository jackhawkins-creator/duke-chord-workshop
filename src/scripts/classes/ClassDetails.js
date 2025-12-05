import { getClasses } from "../data/ClassStateManager.js";
import { getURLParameter, isValidId } from "../data/ViewStateManager.js";
import { NotFound } from "../errors/NotFound.js";

export const ClassDetails = () => {
  const classIdParam = getURLParameter("classId");

  if (!isValidId(classIdParam)) {
    return NotFound();
  }

  const classId = parseInt(classIdParam);
  const clazz = getClasses().find((c) => c.id === classId);

  // If class is not found, show 404 page
  if (!clazz || !clazz.id) {
    return NotFound();
  }

  return `
        <section class="class" id="class--${clazz.id}">
            <h2 class="class__title"> ${clazz.title} </h2>
            <div class="class__description"> ${clazz.description} </div>
            <div class="class__price">${clazz.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</div>
            <div class="class__musician">With ${clazz.musician.name}</div>
            <div class="class__date">Starts on ${new Date(
              clazz.start
            ).toLocaleDateString("en-US")}</div>
        </section>
    `;
};
