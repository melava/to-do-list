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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfoNewProject\": () => (/* binding */ getInfoNewProject),\n/* harmony export */   \"quickListProjects\": () => (/* binding */ quickListProjects),\n/* harmony export */   \"postitProjects\": () => (/* binding */ postitProjects)\n/* harmony export */ });\n/* harmony import */ var _projects_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projectFactory */ \"./src/projects/projectFactory.js\");\n/* harmony import */ var _projects_printProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/printProject */ \"./src/projects/printProject.js\");\n/* harmony import */ var _projects_projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projectForm */ \"./src/projects/projectForm.js\");\n\n\n\n\n\nconst quickListProjects = document.getElementById('quick-projects');\nconst postitProjects = document.getElementById('postit-projects');\nconst addProject = document.getElementById('add-project');\nconst addToDo = document.getElementById('add-todo');\nlet projectArray = [];\n\n//get info + launch factory creation\nconst getInfoNewProject = () => {\n    const getName = document.getElementById('name').value;\n    let getType = '';\n    if (document.getElementById('quick').checked) {\n        getType = document.getElementById('quick').value\n    } else if (document.getElementById('regular').checked) {\n        getType = document.getElementById('regular').value\n    }\n    const getId = projectArray.length;\n    const project = (0,_projects_projectFactory__WEBPACK_IMPORTED_MODULE_0__.Project)(getType, getName, getId);\n    addProjectToList(project);\n}\n\n//add project to the list and print it\nconst addProjectToList = (project) => {\n    projectArray.push(project);\n    (0,_projects_printProject__WEBPACK_IMPORTED_MODULE_1__.printProject)(project);\n\n    return { projectArray }\n}\n\n\n// // const task = () => {\n// //     const name = _getName();\n// //     const dueDate = _getDueDate();\n// //     const description = getDescription();\n// //     const priority = getPriority();\n// //     const label = getLabel();\n// //     const status = getStatus();\n// // }\n \n\n\n// ----------------------------------CALLS\naddProject.addEventListener('click', _projects_projectForm__WEBPACK_IMPORTED_MODULE_2__.projectForm);\n\n// add 2 prototype project to start the page\nconst protoQuick = (0,_projects_projectFactory__WEBPACK_IMPORTED_MODULE_0__.Project)('quick', 'prototype-shopping-list', 0);\nconst protoReg = (0,_projects_projectFactory__WEBPACK_IMPORTED_MODULE_0__.Project)('regular', 'prototype-classic-project', 1);\naddProjectToList(protoReg);\naddProjectToList(protoQuick);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects/printProject.js":
/*!**************************************!*\
  !*** ./src/projects/printProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printProject\": () => (/* binding */ printProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectProject */ \"./src/projects/selectProject.js\");\n\n\n\n\nconst printProject = (project) => {\n    const card = document.createElement('div');\n    card.classList.add('project');\n    card.classList.add(project.type);\n    card.textContent = `${project.name}`;\n    project.type === 'quick' ? _index__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.appendChild(card) : _index__WEBPACK_IMPORTED_MODULE_0__.postitProjects.appendChild(card);\n    (0,_selectProject__WEBPACK_IMPORTED_MODULE_1__.toggleSelectedProject)();\n    card.classList.add('selected');\n    card.addEventListener('click', _selectProject__WEBPACK_IMPORTED_MODULE_1__.isProjectSelected);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/printProject.js?");

/***/ }),

/***/ "./src/projects/projectFactory.js":
/*!****************************************!*\
  !*** ./src/projects/projectFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n//factory\nconst Project = (type, name, id) => {\n    return { type , name , id }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/projectFactory.js?");

/***/ }),

/***/ "./src/projects/projectForm.js":
/*!*************************************!*\
  !*** ./src/projects/projectForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"closeOverlay\": () => (/* binding */ closeOverlay)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst container = document.getElementById('content-container');\n\nconst projectForm = () => {\n    const overlay = document.createElement('div');\n    overlay.id = 'form-overlay';\n    const formContainer = document.createElement('div');\n    formContainer.classList.add('form')\n    overlay.appendChild(formContainer);\n    \n    const radioContainer = document.createElement('div');\n    radioContainer.id = 'radio-container';\n    const labelQuick = document.createElement('label');\n    labelQuick.setAttribute('for','quick');\n    labelQuick.textContent = 'Quick List';\n    const inputQuick = document.createElement('input');\n    inputQuick.type = 'radio';\n    inputQuick.name = 'type';\n    inputQuick.value = 'quick';\n    inputQuick.id = 'quick';\n    const labelRegular = document.createElement('label');\n    labelRegular.setAttribute('for','regular');\n    labelRegular.textContent = 'Regular List';\n    const inputRegular = document.createElement('input');\n    inputRegular.type = 'radio';\n    inputRegular.name = 'type';\n    inputRegular.value = 'regular';\n    inputRegular.id = 'regular';\n    radioContainer.appendChild(inputQuick);\n    radioContainer.appendChild(labelQuick);\n    radioContainer.appendChild(inputRegular);\n    radioContainer.appendChild(labelRegular);\n    formContainer.appendChild(radioContainer);\n\n    const textContainer = document.createElement('div');\n    textContainer.id = 'text-container';\n    const inputName = document.createElement('input');\n    inputName.type = 'text';\n    inputName.id = 'name';\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for','name');\n    labelName.textContent = 'Project\\'s name';\n    textContainer.appendChild(labelName);\n    textContainer.appendChild(inputName);\n    formContainer.appendChild(textContainer);\n\n    const submitContainer = document.createElement('div');\n    submitContainer.id = 'submit-container';\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Create project';\n    submitButton.id = 'create-project'\n    submitContainer.appendChild(submitButton);\n    formContainer.appendChild(submitContainer);\n\n    container.appendChild(overlay);\n\n    submitButton.addEventListener('click', () => { (0,_index__WEBPACK_IMPORTED_MODULE_0__.getInfoNewProject)(); closeOverlay() } )\n}\n\nconst closeOverlay = () => {\n    const overlay = document.getElementById('form-overlay');\n    container.removeChild(overlay);\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/projectForm.js?");

/***/ }),

/***/ "./src/projects/selectProject.js":
/*!***************************************!*\
  !*** ./src/projects/selectProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isProjectSelected\": () => (/* binding */ isProjectSelected),\n/* harmony export */   \"toggleSelectedProject\": () => (/* binding */ toggleSelectedProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nconst isProjectSelected = (e) => {\n    if (e.target.className.includes('selected')) {\n        console.log('already selected --> edit ')\n    } else {\n        toggleSelectedProject();\n        e.target.classList.add('selected');\n    }\n}\n\nconst toggleSelectedProject = () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.quickListProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n    _index__WEBPACK_IMPORTED_MODULE_0__.postitProjects.childNodes.forEach(child => {\n        if (child.className.includes('selected')) {\n            child.classList.remove('selected')\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects/selectProject.js?");

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