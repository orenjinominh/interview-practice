import unittest


# O: returns a boolean stating whether the sequence of brackets is correct
# I: a string containing a sequence of openers and closers
# C: input has to be a string, throw an exception if it's not a string
# E: no brackets at all should return true, extra closers should return false
#    empty string = true
# should ignore any non-bracket characters

# Pseudocode:
# look at each character in the stack
# if it's an opener, push it on the stack
# if it's a closer,
#   return false if there's nothing left on the stack
#   pop the last item off the stack
#        if it's unmatched, return false
# if there are still items left on the stack, they're unmatched, return

# if we reach the end of the string without incident, return true


def is_valid(code):
    BRACKETS = {'{': '}',
                '(': ')',
                '[': ']'}

    bracket_stack = []

    for c in code:

        if c in BRACKETS:
            bracket_stack.append(c)

        if c in BRACKETS.values():
            if not len(bracket_stack) or BRACKETS[bracket_stack.pop()] != c:
                return False

    if len(bracket_stack):
        return False

    return True


# Tests
#
# class Test(unittest.TestCase):
#
#     def test_valid_short_code(self):
#         result = is_valid('()')
#         self.assertTrue(result)
#
#     def test_valid_longer_code(self):
#         result = is_valid('([]{[]})[]{{}()}')
#         self.assertTrue(result)
#
#     def test_interleaved_openers_and_closers(self):
#         result = is_valid('([)]')
#         self.assertFalse(result)
#
#     def test_mismatched_opener_and_closer(self):
#         result = is_valid('([][]}')
#         self.assertFalse(result)
#
#     def test_missing_closer(self):
#         result = is_valid('[[]()')
#         self.assertFalse(result)
#
#     def test_extra_closer(self):
#         result = is_valid('[[]]())')
#         self.assertFalse(result)
#
#     def test_empty_string(self):
#         result = is_valid('')
#         self.assertTrue(result)
#
#
# unittest.main(verbosity=2)