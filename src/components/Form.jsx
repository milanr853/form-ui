import React, { useEffect, useRef, useState } from 'react'
import StyledInput from "./StyledInput"
import Button from './Button'
import TextArea from './TextArea'
import { validateText, validateEmail, isNumeric } from '../utils/validation'
import Questions from './Questions'
import { questionsApi } from '../Api/apis'

function Form() {
    const [topic, setTopic] = useState("")
    const [language, setLanguage] = useState("")
    const [exerciseFrequency, setExerciseFrequency] = useState("")
    const [dietPreferance, setDietPreferance] = useState("")
    const [qualification, setQualification] = useState("")

    const [experience, setExperience] = useState("")
    const [fieldOfStudy, setFieldOfStudyRef] = useState("")

    const [technologyQuestions, setTechnologyQuestions] = useState([]);
    const [healthQuestions, setHealthQuestions] = useState([]);
    const [educationQuestions, setEducationQuestions] = useState([]);

    const nameRef = useRef()
    const mailRef = useRef()
    const feedbackRef = useRef()


    async function fetchQuestions() {
        try {
            const response = await questionsApi(topic?.toLowerCase());
            switch (topic) {
                case "Technology":
                    setTechnologyQuestions(response.map(q => ({ ...q, ans: '' })));
                    break;
                case "Health":
                    setHealthQuestions(response.map(q => ({ ...q, ans: '' })));
                    break;
                case "Education":
                    setEducationQuestions(response.map(q => ({ ...q, ans: '' })));
                    break;
                default:
                    break;
            }
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        if (!topic) return
        fetchQuestions()
    }, [topic])



    const selectTopic = (e) => {
        setTopic(e.target.value)
        // clearState()
    }
    const selectLanguage = (e) => {
        setLanguage(e.target.value)
    }
    const selectExerciseFrequency = (e) => {
        setExerciseFrequency(e.target.value)
    }
    const selectDietPreferance = (e) => {
        setDietPreferance(e.target.value)
    }
    const selectQualification = (e) => {
        setQualification(e.target.value)
    }


    function clearState() {
        setTopic("")
        setLanguage("")
        setExerciseFrequency("")
        setDietPreferance("")
        setQualification('')
        setExperience("")
        setFieldOfStudyRef("")
        nameRef.current.value = ""
        mailRef.current.value = ""
        feedbackRef.current.value = ""
        setTechnologyQuestions([])
        setHealthQuestions([])
        setEducationQuestions([])
    }


    const handleSubmit = () => {
        //name
        if (!nameRef.current.value) return alert("Enter Fullname")
        if (nameRef.current.value) {
            const isValidate = validateText(nameRef.current.value)
            if (!isValidate) return alert("Fullname cannot contain numbers and characters")
        }
        if (nameRef.current.value && nameRef.current.value.length < 3) return alert("Fullname cannot be less than 3 characters")


        //email
        if (!mailRef.current.value) return alert("Enter email")
        const isMailValidate = validateEmail(mailRef.current.value)
        if (!isMailValidate) return alert("Enter correct email")


        //topic
        if (!topic) return alert("Topic is not selected")

        //Technology
        if (!language) {
            if (topic === "Technology") return alert("Select favorite language")
            else return alert("Complete Technology Section")
        }
        const isValidate = isNumeric(experience)
        if (!isValidate) {
            if (topic === "Technology") return alert("Experience must be in number")
            else return alert("Complete Technology Section")
        }
        if (experience > 40) {
            if (topic === "Technology") return alert("Maximum experience is 40 years")
            else return alert("Complete Technology Section")
        }

        // Health
        if (!exerciseFrequency) {
            if (topic === "Health") return alert("Select exercise frequency")
            else return alert("Complete Health Section")
        }
        if (!dietPreferance) {
            if (topic === "Health") return alert("Select diet preferance")
            else return alert("Complete Health Section")
        }

        // Education
        if (!qualification) {
            if (topic === "Education") return alert("Select qualification")
            else return alert("Complete Education Section")
        }
        if (!fieldOfStudy) {
            if (topic === "Education") return alert("Provide your field of study")
            else return alert("Complete Education Section")
        }


        //feedback
        if (!feedbackRef.current.value) return alert("Provide feedback")
        if (feedbackRef.current.value && feedbackRef.current.value.length < 50) return alert("Feedback atleast 50 characters")


        // all checks done
        const data = {
            fullname: nameRef.current.value,
            email: mailRef.current.value,
            feedback: feedbackRef.current.value,

            technology: { language, experience, questions: technologyQuestions },
            health: { exercise_frequency: exerciseFrequency, diet_preferance: dietPreferance, questions: healthQuestions },
            education: { qualification, fieldOfStudy, questions: educationQuestions }
        }
        console.log(data)
        clearState()
    }

    const handleQuestionChange = (index, value, questionType) => {
        switch (questionType) {
            case "Technology":
                const updatedTechQuestions = [...technologyQuestions];
                updatedTechQuestions[index].ans = value;
                setTechnologyQuestions(updatedTechQuestions);
                break;
            case "Health":
                const updatedHealthQuestions = [...healthQuestions];
                updatedHealthQuestions[index].ans = value;
                setHealthQuestions(updatedHealthQuestions);
                break;
            case "Education":
                const updatedEducationQuestions = [...educationQuestions];
                updatedEducationQuestions[index].ans = value;
                setEducationQuestions(updatedEducationQuestions);
                break;
            default:
                break;
        }
    }


    return (
        <>
            <StyledInput type="fullname" reference={nameRef} />

            <StyledInput type="email" reference={mailRef} />

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="topic_dropdown">Choose a topic: </label>
                <select id="topic_dropdown" className="w-full h-[45px] rounded-md outline-none px-4" onChange={selectTopic} defaultValue={topic}>
                    <option value="" disabled hidden>Topic</option>
                    <option value="Technology">Technology</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                </select>
            </div>


            {/* --------------------------------------- */}
            {/* conditional - Visible if "Technology" is selected  */
                topic === "Technology" ?
                    <div className='w-full flex flex-col gap-8'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="tech_dropdown">Favorite Programming Language: </label>
                            <select
                                id="tech_dropdown"
                                className="dropdown w-full h-[45px] rounded-md outline-none px-4"
                                onChange={selectLanguage}
                                defaultValue={language}>
                                <option value="" disabled hidden>Language</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                <option value="C#">C#</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="experience">Experience: </label>
                            <input
                                className='w-full h-[45px] rounded-md outline-none border-2 border-blue-400 px-4'
                                name="experience"
                                id="experience"
                                placeholder={0}
                                onChange={(e) => setExperience(e.target.value)}
                                value={experience}
                            />
                        </div>
                        <Questions questions={technologyQuestions} handleQuestionChange={(index, value) => handleQuestionChange(index, value, "Technology")} />
                    </div>
                    : <></>
            }


            {
                /* conditional - Visible if "Health" is selected  */
                topic === "Health" ?
                    <div className='w-full flex flex-col gap-8'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="exercise_frequency_dropdown">Exercise Frequency: </label>
                            <select
                                onChange={selectExerciseFrequency}
                                id="exercise_frequency_dropdown"
                                className="dropdown w-full h-[45px] rounded-md outline-none px-4"
                                defaultValue={exerciseFrequency}>
                                <option value="" disabled hidden>Frequency</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Rarely">Rarely</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="diet_preference_dropdown">Diet Preference: </label>
                            <select
                                onChange={selectDietPreferance}
                                id="diet_preference_dropdown"
                                className="dropdown w-full h-[45px] rounded-md outline-none px-4"
                                defaultValue={dietPreferance}>
                                <option value="" disabled hidden>Diet</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Non-Vegetarian">Non-Vegetarian</option>
                            </select>
                        </div>
                        <Questions questions={healthQuestions} handleQuestionChange={(index, value) => handleQuestionChange(index, value, "Health")} />
                    </div>
                    : <></>
            }


            {
                /* conditional - Visible if "Education" is selected  */
                topic === "Education" ?
                    <div className='w-full flex flex-col gap-8'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="highest_qualification_dropdown">Highest Qualification: </label>
                            <select
                                id="highest_qualification_dropdown"
                                className="dropdown w-full h-[45px] rounded-md outline-none px-4"
                                onChange={selectQualification}
                                defaultValue={qualification}>
                                <option value="" disabled hidden>Qualification</option>
                                <option value="High School">High School</option>
                                <option value="Bachelor's">Bachelor's</option>
                                <option value="Master's">Master's</option>
                                <option value="PhD">PhD</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="fieldOfStudy">Field Of Study: </label>
                            <input
                                className='w-full h-[45px] rounded-md outline-none border-2 border-blue-400 px-4'
                                name="fieldOfStudy"
                                id="fieldOfStudy"
                                onChange={(e) => setFieldOfStudyRef(e.target.value)}
                                value={fieldOfStudy}
                            />
                        </div>
                        <Questions questions={educationQuestions} handleQuestionChange={(index, value) => handleQuestionChange(index, value, "Education")} />
                    </div>
                    : <></>
            }
            {/* --------------------------------------- */}

            <TextArea label='Feedback: ' reference={feedbackRef} />

            <Button submit={handleSubmit} />
        </>
    )
}

export default Form