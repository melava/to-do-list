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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory.js */ \"./src/projectFactory.js\");\n\n\nconst container = document.getElementById('content-container');\nconst projectsContainer = document.getElementById('projects-container');\nconst quickListProjects = document.getElementById('quick-projects');\nconst postitProjects = document.getElementById('postit-projects');\nconst todosContainer = document.getElementById('todos-container');\n\nconst addProject = document.getElementById('add-project');\nconst addToDo = document.getElementById('add-todo');\nlet projectArray = [];\n\n//get info + launch factory creation + launch printing\nconst getNewProject = () => {\n    const getName = document.getElementById('name').value;\n    let getType = '';\n    if (document.getElementById('quick').checked) {\n        getType = document.getElementById('quick').value\n    } else if (document.getElementById('regular').checked) {\n        getType = document.getElementById('regular').value\n    }\n    const getId = projectArray.length;\n    // const project = Project(getType, getName, getId);\n    // projectArray.push(project);\n    // printProject(project);\n    closeOverlay();\n\n    return {projectArray}\n}\n\n\n\n// DOM print\nconst projectForm = () => {\n    const overlay = document.createElement('div');\n    overlay.id = 'form-overlay';\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form')\n    overlay.appendChild(formContainer);\n    \n    const radioContainer = document.createElement('div');\n    radioContainer.id = 'radio-container';\n    const labelQuick = document.createElement('label');\n    labelQuick.setAttribute('for','quick');\n    labelQuick.textContent = 'Quick List';\n    const inputQuick = document.createElement('input');\n    inputQuick.type = 'radio';\n    inputQuick.name = 'type';\n    inputQuick.value = 'quick';\n    inputQuick.id = 'quick';\n    const labelRegular = document.createElement('label');\n    labelRegular.setAttribute('for','regular');\n    labelRegular.textContent = 'Regular List';\n    const inputRegular = document.createElement('input');\n    inputRegular.type = 'radio';\n    inputRegular.name = 'type';\n    inputRegular.value = 'regular';\n    inputRegular.id = 'regular';\n    radioContainer.appendChild(inputQuick);\n    radioContainer.appendChild(labelQuick);\n    radioContainer.appendChild(inputRegular);\n    radioContainer.appendChild(labelRegular);\n    formContainer.appendChild(radioContainer);\n\n    const textContainer = document.createElement('div');\n    textContainer.id = 'text-container';\n    const inputName = document.createElement('input');\n    inputName.type = 'text';\n    inputName.id = 'name';\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for','name');\n    labelName.textContent = 'Project\\'s name';\n    textContainer.appendChild(labelName);\n    textContainer.appendChild(inputName);\n    formContainer.appendChild(textContainer);\n\n    const submitContainer = document.createElement('div');\n    submitContainer.id = 'submit-container';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Create project';\n    submitButton.id = 'create-project'\n    submitContainer.appendChild(submitButton);\n    formContainer.appendChild(submitContainer);\n\n    container.appendChild(overlay);\n\n    submitButton.addEventListener('click', getNewProject)\n}\n\nconst closeOverlay = () => {\n    const overlay = document.getElementById('form-overlay');\n    container.removeChild(overlay);\n}\n\nconst printProject = (project) => {\n    const card = document.createElement('div');\n    card.classList.add('project');\n    card.classList.add(project.type);\n    card.textContent = `${project.name}`;\n    project.type === 'quick' ? quickListProjects.appendChild(card) : postitProjects.appendChild(card);\n};\n\n\n// // const task = () => {\n// //     const name = _getName();\n// //     const dueDate = _getDueDate();\n// //     const description = getDescription();\n// //     const priority = getPriority();\n// //     const label = getLabel();\n// //     const status = getStatus();\n// // }\n \n\n\n// // CALLS\naddProject.addEventListener('click', projectForm);\n\nconst testproject = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__.Project)('shop', 'test1', '0');\nconsole.log(testproject);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n//factory\nconst Project = (type, name, id) => {\n    undefined.type = type;\n    undefined.name = name;\n    undefined.id = id;\n    \n    return { type , name , id }\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projectFactory.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;