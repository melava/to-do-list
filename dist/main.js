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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfoNewProject\": () => (/* binding */ getInfoNewProject),\n/* harmony export */   \"addProjectToList\": () => (/* binding */ addProjectToList),\n/* harmony export */   \"getInfoNewQuickList\": () => (/* binding */ getInfoNewQuickList),\n/* harmony export */   \"addItemToList\": () => (/* binding */ addItemToList),\n/* harmony export */   \"addQuickTaskToList\": () => (/* binding */ addQuickTaskToList),\n/* harmony export */   \"getInfoNewRegularTask\": () => (/* binding */ getInfoNewRegularTask),\n/* harmony export */   \"addRegularTaskToList\": () => (/* binding */ addRegularTaskToList),\n/* harmony export */   \"quickListProjects\": () => (/* binding */ quickListProjects),\n/* harmony export */   \"postitProjects\": () => (/* binding */ postitProjects),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer)\n/* harmony export */ });\n/* harmony import */ var _projects_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/factory */ \"./src/projects/factory.js\");\n/* harmony import */ var _projects_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/form */ \"./src/projects/form.js\");\n/* harmony import */ var _projects_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/print */ \"./src/projects/print.js\");\n/* harmony import */ var _tasks_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/factory */ \"./src/tasks/factory.js\");\n/* harmony import */ var _tasks_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/form */ \"./src/tasks/form.js\");\n/* harmony import */ var _tasks_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/print */ \"./src/tasks/print.js\");\n\n\n\n\n\n\n\n\nconst quickListProjects = document.getElementById('quick-projects');\nconst postitProjects = document.getElementById('postit-projects');\nconst taskContainer = document.getElementById('task-container')\nconst addProject = document.getElementById('add-project');\nconst addToDo = document.getElementById('add-todo');\nlet projectsArray = [];\nlet quickList = [];\nlet tasksArray = [];\n\n//get project info\nconst getInfoNewProject = () => {\n    const getName = document.getElementById('name').value;\n    let getType = '';\n    if (document.getElementById('quick').checked) {\n        getType = document.getElementById('quick').value\n    } else if (document.getElementById('regular').checked) {\n        getType = document.getElementById('regular').value\n    }\n    const getId = projectsArray.length;\n    const project = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_0__.Project)(getType, getName, getId);\n    \n    return project\n}\n\n//add project to the list\nconst addProjectToList = (project) => {\n    projectsArray.push(project);\n    \n    return projectsArray\n}\n\nconst chooseTaskForm = () => {\n    const projectSelected = document.getElementsByClassName('project selected')[0]\n    if (projectSelected.className.includes('quick')) {\n        (0,_tasks_form__WEBPACK_IMPORTED_MODULE_4__.quickTaskForm)();\n    } else if (projectSelected.className.includes('regular')) {\n        (0,_tasks_form__WEBPACK_IMPORTED_MODULE_4__.regularTaskForm)();\n    } else {\n        console.log('ho no, there isn\\'t any project selected!')\n    }\n}\n\nconst getInfoNewQuickList = () => {\n    const getDueDate = document.getElementById('dueDate').value;\n    const getList = quickList.map(item => item);\n    const getId = tasksArray.length;\n    const getProject = document.getElementsByClassName('selected')[0].textContent\n    const quickTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_3__.QuickTask)(getDueDate, getList, getProject, getId)\n\n    return quickTask\n}\n\nconst addItemToList = (item) => {\n    quickList.push(item)\n\n    return quickList\n}\n\nconst addQuickTaskToList = (task) => {\n    quickList = [];\n    tasksArray.push(task);\n\n    return tasksArray\n}\n\nconst getInfoNewRegularTask = () => {\n    const getName = document.getElementById('name').value;\n    const getDueDate = document.getElementById('dueDate').value;\n    const getDescription = document.getElementById('description').value;\n    const getPriority = document.getElementById('priority').value;\n    const getProject = document.getElementsByClassName('selected')[0].textContent\n    const getId = tasksArray.length;\n    const regularTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_3__.RegularTask)(getName, getDueDate, getDescription, getProject, getPriority, getId)\n\n    return regularTask\n}\n\nconst addRegularTaskToList = (task) => {\n    tasksArray.push(task);\n\n    return tasksArray\n}\n\n// ----------------------------------CALLS\n// add 2 prototype project to start the page\nconst initiatePage = (() => {\n    const testQuickTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_3__.QuickTask)('2021-03-02', ['aaa', 'bbb'], 'prototype-shopping-list', 0);\n    const testRegTask = (0,_tasks_factory__WEBPACK_IMPORTED_MODULE_3__.RegularTask)('task prototype', '2021-03-09', 'description: lorem ipsum dolor sic amat.', 'prototype-classic-project', 'normal', 0);\n    addQuickTaskToList(testQuickTask);\n    addRegularTaskToList(testRegTask);\n    (0,_tasks_print__WEBPACK_IMPORTED_MODULE_5__.printQuickTask)(testQuickTask);\n    (0,_tasks_print__WEBPACK_IMPORTED_MODULE_5__.printRegularTask)(testRegTask);\n    \n    const protoQuick = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_0__.Project)('quick', 'prototype-shopping-list', 0);\n    const protoReg = (0,_projects_factory__WEBPACK_IMPORTED_MODULE_0__.Project)('regular', 'prototype-classic-project', 1);\n    addProjectToList(protoReg);\n    addProjectToList(protoQuick);\n    (0,_projects_print__WEBPACK_IMPORTED_MODULE_2__.printProject)(protoQuick);\n    (0,_projects_print__WEBPACK_IMPORTED_MODULE_2__.printProject)(protoReg);\n    \n})();\naddProject.addEventListener('click', _projects_form__WEBPACK_IMPORTED_MODULE_1__.projectForm);\naddToDo.addEventListener('click', chooseTaskForm);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"closeOverlay\": () => (/* binding */ closeOverlay)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ \"./src/projects/print.js\");\n\n\n\nconst container = document.getElementById('content-container');\n\nconst projectForm = () => {\n    const overlay = document.createElement('div');\n    overlay.id = 'form-overlay';\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form');\n    formContainer.classList.add('project');\n    overlay.appendChild(formContainer);\n    \n    const radioContainer = document.createElement('div');\n    radioContainer.id = 'radio-container';\n    const labelQuick = document.createElement('label');\n    labelQuick.setAttribute('for','quick');\n    labelQuick.textContent = 'Quick List';\n    const inputQuick = document.createElement('input');\n    inputQuick.type = 'radio';\n    inputQuick.name = 'type';\n    inputQuick.value = 'quick';\n    inputQuick.id = 'quick';\n    const labelRegular = document.createElement('label');\n    labelRegular.setAttribute('for','regular');\n    labelRegular.textContent = 'Regular task';\n    const inputRegular = document.createElement('input');\n    inputRegular.type = 'radio';\n    inputRegular.name = 'type';\n    inputRegular.value = 'regular';\n    inputRegular.id = 'regular';\n    inputRegular.checked = true;\n    radioContainer.appendChild(inputRegular);\n    radioContainer.appendChild(labelRegular);\n    radioContainer.appendChild(inputQuick);\n    radioContainer.appendChild(labelQuick);\n    formContainer.appendChild(radioContainer);\n\n    const textContainer = document.createElement('div');\n    textContainer.id = 'text-container';\n    const inputName = document.createElement('input');\n    inputName.type = 'text';\n    inputName.id = 'name';\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for','name');\n    labelName.textContent = 'Project\\'s name';\n    textContainer.appendChild(labelName);\n    textContainer.appendChild(inputName);\n    formContainer.appendChild(textContainer);\n\n    const submitContainer = document.createElement('div');\n    submitContainer.id = 'submit-container';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Create project';\n    submitButton.id = 'create-project'\n    submitContainer.appendChild(submitButton);\n    formContainer.appendChild(submitContainer);\n\n    container.appendChild(overlay);\n    inputName.focus();\n\n    submitButton.addEventListener('click', () => { \n        if (inputName.value) {\n            let project = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getInfoNewProject)(); \n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProjectToList)(project); \n            (0,_print__WEBPACK_IMPORTED_MODULE_1__.printProject)(project); \n            closeOverlay() \n        } else {\n            console.log('Error: no name project');\n            inputName.focus();\n        }\n    })\n}\n\nconst closeOverlay = () => {\n    const overlay = document.getElementById('form-overlay');\n    container.removeChild(overlay);\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/form.js?");

