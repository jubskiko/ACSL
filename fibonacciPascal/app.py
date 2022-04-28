def fib(num):
    if num < 0:
        print("Error")
    elif num == 1 or num == 2:
        return 1
    else:
        return fib(num-1) + fib(num-2)

def fibFinder(fibNum):
    index = 1
    while True:
        if fib(index) == fibNum:
            return index
        else:
            index += 1

def pascalGenerator(num):
    pascalTriangle = []
    for i in range(num):
        pascalTriangle.append([])
        pascalTriangle[i].append(1)
        for j in range(1, i):
            pascalTriangle[i].append(pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j])
        if(num != 0):
            pascalTriangle[i].append(1)
    return pascalTriangle

def findStats(fibNum):
    total = 0
    numNums = int(fibFinder(fibNum) / 2)
    pascalTriangle = pascalGenerator(fibFinder(fibNum))
    evens, odds, largest = 0, 0, 0
    for i in range(numNums):
        if pascalTriangle[-(i+1)][i] % 2 == 0:
            evens += 1
        else: 
            odds += 1
        if pascalTriangle[-(i+1)][i] > largest:
            largest = pascalTriangle[-(i+1)][i]
        total += pascalTriangle[-(i+1)][i]
    if fibNum - total == 1:
        odds += 1
    retStr = str(odds) + " " + str(evens) + " " + str(largest)
    return retStr

def main():
    inputs = []
    for i in range(5):
        inputs.append(int(input())) 
    for i in range(5):
        print(findStats(inputs[i]))

main()

# Input
# 8
# 89
# 610
# 10946
# 317811 

# Output
# 2 1 4
# 5 1 35
# 4 4 210
# 8 3 3003
# 3 11 77520