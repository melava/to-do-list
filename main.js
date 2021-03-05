/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMGlobalManipulations.js":
/*!***************************************!*\
  !*** ./src/DOMGlobalManipulations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"quickListProjects\": () => (/* binding */ quickListProjects),\n/* harmony export */   \"postitProjects\": () => (/* binding */ postitProjects),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"getName\": () => (/* binding */ getName),\n/* harmony export */   \"getItem\": () => (/* binding */ getItem),\n/* harmony export */   \"getDueDate\": () => (/* binding */ getDueDate),\n/* harmony export */   \"getDescription\": () => (/* binding */ getDescription),\n/* harmony export */   \"getPriority\": () => (/* binding */ getPriority),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject),\n/* harmony export */   \"getType\": () => (/* binding */ getType),\n/* harmony export */   \"getSubmitButton\": () => (/* binding */ getSubmitButton),\n/* harmony export */   \"getAddItemButton\": () => (/* binding */ getAddItemButton),\n/* harmony export */   \"clearInput\": () => (/* binding */ clearInput),\n/* harmony export */   \"closeOverlay\": () => (/* binding */ closeOverlay),\n/* harmony export */   \"formFactory\": () => (/* binding */ formFactory)\n/* harmony export */ });\nconst container = document.getElementById('content-container');\nconst quickListProjects = document.getElementById('quick-projects');\nconst postitProjects = document.getElementById('postit-projects');\nconst taskContainer = document.getElementById('task-container')\nconst addProject = document.getElementById('add-project');\nconst addToDo = document.getElementById('add-todo');\n\nconst getName = () => {\n    const value = document.getElementById('name').value;\n    const node = document.getElementById('name');\n    return { value, node }\n}\nconst getItem = () => {\n    const value = document.getElementById('item').value;\n    const node = document.getElementById('item');\n    return { value, node }\n}\nconst getDueDate = () => {\n    const value = document.getElementById('dueDate').value;\n    const node = document.getElementById('dueDate');\n    return { value, node }\n}\nconst getDescription = () => {\n    const value = document.getElementById('description').value;\n    const node = document.getElementById('description');\n    return { value, node }\n}\nconst getPriority = () => {\n    const value = document.getElementById('priority').value;\n    const node = document.getElementById('priority');\n    return { value, node }\n}\nconst getProject = () => {\n    const value = document.getElementsByClassName('selected')[0].textContent;\n    const node = document.getElementsByClassName('selected')[0];\n    return { value, node }\n}\nconst getSubmitButton = () => document.getElementById('submit');\nconst getAddItemButton = () => document.getElementById('add-item');\nconst getType = () => {\n    let type\n    if (document.getElementById('quick').checked) {\n        type = document.getElementById('quick').value\n    } else if (document.getElementById('regular').checked) {\n        type = document.getElementById('regular').value\n    }\n    return type\n}\n\n\nconst formFactory = () => {\n    const _container = () => {\n        const cont = document.createElement('div');\n        cont.classList.add('inner-form-container');\n        return cont\n    }\n    const _label = (value, content) => {\n        const label = document.createElement('label');\n        label.setAttribute('for', value);\n        label.textContent = content;\n        return label\n    }\n    const _radioInput = (value) => {\n        const input = document.createElement('input');\n        input.type = 'radio';\n        input.name = 'type';\n        input.value = value;\n        input.id = value;\n        return input\n    }\n    const _textInput = (value) => {\n        const input = document.createElement('input');\n        input.type = 'text';\n        input.id = value;\n        return input\n    }\n    const _dateInput = (value) => {\n        const input = document.createElement('input');\n        input.type = 'date';\n        input.id = value;\n        return input\n    }\n    const _textArea = (value) => {\n        const input = document.createElement('textarea');\n        input.id = value;\n        input.rows = 5;\n        return input\n    }\n    const _select = (value, options) => {\n        const input = document.createElement('select');\n        input.id = value;\n        options.forEach(option => {\n            const opt = document.createElement('option');\n            opt.value = option;\n            opt.textContent = option;\n            option === 'normal' ? opt.selected = true : opt.selected = false;\n            input.appendChild(opt);\n        });\n        return input\n    }\n    const _button = (value, content) => {\n        const submit = document.createElement('button');\n        submit.id = value;\n        submit.textContent = content;\n        return submit\n    }\n    \n    const createOverlay = (formType, children) => {\n        const overlay = document.createElement('div');\n        overlay.id = 'form-overlay';\n        const formContainer = document.createElement('div');\n        formContainer.classList.add('form');\n        formContainer.classList.add(formType);\n        children.forEach(div => {\n            formContainer.appendChild(div)\n        });\n        overlay.appendChild(formContainer)\n        \n        return overlay\n    }\n\n    const containerConstructor = (type, name, content, options) => {\n        const container = _container();\n        let label;\n        let input;\n        let label2;\n        let input2;\n        switch (type) {\n            case 'radio':\n                input = _radioInput(name[0]);\n                input.checked = true;\n                label = _label(name[0], content[0]);\n                input2 = _radioInput(name[1]);\n                label2 = _label(name[1], content[1]);\n                container.appendChild(input);\n                container.appendChild(label);\n                container.appendChild(input2);\n                container.appendChild(label2);\n                break;\n                case 'text':\n                    input = _textInput(name);\n                    label = _label(name, content);\n                    container.appendChild(label);\n                    container.appendChild(input);\n                    if (name === 'item') {\n                        const addItem = _button('add-item', '+');\n                        addItem.classList.add('button');\n                        container.appendChild(addItem);\n                    }\n                    break;\n            case 'date':\n                input = _dateInput(name);\n                input.value = new Date().toISOString().substr(0,10);\n                label = _label(name, content);\n                container.appendChild(label);\n                container.appendChild(input);\n                break;\n            case 'textarea':\n                input = _textArea(name);\n                label = _label(name, content);\n                container.appendChild(label);\n                container.appendChild(input);\n                break;\n            case 'select':\n                input = _select(name, options);\n                label = _label(name, content);\n                container.appendChild(label);\n                container.appendChild(input);\n                break;\n            case 'submit':\n                input = _button(name, content);\n                container.appendChild(input);\n                break;\n        }\n        \n        return container\n    }\n    \n    return { containerConstructor, createOverlay }\n}\n\nconst closeOverlay = () => {\n    const overlay = document.getElementById('form-overlay');\n    container.removeChild(overlay);\n}\n\nconst clearInput = (input) => {\n    input.value = '';\n    input.focus()\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/DOMGlobalManipulations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addItemToList\": () => (/* binding */ addItemToList),\n/* harmony export */   \"dispatchSubmit\": () => (/* binding */ dispatchSubmit)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n/* harmony import */ var _projects_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/factory */ \"./src/projects/factory.js\");\n/* harmony import */ var _projects_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/form */ \"./src/projects/form.js\");\n/* harmony import */ var _projects_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/print */ \"./src/projects/print.js\");\n/* harmony import */ var _tasks_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/factory */ \"./src/tasks/factory.js\");\n/* harmony import */ var _tasks_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/form */ \"./src/tasks/form.js\");\n/* harmony import */ var _tasks_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/print */ \"./src/tasks/print.js\");\n\n\n\n\n\n\n\n\nlet projectsArray = [];\nlet quickList = [];\nlet tasksArray = [];\n\nconst chooseTaskForm = () => {\n    const projectSelected = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getProject)().node;\n    if (projectSelected.className.includes('quick')) {\n        (0,_tasks_form__WEBPACK_IMPORTED_MODULE_5__.quickTaskForm)();\n    } else if (projectSelected.className.includes('regular')) {\n        (0,_tasks_form__WEBPACK_IMPORTED_MODULE_5__.regularTaskForm)();\n    } else {\n        console.log('ho no, there isn\\'t any project selected!')\n    }\n}\n\nconst getFormInfos = (formType) => {\n    if (formType === 'project') {\n        const name = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getName)().value;\n        const type = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getType)().value;\n        const projectId = projectsArray.length;\n        const project = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_1__.Project)(type, name, projectId);\n        return project\n    } else if (formType === 'quicklist') {\n        const dueDate = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getDueDate)().value;\n        const getList = quickList.map(item => item);\n        const taskId = tasksArray.length;\n        const currentProject = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getProject)().value;\n        const project = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_4__.QuickTask)(dueDate, getList, currentProject, taskId)\n        return project\n    } else if (formType === 'regular') {\n        const name = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getName)().value;\n        const dueDate = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getDueDate)().value;\n        const desc = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getDescription)().value;\n        const priority = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getPriority)().value;\n        const currentProject = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getProject)().value;\n        const taskId = tasksArray.length;\n        const project = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_4__.RegularTask)(name, dueDate, desc, currentProject, priority, taskId)\n        return project\n    }\n}\n\nconst addItemToList = (item) => {\n    quickList.push(item)\n    return quickList\n}\n\nconst addToArray = (formType, object) => {\n    if (formType === 'project') {\n        projectsArray.push(object);\n        return projectsArray\n    } else if (formType === 'quicklist') {\n        quickList = [];\n        tasksArray.push(object);\n        return tasksArray\n    } else if (formType === 'regular') {\n        tasksArray.push(object);\n        return tasksArray\n    }\n}\n\nconst print = (formType, object) => {\n    if (formType === 'project') {\n        (0,_projects_print__WEBPACK_IMPORTED_MODULE_3__.printProject)(object);\n    } else if (formType === 'quicklist') {\n        (0,_tasks_print__WEBPACK_IMPORTED_MODULE_6__.printQuickTask)(object);\n    } else if (formType === 'regular') {\n        (0,_tasks_print__WEBPACK_IMPORTED_MODULE_6__.printRegularTask)(object);\n    }\n}\n\nconst checkValidity = (formType, object) => {\n    let validity;\n    if (formType === 'project') {\n        object.name ? validity = true : validity = false;\n        return validity\n    } else if (formType === 'quicklist') {\n        object.list.length > 0 ? validity = true : validity = false;\n        return validity\n    } else if (formType === 'regular') {\n        object.name ? validity = true : validity = false;\n        return validity\n    }\n}\n\nconst dispatchSubmit = (e) => {\n    const formType = e.target.closest('div.form').className.replace('form', '').trim();\n    const object = getFormInfos(formType);\n    const valid = checkValidity(formType, object);\n    if (valid) {\n        const list = addToArray(formType, object);\n        print(formType, object);\n        (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.closeOverlay)();\n        // console.log(list)\n    } else {\n        console.log('invalid');\n        formType === 'quicklist' ? (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().node.focus() : (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getName)().node.focus();\n    }\n}\n\n// ----------------------------------CALLS\n// add some prototype project and tasks to start the page\nconst initiatePage = (() => {\n    const protoQuick = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_1__.Project)('quick', 'prototype-shopping-list', 0);\n    const protoReg = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_1__.Project)('regular', 'prototype-classic-project', 1);\n    const testQuickTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_4__.QuickTask)('2021-03-02', ['aaa', 'bbb'], 'prototype-shopping-list', 0);\n    const testRegTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_4__.RegularTask)('task prototype', '2021-03-09', 'description: lorem ipsum dolor sic amat.', 'prototype-classic-project', 'normal', 1);\n    addToArray('project', protoQuick);\n    addToArray('project', protoReg);\n    addToArray('quicklist', testQuickTask);\n    addToArray('regular', testRegTask);\n    (0,_tasks_print__WEBPACK_IMPORTED_MODULE_6__.printQuickTask)(testQuickTask);\n    (0,_tasks_print__WEBPACK_IMPORTED_MODULE_6__.printRegularTask)(testRegTask);\n    (0,_projects_print__WEBPACK_IMPORTED_MODULE_3__.printProject)(protoQuick);\n    (0,_projects_print__WEBPACK_IMPORTED_MODULE_3__.printProject)(protoReg);\n})();\n_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.addProject.addEventListener('click', _projects_form__WEBPACK_IMPORTED_MODULE_2__.projectForm);\n_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.addToDo.addEventListener('click', chooseTaskForm);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects/factory.js":
