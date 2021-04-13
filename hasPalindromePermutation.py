import unittest

# This is my initial implementation:
# # check if any permutation of a string is a palindrome
# # (a palindrome may have an odd amount of one character, all other characters must have an even count)
#
# def has_palindrome_permutation(string):
#
#     # Create a dict counting the amount of each character in the string
#     char_counts = {}
#     for ch in string:
#         char_counts[ch] = char_counts.get(ch, 0) + 1
#
#     # Check that there is no more than one character with an odd amount
#     has_odd = False
#     for count in char_counts.values():
#         if count % 2 != 0:
#             if has_odd:
#                 return False
#             has_odd = True
#
#     return True

# I implemented the second-best solution, according to InterviewCake. Tracking which characters have an odd count in a
# set, adding and removing them as you go, would a) not keep track of amounts you don't actually need to use,
# b) prevent integer overflow if you were dealing with a VERY large string, and c) doesn't require you to loop through
# the dictionary at the end to count odd numbers.
# Here's the better solution implemented

def has_palindrome_permutation(string):

    # Create a set containing each character with an odd amount
    odd_chars = set()
    for ch in string:
        if ch in odd_chars:
            odd_chars.discard(ch)
        else:
            odd_chars.add(ch)

    # Check whether there is no more than one character with an odd amount
    return not (len(odd_chars) > 1)


# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_permutation_with_odd_number_of_chars(self):
#         result = has_palindrome_permutation('aabcbcd')
#         self.assertTrue(result)
#
#     def test_permutation_with_even_number_of_chars(self):
#         result = has_palindrome_permutation('aabccbdd')
#         self.assertTrue(result)
#
#     def test_no_permutation_with_odd_number_of_chars(self):
#         result = has_palindrome_permutation('aabcd')
#         self.assertFalse(result)
#
#     def test_no_permutation_with_even_number_of_chars(self):
#         result = has_palindrome_permutation('aabbcd')
#         self.assertFalse(result)
#
#     def test_empty_string(self):
#         result = has_palindrome_permutation('')
#         self.assertTrue(result)
#
#     def test_one_character_string(self):
#         result = has_palindrome_permutation('a')
#         self.assertTrue(result)
#
#
# unittest.main(verbosity=2)