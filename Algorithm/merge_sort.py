def merge_sort(data):
    if len(data) < 2:
        return data

    mid = len(data) // 2
    below, above = data[:mid], data[mid:]
    below = merge_sort(below)
    above = merge_sort(above)

    return merge(below, above)

def merge(below, above):
    result = []
    below_index = 0
    above_index = 0
    while below_index < len(below) and above_index < len(above):
        if below[below_index] < above[above_index]:
            result.append(below[below_index])
            below_index += 1
        else:
            result.append(above[above_index])
            above_index += 1

    if below_index == len(below):
        for data in above[above_index:]:
            result.append(data)
    else:
        for data in below[below_index:]:
            result.append(data)

    return result

if __name__ == "__main__":
    data = [10,9,18,7,62,5,14,3,2,1]
    sorted_data = merge_sort(data)
    print(data)
    print(sorted_data)
