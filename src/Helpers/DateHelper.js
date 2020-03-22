export const getShortDate= (date) =>{
    let obj = new Date(date);
    let month = obj.getMonth() + 1;
    let day = obj.getDate();
    return `${obj.getYear()+1900}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day  }`;
}

export const getDateStringWithDayName = (date) =>{
    let obj = new Date(date);
    let month = obj.getMonth();
    let day = obj.getDate();
    let weekDay = obj.getDay();
    return `${getDayName(weekDay)}, ${day} ${getMonthName(month)} `

}

const getDayName = (day) =>{
    switch (day){
        case 0: return "pn"
        case 1: return "wt"
        case 2: return "śr"
        case 3: return "czw"
        case 4: return "pt"
        case 5: return "sob"
        case 6: return "nd"
    }
}


const getMonthName = (month) =>{
    switch (month){
        case 0: return "sty"
        case 1: return "lut"
        case 2: return "mar"
        case 3: return "kwi"
        case 4: return "maj"
        case 5: return "cze"
        case 6: return "lip"
        case 7: return "sie"
        case 8: return "wrz"
        case 9: return "paź"
        case 10: return "lis"
        case 11: return "gru"

    }
}

