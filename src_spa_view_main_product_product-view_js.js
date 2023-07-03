"use strict";
(self["webpackChunkspa"] = self["webpackChunkspa"] || []).push([["src_spa_view_main_product_product-view_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/card/card.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/card/card.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    height: 200px;
    width: 200px;

    margin: 10px;
    padding: 10px;
    box-sizing: border-box;

    border: 1px solid;
}

.card__full {
    height: 300px;
    width: 600px;
}

.card__field {
    width: 80%;

    text-align: center;
}

.card__button {
    width: 80%;
}

.card__button:hover {
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/spa/view/main/product/card/card.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;IAE7B,aAAa;IACb,YAAY;;IAEZ,YAAY;IACZ,aAAa;IACb,sBAAsB;;IAEtB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;;IAEV,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n    height: 200px;\r\n    width: 200px;\r\n\r\n    margin: 10px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n\r\n    border: 1px solid;\r\n}\r\n\r\n.card__full {\r\n    height: 300px;\r\n    width: 600px;\r\n}\r\n\r\n.card__field {\r\n    width: 80%;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.card__button {\r\n    width: 80%;\r\n}\r\n\r\n.card__button:hover {\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/product.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/product.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2.9%;
    
    height: 100%;
    width: 100%;

    margin: 10px;
    padding: 10px;
    box-sizing: border-box;

    overflow-y: scroll;
}`, "",{"version":3,"sources":["webpack://./src/spa/view/main/product/product.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,SAAS;;IAET,YAAY;IACZ,WAAW;;IAEX,YAAY;IACZ,aAAa;IACb,sBAAsB;;IAEtB,kBAAkB;AACtB","sourcesContent":[".product {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n    gap: 2.9%;\r\n    \r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    margin: 10px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n\r\n    overflow-y: scroll;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/spa/view/main/product/card/card.css":
/*!*************************************************!*\
  !*** ./src/spa/view/main/product/card/card.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./card.css */ "./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/card/card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/spa/view/main/product/product.css":
/*!***********************************************!*\
  !*** ./src/spa/view/main/product/product.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_product_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./product.css */ "./node_modules/css-loader/dist/cjs.js!./src/spa/view/main/product/product.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_product_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_product_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_product_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_product_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/data/cards.js":
/*!***************************!*\
  !*** ./src/data/cards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @typedef {{id: string, name: string, description: string}} CardInfo
 */
const cardsInfo = [
    {
        id: '1',
        name: 'Первая карточка',
        description: 'Полное и очень длинное описание для карточки.',
    },
    {
        id: '2',
        name: 'Вторая карточка',
        description: 'Полное и очень длинное описание для карточки. Это вторая карточка.',
    },
    {
        id: '3',
        name: 'Третья карточка',
        description: 'Полное и очень длинное описание для третьей карточки.',
    },
    {
        id: '4',
        name: 'Четвертая карточка',
        description: 'Полное и очень длинное описание для четвертой карточки.',
    },
    {
        id: '5',
        name: 'Пятая карточка',
        description: 'Полное и очень длинное описание для пятой карточки.',
    },
    {
        id: '6',
        name: 'Шестая карточка',
        description: 'Полное и очень длинное описание для шестой карточки.',
    },
    {
        id: '7',
        name: 'Седьмая карточка',
        description: 'Полное и очень длинное описание для седьмой карточки.',
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsInfo);


/***/ }),

/***/ "./src/spa/view/main/product/card-detail/card-detail-view.js":
/*!*******************************************************************!*\
  !*** ./src/spa/view/main/product/card-detail/card-detail-view.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardDetailView)
/* harmony export */ });
/* harmony import */ var _card_card_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/card-view */ "./src/spa/view/main/product/card/card-view.js");
/* harmony import */ var _router_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../router/pages */ "./src/spa/router/pages.js");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/element-creator */ "./src/spa/util/element-creator.js");




const CssClasses = {
    CONTAINER: 'card',
    CONTAINER_FULL: 'card__full',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_BACK = 'Назад...';

class CardDetailView extends _card_card_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
    configureView() {
        this.viewElementCreator.setCssClasses([CssClasses.CONTAINER, CssClasses.CONTAINER_FULL]);

        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
        };
        let creatorLabel = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"](labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.description,
            callback: null,
        };
        creatorLabel = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"](labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        const buttonParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_BACK,
            callback: this.buttonClickHandler.bind(this, `${_router_pages__WEBPACK_IMPORTED_MODULE_1__.Pages.PRODUCT}`),
        };
        const creatorButton = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"](buttonParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }
}


/***/ }),

/***/ "./src/spa/view/main/product/card/card-view.js":
/*!*****************************************************!*\
  !*** ./src/spa/view/main/product/card/card-view.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardView)
/* harmony export */ });
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ "./src/spa/view/main/product/card/card.css");
/* harmony import */ var _router_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../router/pages */ "./src/spa/router/pages.js");
/* harmony import */ var _util_element_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../util/element-creator */ "./src/spa/util/element-creator.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../view */ "./src/spa/view/view.js");





const CssClasses = {
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';

class CardView extends _view__WEBPACK_IMPORTED_MODULE_3__["default"] {
    /**
     * @param {import('../../../../../data/cards').CardInfo} card
     * @param {import('../../../../router/router').default} router
     */
    constructor(card, router) {
        /**
         * @type {import('../../../view').ViewParams}
         */
        const params = {
            tag: 'article',
            classNames: [CssClasses.CONTAINER],
        };
        super(params);

        this.card = card;
        this.router = router;

        this.htmlElement = this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../util/element-creator').ElementParams}
         */
        let labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
        };
        const creatorLabel = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"](labelParams);
        this.viewElementCreator.addInnerElement(creatorLabel);

        labelParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: this.buttonClickHandler.bind(this, `${_router_pages__WEBPACK_IMPORTED_MODULE_1__.Pages.PRODUCT}/${this.card.id}`),
        };
        const creatorButton = new _util_element_creator__WEBPACK_IMPORTED_MODULE_2__["default"](labelParams);
        this.viewElementCreator.addInnerElement(creatorButton);
    }

    /**
     * @param {string} url
     */
    buttonClickHandler(url) {
        this.router.navigate(url);
    }
}


/***/ }),

/***/ "./src/spa/view/main/product/product-view.js":
/*!***************************************************!*\
  !*** ./src/spa/view/main/product/product-view.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductView)
/* harmony export */ });
/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.css */ "./src/spa/view/main/product/product.css");
/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/cards */ "./src/data/cards.js");
/* harmony import */ var _card_detail_card_detail_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-detail/card-detail-view */ "./src/spa/view/main/product/card-detail/card-detail-view.js");
/* harmony import */ var _card_card_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card-view */ "./src/spa/view/main/product/card/card-view.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view */ "./src/spa/view/view.js");






const CssClasses = {
    PRODUCT: 'product',
};

class ProductView extends _view__WEBPACK_IMPORTED_MODULE_4__["default"] {
    /**
     * @param {string} id
     * @param {import('../../../router/router').default} router
     */
    constructor(router, id = '') {
        /**
         * @type {import('../../view').ViewParams}
         */
        const params = {
            tag: 'section',
            classNames: [CssClasses.PRODUCT],
        };
        super(params);

        if (id) {
            this.addLargeCardToView(router, id);
        } else {
            this.addSmallCardsToView(router);
        }
    }

    /**
     * @param {import('../../../router/router').default} router
     */
    addSmallCardsToView(router) {
        _data_cards__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((card) => {
            const smallCardComponent = new _card_card_view__WEBPACK_IMPORTED_MODULE_3__["default"](card, router);
            this.viewElementCreator.addInnerElement(smallCardComponent.getHtmlElement());
        });
    }

    /**
     * @param {import('../../../router/router').default} router
     * @param {string} id
     */
    addLargeCardToView(router, id) {
        const selectedCard = _data_cards__WEBPACK_IMPORTED_MODULE_1__["default"].find((card) => card.id === id);
        const largeCardComponent = new _card_detail_card_detail_view__WEBPACK_IMPORTED_MODULE_2__["default"](selectedCard, router);
        this.viewElementCreator.addInnerElement(largeCardComponent.getHtmlElement());
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NwYV92aWV3X21haW5fcHJvZHVjdF9wcm9kdWN0LXZpZXdfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBHQUEwRyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsV0FBVyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxpQ0FBaUMsc0JBQXNCLCtCQUErQiw0QkFBNEIsc0NBQXNDLDBCQUEwQixxQkFBcUIseUJBQXlCLHNCQUFzQiwrQkFBK0IsOEJBQThCLEtBQUsscUJBQXFCLHNCQUFzQixxQkFBcUIsS0FBSyxzQkFBc0IsbUJBQW1CLCtCQUErQixLQUFLLHVCQUF1QixtQkFBbUIsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUssbUJBQW1CO0FBQzM1QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEN2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0dBQXdHLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsYUFBYSxh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MUY7QUFDQSxrQ0FBa0MsNkRBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RHVCO0FBQ3dCO0FBQ2E7QUFDcEI7QUFDVjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEJBQTBCLDZDQUFJO0FBQzdDO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsMENBQTBDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMENBQTBDO0FBQ3pEO0FBQ0E7QUFDQSxRQUFRLG1EQUFTO0FBQ2pCLDJDQUEyQyx1REFBUTtBQUNuRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBDQUEwQztBQUN6RCxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLDZCQUE2QixtREFBUztBQUN0Qyx1Q0FBdUMscUVBQWM7QUFDckQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhLy4vc3JjL3NwYS92aWV3L21haW4vcHJvZHVjdC9jYXJkL2NhcmQuY3NzIiwid2VicGFjazovL3NwYS8uL3NyYy9zcGEvdmlldy9tYWluL3Byb2R1Y3QvcHJvZHVjdC5jc3MiLCJ3ZWJwYWNrOi8vc3BhLy4vc3JjL3NwYS92aWV3L21haW4vcHJvZHVjdC9jYXJkL2NhcmQuY3NzPzRlMTYiLCJ3ZWJwYWNrOi8vc3BhLy4vc3JjL3NwYS92aWV3L21haW4vcHJvZHVjdC9wcm9kdWN0LmNzcz85OTY5Iiwid2VicGFjazovL3NwYS8uL3NyYy9kYXRhL2NhcmRzLmpzIiwid2VicGFjazovL3NwYS8uL3NyYy9zcGEvdmlldy9tYWluL3Byb2R1Y3QvY2FyZC1kZXRhaWwvY2FyZC1kZXRhaWwtdmlldy5qcyIsIndlYnBhY2s6Ly9zcGEvLi9zcmMvc3BhL3ZpZXcvbWFpbi9wcm9kdWN0L2NhcmQvY2FyZC12aWV3LmpzIiwid2VicGFjazovL3NwYS8uL3NyYy9zcGEvdmlldy9tYWluL3Byb2R1Y3QvcHJvZHVjdC12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uY2FyZF9fZnVsbCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uY2FyZF9fZmllbGQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkX19idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNhcmRfX2J1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zcGEvdmlldy9tYWluL3Byb2R1Y3QvY2FyZC9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0IsYUFBYTtJQUNiLFlBQVk7O0lBRVosWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTs7SUFFVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2Z1bGwge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19maWVsZCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2J1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2R1Y3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAyLjklO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zcGEvdmlldy9tYWluL3Byb2R1Y3QvcHJvZHVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFNBQVM7O0lBRVQsWUFBWTtJQUNaLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvZHVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDIuOSU7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvZHVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2R1Y3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLyoqXHJcbiAqIEB0eXBlZGVmIHt7aWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nfX0gQ2FyZEluZm9cclxuICovXHJcbmNvbnN0IGNhcmRzSW5mbyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgIG5hbWU6ICfQn9C10YDQstCw0Y8g0LrQsNGA0YLQvtGH0LrQsCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQn9C+0LvQvdC+0LUg0Lgg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC00LvRjyDQutCw0YDRgtC+0YfQutC4LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgbmFtZTogJ9CS0YLQvtGA0LDRjyDQutCw0YDRgtC+0YfQutCwJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Cf0L7Qu9C90L7QtSDQuCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC+0L/QuNGB0LDQvdC40LUg0LTQu9GPINC60LDRgNGC0L7Rh9C60LguINCt0YLQviDQstGC0L7RgNCw0Y8g0LrQsNGA0YLQvtGH0LrQsC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgIG5hbWU6ICfQotGA0LXRgtGM0Y8g0LrQsNGA0YLQvtGH0LrQsCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQn9C+0LvQvdC+0LUg0Lgg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC00LvRjyDRgtGA0LXRgtGM0LXQuSDQutCw0YDRgtC+0YfQutC4LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNCcsXHJcbiAgICAgICAgbmFtZTogJ9Cn0LXRgtCy0LXRgNGC0LDRjyDQutCw0YDRgtC+0YfQutCwJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ9Cf0L7Qu9C90L7QtSDQuCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC+0L/QuNGB0LDQvdC40LUg0LTQu9GPINGH0LXRgtCy0LXRgNGC0L7QuSDQutCw0YDRgtC+0YfQutC4LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnNScsXHJcbiAgICAgICAgbmFtZTogJ9Cf0Y/RgtCw0Y8g0LrQsNGA0YLQvtGH0LrQsCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQn9C+0LvQvdC+0LUg0Lgg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC00LvRjyDQv9GP0YLQvtC5INC60LDRgNGC0L7Rh9C60LguJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc2JyxcclxuICAgICAgICBuYW1lOiAn0KjQtdGB0YLQsNGPINC60LDRgNGC0L7Rh9C60LAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0J/QvtC70L3QvtC1INC4INC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0L7Qv9C40YHQsNC90LjQtSDQtNC70Y8g0YjQtdGB0YLQvtC5INC60LDRgNGC0L7Rh9C60LguJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICc3JyxcclxuICAgICAgICBuYW1lOiAn0KHQtdC00YzQvNCw0Y8g0LrQsNGA0YLQvtGH0LrQsCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICfQn9C+0LvQvdC+0LUg0Lgg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC00LvRjyDRgdC10LTRjNC80L7QuSDQutCw0YDRgtC+0YfQutC4LicsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZHNJbmZvO1xyXG4iLCJpbXBvcnQgQ2FyZFZpZXcgZnJvbSAnLi4vY2FyZC9jYXJkLXZpZXcnO1xyXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3JvdXRlci9wYWdlcyc7XHJcbmltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcic7XHJcblxyXG5jb25zdCBDc3NDbGFzc2VzID0ge1xyXG4gICAgQ09OVEFJTkVSOiAnY2FyZCcsXHJcbiAgICBDT05UQUlORVJfRlVMTDogJ2NhcmRfX2Z1bGwnLFxyXG4gICAgRklFTEQ6ICdjYXJkX19maWVsZCcsXHJcbiAgICBCVVRUT046ICdjYXJkX19idXR0b24nLFxyXG59O1xyXG5jb25zdCBDQVJEX1RFWFRfQkFDSyA9ICfQndCw0LfQsNC0Li4uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmREZXRhaWxWaWV3IGV4dGVuZHMgQ2FyZFZpZXcge1xyXG4gICAgY29uZmlndXJlVmlldygpIHtcclxuICAgICAgICB0aGlzLnZpZXdFbGVtZW50Q3JlYXRvci5zZXRDc3NDbGFzc2VzKFtDc3NDbGFzc2VzLkNPTlRBSU5FUiwgQ3NzQ2xhc3Nlcy5DT05UQUlORVJfRlVMTF0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7aW1wb3J0KCcuLi8uLi8uLi8uLi91dGlsL2VsZW1lbnQtY3JlYXRvcicpLkVsZW1lbnRQYXJhbXN9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGxhYmVsUGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtDc3NDbGFzc2VzLkZJRUxEXSxcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuY2FyZC5uYW1lLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjcmVhdG9yTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IobGFiZWxQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMudmlld0VsZW1lbnRDcmVhdG9yLmFkZElubmVyRWxlbWVudChjcmVhdG9yTGFiZWwpO1xyXG5cclxuICAgICAgICBsYWJlbFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ3NzQ2xhc3Nlcy5GSUVMRF0sXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLmNhcmQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY3JlYXRvckxhYmVsID0gbmV3IEVsZW1lbnRDcmVhdG9yKGxhYmVsUGFyYW1zKTtcclxuICAgICAgICB0aGlzLnZpZXdFbGVtZW50Q3JlYXRvci5hZGRJbm5lckVsZW1lbnQoY3JlYXRvckxhYmVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uUGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ3NzQ2xhc3Nlcy5CVVRUT05dLFxyXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogQ0FSRF9URVhUX0JBQ0ssXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMsIGAke1BhZ2VzLlBST0RVQ1R9YCksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjcmVhdG9yQnV0dG9uID0gbmV3IEVsZW1lbnRDcmVhdG9yKGJ1dHRvblBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy52aWV3RWxlbWVudENyZWF0b3IuYWRkSW5uZXJFbGVtZW50KGNyZWF0b3JCdXR0b24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9jYXJkLmNzcyc7XHJcbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcm91dGVyL3BhZ2VzJztcclxuaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvZWxlbWVudC1jcmVhdG9yJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi4vLi4vLi4vdmlldyc7XHJcblxyXG5jb25zdCBDc3NDbGFzc2VzID0ge1xyXG4gICAgQ09OVEFJTkVSOiAnY2FyZCcsXHJcbiAgICBGSUVMRDogJ2NhcmRfX2ZpZWxkJyxcclxuICAgIEJVVFRPTjogJ2NhcmRfX2J1dHRvbicsXHJcbn07XHJcbmNvbnN0IENBUkRfVEVYVF9NT1JFID0gJ9Cf0L7QtNGA0L7QsdC90LXQtS4uLic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi4vLi4vLi4vLi4vLi4vZGF0YS9jYXJkcycpLkNhcmRJbmZvfSBjYXJkXHJcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi4vLi4vLi4vLi4vcm91dGVyL3JvdXRlcicpLmRlZmF1bHR9IHJvdXRlclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkLCByb3V0ZXIpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7aW1wb3J0KCcuLi8uLi8uLi92aWV3JykuVmlld1BhcmFtc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRhZzogJ2FydGljbGUnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ3NzQ2xhc3Nlcy5DT05UQUlORVJdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IHRoaXMuY29uZmlndXJlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZVZpZXcoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge2ltcG9ydCgnLi4vLi4vLi4vLi4vdXRpbC9lbGVtZW50LWNyZWF0b3InKS5FbGVtZW50UGFyYW1zfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBsYWJlbFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ3NzQ2xhc3Nlcy5GSUVMRF0sXHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLmNhcmQubmFtZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjcmVhdG9yTGFiZWwgPSBuZXcgRWxlbWVudENyZWF0b3IobGFiZWxQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMudmlld0VsZW1lbnRDcmVhdG9yLmFkZElubmVyRWxlbWVudChjcmVhdG9yTGFiZWwpO1xyXG5cclxuICAgICAgICBsYWJlbFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lczogW0Nzc0NsYXNzZXMuQlVUVE9OXSxcclxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IENBUkRfVEVYVF9NT1JFLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5idXR0b25DbGlja0hhbmRsZXIuYmluZCh0aGlzLCBgJHtQYWdlcy5QUk9EVUNUfS8ke3RoaXMuY2FyZC5pZH1gKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNyZWF0b3JCdXR0b24gPSBuZXcgRWxlbWVudENyZWF0b3IobGFiZWxQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMudmlld0VsZW1lbnRDcmVhdG9yLmFkZElubmVyRWxlbWVudChjcmVhdG9yQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqL1xyXG4gICAgYnV0dG9uQ2xpY2tIYW5kbGVyKHVybCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHVybCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3Byb2R1Y3QuY3NzJztcclxuaW1wb3J0IGNhcmRzSW5mbyBmcm9tICcuLi8uLi8uLi8uLi9kYXRhL2NhcmRzJztcclxuaW1wb3J0IENhcmREZXRhaWxWaWV3IGZyb20gJy4vY2FyZC1kZXRhaWwvY2FyZC1kZXRhaWwtdmlldyc7XHJcbmltcG9ydCBDYXJkVmlldyBmcm9tICcuL2NhcmQvY2FyZC12aWV3JztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi4vLi4vdmlldyc7XHJcblxyXG5jb25zdCBDc3NDbGFzc2VzID0ge1xyXG4gICAgUFJPRFVDVDogJ3Byb2R1Y3QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi4vLi4vLi4vcm91dGVyL3JvdXRlcicpLmRlZmF1bHR9IHJvdXRlclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGlkID0gJycpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7aW1wb3J0KCcuLi8uLi92aWV3JykuVmlld1BhcmFtc31cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRhZzogJ3NlY3Rpb24nLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbQ3NzQ2xhc3Nlcy5QUk9EVUNUXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XHJcblxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhcmdlQ2FyZFRvVmlldyhyb3V0ZXIsIGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFNtYWxsQ2FyZHNUb1ZpZXcocm91dGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ltcG9ydCgnLi4vLi4vLi4vcm91dGVyL3JvdXRlcicpLmRlZmF1bHR9IHJvdXRlclxyXG4gICAgICovXHJcbiAgICBhZGRTbWFsbENhcmRzVG9WaWV3KHJvdXRlcikge1xyXG4gICAgICAgIGNhcmRzSW5mby5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsQ2FyZENvbXBvbmVudCA9IG5ldyBDYXJkVmlldyhjYXJkLCByb3V0ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdFbGVtZW50Q3JlYXRvci5hZGRJbm5lckVsZW1lbnQoc21hbGxDYXJkQ29tcG9uZW50LmdldEh0bWxFbGVtZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtpbXBvcnQoJy4uLy4uLy4uL3JvdXRlci9yb3V0ZXInKS5kZWZhdWx0fSByb3V0ZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gICAgICovXHJcbiAgICBhZGRMYXJnZUNhcmRUb1ZpZXcocm91dGVyLCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGNhcmRzSW5mby5maW5kKChjYXJkKSA9PiBjYXJkLmlkID09PSBpZCk7XHJcbiAgICAgICAgY29uc3QgbGFyZ2VDYXJkQ29tcG9uZW50ID0gbmV3IENhcmREZXRhaWxWaWV3KHNlbGVjdGVkQ2FyZCwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLnZpZXdFbGVtZW50Q3JlYXRvci5hZGRJbm5lckVsZW1lbnQobGFyZ2VDYXJkQ29tcG9uZW50LmdldEh0bWxFbGVtZW50KCkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==