/*!*********************************!*\
  !*** ./src/projects/factory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n//factory\nconst Project = (type, name, id) => {\n    return { type , name , id }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/factory.js?");

/***/ }),

/***/ "./src/projects/form.js":
/*!******************************!*\
  !*** ./src/projects/form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nconst projectForm = () => {\n    const form = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.formFactory)();\n    \n    const radioContainer = form.containerConstructor('radio', ['regular', 'quick'], ['Regular task', 'Quick list task']);\n    const textContainer = form.containerConstructor('text', 'name', 'Project name');\n    const submitContainer = form.containerConstructor('submit', 'submit', 'New project');\n    \n    const overlay = form.createOverlay('project', [radioContainer, textContainer, submitContainer]);\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(overlay);\n    \n    (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getName)().node.focus()\n    \n    const submitButton = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getSubmitButton)();\n    submitButton.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.dispatchSubmit)\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/form.js?");

/***/ }),

/***/ "./src/projects/print.js":
/*!*******************************!*\
  !*** ./src/projects/print.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printProject\": () => (/* binding */ printProject)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection */ \"./src/projects/selection.js\");\n/* harmony import */ var _tasks_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/filter */ \"./src/tasks/filter.js\");\n\n\n\n\n\nconst printProject = (project) => {\n    const card = document.createElement('div');\n    card.classList.add('project');\n    card.classList.add(project.type);\n    card.setAttribute('data-index', project.id);\n    card.textContent = `${project.name}`;\n    project.type === 'quick' ? _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.appendChild(card) : _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.postitProjects.appendChild(card);\n    (0,_selection__WEBPACK_IMPORTED_MODULE_1__.toggleSelectedProject)();\n    card.classList.add('selected');\n    (0,_tasks_filter__WEBPACK_IMPORTED_MODULE_2__.filterTasks)();\n    card.addEventListener('click', _selection__WEBPACK_IMPORTED_MODULE_1__.isProjectSelected);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/print.js?");

