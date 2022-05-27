'use strict';
const searchPost = (req, res) => {
    const search = req.body.search;
    res.render('searchResultsGeeks', { searchTextt : search })
};

module.exports = { searchPost };