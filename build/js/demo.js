import NotificationHandler from './addons/notifications';

$(document).ready(function() {
  const notificationTop = new NotificationHandler();
  const notificationBottom = new NotificationHandler({ position: 'bottom' });

  $('#notificationDemo').on('submit', function(e) {
    e.preventDefault();

    const values = {};
    $.each($(this).serializeArray(), function(_, kv) {
      if (values.hasOwnProperty(kv.name)) {
        values[kv.name] = $.makeArray(values[kv.name]);
        values[kv.name].push(kv.value);
      }
      else {
        values[kv.name] = kv.value;
      }
    });

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