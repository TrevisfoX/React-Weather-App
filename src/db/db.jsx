export const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const month = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// React slick data
export const hourlySettings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 7,
	responsive: [
		{
			breakpoint: 1645,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: false,
				dots: true,
			},
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
			},
		},
		{
			breakpoint: 515,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			},
		},
	],
};

// Transition data
export const duration = 500;

export const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 1,
};

export const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};
