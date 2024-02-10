const yup = require("yup");

const linkSchema = yup.object().shape({
    Github: yup.string().url().optional(),
    Linkedin: yup.string().url().optional(),
    Drive: yup.string().url().optional(),
})

const register = yup.object().shape({
    domain: yup.array().of(yup.string()).required(),
    kiitemail: yup.string().email().matches(/@kiit.ac.in$/).required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    roll: yup.number().required(),
    gender: yup.string().oneOf(["Male", "Female"]).required(),
    contactNumber: yup.string().min(10).max(10).required(),
    yearOfStudy: yup.string().required(),
    branch: yup.string().required(),
    links: linkSchema,
    existSocieties: yup.string().optional(),
    whyElabs: yup.string().required(),
    anythingElse: yup.string().optional(),
});



module.exports = {
    register
}