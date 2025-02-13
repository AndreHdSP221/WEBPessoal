function errorHandling(code){
    var codes = {
        132: "Great!",
        404: "Not Great!"
    }
}

function creatPeople(Name, age, sex = "I'd rather not say", YearOfBirth = "'''Default Value'''"){
    let namePeople = Name
    let agePeople = age
    let sexPeople = sex
    let YearOfBirthPeople = YearOfBirth

    return {
        presentation: function(){
            genderMessage = ""
            try {
                switch(sexPeople.toUpperCase()){
                    case "F":
                        genderMessage = "Woman"
                        break
                    case "M":
                        genderMessage = "Man"
                        break
                    case "I'D RATHER NOT SAY":
                        genderMessage = "I'd rather not say"
                        break
                    default:
                        console.error("Deve ser um valor valido.") 
                }
                if ((typeof(namePeople) === "string" && namePeople !== null && namePeople !== undefined) && !isNaN(agePeople)) {
                    console.log(`Hallo guys!! Where are you? I am ${namePeople}! I have ${agePeople} years! I was born in ${YearOfBirthPeople} and I'm ${genderMessage}`)
                    return null
                }
            } catch(e) {
                errorHandling(e)
                return -1;
            }

        },

        updateAge: function(yearsToAdd){
            agePeople = agePeople + yearsToAdd
        },

        getName: function(){
            return namePeople
        },

        getAge: function(){
            return agePeople
        }
    }
}

// Sequence: Name, Age, Sex and Year of birth
const personMariana = creatPeople("Mariana", 18, "f", 2007);
personMariana.presentation();