gsap.registerPlugin(ScrollTrigger);

let vw = (multiplier) => window.innerWidth * (multiplier / 100);
let vh = (multiplier) => window.innerHeight * (multiplier / 100);

section_titles = document.querySelectorAll(".section-title path");

for (let i = 0; i < section_titles.length; i++) {
	section_titles[i].setAttribute(
		"style",
		`stroke-width: 0.25; stroke: #474554; stroke-dasharray: ${section_titles[i]
			.getTotalLength()
			.toFixed(2)}px; stroke-dashoffset: ${section_titles[i]
			.getTotalLength()
			.toFixed(2)}px; fill: transparent`
	);
}

about_letters = document.querySelectorAll("#about-section path");

ScrollTrigger.defaults({
	markers: true,
});

for (let i = 0; i < about_letters.length; i++) {
	gsap.to(about_letters[i], {
		scrollTrigger: {
			trigger: "#about",
			start: "top 90%%",
			end: "center 80%",
			scrub: 1,
			toggleActions: "play resume reverse reverse",
		},
		"stroke-dashoffset": 0,
	});

	gsap.to(about_letters[i], {
		scrollTrigger: {
			trigger: "#about",
			toggleActions: "play resume reverse reverse",
			start: "center 80%",
		},
		fill: "#474554",
	});
}
