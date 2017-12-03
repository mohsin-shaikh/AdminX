import NotificationHandler from './plugins/notifications';

// thanks https://stackoverflow.com/a/35468919/5411503
function setOrPush(target, val) {
    var result = val;
    if (target) {
        result = [target];
        result.push(val);
    }
    return result;
}

function getFormResults(formElement) {
    var formElements = formElement.elements;
    var formParams = {};
    var i = 0;
    var elem = null;
    for (i = 0; i < formElements.length; i += 1) {
      elem = formElements[i];
      switch (elem.type) {
        case 'submit':
          break;
        case 'radio':
          if (elem.checked) {
              formParams[elem.name] = elem.value;
          }
          break;
        case 'checkbox':
          if (elem.checked) {
              formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
          }
          break;
        default:
            formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
      }
    }
    return formParams;
}

document.addEventListener("DOMContentLoaded", function() {
  const notificationTop = new NotificationHandler();
  const notificationBottom = new NotificationHandler({ position: 'bottom' });

  const notificationForm = document.getElementById('notificationDemo');

  notificationForm.addEventListener("submit", e => {
    e.preventDefault();

    const values = getFormResults(notificationForm);

    const options = {
      autoHide: values.demoAutoHide === "1" ? true : false,
      playSound: values.demoSound === "1" ? true : false,
      style: values.demoStyle,
    };

    if (values.demoPosition === 'top') {
      notificationTop.fire(values.demoText, options);
    } else {
      notificationBottom.fire(values.demoText, options);
    }
  });
});