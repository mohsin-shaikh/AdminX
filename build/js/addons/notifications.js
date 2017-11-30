class NotificationHandler {
  getDefaultOptions() {
    return {
      position: 'top',
      notificationSound: '../dist/media/notification.mp3',
      volume: 0.2,
      notification: {
        autoHide: false,
        playSound: true,
        duration: 5000,
        style: 'default',
      },
    };
  }

  constructor(options) {
    this.options = Object.assign({}, this.getDefaultOptions(), options);

    // Create container element
    this.container = $(`<div class="notifications notifications-position-${this.options.position}"></div>`).appendTo('body');
    this.player = $(`
      <audio preload="auto" volume="${this.options.volume}">
        <source src="${this.options.notificationSound}" type="audio/mpeg" />
        <embed hidden="true" autostart="true" loop="false" src="${this.options.notificationSound}" />
      </audio>
    `).appendTo('body');
    this.player[0].volume = this.options.volume;
  }

  generateNotificationCode(text, style) {
    return `
      <div class="notification notification-${style}">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="notification-text">${text}</div>
          <button type="button" class="close" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  fire(text, forceOptions) {
    const options = Object.assign({}, this.options.notification, forceOptions);

    // Play Notificatino sound
    if (options.playSound === true) {
      this.player.trigger("stop");
      this.player.trigger("play");
    }

    // append notification
    const notification = $(this.generateNotificationCode(text, options.style)).prependTo(this.container);
    notification.hide().slideDown();

    // add close handler
    notification.on('click', '.close', function(e) {
      e.preventDefault();

      notification.slideUp(function() {
        notification.remove();
      });
    });

    if (options.autoHide === true) {
      setTimeout(function() {
        notification.slideUp(function() {
          notification.remove();
        });
      }, options.duration)
    }
  }
}

export default NotificationHandler;
