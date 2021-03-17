export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'Learn JS',
                    description: 'Watch JS tutorials',
                    completed: false,
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
    }

    setView(view) {
        this.view = view;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos.map((todo) => ({...todo})); // returns a copy of the list
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        const idx = this.findTodo(id);
        const todo = this.todos[idx];
        todo.completed = !todo.completed;
        
        this.save();
    }

    editTodo(id, values) {
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }

    addTodo(title, description) {
        // todo object
        const todo = {
            id: this.currentId++, // assign and increment the index
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        this.save();

        //return Object.assign({}, todo); // I am returning a clon of my object so that my original object is untouched
        return {...todo}; // I am doing the same than above: returning an empty object with the extended values of the original object
    }

    removeTodo(id) {
        const idx = this.findTodo(id);
        this.todos.splice(idx, 1); // erases from the list the erased todo

        this.save();
    }
}