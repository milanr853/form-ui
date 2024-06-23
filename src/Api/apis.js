const questionnaire = {
    technology: [{ q: "List other technologies that you have worked with.", ans: "" }, { q: "List the frameworks you have worked with.", ans: "" }, { q: "Have you used Redux?", ans: "" }],
    education: [{ q: "What was your favoriet subject in school?", ans: "" }, { q: "Why one should study mathematics?", ans: "" }],
    health: [{ q: "List all of your major protein sources.", ans: "" }, { q: "What is your daily calorie budget?", ans: "" }, { q: "Are you lactose intolerant?", ans: "" }]
}

function questionsApi(type) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(questionnaire[type])
            reject("Error at server")
        }, 350)
    })
    return p
}

export { questionsApi }