/***/ }),

/***/ "./src/projects/selection.js":
/*!***********************************!*\
  !*** ./src/projects/selection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isProjectSelected\": () => (/* binding */ isProjectSelected),\n/* harmony export */   \"toggleSelectedProject\": () => (/* binding */ toggleSelectedProject)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n/* harmony import */ var _tasks_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/filter */ \"./src/tasks/filter.js\");\n\n\n\nconst isProjectSelected = (e) => {\n    if (e.target.className.includes('selected')) {\n        console.log('already selected --> edit ')\n    } else {\n        toggleSelectedProject();\n        e.target.classList.add('selected');\n        (0,_tasks_filter__WEBPACK_IMPORTED_MODULE_1__.filterTasks)();\n    }\n}\n\nconst toggleSelectedProject = () => {\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.postitProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/selection.js?");

/***/ }),

/***/ "./src/tasks/factory.js":
/*!******************************!*\
  !*** ./src/tasks/factory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuickTask\": () => (/* binding */ QuickTask),\n/* harmony export */   \"RegularTask\": () => (/* binding */ RegularTask)\n/* harmony export */ });\nconst QuickTask = (dueDate, list, project, id) => {\n    return { dueDate, list, project, id }\n}\n\nconst RegularTask = (name, dueDate, description, project, priority, id) => {\n    return { name, dueDate, description, project, priority, id }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/factory.js?");

