function solution(lines) {
    const obj = {}
    let layerCount = 0
    for(line of lines) {
        for(let i = line[0]; i < line[1]; i++) {
            obj[i] = obj[i] + 1 || 1 
        }
    }
    for(point in obj) {
        if(obj[point] !== 1) layerCount++
    }
     return layerCount
 }
 