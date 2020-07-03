require.config({
    paths: {
        jquery: './jquery.min',
        detail: './lib/detail',
        lazyload: './jquery.lazyload.min'

    },
    shim: {
        lazyload: ['jquery']
    }

});
require(['detail'], function(detail) {
    detail.render();
    detail.tabs();
    detail.login();
    detail.nva_right();
    detail.lazyload();
})