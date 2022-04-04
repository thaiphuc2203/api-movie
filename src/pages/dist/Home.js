"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("../components/ItemMovie/index");
var index_2 = require("../components/searchBar/index");
var movieSlice_1 = require("../features/Movie/movieSlice");
// import { TitleSearch }  from "../models/index"
var _ = require('lodash');
function Home() {
    var dispatch = react_redux_1.useDispatch();
    var movieList = react_redux_1.useSelector(function (state) {
        return state.movie;
    });
    var _a = react_1.useState({ title: '' }), valueSearch = _a[0], setValueSearch = _a[1];
    react_1.useEffect(function () {
        dispatch(movieSlice_1.fetchMoviePopular());
    }, [dispatch]);
    if (!!movieList.result)
        return react_1["default"].createElement("div", null, "Loading");
    var handleSearch = function (e) {
        setValueSearch({ title: e.target.value });
    };
    var clickSearch = function () {
        if (_.isEmpty(valueSearch.title)) {
            dispatch(movieSlice_1.fetchMoviePopular());
        }
        else {
            dispatch(movieSlice_1.fetchMovieSearch(valueSearch.title));
        }
    };
    return (react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1 },
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 12, lg: 12 },
            react_1["default"].createElement(index_2["default"], { value: valueSearch, onSearch: function (e) { return handleSearch(e); }, clickSearch: function () { return clickSearch(); } })),
        movieList.results.map(function (el, index) { return (react_1["default"].createElement(material_1.Grid, { key: index, item: true, xs: 6, md: 4, lg: 3 },
            react_1["default"].createElement(index_1["default"], { item: el }))); })));
}
exports["default"] = Home;
