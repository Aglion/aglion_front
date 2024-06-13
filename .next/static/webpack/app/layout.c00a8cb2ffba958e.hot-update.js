"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/api/api-utils.js":
/*!******************************!*\
  !*** ./app/api/api-utils.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorize: function() { return /* binding */ authorize; },\n/* harmony export */   checkIfUserVoted: function() { return /* binding */ checkIfUserVoted; },\n/* harmony export */   getData: function() { return /* binding */ getData; },\n/* harmony export */   getJWT: function() { return /* binding */ getJWT; },\n/* harmony export */   getMe: function() { return /* binding */ getMe; },\n/* harmony export */   getNormalizedGameDataById: function() { return /* binding */ getNormalizedGameDataById; },\n/* harmony export */   getNormalizedGamesDataByCategory: function() { return /* binding */ getNormalizedGamesDataByCategory; },\n/* harmony export */   isResponseOk: function() { return /* binding */ isResponseOk; },\n/* harmony export */   normalizeData: function() { return /* binding */ normalizeData; },\n/* harmony export */   removeJWT: function() { return /* binding */ removeJWT; },\n/* harmony export */   setJWT: function() { return /* binding */ setJWT; },\n/* harmony export */   vote: function() { return /* binding */ vote; }\n/* harmony export */ });\nconst getData = async (url)=>{\n    console.log(url);\n    try {\n        const response = await fetch(url);\n        console.log(response);\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n};\nconst isResponseOk = (response)=>{\n    return !(response instanceof Error);\n};\nconst normalizeDataObject = (obj)=>{\n    let str = JSON.stringify(obj);\n    str = str.replaceAll(\"_id\", \"id\");\n    const newObject = JSON.parse(str);\n    const result = {\n        ...newObject,\n        category: newObject.categories\n    };\n    return result;\n};\nconst normalizeData = (data)=>{\n    return data.map((item)=>{\n        return normalizeDataObject(item);\n    });\n};\nconst getNormalizedGameDataById = async (url, id)=>{\n    const data = await getData(\"\".concat(url, \"/\").concat(id));\n    return isResponseOk(data) ? normalizeDataObject(data) : data;\n};\nconst getNormalizedGamesDataByCategory = async (url, category)=>{\n    try {\n        const data = await getData(\"\".concat(url, \"?categories.name=\").concat(category));\n        return isResponseOk(data) ? normalizeData(data) : data;\n    } catch (error) {\n        return error;\n    }\n};\nconst authorize = async (url, data)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка авторизации\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst setJWT = (jwt)=>{\n    document.cookie = \"jwt=\".concat(jwt);\n    localStorage.setItem(\"jwt\", jwt);\n};\nconst getJWT = ()=>{\n    if (document.cookie === \"\") {\n        return localStorage.getItem(\"jwt\");\n    }\n    const jwt = document.cookie.split(\";\").find((item)=>item.includes(\"jwt\"));\n    return jwt ? jwt.split(\"=\")[1] : null;\n};\nconst removeJWT = ()=>{\n    document.cookie = \"jwt=;\";\n    localStorage.removeItem(\"jwt\");\n};\nconst getMe = async (url, jwt)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"GET\",\n            headers: {\n                Authorization: \"Bearer \".concat(jwt)\n            }\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка получения данных\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\nconst checkIfUserVoted = (game, userId)=>{\n    return game.users.find((user)=>user.id === userId);\n};\nconst vote = async (url, jwt, usersArray)=>{\n    try {\n        const response = await fetch(url, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(jwt)\n            },\n            body: JSON.stringify({\n                users: usersArray\n            })\n        });\n        if (response.status !== 200) {\n            throw new Error(\"Ошибка голосования\");\n        }\n        const result = await response.json();\n        return result;\n    } catch (error) {\n        return error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvYXBpLXV0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFVBQVUsT0FBT0M7SUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJO1FBQ0YsTUFBTUcsV0FBVyxNQUFNQyxNQUFNSjtRQUM3QkMsUUFBUUMsR0FBRyxDQUFDQztRQUNaLElBQUlBLFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBQzNCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtRQUNoQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9BO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUMsZUFBZSxDQUFDUDtJQUMzQixPQUFPLENBQUVBLENBQUFBLG9CQUFvQkcsS0FBSTtBQUNuQyxFQUFFO0FBSUYsTUFBTUssc0JBQXNCLENBQUNDO0lBQzNCLElBQUlDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0g7SUFDekJDLE1BQU1BLElBQUlHLFVBQVUsQ0FBQyxPQUFPO0lBQzVCLE1BQU1DLFlBQVlILEtBQUtJLEtBQUssQ0FBQ0w7SUFDN0IsTUFBTU0sU0FBUztRQUFFLEdBQUdGLFNBQVM7UUFBRUcsVUFBVUgsVUFBVUksVUFBVTtJQUFDO0lBQzlELE9BQU9GO0FBQ1Q7QUFFTyxNQUFNRyxnQkFBZ0IsQ0FBQ2Y7SUFDNUIsT0FBT0EsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDQztRQUNmLE9BQU9iLG9CQUFvQmE7SUFDN0I7QUFDRixFQUFFO0FBRUssTUFBTUMsNEJBQTRCLE9BQU96QixLQUFLMEI7SUFDbkQsTUFBTW5CLE9BQU8sTUFBTVIsUUFBUSxHQUFVMkIsT0FBUDFCLEtBQUksS0FBTSxPQUFIMEI7SUFDckMsT0FBT2hCLGFBQWFILFFBQVFJLG9CQUFvQkosUUFBUUE7QUFDMUQsRUFBRTtBQUVLLE1BQU1vQixtQ0FBbUMsT0FBTzNCLEtBQUtvQjtJQUMxRCxJQUFJO1FBQ0YsTUFBTWIsT0FBTyxNQUFNUixRQUFRLEdBQTBCcUIsT0FBdkJwQixLQUFJLHFCQUE0QixPQUFUb0I7UUFDckQsT0FBT1YsYUFBYUgsUUFBUWUsY0FBY2YsUUFBUUE7SUFDcEQsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT0E7SUFDVDtBQUNGLEVBQUU7QUFFSyxNQUFNbUIsWUFBWSxPQUFPNUIsS0FBS087SUFDbkMsSUFBSTtRQUNGLE1BQU1KLFdBQVcsTUFBTUMsTUFBTUosS0FBSztZQUNoQzZCLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1qQixLQUFLQyxTQUFTLENBQUNSO1FBQ3ZCO1FBQ0EsSUFBSUosU0FBU0UsTUFBTSxLQUFLLEtBQUs7WUFDM0IsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTWEsU0FBUyxNQUFNaEIsU0FBU0ssSUFBSTtRQUNsQyxPQUFPVztJQUNULEVBQUUsT0FBT1YsT0FBTztRQUNkLE9BQU9BO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTXVCLFNBQVMsQ0FBQ0M7SUFDckJDLFNBQVNDLE1BQU0sR0FBRyxPQUFXLE9BQUpGO0lBQ3pCRyxhQUFhQyxPQUFPLENBQUMsT0FBT0o7QUFDOUIsRUFBRTtBQUVLLE1BQU1LLFNBQVM7SUFDcEIsSUFBSUosU0FBU0MsTUFBTSxLQUFLLElBQUk7UUFDMUIsT0FBT0MsYUFBYUcsT0FBTyxDQUFDO0lBQzlCO0lBQ0EsTUFBTU4sTUFBTUMsU0FBU0MsTUFBTSxDQUFDSyxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDLENBQUNqQixPQUFTQSxLQUFLa0IsUUFBUSxDQUFDO0lBQ3BFLE9BQU9ULE1BQU1BLElBQUlPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHO0FBQ25DLEVBQUU7QUFFSyxNQUFNRyxZQUFZO0lBQ3ZCVCxTQUFTQyxNQUFNLEdBQUc7SUFDbEJDLGFBQWFRLFVBQVUsQ0FBQztBQUMxQixFQUFFO0FBRUssTUFBTUMsUUFBUSxPQUFPN0MsS0FBS2lDO0lBQy9CLElBQUk7UUFDRixNQUFNOUIsV0FBVyxNQUFNQyxNQUFNSixLQUFLO1lBQ2hDNkIsUUFBUTtZQUNSQyxTQUFTO2dCQUFFZ0IsZUFBZSxVQUFjLE9BQUpiO1lBQU07UUFDNUM7UUFDQSxJQUFJOUIsU0FBU0UsTUFBTSxLQUFLLEtBQUs7WUFDM0IsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTWEsU0FBUyxNQUFNaEIsU0FBU0ssSUFBSTtRQUNsQyxPQUFPVztJQUNULEVBQUUsT0FBT1YsT0FBTztRQUNkLE9BQU9BO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTXNDLG1CQUFtQixDQUFDQyxNQUFNQztJQUNyQyxPQUFPRCxLQUFLRSxLQUFLLENBQUNULElBQUksQ0FBQyxDQUFDVSxPQUFTQSxLQUFLekIsRUFBRSxLQUFLdUI7QUFDL0MsRUFBRTtBQUVLLE1BQU1HLE9BQU8sT0FBT3BELEtBQUtpQyxLQUFLb0I7SUFDbkMsSUFBSTtRQUNGLE1BQU1sRCxXQUFXLE1BQU1DLE1BQU1KLEtBQUs7WUFDaEM2QixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQmdCLGVBQWUsVUFBYyxPQUFKYjtZQUMzQjtZQUNBRixNQUFNakIsS0FBS0MsU0FBUyxDQUFDO2dCQUFFbUMsT0FBT0c7WUFBVztRQUMzQztRQUNBLElBQUlsRCxTQUFTRSxNQUFNLEtBQUssS0FBSztZQUMzQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNYSxTQUFTLE1BQU1oQixTQUFTSyxJQUFJO1FBQ2xDLE9BQU9XO0lBQ1QsRUFBRSxPQUFPVixPQUFPO1FBQ2QsT0FBT0E7SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS9hcGktdXRpbHMuanM/M2UyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc29sZS5sb2codXJsKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YVcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNSZXNwb25zZU9rID0gKHJlc3BvbnNlKSA9PiB7XG4gIHJldHVybiAhKHJlc3BvbnNlIGluc3RhbmNlb2YgRXJyb3IpO1xufTtcblxuXG5cbmNvbnN0IG5vcm1hbGl6ZURhdGFPYmplY3QgPSAob2JqKSA9PiB7XG4gIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICBzdHIgPSBzdHIucmVwbGFjZUFsbChcIl9pZFwiLCBcImlkXCIpO1xuICBjb25zdCBuZXdPYmplY3QgPSBKU09OLnBhcnNlKHN0cik7XG4gIGNvbnN0IHJlc3VsdCA9IHsgLi4ubmV3T2JqZWN0LCBjYXRlZ29yeTogbmV3T2JqZWN0LmNhdGVnb3JpZXMgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVEYXRhID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGFPYmplY3QoaXRlbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vcm1hbGl6ZWRHYW1lRGF0YUJ5SWQgPSBhc3luYyAodXJsLCBpZCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShgJHt1cmx9LyR7aWR9YCk7XG4gIHJldHVybiBpc1Jlc3BvbnNlT2soZGF0YSkgPyBub3JtYWxpemVEYXRhT2JqZWN0KGRhdGEpIDogZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSA9IGFzeW5jICh1cmwsIGNhdGVnb3J5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoYCR7dXJsfT9jYXRlZ29yaWVzLm5hbWU9JHtjYXRlZ29yeX1gKTtcbiAgICByZXR1cm4gaXNSZXNwb25zZU9rKGRhdGEpID8gbm9ybWFsaXplRGF0YShkYXRhKSA6IGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplID0gYXN5bmMgKHVybCwgZGF0YSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SldUID0gKGp3dCkgPT4ge1xuICBkb2N1bWVudC5jb29raWUgPSBgand0PSR7and0fWA7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0XCIsIGp3dCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SldUID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuY29va2llID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xuICB9XG4gIGNvbnN0IGp3dCA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZmluZCgoaXRlbSkgPT4gaXRlbS5pbmNsdWRlcyhcImp3dFwiKSk7XG4gIHJldHVybiBqd3QgPyBqd3Quc3BsaXQoXCI9XCIpWzFdIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVKV1QgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmNvb2tpZSA9IFwiand0PTtcIjtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWUgPSBhc3luYyAodXJsLCBqd3QpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAgfSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcItCe0YjQuNCx0LrQsCDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0lmVXNlclZvdGVkID0gKGdhbWUsIHVzZXJJZCkgPT4ge1xuICByZXR1cm4gZ2FtZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSB1c2VySWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHZvdGUgPSBhc3luYyAodXJsLCBqd3QsIHVzZXJzQXJyYXkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcnM6IHVzZXJzQXJyYXkgfSksXG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQntGI0LjQsdC60LAg0LPQvtC70L7RgdC+0LLQsNC90LjRj1wiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImdldERhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImlzUmVzcG9uc2VPayIsIm5vcm1hbGl6ZURhdGFPYmplY3QiLCJvYmoiLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZUFsbCIsIm5ld09iamVjdCIsInBhcnNlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibm9ybWFsaXplRGF0YSIsIm1hcCIsIml0ZW0iLCJnZXROb3JtYWxpemVkR2FtZURhdGFCeUlkIiwiaWQiLCJnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSIsImF1dGhvcml6ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic2V0SldUIiwiand0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SldUIiwiZ2V0SXRlbSIsInNwbGl0IiwiZmluZCIsImluY2x1ZGVzIiwicmVtb3ZlSldUIiwicmVtb3ZlSXRlbSIsImdldE1lIiwiQXV0aG9yaXphdGlvbiIsImNoZWNrSWZVc2VyVm90ZWQiLCJnYW1lIiwidXNlcklkIiwidXNlcnMiLCJ1c2VyIiwidm90ZSIsInVzZXJzQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/api-utils.js\n"));

/***/ })

});