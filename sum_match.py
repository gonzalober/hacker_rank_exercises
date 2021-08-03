# a1 and a2 are the given lists, and target is the target sum.
# The output should be a tuple of two integers, one from each array.
def closest_sum_pair(a1, a2, target):
    a1_sorted = sorted(a1)
    a2_sorted = sorted(a2)
    print("HERE", a1_sorted)
    i = 0
    j = len(a2_sorted) - 1
    smallest_diff = abs(a1_sorted[0] + a2_sorted[0] - target)
    closest_pair = (a1_sorted[0], a2_sorted[0])
    print("CLOSEST NUMBER", closest_pair)
    while i < len(a1_sorted) and j >= 0:
        v1 = a1_sorted[i]
        v2 = a2_sorted[j]
        current_diff = v1 + v2 - target
        if abs(current_diff) < smallest_diff:
            smallest_diff = abs(current_diff)
            closest_pair = (v1, v2)

        if current_diff == 0:
            return closest_pair
        elif current_diff < 0:
            i += 1
        else:
            j -= 1
    return closest_pair


# tests.
a1 = [11, -3, 45, 5, 9, 5]
a2 = [-5, 11, 0, 8, 3, 6]
a_target = 19
print(closest_sum_pair(a1, a2, a_target))

b1 = [7, 4, 1, 10]
b2 = [4, 5, 8, 7]
b_target = 13

c1 = [6, 8, -1, -8, -3]
c2 = [4, -6, 2, 9, -3]
c_target = 3

d1 = [19, 14, 6, 11, -16, 14, -16, -9, 16, 13]
d2 = [13, 9, -15, -2, -18, 16, 17, 2, -11, -7]
d_target = -15
print(closest_sum_pair(d1, d2, d_target))
