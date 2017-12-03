import { removeClass, addClass } from '../utilities';

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

  randomID() {
    return Math.random().toString(36).substr(2, 10);
  }

  getElementFromString(string) {
    const helperDiv = document.createElement('div');
    helperDiv.innerHTML = string;

    return helperDiv.firstChild;
  }

  constructor(options) {
    this.options = Object.assign({}, this.getDefaultOptions(), options);

    const randomContainerID = this.randomID();

    document.body.appendChild(
      this.getElementFromString(`<div id="${randomContainerID}" class="notifications notifications-position-${this.options.position}"></div>`)
    );
    this.container = document.getElementById(randomContainerID);

    // random id for player
    const randomAudioID = this.randomID();
    document.body.appendChild(
      this.getElementFromString(
        `<audio preload="auto" volume="${this.options.volume}" id="${randomAudioID}">
          <source src=${this.options.notificationSound} type="audio/mpeg" />
          <embed hidden="true" loop="false" src="${this.options.notificationSound}" />
        </audio>`
      )
    );

    this.player = document.getElementById(randomAudioID);
    this.player.load();
    this.player.volume = this.options.volume;
  }

  generateNotificationCode(text, style) {
    return `<div class="notification notification-${style} toggle is-hidden">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="notification-text">${text}</div>
          <button type="button" class="close" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>`;
  }

  fire(text, forceOptions) {
    const options = Object.assign({}, this.options.notification, forceOptions);

    // Play Notification sound
    if (options.playSound === true) {
      this.player.pause();
      this.player.currentTime = 0;
      this.player.play();
    }

    const notification = this.container.appendChild(
      this.getElementFromString(
        this.generateNotificationCode(text, options.style)
      )
    );

    // fire animation
    setTimeout(function() {
      removeClass(notification, 'is-hidden');
    }, 10);

    const closeHandler = notification.querySelectorAll('.close');

    Array.from(closeHandler).forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();

        addClass(notification, 'is-hidden');

        setTimeout(() => {
          notification.remove();
        }, 1000); // should be higher than transition time
      });
    });

    if (options.autoHide === true) {
      setTimeout(() => {
        addClass(notification, 'is-hidden');

        setTimeout(() => {
          notification.remove();
        }, 1000);
      }, options.duration);
    }
  }
}

export default NotificationHandler;
