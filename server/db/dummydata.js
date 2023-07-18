const Skill = require("../models/skill")



async function populate(){
    const count = await Skill.count()
    if(count ==0){
        const skills = await Skill.bulkCreate([
            {skillName: "HTML" ,skillLevel: "95"},
            {skillName: "CSS" ,skillLevel: "90"},
            {skillName: "JS" ,skillLevel: "70"},
            {skillName: "REACT" ,skillLevel: "50"}, 
            {skillName: "SASS" ,skillLevel: "40"},
            {skillName: "JQUERY" ,skillLevel: "20"},
            {skillName: "SQL" ,skillLevel: "40"},
            {skillName: "NODEJS" ,skillLevel: "40"},
            {skillName: "GİT" ,skillLevel: "60"},
        ])
    }
}



module.exports = populate