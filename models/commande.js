const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema({
    name: String,
    email: String,
    numtel: String,
    problem: String,
});
const Commande = mongoose.model("Commande", commandeSchema);
module.exports = Commande;