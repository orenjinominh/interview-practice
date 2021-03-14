import unittest


# Find the position of the matching closing parenthesis
# sentence = a string
# opening_paren_index = integer representing location of opening parens we want to match
def get_closing_paren(sentence, opening_paren_index):
    paren_stack = []

    for index in range(opening_paren_index, len(sentence)):

        # if character is '(', store its index on the stack
        if sentence[index] == '(':
            paren_stack.append(index)

        # if character is ')', check if matching parentheses is the one we want
        if sentence[index] == ')':
            matching_index = paren_stack.pop()

            if matching_index == opening_paren_index:
                return index

    # if we get here, there is no matching parentheses!
    raise ValueError("Parentheses unmatched.")

#
# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_all_openers_then_closers(self):
#         actual = get_closing_paren('((((()))))', 2)
#         expected = 7
#         self.assertEqual(actual, expected)
#
#     def test_mixed_openers_and_closers(self):
#         actual = get_closing_paren('()()((()()))', 5)
#         expected = 10
#         self.assertEqual(actual, expected)
#
#     def test_no_matching_closer(self):
#         with self.assertRaises(Exception):
#             get_closing_paren('()(()', 2)
#
#
# unittest.main(verbosity=2)