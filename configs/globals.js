require("dotenv").config();
// Global configurations object contains Application Level variables such as:
// client secrets, passwords, connection strings, and misc flags
const configurations = {
  ConnectionStrings: {
    MongoDB: "mongodb+srv://paulocastropn:netomtd22@paulo.djrct.mongodb.net/?retryWrites=true&w=majority&appName=paulo",
  },
  Authentication: {
    facebook: {
      ClientId: "2033350147168939",
      ClientSecret: "3d134593e30f1363a41a7dfe218d4f04",
      CallbackUrl: "http://localhost:3000/facebook/callback"
    },
  },
};
module.exports = configurations;
