def maximumToys(prices, k):
    sorted_arr = sorted(prices)
    count = 0
    for i in sorted_arr:
        if (i < k):
            count += 1
            k -= i

    return count


print(maximumToys([3, 7, 2, 9, 4], 15))
