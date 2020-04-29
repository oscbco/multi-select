(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MultiSelect"] = factory(require("react"));
	else
		root["MultiSelect"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiSelect;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _Shapes = __webpack_require__(6);

var _titleCase = _interopRequireDefault(__webpack_require__(7));

var _MultiSelect = _interopRequireDefault(__webpack_require__(8));

var _jsxFileName = "/home/darkcode/Projects/libraries/multi-select/source/MultiSelect/MultiSelect.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MultiSelect(props) {
  var itemListRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = (0, _react.useState)(-1),
      _useState4 = _slicedToArray(_useState3, 1),
      active = _useState4[0];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpen = _useState6[0],
      open = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      filterText = _useState8[0],
      setFilterText = _useState8[1]; // const [selected, setSelected] = useState([]);


  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      focused = _useState10[0],
      setFocused = _useState10[1];

  var handleFilterChange = function handleFilterChange(e) {
    setFilterText(e.target.value);
    open(true);
  };

  var openSelect = function openSelect(event) {
    event.preventDefault(); // Ignore clicks from cmdRemoveItem

    if (event.target.id === _MultiSelect["default"].cmdRemoveItem) {
      return;
    } // Clicks on txtFilter always open the select


    if (event.target.dataset.id === _MultiSelect["default"].txtFilter) {
      setHeight(itemListRef.current.offsetHeight);
      open(true);
      return;
    }

    setHeight(itemListRef.current.offsetHeight);
    open(!isOpen);
  };

  var handleBlur = function handleBlur(event) {
    var relatedTarget = event.relatedTarget !== null ? event.relatedTarget : document.createElement('p');

    if (event.currentTarget.contains(relatedTarget) === false) {
      setFocused(false);
      open(false);
    }
  };

  var selectItem = function selectItem(event) {
    var value = event.target.dataset.value;

    if (value !== undefined) {
      var item = props.items.find(function (elem) {
        /* eslint eqeqeq:0 */
        return elem[props.id] == value;
      });
      var indexOf = props.selected.indexOf(item[props.id]);

      if (indexOf === -1) {
        props.setSelected(props.selected.concat([item[props.id]]));
      } else {
        props.setSelected([].concat(_toConsumableArray(props.selected.slice(0, indexOf)), _toConsumableArray(props.selected.slice(indexOf + 1))));
      }
    }
  };

  var items = props.items.filter(function (item) {
    return item[props.label] ? item[props.label].includes(filterText) : item[props.id].includes(filterText);
  }).map(function (item, index) {
    var label = item[props.label] ? item[props.label] : (0, _titleCase["default"])(item[props.id]);
    var check = props.selected.includes(item[props.id]) ? '✓' : '';
    var activeItem = index === active ? props.classes.activeItem : '';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _MultiSelect["default"].item + ' ' + activeItem + ' ' + props.classes.item,
      key: item[props.id],
      "data-value": item[props.id],
      style: {
        color: item.menuColor,
        backgroundColor: item.menuBackground
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, label, " ", /*#__PURE__*/_react["default"].createElement("span", {
      "data-value": item[props.id],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, check));
  });
  var selectedItems = props.selected.map(function (itemValue, index) {
    var item = props.items.find(function (elem) {
      /* eslint eqeqeq:0 */
      return elem[props.id] == itemValue;
    });
    var label = item[props.label] ? item[props.label] : (0, _titleCase["default"])(item[props.id]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _MultiSelect["default"].selectedItem + ' ' + props.classes.selectedItem,
      key: item[props.id],
      style: {
        color: item.selectedColor,
        backgroundColor: item.selectedBackground
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, label, /*#__PURE__*/_react["default"].createElement("span", {
      id: _MultiSelect["default"].cmdRemoveItem,
      className: _MultiSelect["default"].cmdRemoveItem + ' ' + props.classes.cmdRemoveItem,
      "data-value": item[props.id],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, "\xD7"));
  });
  var empty = selectedItems.length === 0;
  (0, _react.useEffect)(function () {
    setHeight(itemListRef.current.offsetHeight);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: -1,
    className: _MultiSelect["default"].select + ' ' + props.classes.select,
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur(event) {
      return handleBlur(event);
    },
    onClick: selectItem,
    "data-is-open": isOpen,
    style: {
      width: props.width,
      zIndex: focused ? '9999' : '1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MultiSelect["default"].header + ' ' + props.classes.header,
    onClick: openSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, selectedItems), /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: props.placeholder,
    "data-open": isOpen,
    "data-id": _MultiSelect["default"].txtFilter,
    className: _MultiSelect["default"].txtFilter + ' ' + props.classes.input,
    style: {
      display: empty ? 'inline-block' : 'none'
    },
    type: "text",
    onChange: handleFilterChange,
    value: filterText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), selectedItems.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: _MultiSelect["default"].selectedItem + ' ' + props.classes.selectedItem + ' ' + _MultiSelect["default"].placeholderItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, "\xA0") : null), /*#__PURE__*/_react["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_Shapes.DownArrow, {
    id: _MultiSelect["default"].downArrow,
    className: _MultiSelect["default"].downArrow + ' ' + props.classes.downArrow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MultiSelect["default"].itemContainer + ' ' + props.classes.itemContainer,
    "data-is-open": isOpen,
    style: {
      height: isOpen === true ? height : '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: itemListRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: props.placeholder,
    "data-open": isOpen,
    "data-id": _MultiSelect["default"].txtFilter,
    className: _MultiSelect["default"].txtFilter + ' ' + props.classes.input,
    style: {
      display: !empty ? 'inline-block' : 'none'
    },
    type: "text",
    onChange: handleFilterChange,
    value: filterText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MultiSelect["default"].itemList + ' ' + props.classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, items))));
}

MultiSelect.defaultProps = {
  onFilterChange: function onFilterChange() {},
  width: 'auto',
  classes: {
    selectClass: '',
    headerClass: '',
    inputClass: '',
    selectedItemClass: '',
    itemContainerClass: '',
    listClass: ''
  },
  id: 'id',
  label: 'label'
};
MultiSelect.propTypes = {
  classes: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  selected: _propTypes["default"].array,
  setSelected: _propTypes["default"].func,
  items: _propTypes["default"].array,
  width: _propTypes["default"].string
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/home/darkcode/Projects/libraries/multi-select/source/MultiSelect/Shapes.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DownArrow = function DownArrow(_ref) {
  var className = _ref.className,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: className,
    height: "0.9em",
    version: "1.1",
    viewBox: "0 0 8.4666665 8.4666669",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0 -288.53)",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".8176",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "m0.61405 290.96 3.6193 3.6193",
    stroke: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m7.8526 290.96-3.6193 3.6193",
    stroke: "currentColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  })));
};

exports.DownArrow = DownArrow;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toTitleCase;

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.replace(/_/g, ' ').substring(1);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"select":"_1f4KvlI1rx-3baxCJxqkWf","header":"AyDHj_iVdxs0mV-lHKWwA","down-arrow":"_3YOM1QA0cp8qmPwcgusaIe","downArrow":"_3YOM1QA0cp8qmPwcgusaIe","selected-item":"_2kjKYYLAoYcqBeXW2ngScO","selectedItem":"_2kjKYYLAoYcqBeXW2ngScO","cmd-remove-item":"_3kJbI7XA_P_g3O24jFiNyq","cmdRemoveItem":"_3kJbI7XA_P_g3O24jFiNyq","txt-filter":"_3-iNI-D3qzFqDZc8qKKJbj","txtFilter":"_3-iNI-D3qzFqDZc8qKKJbj","item-container":"_1b9KRus8cWq9wzEZQ5QNXj","itemContainer":"_1b9KRus8cWq9wzEZQ5QNXj","item-list":"_1ROtNr2H5R9o-Mq1PLt_4I","itemList":"_1ROtNr2H5R9o-Mq1PLt_4I","placeholder-item":"twr-XfhZq0GqP5ti3Bg2A","placeholderItem":"twr-XfhZq0GqP5ti3Bg2A"};

/***/ })
/******/ ]);
});