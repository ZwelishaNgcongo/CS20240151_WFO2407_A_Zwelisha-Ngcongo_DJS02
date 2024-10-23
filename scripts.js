const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(
    dividend / divider
  ); /* Math.floor ensures no decimals shown in number output */
  try {
    /* testing for empty inputs from the user */
    if (!dividend || !divider) {
      result.innerText =
        "Division not performed.Both values are required in inputs. Try again";
      return;
    }
    /* testing error when the divider input is zero. */
    if (Number(divider) === 0) {
      /* Number function ensures that divider is a number */
      console.error(new Error("Dividing by zero").stack);
      result.innerText =
        "Division not performed. Invalid number provided. Try again";
      return;
    }
    /* testing dividend inputs and divider if it is not a number */
    if (isNaN(dividend) || isNaN(divider)) {
      console.error(new Error("Invalid input").stack);
      document.body.innerHTML =
        "Something critical went wrong 🙁. Please reload the page";
      throw new Error("Invalid input");
    }
  } catch (error) {
    console.error(error);
  }
});