/***/ }),

/***/ "./src/tasks/filter.js":
/*!*****************************!*\
  !*** ./src/tasks/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTasks\": () => (/* binding */ filterTasks)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n\n\nconst filterTasks = () => {\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.taskContainer.childNodes.forEach(task => {\n        const currentSelectedProject = document.getElementsByClassName('selected')[0].textContent;\n        if(task.dataset.project === currentSelectedProject){\n            task.classList.remove('hidden')\n        } else {\n            task.classList.add('hidden')\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/filter.js?");

/***/ }),

/***/ "./src/tasks/form.js":
/*!***************************!*\
  !*** ./src/tasks/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"quickTaskForm\": () => (/* binding */ quickTaskForm),\n/* harmony export */   \"regularTaskForm\": () => (/* binding */ regularTaskForm)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ \"./src/tasks/print.js\");\n\n\n\n\nconst quickTaskForm = () => {\n    const form = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.formFactory)();\n    \n    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');\n    const textContainer = form.containerConstructor('text', 'item', 'List item');\n    const ul = document.createElement('ul');\n    ul.id = 'quick-task-list';\n    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit list');\n    \n    const overlay = form.createOverlay('quicklist', [dueDateContainer, textContainer, ul, submitContainer]);\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(overlay);\n\n    (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().node.focus();\n    \n    const addItem = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getAddItemButton)();\n    addItem.addEventListener('click', () => { \n        if ((0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().value) {\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.addItemToList)((0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().value); \n            (0,_print__WEBPACK_IMPORTED_MODULE_2__.printAddedItem)((0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().value);\n            (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.clearInput)((0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().node)\n        } else {\n            console.log('error: empty item');\n            (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getItem)().node.focus();\n        }\n    })\n    \n    const submitButton = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getSubmitButton)();\n    submitButton.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.dispatchSubmit)\n}\n\nconst regularTaskForm = () => {\n    const form = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.formFactory)();\n    \n    const textContainer = form.containerConstructor('text', 'name', 'Name');\n    const textareaContainer = form.containerConstructor('textarea', 'description', 'Description');\n    const dueDateContainer = form.containerConstructor('date', 'dueDate', 'Due date');\n    const priorityContainer = form.containerConstructor('select', 'priority', 'Priority', ['low', 'normal', 'high']);\n    const submitContainer = form.containerConstructor('submit', 'submit', 'Submit task');\n    \n    const overlay = form.createOverlay('regular', [textContainer, textareaContainer, dueDateContainer, priorityContainer, submitContainer]);\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(overlay);\n    \n    (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getName)().node.focus()\n        \n    const submitButton = (0,_DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.getSubmitButton)();\n    submitButton.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.dispatchSubmit)\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/form.js?");

