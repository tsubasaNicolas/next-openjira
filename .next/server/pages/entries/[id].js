"use strict";
(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 2305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* reexport */ db_namespaceObject),
  "s": () => (/* reexport */ dbEntries_namespaceObject)
});

// UNUSED EXPORTS: seedData

// NAMESPACE OBJECT: ./database/db.ts
var db_namespaceObject = {};
__webpack_require__.r(db_namespaceObject);
__webpack_require__.d(db_namespaceObject, {
  "connect": () => (connect),
  "disconnect": () => (disconnect)
});

// NAMESPACE OBJECT: ./database/dbEntries.ts
var dbEntries_namespaceObject = {};
__webpack_require__.r(dbEntries_namespaceObject);
__webpack_require__.d(dbEntries_namespaceObject, {
  "getEntryById": () => (getEntryById)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./database/db.ts

/*

0 disconnect
1 connected
2 conecting
3 disconnecting
*/ const mongooConnection = {
    isConnected: 0
};
const connect = async ()=>{
    if (mongooConnection.isConnected) {
        console.log("ya est\xe1bamos conectados");
        return;
    }
    if ((external_mongoose_default()).connections.length > 0) {
        mongooConnection.isConnected = (external_mongoose_default()).connections[0].readyState;
        if (mongooConnection.isConnected === 1) {
            console.log("usando conexi\xf3n anterior");
            return;
        }
        await external_mongoose_default().disconnect();
    }
    await external_mongoose_default().connect(process.env.MONGO_URL || "");
    mongooConnection.isConnected = 1;
    console.log("Conectado a MongoDB", process.env.MONGO_URL);
};
const disconnect = async ()=>{
    if (false) {}
    if (mongooConnection.isConnected === 0) return;
    await external_mongoose_default().disconnect();
    console.log("Desconectado de MongoDB");
};

;// CONCATENATED MODULE: ./models/Entry.ts

const entrySchema = new external_mongoose_namespaceObject.Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number
    },
    status: {
        type: String,
        enum: {
            values: [
                "pending",
                "in-progress",
                "finished"
            ],
            message: "{VALUE} no es un estado permitido"
        },
        default: "pending"
    }
}, {
    strictQuery: false
});
const EntryModel = (external_mongoose_default()).models.Entry || external_mongoose_default().model("Entry", entrySchema);
/* harmony default export */ const Entry = (EntryModel);

;// CONCATENATED MODULE: ./models/index.ts


;// CONCATENATED MODULE: ./database/dbEntries.ts



const getEntryById = async (id)=>{
    if (!(0,external_mongoose_namespaceObject.isValidObjectId)(id)) return null;
    await connect();
    const entry = await Entry.findById(id).lean();
    await disconnect();
    return JSON.parse(JSON.stringify(entry)); // no va a funcionar
};

;// CONCATENATED MODULE: ./database/seed-data.ts
const seedData = {
    entries: [
        {
            description: "Pendiente: Lorem ipsum lreomngknakm ndhflkasl kadkfjaklf lkhsadkhlkawsh ",
            status: "pending",
            createdAt: Date.now()
        },
        {
            description: "En Progreso: Lorem ipsukhlkawsh ",
            status: "in-progress",
            createdAt: Date.now() - 1000000
        },
        {
            description: "Terminadas, Lorem ipsum lreomn jajjasjajsdlk lkdsalkna adkfjaklf lkhsadkhlkawsh ",
            status: "finished",
            createdAt: Date.now() - 100000
        }
    ]
};

;// CONCATENATED MODULE: ./database/index.ts





/***/ }),

/***/ 2908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntryPage": () => (/* binding */ EntryPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8333);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5365);
/* harmony import */ var _mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1427);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2305);
/* harmony import */ var _context_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2203);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts__WEBPACK_IMPORTED_MODULE_4__, _context_entries__WEBPACK_IMPORTED_MODULE_7__]);
([_components_layouts__WEBPACK_IMPORTED_MODULE_4__, _context_entries__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const validStatus = [
    "pending",
    "in-progress",
    "finished"
];
const EntryPage = ({ entry  })=>{
    console.log({
        entry
    });
    const { updateEntry  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_entries__WEBPACK_IMPORTED_MODULE_7__/* .EntriesContext */ .te);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(entry.description);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(entry.status);
    const [touched, setTouched] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const isNotValid = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>inputValue.length <= 0 && touched, [
        inputValue,
        touched
    ]);
    const onInputValueChanged = (event)=>{
        setInputValue(event.target.value);
    };
    const onStatusChanged = (event)=>{
        setStatus(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.trim().length === 0) return;
        const updatedEntry = {
            ...entry,
            status,
            description: inputValue
        };
        updateEntry(updatedEntry, true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layouts__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
        title: inputValue.substring(0, 20) + "...",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                justifyContent: "center",
                sx: {
                    marginTop: 2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 8,
                    md: 6,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                                title: `Entrada:`,
                                subheader: `Creada hace: ${_utils__WEBPACK_IMPORTED_MODULE_8__/* .dateFunctions.getFormatDistanceToNow */ .P.getFormatDistanceToNow(entry.createdAt)} minutos`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                        sx: {
                                            marginTop: 2,
                                            marginBottom: 1
                                        },
                                        fullWidth: true,
                                        placeholder: "Nueva entrada",
                                        autoFocus: true,
                                        multiline: true,
                                        label: "Nueva entrada",
                                        value: inputValue,
                                        onChange: onInputValueChanged,
                                        helperText: isNotValid && "Ingrese un valor",
                                        onBlur: ()=>setTouched(true),
                                        error: isNotValid
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                                                children: "Estado:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {
                                                row: true,
                                                value: status,
                                                onChange: onStatusChanged,
                                                children: validStatus.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControlLabel, {
                                                        value: option,
                                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Radio, {}),
                                                        label: (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.capitalize)(option)
                                                    }, option))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardActions, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                                    variant: "contained",
                                    fullWidth: true,
                                    onClick: onSave,
                                    disabled: inputValue.length <= 0,
                                    children: "Save"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                sx: {
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    backgroundColor: "error.dark"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_DeleteOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {})
            })
        ]
    });
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
const getServerSideProps = async ({ params  })=>{
    // const { data } = await  // your fetch function here
    const { id  } = params;
    const entry = await _database__WEBPACK_IMPORTED_MODULE_6__/* .dbEntries.getEntryById */ .s.getEntryById(id);
    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            entry
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntryPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4716:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircleOutlined");

/***/ }),

/***/ 5365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DeleteOutlined");

/***/ }),

/***/ 8409:
/***/ ((module) => {

module.exports = require("@mui/icons-material/InboxOutlined");

/***/ }),

/***/ 5290:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MailOutlineOutlined");

/***/ }),

/***/ 6248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 8333:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SaveOutlined");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [213,427], () => (__webpack_exec__(2908)));
module.exports = __webpack_exports__;

})();