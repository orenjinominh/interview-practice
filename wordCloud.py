import unittest

# given a long string (containing only words and punctuation), create a dictionary counting
# the number appearances of each word.
# (Case insensitive in order to correctly count words that start a sentence. As a side effect of this, the name 'Art'
# and the concept 'art' will be counted as the same word. Hyphenated words and words with apostraphes will be one word.

class WordCloudData(object):

    def __init__(self, input_string):

        self.words_to_counts = {}

        is_word = False
        for i, ch in enumerate(input_string):
            if ch.isalpha() and not is_word:
                word_start = i
                is_word = True
            elif not ch.isalpha() and ch not in "'-" and is_word:
                word = input_string[word_start:i].lower()
                self.words_to_counts[word] = self.words_to_counts.get(word, 0) + 1
                is_word = False

        if is_word:
            word = input_string[word_start:].lower()
            self.words_to_counts[word] = self.words_to_counts.get(word, 0) + 1












# Tests

# There are lots of valid solutions for this one. You
# might have to edit some of these tests if you made
# different design decisions in your solution.

class Test(unittest.TestCase):

    def test_simple_sentence(self):
        input = 'I like cake'

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {'i': 1, 'like': 1, 'cake': 1}
        self.assertEqual(actual, expected)

    def test_longer_sentence(self):
        input = 'Chocolate cake for dinner and pound cake for dessert'

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {
            'and': 1,
            'pound': 1,
            'for': 2,
            'dessert': 1,
            'chocolate': 1,
            'dinner': 1,
            'cake': 2,
        }
        self.assertEqual(actual, expected)

    def test_punctuation(self):
        input = 'Strawberry short cake? Yum!'

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {'cake': 1, 'strawberry': 1, 'short': 1, 'yum': 1}
        self.assertEqual(actual, expected)

    def test_hyphenated_words(self):
        input = 'dessert - mille-feuille cake'

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {'cake': 1, 'dessert': 1, 'mille-feuille': 1}
        self.assertEqual(actual, expected)

    def test_ellipses_between_words(self):
        input = 'Mmm...mmm...decisions...decisions'

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {'mmm': 2, 'decisions': 2}
        self.assertEqual(actual, expected)

    def test_apostrophes(self):
        input = "Allie's Bakery: Sasha's Cakes"

        word_cloud = WordCloudData(input)
        actual = word_cloud.words_to_counts

        expected = {"bakery": 1, "cakes": 1, "allie's": 1, "sasha's": 1}
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)