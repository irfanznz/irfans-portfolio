gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

let vw = (multiplier) => window.innerWidth * (multiplier / 100);
let vh = (multiplier) => window.innerHeight * (multiplier / 100);

section_titles = document.querySelectorAll(".section-title path");

for (let i = 0; i < section_titles.length; i++) {
	section_titles[i].setAttribute(
		"style",
		`stroke-width: 0.35; stroke: #262626; stroke-dasharray: ${section_titles[i]
			.getTotalLength()
			.toFixed(2)}px; stroke-dashoffset: ${section_titles[i]
			.getTotalLength()
			.toFixed(2)}px; fill: transparent`
	);
}

ScrollTrigger.defaults({
	markers: false,
});

about_letters = document.querySelectorAll("#about-title path");

for (let i = 0; i < about_letters.length; i++) {
	gsap.to(about_letters[i], {
		scrollTrigger: {
			id: "about_outline",
			trigger: "#about",
			start: "top 80%",
			end: "60% bottom",
			scrub: 1,
		},
		"stroke-dashoffset": 0,
	});

	// gsap.to(about_letters[i], {
	// 	scrollTrigger: {
	// 		id: "about_fade",
	// 		trigger: "#about",
	// 		toggleActions: "play none none reverse",
	// 		start: "60% bottom",
	// 	},
	// 	fill: "#262626",
	// });
}

projects_letters = document.querySelectorAll("#projects-title path");

for (let i = 0; i < projects_letters.length; i++) {
	gsap.to(projects_letters[i], {
		scrollTrigger: {
			id: "projects_outline",
			trigger: "#projects",
			start: "top 80%",
			end: "60% bottom",
			scrub: 1,
		},
		"stroke-dashoffset": 0,
	});

	// gsap.to(projects_letters[i], {
	// 	scrollTrigger: {
	// 		id: "projects_fade",
	// 		trigger: "#projects",
	// 		toggleActions: "play none none reverse",
	// 		start: "60% bottom",
	// 	},
	// 	fill: "#474554",
	// });
}

// gsap.set("#cornell-logo", {
// 	xPercent: -50,
// 	yPercent: -50,
// 	transformOrigin: "50% 50%",
// });

// gsap.to("#cornell-logo", {
// 	scrollTrigger: {
// 		id: "logo_fly",
// 		trigger: "#about",
// 		start: "top center",
// 		end: "bottom+=200% bottom",
// 		scrub: 1,
// 	},
// 	motionPath: {
// 		path: "#logo-path",
// 		align: "#logo-path",
// 		autoRotate: true,
// 	},
// 	scale: 5,
// });
