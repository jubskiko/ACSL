const body = document.body;
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    let hours = 0
    let minutes = 0
    let char = ''
    let sequence = prompt().replace(/\s+/g, '').toUpperCase();;
    let time = ''
    let times = (sequence.length)/5
    for (let t = 0; t < times; t++) {
        for (let i = 0; i < 5; i++) {
            char = sequence.charAt(0)
            switch (char) {
                case 'R':
                    switch (i) {
                        case 0:
                            hours += 1;
                            break;
                        case 1:
                            hours += 1;
                            break;
                        case 2:
                            hours += 2;
                            break;
                        case 3:
                            hours += 3;
                            break;
                        case 4:
                            hours += 5;
                            break;
                    }
                    break;
                case 'G':
                    switch (i) {
                        case 0:
                            minutes += 1;
                            break;
                        case 1:
                            minutes += 1;
                            break;
                        case 2:
                            minutes += 2;
                            break;
                        case 3:
                            minutes += 3;
                            break;
                        case 4:
                            minutes += 5;
                            break;
                    }
                    break;
                case 'B':
                    switch (i) {
                        case 0:
                            minutes += 1;
                            hours += 1;
                            break;
                        case 1:
                            minutes += 1;
                            hours += 1;
                            break;
                        case 2:
                            minutes += 2;
                            hours += 2;
                            break;
                        case 3:
                            minutes += 3;
                            hours += 3;
                            break;
                        case 4:
                            minutes += 5;
                            hours += 5;
                            break;
                    }
                    break;
                case 'W':
                    break;
            }
            sequence = sequence.substring(1)
        }
        minutes = minutes*5;
        hours = hours%12 + Math.floor(minutes/60);
        minutes = minutes%60;
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        time += (t+1) + '.' + hours + ':' + minutes + '\n'
        hours = 0;
        minutes = 0;

    }
    alert(time)
})

// RWGBG WBBGR WGBRB GGBBB WRGGG 
// 1. 04:50 2. 08:30 3. 10:40 4. 11:00 5. 01:50