/***/ }),

/***/ "./src/projects/print.js":
/*!*******************************!*\
  !*** ./src/projects/print.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printProject\": () => (/* binding */ printProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection */ \"./src/projects/selection.js\");\n/* harmony import */ var _tasks_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/filter */ \"./src/tasks/filter.js\");\n\n\n\n\n\nconst printProject = (project) => {\n    const card = document.createElement('div');\n    card.classList.add('project');\n    card.classList.add(project.type);\n    card.setAttribute('data-index', project.id);\n    card.textContent = `${project.name}`;\n    project.type === 'quick' ? _index__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.appendChild(card) : _index__WEBPACK_IMPORTED_MODULE_0__.postitProjects.appendChild(card);\n    (0,_selection__WEBPACK_IMPORTED_MODULE_1__.toggleSelectedProject)();\n    card.classList.add('selected');\n    (0,_tasks_filter__WEBPACK_IMPORTED_MODULE_2__.filterTasks)();\n    card.addEventListener('click', _selection__WEBPACK_IMPORTED_MODULE_1__.isProjectSelected);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/print.js?");

/***/ }),

/***/ "./src/projects/selection.js":
/*!***********************************!*\
  !*** ./src/projects/selection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isProjectSelected\": () => (/* binding */ isProjectSelected),\n/* harmony export */   \"toggleSelectedProject\": () => (/* binding */ toggleSelectedProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _tasks_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/filter */ \"./src/tasks/filter.js\");\n\n\n\nconst isProjectSelected = (e) => {\n    if (e.target.className.includes('selected')) {\n        console.log('already selected --> edit ')\n    } else {\n        toggleSelectedProject();\n        e.target.classList.add('selected');\n        (0,_tasks_filter__WEBPACK_IMPORTED_MODULE_1__.filterTasks)();\n    }\n}\n\nconst toggleSelectedProject = () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__.postitProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/selection.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterTasks\": () => (/* binding */ filterTasks)\n/* harmony export */ });\n\nconst taskContainer = document.getElementById('task-container')\n\nconst filterTasks = () => {\n    taskContainer.childNodes.forEach(task => {\n        const currentSelectedProject = document.getElementsByClassName('selected')[0].textContent;\n        if(task.dataset.project === currentSelectedProject){\n            task.classList.remove('hidden')\n        } else {\n            task.classList.add('hidden')\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/filter.js?");

