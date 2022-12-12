"use strict";
(() => {
var exports = {};
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5660);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3295);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const { id  } = req.query;
    if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default().isValidObjectId(id)) {
        return res.status(400).json({
            message: "El id no es v\xe1lido " + id
        });
    }
    switch(req.method){
        case "PUT":
            return updateEntry(req, res);
        case "GET":
            return getEntry(req, res);
        default:
            return res.status(400).json({
                message: "m\xe9todo no existe"
            });
    }
}
const getEntry = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entryInDB = await _models__WEBPACK_IMPORTED_MODULE_2__/* .Entry.findById */ .k.findById(id);
    if (!entryInDB) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(400).json({
            message: "no hay entrada con ese ID:" + id
        });
    }
    return res.status(200).json(entryInDB);
};
const updateEntry = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entryToUpdate = await _models__WEBPACK_IMPORTED_MODULE_2__/* .Entry.findById */ .k.findById(id);
    if (!entryToUpdate) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(400).json({
            message: "no hay entrada con ese ID:" + id
        });
    }
    const { description =entryToUpdate.description , status =entryToUpdate.status  } = req.body;
    try {
        const updatedEntry = await _models__WEBPACK_IMPORTED_MODULE_2__/* .Entry.findByIdAndUpdate */ .k.findByIdAndUpdate(id, {
            description,
            status
        }, {
            runValidators: true,
            new: true
        });
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        res.status(200).json(updatedEntry);
    } catch (error) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        res.status(400).json({
            message: error.errors.status.message
        });
    }
//entryToUpdate.description = description
//entryToUpdate.status = status
//await entryToUpdate.save()
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [719], () => (__webpack_exec__(4951)));
module.exports = __webpack_exports__;

})();