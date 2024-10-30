function day_of_week(a) {
    if (a > 0 && a <= 7) {
        if (a === 1) {
            console.log("monday")
        }
        else if (a === 2) {
            console.log("tuesday")
        }
        else if (a === 3) {
            console.log("wednesday")
        }
        else if (a === 4) {
            console.log("thurseday")
        }
        else if (a === 5) {
            console.log("friday")
        }
        else if (a === 6) {
            console.log("satuarday")
        }
        else if (a === 7) {
            console.log("sunday")
        }
    }
    else{console.log("invalid input")}

    
}

day_of_week(7)
