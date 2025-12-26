export type StrategyItem = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
};

export const strategyData: StrategyItem[] = [
  {
    id: "our-strategy",
    title: "Our Strategy",
    shortDesc:
      "Our projects are carried out under the aegis of Aditya Birla Centre for Community Initiatives and Rural Development.",
    fullDesc:
      "Our strategy focuses on sustainable development, long-term impact, and community empowerment. We work closely with local stakeholders to ensure measurable and lasting outcomes.",
    image: "/imgs/no.-36-strategic-partnerships-big.jpg",
  },
  {
    id: "our-partners",
    title: "Our Partners",
    shortDesc:
      "We partner with government bodies, district authorities, village panchayats and other like-minded organisations.",
    fullDesc:
      "Our partnerships span across public institutions, NGOs, and private organisations to drive inclusive growth and meaningful social change.",
    image: "/imgs/0x0.webp",
  },
];
