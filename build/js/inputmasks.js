/**
 * This already provides a good starting point for further customization
 */
import "inputmask/dist/inputmask/inputmask.numeric.extensions";
import "inputmask/dist/inputmask/inputmask.extensions";
import Inputmask from "inputmask/dist/inputmask/inputmask.date.extensions";

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('[data-mask]');
  Inputmask().mask(elements);
});