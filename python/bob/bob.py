def hey(phrase):
    if silence(phrase):
        return "Fine. Be that way!"
    elif shouted(phrase) and question(phrase):
        return "Calm down, I know what I'm doing!"
    elif shouted(phrase):
        return "Whoa, chill out!"
    elif question(phrase):
        return "Sure."
    else:
        return "Whatever."


def silence(phrase):
    return phrase == "" or phrase.isspace()


def shouted(phrase):
    return phrase.strip().isupper()


def question(phrase):
    return phrase.strip().endswith("?")
