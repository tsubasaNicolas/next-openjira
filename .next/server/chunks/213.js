"use strict";
exports.id = 213;
exports.ids = [213];
exports.modules = {

/***/ 1502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const entriesApi = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "/api"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entriesApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _entriesApi__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _entriesApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_entriesApi__WEBPACK_IMPORTED_MODULE_0__]);
_entriesApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EntriesContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EntriesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ EntriesProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3892);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apis__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__]);
([_apis__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Entries_INITIAL_STATE = {
    entries: []
};
const EntriesProvider = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(___WEBPACK_IMPORTED_MODULE_4__/* .entriesReducer */ .De, Entries_INITIAL_STATE);
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)();
    const addNewEntry = async (description)=>{
        const { data  } = await _apis__WEBPACK_IMPORTED_MODULE_3__/* .entriesApi.post */ .E.post("/entries", {
            description
        });
        dispatch({
            type: "[Entry] Add-Entry",
            payload: data
        });
    };
    const updateEntry = async ({ _id , description , status  }, showSnackbar = false)=>{
        try {
            const { data  } = await _apis__WEBPACK_IMPORTED_MODULE_3__/* .entriesApi.put */ .E.put(`/entries/${_id}`, {
                description,
                status
            });
            dispatch({
                type: "[Entry] Entry-Updated",
                payload: data
            });
            if (showSnackbar) enqueueSnackbar("Entrada actualizada", {
                variant: "success",
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                }
            });
        } catch (error) {
            console.log({
                error
            });
        }
    };
    const refreshEntries = async ()=>{
        const { data  } = await _apis__WEBPACK_IMPORTED_MODULE_3__/* .entriesApi.get */ .E.get("/entries");
        dispatch({
            type: "[Entry] Refresh-Data",
            payload: data
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refreshEntries();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .EntriesContext.Provider */ .te.Provider, {
        value: {
            ...state,
            // Methods
            addNewEntry,
            updateEntry
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ entriesReducer)
/* harmony export */ });
const entriesReducer = (state, action)=>{
    switch(action.type){
        case "[Entry] Add-Entry":
            return {
                ...state,
                entries: [
                    ...state.entries,
                    action.payload
                ]
            };
        case "[Entry] Entry-Updated":
            return {
                ...state,
                entries: state.entries.map((entry)=>{
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            };
        case "[Entry] Refresh-Data":
            return {
                ...state,
                entries: [
                    ...action.payload
                ]
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 2203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "De": () => (/* reexport safe */ _EntriesReducer__WEBPACK_IMPORTED_MODULE_2__.D),
/* harmony export */   "qj": () => (/* reexport safe */ _EntriesProvider__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "te": () => (/* reexport safe */ _EntriesContext__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _EntriesContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6351);
/* harmony import */ var _EntriesProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var _EntriesReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EntriesProvider__WEBPACK_IMPORTED_MODULE_1__]);
_EntriesProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QE": () => (/* reexport */ UIContext),
  "JP": () => (/* reexport */ UIProvider),
  "_3": () => (/* reexport */ uiReducer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./context/ui/UIContext.tsx

const UIContext = /*#__PURE__*/ (0,external_react_.createContext)({});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./context/ui/UIProvider.tsx



const UI_INITIAL_STATE = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
};
const UIProvider = ({ children  })=>{
    const [state, dispatch] = (0,external_react_.useReducer)(uiReducer, UI_INITIAL_STATE);
    const openSideMenu = ()=>{
        dispatch({
            type: "UI - Open Sidebar"
        });
    };
    const closeSideMenu = ()=>{
        dispatch({
            type: "UI - Close Sidebar"
        });
    };
    const setIsAddingEntry = (isAdding)=>{
        dispatch({
            type: "UI - Set isAddingEntry",
            payload: isAdding
        });
    };
    const startDragging = ()=>{
        dispatch({
            type: "UI - Start Dragging"
        });
    };
    const endDragging = ()=>{
        dispatch({
            type: "UI - End Dragging"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(UIContext.Provider, {
        value: {
            ...state,
            //methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endDragging
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./context/ui/uiReducer.ts
const uiReducer = (state, action)=>{
    switch(action.type){
        case "UI - Open Sidebar":
            return {
                ...state,
                sidemenuOpen: true
            };
        case "UI - Close Sidebar":
            return {
                ...state,
                sidemenuOpen: false
            };
        case "UI - Set isAddingEntry":
            return {
                ...state,
                isAddingEntry: action.payload
            };
        case "UI - Start Dragging":
            return {
                ...state,
                isDragging: true
            };
        case "UI - End Dragging":
            return {
                ...state,
                isDragging: false
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./context/ui/index.ts





/***/ })

};
;