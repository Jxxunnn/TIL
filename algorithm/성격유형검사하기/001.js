function solution(survey, choices) {
    const obj = {}
    survey.forEach((v,i)=>{
        const first = v[0]
        const second = v[1]
        if(choices[i] < 4){
            const num = Math.abs(choices[i]-4);
            obj[first] = obj[first] + num || num;            
            obj[second] = obj[second] || 0;
        }
        else if(choices[i] > 4) {
            const num = choices[i]-4;
            obj[first] = obj[first] || 0;
            obj[second] = obj[second] + num || num;
        }    
        else {
            obj[first] = obj[first] || 0;
            obj[second] = obj[second] || 0;
        }
    })
    const answer = [];
    answer[0] = obj["R"] > obj["T"] ? "R" : obj["R"] < obj["T"] ? "T" : "R"
    answer[1] = obj["C"] > obj["F"] ? "C" : obj["C"] < obj["F"] ? "F" : "C"
    answer[2] = obj["J"] > obj["M"] ? "J" : obj["J"] < obj["M"] ? "M" : "J"
    answer[3] = obj["A"] > obj["N"] ? "A" : obj["A"] < obj["N"] ? "N" : "A"
    return answer.join("")
}