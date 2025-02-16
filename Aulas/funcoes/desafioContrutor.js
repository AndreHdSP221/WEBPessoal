function errorHandling(error) {
    const errorMessages = {
      132: "Código de sucesso!",
      404: "Recurso não encontrado!"
    };
  
    const errorMessage = errorMessages[error.code] || "Erro desconhecido!"
  
    console.error(`Erro ${error.code}: ${errorMessage}`)
    console.error("Detalhes do erro:", error)
  }

function creatPeople(Name, age, sex = "Not provided", YearOfBirth = "'''Default Value'''"){
    let namePeople = Name
    let agePeople = age
    let sexPeople = sex
    let YearOfBirthPeople = YearOfBirth

    return {
        presentation: function(){
            genderMessage = ""
            try {
                switch(sexPeople.toLowerCase()){
                    case "f":
                        genderMessage = "Woman"
                        break
                    case "m":
                        genderMessage = "Man"
                        break
                    case "not provided":
                        genderMessage = "I'd rather not say"
                        break
                    default:
                        console.error("Not Provided.") 
                }
                if ((typeof(namePeople) === "string" && namePeople !== null && namePeople !== undefined) && !isNaN(agePeople)) {
                    console.log(`Hallo guys!! Where are you? I am ${namePeople}! I have ${agePeople} years! I was born in ${YearOfBirthPeople} and my gender is: ${genderMessage}`)
                    return null
                }
            } catch(error) {
                errorHandling({ code: 404, message: error.message });
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
const personMariana = creatPeople("Mariana", 32, "f", 1993)
personMariana.presentation()

const personAmanda = creatPeople("Amanda", 24, undefined, 2001)
personAmanda.presentation()