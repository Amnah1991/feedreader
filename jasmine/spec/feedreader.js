
$(function () {
    // 1 - RSS Feeds test suite
    describe('RSS Feeds', function () {

        // AllFeeds test
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // URL test
        it('AllFeeds has a URL and the URL is not empty ', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Name test
        it('AllFeeds has a name and the name is not empty ', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // 2 - The menu test suite
    describe('The menu', function () {
        it('The menu element is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        it('Menu toggle', function () {
            ($('.menu-icon-link').trigger('click'));
            expect($('body').hasClass('menu-hidden')).toBe(false);
            ($('.menu-icon-link').trigger('click'));
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });



    // 3 - Initial Entries test suite 
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('There is more than 0 entries', function(){
           expect($('.entry .feed')).toBeDefined();
        });

    });

     // 4 - New Feed Selection test suite
    describe('New Feed Selection', function () {
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                entriesStart = $('.feed').find(allFeeds.url);
                done();
            });

            loadFeed(1, function () {
                entriesEnd = $('.feed').find(allFeeds.url);
                done();
            });

           it('New feed is different to old one', function(){
               expect(entriesStart).not.toBe(entriesEnd);
           });
        });
    });

}());
