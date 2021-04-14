const dbConfig = require("./config/db.config");
const { db } = require("./models");

module.exports = {
  connect: async function () {
    try {
      await db.mongoose.connect(
        `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("Successfully connect to MongoDB.");
    } catch (err) {
      console.error("Connection error", err);
      process.exit();
    }
  },
};