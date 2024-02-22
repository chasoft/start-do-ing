type Quote = {
	category: string
	tags: Array<string>
	content: string
	author: string
}

//Sample from https://www.southernliving.com/culture/life-quotes
const SELF_CARE: Array<Quote> = [
	{
		category: "Self-Care and Self-Worth Messages",
		tags: [],
		content:
			"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
		author: "Rosa Parks"
	},
	{
		category: "Self-Care and Self-Worth Messages",
		tags: [],
		content: "To love oneself is the beginning of a lifelong romance",
		author: "Oscar Wilde"
	},
	{
		category: "Self-Care and Self-Worth Messages",
		tags: [],
		content:
			"Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
		author: "Etty Hillesum"
	}
]

const POSITIVE_THINKING: Array<Quote> = [
	{
		category: "Positive Thinking Quotes",
		tags: [],
		content:
			"You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive",
		author: "Maya Angelou"
	},
	{
		category: "Positive Thinking Quotes",
		tags: [],
		content:
			"Sometimes, when things are falling apart, they may actually be falling into place",
		author: "Unknown"
	},
	{
		category: "Positive Thinking Quotes",
		tags: [],
		content: "A dead end is just a good place to turn around",
		author: "Naomi Judd"
	}
]

const SUCCESS: Array<Quote> = [
	{
		category: "Quotes About Success",
		tags: [],
		content:
			"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
		author: "Reba McEntire"
	},
	{
		category: "Quotes About Success",
		tags: [],
		content: "I never dreamed about success. I worked for it",
		author: "Estée Lauder"
	},
	{
		category: "Quotes About Success",
		tags: [],
		content:
			"All you need in this life is ignorance and confidence; then success is sure",
		author: "Mark Twain"
	}
]

export const QUOTES: Array<Quote> = [...SELF_CARE, ...POSITIVE_THINKING, ...SUCCESS]
