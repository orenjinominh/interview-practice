import unittest


# O : no output, function produces side effect of reversing list of characters in place
# I : a list of characters
# C :
# E : list could be empty or have only one character
#     list could contain odd or even number of characters

# Approach: we want to access and write each character only once
# switch first and last elements, then second and second-to-last, etc
# if the number of elements is odd, the center element will be untouched
def reverse(list_of_chars):
    N = len(list_of_chars)

    for x, y in zip(range(N // 2), range(N - 1, N // 2 + N % 2 - 1, -1)):
        char_x = list_of_chars[x]
        list_of_chars[x] = list_of_chars[y]
        list_of_chars[y] = char_x


# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_empty_string(self):
#         list_of_chars = []
#         reverse(list_of_chars)
#         expected = []
#         self.assertEqual(list_of_chars, expected)
#
#     def test_single_character_string(self):
#         list_of_chars = ['A']
#         reverse(list_of_chars)
#         expected = ['A']
#         self.assertEqual(list_of_chars, expected)
#
#     def test_longer_string(self):
#         list_of_chars = ['A', 'B', 'C', 'D', 'E']
#         reverse(list_of_chars)
#         expected = ['E', 'D', 'C', 'B', 'A']
#         self.assertEqual(list_of_chars, expected)
#
#
# unittest.main(verbosity=2)