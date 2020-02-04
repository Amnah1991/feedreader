
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
        it('There is more than 0 entries', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    // 4 - New Feed Selection test suite
    describe('New Feed Selection', function () {

        let oldFeed;
        let newFeed;

        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeed = $('.feed').html()
                loadFeed(1, function () {
                    newFeed =  $('.feed').html()
                    done();
                })
            })

        it('New feed is different to old one', function () {
            expect(oldFeed).not.toEqual(newFeed);
        });
    });
});

}());
