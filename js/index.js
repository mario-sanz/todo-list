// In JS, before importing files, these files have to be exported
import Model from './model.js';
import View from './view.js';
// The following function represents the whole html as a single object
document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);

    view.render();
});