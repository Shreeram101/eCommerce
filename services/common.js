const passport = require("passport");

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role }
}

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    // console.log(token);

    // TODO: this is temperary token for testing without cookie
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzBhMmNkYmI1MTVkMDI1MWZlY2U0NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1ODU4OTU0fQ.NGvsnxmCOl9Dh765YVMVB4KKwZOJ50SEGzziNni7AVY"
    return token;
};