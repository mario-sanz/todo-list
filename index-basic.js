// The following function represents the whole html as a single object
document.addEventListener('DOMContentLoaded', function() {
    // Declare HTML objects to operate with them in JS
    const title = document.getElementById('title'); // casi todo en JS se declara como constante
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

    function removeTodo(id) {
        console.log(id);
        document.getElementById(id).remove();
    }

    btn.onclick = addTodo;

    function addTodo() { // this function is declared inside the outer funcion
        if (title.value === '' || description.value === '') { // in JS, === compares both DATA and TYPE OF DATA
            alert.classList.remove('d-none'); // make visible this alert
            alert.innerText = 'Title and description are required'; // change the text to be displayed
            return;
        }

        // In case everything goes right...
        alert.classList.add('d-none'); // make invisible this alert
        const row = table.insertRow();
        row.setAttribute('id', id++);
        // insert the text into the table directly
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        // REMOVE BUTTON
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function (e) {
            removeTodo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);
    }

    btn.onclick = addTodo; // assignation of the function
});

