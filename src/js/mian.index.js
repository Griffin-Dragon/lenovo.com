require.config({
    paths: {
        jquery: './jquery.min',
        HappyImage: './HappyImage.min',
        index: './lib/index',
        lazyload: './jquery.lazyload.min'
    },
    shim: {
        HappyImage: ['jquery'],
        lazyload: ['jquery']
    }
});
require(['index'], function(index) {
    index.render();
    index.slider();
    index.nva_right();
    index.nav_left();
    index.timer();
    index.tabs();
    index.login();
    index.lazyload();
})