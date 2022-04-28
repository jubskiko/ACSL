def find(n):
    currThree, currFive, total = 3, 5, 0
    while currThree < n or currFive < n:
        if currThree <= n:
            total += currThree
        if currFive <= n:
            total += currFive
        currThree += 3
        currFive += 5
    return(total)

print(find(8))
