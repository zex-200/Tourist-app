

age = int(input("Enter your age! "))

def find_age():
    if age <= 17:
        return "Not eligible to vote"
    elif age <= 18:
        return "Eligible to vote"
    elif age <= 40:
        return "Mature enough"
    else:
        return "Too old"
print(find_age())   