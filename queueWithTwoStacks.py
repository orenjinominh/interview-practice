import unittest


class QueueTwoStacks(object):
    _intake_stack = []
    _output_stack = []

    # takes any object and puts on intake stack
    # should be able to handle mixed object types
    def enqueue(self, item):
        self._intake_stack.append(item)

    # removes an object from the output stack and returns it
    # if output stack is empty, first moves items from intake stack
    # if both stacks are empty, the queue is empty and pop() will raise a KeyError
    def dequeue(self):

        if len(self._output_stack) == 0:
            while len(self._intake_stack) != 0:
                item = self._intake_stack.pop()
                self._output_stack.append(item)

        # if the queue is empty, this will raise a KeyError
        return self._output_stack.pop()

#
# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_basic_queue_operations(self):
#         queue = QueueTwoStacks()
#
#         queue.enqueue(1)
#         queue.enqueue(2)
#         queue.enqueue(3)
#
#         actual = queue.dequeue()
#         expected = 1
#         self.assertEqual(actual, expected)
#
#         actual = queue.dequeue()
#         expected = 2
#         self.assertEqual(actual, expected)
#
#         queue.enqueue(4)
#
#         actual = queue.dequeue()
#         expected = 3
#         self.assertEqual(actual, expected)
#
#         actual = queue.dequeue()
#         expected = 4
#         self.assertEqual(actual, expected)
#
#     def test_error_when_dequeue_from_new_queue(self):
#         queue = QueueTwoStacks()
#
#         with self.assertRaises(Exception):
#             queue.dequeue()
#
#     def test_error_when_dequeue_from_empty_queue(self):
#         queue = QueueTwoStacks()
#
#         queue.enqueue(1)
#         queue.enqueue(2)
#
#         actual = queue.dequeue()
#         expected = 1
#         self.assertEqual(actual, expected)
#
#         actual = queue.dequeue()
#         expected = 2
#         self.assertEqual(actual, expected)
#
#         with self.assertRaises(Exception):
#             queue.dequeue()
#
#
# unittest.main(verbosity=2)