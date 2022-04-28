async function getInput () {
    let userInput = prompt('Enter the data!')
    const indexArr = [];
    const regEx = new RegExp (/[0-9]+[ ]+[0-9]+[ ]+[a-z]+[ ]/g)
    const array = userInput.matchAll(regEx)
    for(const match of array){
        indexArr.push(match.index)
    }
    const inputArr = []
    for (let i = 0; i < indexArr.length; i++) {
        if (i == 4) {
            inputArr.push(userInput.substring(indexArr[i]))
        } else if (i == 0) {
            inputArr.push(userInput.substring(0, indexArr[i+1] - 1))
        } else {    
            inputArr.push(userInput.substring(indexArr[i], indexArr[i+1] - 1))
        }
    }
    return inputArr;
}

async function cypher (startOne, startTwo, key, phrase) {
    let currFib = parseInt(startOne);
    let nextFib = parseInt(startTwo);
    let temp = 0
    let finalNum = 0
    let times = 0
    let retString = ''
    let fibonacciOffset = key.charCodeAt(0)
    while (phrase.length > 0) {
        fibonacciOffset = key.charCodeAt(0)
        if (times/19 > 1) {
            times = 0;
            currFib = parseInt(startOne);
            nextFib = parseInt(startTwo);
        }
        for(let i = 0; i < currFib; i++) {
            fibonacciOffset++
            if (fibonacciOffset > 122) fibonacciOffset = 97
        }
        finalNum = phrase.charCodeAt(0) + (3 * fibonacciOffset)
        retString += finalNum + " "
        phrase = phrase.substring(1)
        temp = currFib
        currFib = nextFib
        nextFib = currFib + temp
        times++
    }
    return retString
}

async function run () {
    let inputArr = await getInput() 
    let output = ""
    for (line of inputArr) {
        output = output + await cypher(line.substring(0,1), line.substring(2,3), line.substring(4,5), line.substring(6)) + "\n"
    }
    const div = document.createElement("div")
    div.innerText = "Here is the output: \n" + output
    body.append(div)
}

const body = document.body
const btn = document.createElement("button")
btn.innerText = "Click to enter the data"
btn.addEventListener("click", () => {
    run()
})
body.append(btn)

//Input
// 3 7 h ACSL c2
// 4 9 s Python Programming is easier than programming in Java.
// 2 5 a Fibonacci Numbers are found in many places including the Mandelbrot Set.
// 0 1 j Help ME figure out how to solve this problem!
// 4 8 z It is 9:30 in the morning EST, but 6:30 on the West Coast.

//Ideal Output
// 1. 386 400 425 439 347 465 341 
// 2. 437 415 422 437 405 470 341 404 480 456 469 480 406 439 403 462 416 421 389 435 472 326 407 430 409 465 410 438 398 461 470 463 419 362 406 471 417 421 471 427 466 403 411 443 397 392 414 434 398 419 463 484 406 376 
// 3. 367 411 410 438 458 403 462 399 399 335 384 435 442 458 425 429 463 326 448 468 398 338 414 438 465 416 463 332 399 413 338 427 430 470 445 347 460 402 448 453 398 421 344 432 458 405 471 417 394 408 416 421 365 476 428 416 380 371 448 464 397 407 420 425 462 417 479 332 377 404 422 364 
// 4. 390 422 429 436 359 410 411 389 405 447 430 468 474 416 389 465 432 467 380 407 429 440 353 440 438 365 457 468 411 460 428 383 476 419 462 469 347 463 462 414 416 429 422 433 360 
// 5. 373 428 356 453 421 398 363 364 375 390 332 459 476 386 470 446 431 338 457 477 414 422 429 458 409 398 375 389 408 386 332 452 483 470 386 396 388 357 396 398 411 422 356 464 410 467 338 393 425 457 416 386 433 465 451 457 446 352