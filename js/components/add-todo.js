import Alert from './alert.js';

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title'); // casi todo en JS se declara como constante
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') { // in JS, === compares both DATA and TYPE OF DATA
                // alert.innerText = 'Title and description are required'; // change the text to be displayed
                this.alert.show('Title and description are required');
            } else {
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}