/***/ }),

/***/ "./src/tasks/form.js":
/*!***************************!*\
  !*** ./src/tasks/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"quickTaskForm\": () => (/* binding */ quickTaskForm),\n/* harmony export */   \"regularTaskForm\": () => (/* binding */ regularTaskForm)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ \"./src/tasks/print.js\");\n\n\n\nconst container = document.getElementById('content-container');\n\nconst quickTaskForm = () => {\n    const overlay = document.createElement('div');\n    overlay.id = 'form-overlay';\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form');\n    formContainer.classList.add('quicklist');\n    overlay.appendChild(formContainer);\n\n    const dueDateContainer = document.createElement('div');\n    dueDateContainer.id = 'date-container';\n    const inputDate = document.createElement('input');\n    inputDate.type = 'date';\n    inputDate.id = 'dueDate';\n    inputDate.value = new Date().toISOString().substr(0,10);\n    const labelDate = document.createElement('label');\n    labelDate.setAttribute('for','dueDate');\n    labelDate.textContent = 'Due date';\n    dueDateContainer.appendChild(labelDate);\n    dueDateContainer.appendChild(inputDate);\n    formContainer.appendChild(dueDateContainer);\n\n    const inputContainer = document.createElement('div');\n    inputContainer.id = 'input-container';\n    const inputName = document.createElement('input');\n    inputName.type = 'text';\n    inputName.id = 'item';\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for','item');\n    labelName.textContent = 'List item';\n    const addItem = document.createElement('button');\n    addItem.id = 'add-item';\n    addItem.textContent = '+';\n    addItem.classList.add('button');\n    inputContainer.appendChild(labelName);\n    inputContainer.appendChild(inputName);\n    inputContainer.appendChild(addItem);\n    formContainer.appendChild(inputContainer);\n\n    const ul = document.createElement('ul');\n    ul.id = 'quick-task-list';\n    formContainer.appendChild(ul);\n\n    const submitContainer = document.createElement('div');\n    submitContainer.id = 'submit-container';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Submit list';\n    submitButton.id = 'create-list';\n    submitContainer.appendChild(submitButton);\n    formContainer.appendChild(submitContainer);\n\n    container.appendChild(overlay);\n    inputName.focus();\n\n    addItem.addEventListener('click', () => { \n        if (inputName.value) {\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addItemToList)(inputName.value); \n            (0,_print__WEBPACK_IMPORTED_MODULE_1__.printAddedItem)(inputName.value);\n            clearInput(inputName)\n        } else {\n            console.log('error: empty item');\n            inputName.focus();\n        }\n    })\n    \n    submitButton.addEventListener('click', () => { \n        let quickList = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getInfoNewQuickList)(); \n        if (quickList.list.length > 0) {\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addQuickTaskToList)(quickList); \n            (0,_print__WEBPACK_IMPORTED_MODULE_1__.printQuickTask)(quickList); \n            closeOverlay() \n        } else {\n            console.log('error : empty list');\n            inputName.focus();\n        }\n    })\n}\n\nconst regularTaskForm = () => {\n    const overlay = document.createElement('div');\n    overlay.id = 'form-overlay';\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form');\n    formContainer.classList.add('regular');\n    overlay.appendChild(formContainer);\n\n    const inputContainer = document.createElement('div');\n    inputContainer.id = 'input-container';\n    const inputName = document.createElement('input');\n    inputName.type = 'text';\n    inputName.id = 'name';\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for','name');\n    labelName.textContent = 'Name';\n    inputContainer.appendChild(labelName);\n    inputContainer.appendChild(inputName);\n    formContainer.appendChild(inputContainer);\n\n    const textareaContainer = document.createElement('div');\n    textareaContainer.id = 'textarea-container';\n    const inputDescription = document.createElement('textarea');\n    inputDescription.id = 'description';\n    inputDescription.rows = 5;\n    const labelDescription = document.createElement('label');\n    labelDescription.setAttribute('for','description');\n    labelDescription.textContent = 'Description';\n    textareaContainer.appendChild(labelDescription);\n    textareaContainer.appendChild(inputDescription);\n    formContainer.appendChild(textareaContainer);\n\n    const dueDateContainer = document.createElement('div');\n    dueDateContainer.id = 'date-container';\n    const inputDate = document.createElement('input');\n    inputDate.type = 'date';\n    inputDate.id = 'dueDate';\n    inputDate.value = new Date().toISOString().substr(0,10);\n    const labelDate = document.createElement('label');\n    labelDate.setAttribute('for','dueDate');\n    labelDate.textContent = 'Due date';\n    dueDateContainer.appendChild(labelDate);\n    dueDateContainer.appendChild(inputDate);\n    formContainer.appendChild(dueDateContainer);\n    \n    const priorityContainer = document.createElement('div');\n    priorityContainer.id = 'priority-container';\n    const inputPriority = document.createElement('select');\n    inputPriority.id = 'priority';\n    const optionLow = document.createElement('option');\n    optionLow.value = 'low';\n    optionLow.textContent = 'Low';\n    const optionNormal = document.createElement('option');\n    optionNormal.value = 'normal';\n    optionNormal.textContent = 'Normal';\n    optionNormal.selected = true;\n    const optionHigh = document.createElement('option');\n    optionHigh.value = 'high';\n    optionHigh.textContent = 'High';\n    const labelPriority = document.createElement('label');\n    labelPriority.setAttribute('for', 'priority');\n    labelPriority.textContent = 'Priority';\n    inputPriority.appendChild(optionLow);\n    inputPriority.appendChild(optionNormal);\n    inputPriority.appendChild(optionHigh);\n    priorityContainer.appendChild(labelPriority);\n    priorityContainer.appendChild(inputPriority);\n    formContainer.appendChild(priorityContainer);\n\n    const submitContainer = document.createElement('div');\n    submitContainer.id = 'submit-container';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Submit task';\n    submitButton.id = 'create-task';\n    submitContainer.appendChild(submitButton);\n    formContainer.appendChild(submitContainer);\n\n    container.appendChild(overlay);\n    inputName.focus();\n\n    submitButton.addEventListener('click', () => { \n        let regularTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getInfoNewRegularTask)(); \n        if (regularTask.name) {\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addRegularTaskToList)(regularTask); \n            (0,_print__WEBPACK_IMPORTED_MODULE_1__.printRegularTask)(regularTask); \n            closeOverlay() \n        } else {\n            console.log('error: no name');\n            inputName.focus();\n        }\n    })\n}\n\n\nconst closeOverlay = () => {\n    const overlay = document.getElementById('form-overlay');\n    container.removeChild(overlay);\n}\n\nconst clearInput = (input) => {\n    input.value = '';\n    input.focus()\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/form.js?");

