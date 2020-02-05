var feed = new Instafeed({
    get: 'user',
    userId: '355731407',
    limit: 8,
    resolution: 'standard_resolution',
    accessToken: '355731407.1677ed0.563deef797aa4bc8a8a6090814b13115',
    sortBy: 'most-recent',
    template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid inst-img"/></a></div>',
});
feed.run();