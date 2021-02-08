const formidable = require("formidable");
const ContactModel = require("./ContactModel");

module.exports.contact = async (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    const {
      name,
      email,
      phoneno,
      website,
      challenge,
      desc,
      file,
      range,
    } = fields;

    const errors = [];
    console.log(fields);
    console.log(files.file.name);

    try {
      const response = await ContactModel.create({
        name,
        email,
        file: files.file.name,
        phoneno,
        desc,
        website,
        challenge,
        range,
      });
      return res.status(200).json({
        msg: "Your Data have been Submitted Successfully",
        response,
      });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  });
};
