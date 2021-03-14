import unittest


class Stack(object):

    def __init__(self):
        """Initialize an empty stack"""
        self.items = []

    def push(self, item):
        """Push a new item onto the stack"""
        self.items.append(item)

    def pop(self):
        """Remove and return the last item"""
        # If the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        """Return the last item without removing it"""
        if not self.items:
            return None
        return self.items[-1]


class MaxStack(object):

    # Implement the push, pop, and get_max methods

    def __init__(self):
        self.stack = Stack()
        self.maxes_stack = Stack()

    def push(self, item):
        self.stack.push(item)
        if item >= self.maxes_stack.peek() or self.maxes_stack.peek == None:
            self.maxes_stack.push(item)

    def pop(self):
        if self.stack.peek() == self.maxes_stack.peek():
            self.maxes_stack.pop()
        return self.stack.pop()

    # Ouput: the largest element in the stack
    # Input: none
    # Constraints: assume stack only holds integers
    # Edge cases: nothing on stack, multiple same size
    def get_max(self):
        return self.maxes_stack.peek()

#
# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_stack_usage(self):
#         max_stack = MaxStack()
#
#         max_stack.push(5)
#
#         actual = max_stack.get_max()
#         expected = 5
#         self.assertEqual(actual, expected)
#
#         max_stack.push(4)
#         max_stack.push(7)
#         max_stack.push(7)
#         max_stack.push(8)
#
#         actual = max_stack.get_max()
#         expected = 8
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.pop()
#         expected = 8
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.get_max()
#         expected = 7
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.pop()
#         expected = 7
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.get_max()
#         expected = 7
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.pop()
#         expected = 7
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.get_max()
#         expected = 5
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.pop()
#         expected = 4
#         self.assertEqual(actual, expected)
#
#         actual = max_stack.get_max()
#         expected = 5
#         self.assertEqual(actual, expected)
#
#
# unittest.main(verbosity=2)