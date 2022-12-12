exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 8594:
/***/ ((module) => {

// Exports
module.exports = {
	"dragging": "EntryList_dragging__vKEe7"
};


/***/ }),

/***/ 3920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_3__]);
_ui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ title ="OpenJira" , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            flexFlow: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Navbar */ .wp, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Sidebar */ .YE, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    padding: "10px 20px"
                },
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ EntryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2268);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6234);






const EntryCard = ({ entry  })=>{
    console.log({
        entry
    });
    const { startDragging , endDragging  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_ui__WEBPACK_IMPORTED_MODULE_4__/* .UIContext */ .QE);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", entry._id);
        startDragging();
    };
    const onDragEnd = ()=>{
        endDragging();
    };
    const onClick = ()=>{
        router.push(`/entries/${entry._id}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
        onClick: onClick,
        sx: {
            marginBottom: 1
        },
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActionArea, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        sx: {
                            whiteSpace: "pre-line"
                        },
                        children: entry.description
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, {
                    sx: {
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 2
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body2",
                        children: _utils__WEBPACK_IMPORTED_MODULE_5__/* .dateFunctions.getFormatDistanceToNow */ .P.getFormatDistanceToNow(entry.createdAt)
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 6705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ EntryList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2203);
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2268);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9401);
/* harmony import */ var _EntryList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8594);
/* harmony import */ var _EntryList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EntryList_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_entries__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__]);
([_context_entries__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const EntryList = ({ status  })=>{
    const { entries , updateEntry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_entries__WEBPACK_IMPORTED_MODULE_3__/* .EntriesContext */ .te);
    const { isDragging , endDragging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ui__WEBPACK_IMPORTED_MODULE_4__/* .UIContext */ .QE);
    const entriesByStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>entries.filter((entry)=>entry.status === status), [
        entries
    ]);
    const allowDrop = (event)=>{
        event.preventDefault();
    };
    const onDropEntry = (event)=>{
        const id = event.dataTransfer.getData("text");
        const entry = entries.find((e)=>e._id === id);
        entry.status = status;
        updateEntry(entry);
        endDragging();
    };
    return(//   TODO: aquí haremos drop
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onDrop: onDropEntry,
        onDragOver: allowDrop,
        className: isDragging ? (_EntryList_module_css__WEBPACK_IMPORTED_MODULE_6___default().dragging) : "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            sx: {
                height: "calc(100vh - 180px)",
                //   overflow: "scroll",
                backgroundColor: "transparent",
                padding: "3px 5px"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                sx: {
                    opacity: isDragging ? 0.2 : 1,
                    transition: "all .3s"
                },
                children: entriesByStatus.map((entry)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_5__/* .EntryCard */ .MH, {
                        entry: entry
                    }, entry._id))
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6248);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2268);





const Navbar = ()=>{
    const { openSideMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_ui__WEBPACK_IMPORTED_MODULE_4__/* .UIContext */ .QE);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        position: "sticky",
        elevation: 0,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    size: "large",
                    edge: "start",
                    onClick: openSideMenu,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    underline: "none",
                    color: "white",
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h6",
                        children: "OpenJira"
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 8816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ NewEntry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8333);
/* harmony import */ var _mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_AddCircleOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4716);
/* harmony import */ var _mui_icons_material_AddCircleOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircleOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2203);
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2268);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_entries__WEBPACK_IMPORTED_MODULE_6__]);
_context_entries__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const NewEntry = ()=>{
    const { addNewEntry  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_entries__WEBPACK_IMPORTED_MODULE_6__/* .EntriesContext */ .te);
    const { isAddingEntry , setIsAddingEntry  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_ui__WEBPACK_IMPORTED_MODULE_7__/* .UIContext */ .QE);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const [touched, setTouched] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const onTextFieldChanged = (event)=>{
        setInputValue(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue("");
        router.push("/");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            marginBottom: 2,
            paddingX: 2
        },
        children: isAddingEntry ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {
                    fullWidth: true,
                    sx: {
                        marginTop: 2,
                        marginBottom: 1
                    },
                    placeholder: "Nueva entrada",
                    autoFocus: true,
                    multiline: true,
                    label: "Nueva entrada",
                    helperText: inputValue.length <= 0 && touched && "Ingrese un valor",
                    error: inputValue.length <= 0 && touched,
                    value: inputValue,
                    onChange: onTextFieldChanged,
                    onBlur: ()=>setTouched(true)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "text",
                            onClick: ()=>setIsAddingEntry(false),
                            children: "Cancelar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "outlined",
                            color: "secondary",
                            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SaveOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                            onClick: onSave,
                            children: "Guardar"
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddCircleOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            fullWidth: true,
            variant: "outlined",
            onClick: ()=>setIsAddingEntry(true),
            children: "Agregar Tarea"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_InboxOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8409);
/* harmony import */ var _mui_icons_material_InboxOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InboxOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5290);
/* harmony import */ var _mui_icons_material_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2268);






const menuItems = [
    "Inbox",
    "Starred",
    "Send Email",
    "Drafts"
];
const Sidebar = ()=>{
    const { sidemenuOpen , closeSideMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ui__WEBPACK_IMPORTED_MODULE_5__/* .UIContext */ .QE);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
        anchor: "left",
        open: sidemenuOpen,
        onClose: closeSideMenu,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                width: 250
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        padding: "5px 10px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h4",
                        children: "Men\xfa"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                    children: menuItems.map((text, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                                    children: index % 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InboxOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
                    children: menuItems.map((text, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                            button: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                                    children: index % 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InboxOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                                    primary: text
                                })
                            ]
                        }, text))
                })
            ]
        })
    });
};


/***/ }),

/***/ 9401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MH": () => (/* reexport safe */ _EntryCard__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   "Tk": () => (/* reexport safe */ _NewEntry__WEBPACK_IMPORTED_MODULE_4__.T),
/* harmony export */   "YE": () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "fT": () => (/* reexport safe */ _EntryList__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2132);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8864);
/* harmony import */ var _EntryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6705);
/* harmony import */ var _EntryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4567);
/* harmony import */ var _NewEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EntryList__WEBPACK_IMPORTED_MODULE_2__, _NewEntry__WEBPACK_IMPORTED_MODULE_4__]);
([_EntryList__WEBPACK_IMPORTED_MODULE_2__, _NewEntry__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ dateFunctions_namespaceObject)
});

// NAMESPACE OBJECT: ./utils/dateFunctions.ts
var dateFunctions_namespaceObject = {};
__webpack_require__.r(dateFunctions_namespaceObject);
__webpack_require__.d(dateFunctions_namespaceObject, {
  "getFormatDistanceToNow": () => (getFormatDistanceToNow)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(5564);
;// CONCATENATED MODULE: ./utils/dateFunctions.ts


const getFormatDistanceToNow = (date)=>{
    const fromNow = (0,external_date_fns_.formatDistanceToNow)(date, {
        locale: locale_.es
    });
    return `hace ${fromNow}`;
};

;// CONCATENATED MODULE: ./utils/index.ts



/***/ })

};
;