/***/ }),

/***/ "./src/tasks/print.js":
/*!****************************!*\
  !*** ./src/tasks/print.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printAddedItem\": () => (/* binding */ printAddedItem),\n/* harmony export */   \"printQuickTask\": () => (/* binding */ printQuickTask),\n/* harmony export */   \"printRegularTask\": () => (/* binding */ printRegularTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nconst printAddedItem = (lastItem) => {\n    if (lastItem) {\n        const ul = document.getElementById('quick-task-list');\n        const li = document.createElement('li');\n        li.textContent = lastItem;\n        ul.appendChild(li);\n    }\n}\n\nconst printQuickTask = (task) => {\n    const card = document.createElement('div');\n    card.classList.add('task');\n    card.setAttribute('data-index', task.id);\n    card.setAttribute('data-project', task.project);\n\n    const title = document.createElement('p');\n    title.classList.add('centered');\n    title.textContent = task.dueDate;\n    card.appendChild(title);\n\n    const ul = document.createElement('ul');\n    task.list.forEach(item => {\n        const li = document.createElement('li');\n        li.textContent = item;\n        ul.appendChild(li)\n    });\n\n    card.appendChild(ul)\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.taskContainer.appendChild(card);\n}\n\nconst printRegularTask = (task) => {\n    const card = document.createElement('div');\n    card.classList.add('task');\n    card.classList.add('post-it');\n    card.setAttribute('data-index', task.id);\n    card.setAttribute('data-project', task.project);\n\n    const title = document.createElement('h4');\n    title.classList.add('centered');\n    title.textContent = task.name;\n    card.appendChild(title);\n\n    const dueDate = document.createElement('p');\n    dueDate.classList.add('underline');\n    dueDate.textContent = task.dueDate;\n    card.appendChild(dueDate);\n\n    const desc = document.createElement('p');\n    if (task.description.length > 30) {\n        desc.textContent = task.description.slice(0, 30) + ' ...';\n    } else {\n        desc.textContent = task.description;\n    }\n    card.appendChild(desc);\n\n    switch (task.priority) {\n        case 'low':\n            card.classList.add('priority-low')\n            break;\n        case 'normal':\n            card.classList.add('priority-normal')\n            break;\n        case 'high':\n            card.classList.add('priority-high')\n            break;\n                \n        default:\n            card.classList.add('priority-normal')\n            break;\n    }\n\n    \n\n    _index__WEBPACK_IMPORTED_MODULE_0__.taskContainer.appendChild(card);\n}\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks/print.js?");

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