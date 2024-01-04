
function solution(participant, completion) {
    let answer;
    // 1)
    let hashMap = new Map()

    // 2)
    participant.forEach(e => {
        if(hashMap.has(e)) {
            hashMap.set(e, hashMap.get(e)+1)  // Map(3) { 'mislav' => 2, 'stanko' => 1, 'ana' => 1 }

        } else {
            hashMap.set(e, 1)    
        }
    })

    // 3)
    completion.forEach(e => {
        if(hashMap.has(e)) {
            hashMap.set(e, hashMap.get(e)-1) // Map(3) { 'mislav' => 1, 'stanko' => 0, 'ana' => 0 }
        }
    })


    // 4)
    for(let [key, value] of hashMap) {
        if(value == 1) {
            answer = key
        }
    }

    return answer;
}