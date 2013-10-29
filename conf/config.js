/**
 * globle settings
 */
module.exports = function() {
                
    app.set('port', process.env.PORT || 3000);
    app.set('static-folder', '/public');
}