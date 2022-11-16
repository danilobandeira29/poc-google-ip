const admin = require("firebase-admin")
const app = admin.initializeApp({
    credential: admin.credential.cert("credential.json")
})
console.log("App initialized")

const email = "danilo.bandeira@wisereducacao.com"

async function getUser() {
    const user = await app.auth().getUserByEmail(email)
    console.log(user)
}
// getUser().catch((e) => console.log("Try to change node version to 16.16", e))

async function createCustomToken() {
    const user = await app.auth().getUserByEmail(email)
    const courses = {
        'policia-federal': false,
        'ciencia-da-computacao': true
    }
    const token = await app.auth().createCustomToken(user.uid, { courses })
    console.log(token)
}
// createCustomToken().catch((e) => console.log(e))

async function resetUserPassword() {
    const resetLink = await app.auth().generatePasswordResetLink(email)
    console.log(resetLink)
}
resetUserPassword().catch((e) => console.log(e))
