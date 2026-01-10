export type Strategy = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
};

export const leadershipData: Strategy[] = [
  {
    id: 1,
    slug: "foundation-of-success",
    title: "Establishing a foundation of success",
    image: "/imgs/Complete-list-of-ICC-chairman.webp",
    description:
      "This section elaborates on the leadership principles, long-term vision, and strategic initiatives that formed the backbone of sustained organizational success.",
  },
  {
    id: 2,
    slug: "chairman-speech-78th-agm",
    title:
      "Chairman, Mr. Kumar Mangalam Birla’s speech at 78th AGM of Grasim Industries Limited",
    image:
      "/imgs/Agustin_Vásquez_Gómez,_chairperson_of_OPCW's_Fourth_Review_Conference,_2018.jpg",
    description:
      "An in-depth narrative of the Chairman’s address focusing on governance, innovation, sustainability, and future growth direction.",
  },
];