/***/ }),

/***/ "./src/tasks/print.js":
/*!****************************!*\
  !*** ./src/tasks/print.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printAddedItem\": () => (/* binding */ printAddedItem),\n/* harmony export */   \"printQuickTask\": () => (/* binding */ printQuickTask),\n/* harmony export */   \"printRegularTask\": () => (/* binding */ printRegularTask)\n/* harmony export */ });\n/* harmony import */ var _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMGlobalManipulations */ \"./src/DOMGlobalManipulations.js\");\n\n\n\nconst printAddedItem = (lastItem) => {\n    if (lastItem) {\n        const ul = document.getElementById('quick-task-list');\n        const li = document.createElement('li');\n        li.textContent = lastItem;\n        ul.appendChild(li);\n    }\n}\n\nconst printQuickTask = (task) => {\n    const card = document.createElement('div');\n    card.classList.add('task');\n    card.setAttribute('data-index', task.id);\n    card.setAttribute('data-project', task.project);\n\n    const title = document.createElement('p');\n    title.classList.add('centered');\n    title.textContent = task.dueDate;\n    card.appendChild(title);\n\n    const ul = document.createElement('ul');\n    task.list.forEach(item => {\n        const li = document.createElement('li');\n        li.textContent = item;\n        ul.appendChild(li)\n    });\n\n    card.appendChild(ul)\n\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.taskContainer.appendChild(card);\n}\n\nconst printRegularTask = (task) => {\n    const card = document.createElement('div');\n    card.classList.add('task');\n    card.classList.add('post-it');\n    card.setAttribute('data-index', task.id);\n    card.setAttribute('data-project', task.project);\n\n    const title = document.createElement('h4');\n    title.classList.add('centered');\n    title.textContent = task.name;\n    card.appendChild(title);\n\n    const dueDate = document.createElement('p');\n    dueDate.classList.add('underline');\n    dueDate.textContent = task.dueDate;\n    card.appendChild(dueDate);\n\n    const desc = document.createElement('p');\n    if (task.description.length > 30) {\n        desc.textContent = task.description.slice(0, 30) + ' ...';\n    } else {\n        desc.textContent = task.description;\n    }\n    card.appendChild(desc);\n\n    switch (task.priority) {\n        case 'low':\n            card.classList.add('priority-low')\n            break;\n        case 'normal':\n            card.classList.add('priority-normal')\n            break;\n        case 'high':\n            card.classList.add('priority-high')\n            break;\n                \n        default:\n            card.classList.add('priority-normal')\n            break;\n    }\n\n    \n\n    _DOMGlobalManipulations__WEBPACK_IMPORTED_MODULE_0__.taskContainer.appendChild(card);\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/print.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;