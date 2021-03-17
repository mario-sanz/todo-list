export default class Alert {
    constructor(alertId) {
        this.alert = document.getElementById(alertId);
    }

    // Show the alert
    show(message) {
        this.alert.classList.remove('d-none'); // make visible this alert
        this.alert.innerText = message; // change the text to be displayed
    }

    // Hide the alert
    hide() {
        this.alert.classList.add('d-none');
    }
}