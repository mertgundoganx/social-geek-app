'use strict';
const searchPost = (req, res) => {
    const search = req.body.search;
    console.log(search);
    res.render('searchResultsGeeks')
};

module.exports = { searchPost };