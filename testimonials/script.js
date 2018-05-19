// TheaterJS typing effect
var theater = theaterJS({ local: 'fr' })
theater.addActor('action-text', { speed: 0.95, accuracy: 0.9 });

const quotes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nulla a dolor tempor volutpat. Suspendisse rhoncus viverra risus, nec congue ipsum hendrerit a.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nulla a dolor tempor volutpat. Suspendisse rhoncus viverra risus, nec congue ipsum hendrerit a.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nulla a dolor tempor volutpat. Suspendisse rhoncus viverra risus, nec congue ipsum hendrerit a.'
];

// Generate scene
for (let i = 0; i < quotes.length; i++) {
    theater.addScene('action-text:' + "\"" + quotes[i] + "\"", 1500);
}
theater.addScene(theater.replay.bind(theater));
