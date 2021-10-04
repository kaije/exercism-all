class Allergies(object):

    ITEM_SCORES = {
        'eggs': 1,
        'peanuts': 2,
        'shellfish': 4,
        'strawberries': 8,
        'tomatoes': 16,
        'chocolate': 32,
        'pollen': 64,
        'cats': 128
    }

    def __init__(self, score):
        self.list = list(item for item in self.ITEM_SCORES if bool(
            self.ITEM_SCORES[item] & score))

    def is_allergic_to(self, item):
        return item in self.list

    @property
    def lst(self):
        return self.list
