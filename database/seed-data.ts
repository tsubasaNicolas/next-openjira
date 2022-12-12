interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Lorem ipsum lreomngknakm ndhflkasl kadkfjaklf lkhsadkhlkawsh ",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En Progreso: Lorem ipsukhlkawsh ",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminadas, Lorem ipsum lreomn jajjasjajsdlk lkdsalkna adkfjaklf lkhsadkhlkawsh ",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
