import {
	defineStore
} from "pinia"

export const useAdvisorsStore = defineStore("advisors", {
	state: () => ({
		advisors: [
			{
				name: "CRAIG STEPHEN",
				position: "CEO - Clear Compass",
				text: "Craig is a senior leader with 25 years of C-suite experience in the perishables and IT sectors. Over his career, he has focused on helping companies develop & execute go-to-market strategies as well as develop and manage major capital investments, including mergers & acquisitions.",
				img:"",
			},
			{
				name: "DAVID LUND",
				position: "CEO - Growthspring group",
				text: "Helping food companies grow better, faster. David is a senior leader in marketing and innovation with 25 years working for and with food companies and brands such as Chiquita, Heinz, Camposol, IFCO, and Fresh Solutions Network to develop and execute go-to-market strategies.",
				img:"",
			},
			{
				name: "NANCY TUCKER",
				position: "Vice President, Global Business Development",
				text: "Nancy focuses on global business development programs and projects for the PMA. These include new business programs and partnerships, marketing and training programs, event development and promotion, membership development, and more. education programs.",
				img:"",
			},
			{
				name: "ERIC BIDDISCOMBE",
				position: "Retail Solutions Partner",
				text: "Eric currently leads New Business Development in North America and Country Manager for Canada for Tosca. Eric held leadership roles throughout his 33 years career in retail which included both supply chain and produce procurement",
				img:"",
			},
			{
				name: "SIMON SOMOGYI",
				position: "Professor Business of Food at the University of Guelph",
				text: "Dr Simon Somogyi holds the Arrell Chair in the Business of Food and is the Director of the Longo's Food Retail Laboratory in the School of Hospitality, Food & Tourism Management, Gordon S Lang School of Business and Economics, University of Guelph.",
				img:"",
			},
			{
				name: "JAMES DONOVAN",
				position: "Investor/Advisor/Board Member",
				text: "Over the past 37+ years, Jim was part of a small team that brought Mission Produce, Inc (NASDAQ: AVO) from startup to IPO. In that time, Mission became the largest grower/distributor of avocados in the world, with operations, distribution and farming in over 25 countries. Amongst his duties, Jim represented Mission on multiple partnerships and new venture startups in Mexico, Chile, Peru and Colombia as Senior Vice President of Global Sourcing.",
				img:"",
			},
			{
				name: "GREG OGIBA",
				position: "President/Board Member",
				text: "Greg is a fresh food and agricultural executive who has spent his career working in various roles along the global fresh supply chain, with his main focus being building partnerships with major retailers. Greg supports several non-profit organizations promoting healthy eating and an active lifestyle for kids.  He’s also an advisor to several startup companies and teaches a college supply chain course.",
				img:"",
			},
		],
	}),
	actions: {},
})