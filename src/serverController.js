let allParts = [
  { id: 1, name: "9900K", type: "CPU", make: "Intel" },
  { id: 2, name: "Ryzen 2700X", type: "CPU", make: "AMD" },
  { id: 3, name: "GTX 1080Ti FTW3", type: "GPU", make: "EVGA" },
  { id: 4, name: "RTX 2060 FE", type: "GPU", make: "Nvidia" },
  { id: 5, name: "Vengeance RGB 16GB 2x8", type: "RAM", make: "Corsair" },
  { id: 6, name: "Ripjaws V 32GB 4x8", type: "RAM", make: "G.Skill" }
];

module.exports = {
  getAllParts(req, res) {
    console.log("hit get");
    res.status(200).send(allParts);
  }
};
