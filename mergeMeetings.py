import unittest


# Merge meeting ranges

# O: a list of tuples representing occupied blocks of time (start, end)
# I: a list of tuples
# C: time ranges represented by integers (could be very large integers)
#    ranges not sorted
#    shouldn't mutate input
# E: a time range that could fit inside another time range
#    two ranges that touch but do not overlap
#    zero-length range
#
# Approach:
#   copy input to avoid mutating it
#   Sort meetings by ascending order of the first element in the tuple
#   we will build up our condensed ranges one by one
#   for each meeting in meetings,
#       if it starts before or at the end of the current range
#           update the end of our range if it is less than the end of the meeting
#       otherwise, add our current condensed range to the return list and base our next range on the current meeting


# meetings should be a list of tuples, where each tuple represents a time range (start, end)
# (2, 3)  # Meeting from 10:00 - 10:30 am
# (6, 9)  # Meeting from 12:00 - 1:30 pm
# meetings might be something like [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
#
# returns a similarly formatted list of tuples representing all continuously occupied blocks of time
def merge_ranges(meetings):
    meetings_copy = sorted(meetings)
    condensed_ranges = []

    range_start, range_end = meetings_copy[0]

    for meeting_start, meeting_end in meetings_copy:
        if meeting_start <= range_end:
            range_end = max(range_end, meeting_end)
        else:
            condensed_ranges.append((range_start, range_end))
            range_start = meeting_start
            range_end = meeting_end

    condensed_ranges.append((range_start, range_end))

    return condensed_ranges


# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_meetings_overlap(self):
#         actual = merge_ranges([(1, 3), (2, 4)])
#         expected = [(1, 4)]
#         self.assertEqual(actual, expected)
#
#     def test_meetings_touch(self):
#         actual = merge_ranges([(5, 6), (6, 8)])
#         expected = [(5, 8)]
#         self.assertEqual(actual, expected)
#
#     def test_meeting_contains_other_meeting(self):
#         actual = merge_ranges([(1, 8), (2, 5)])
#         expected = [(1, 8)]
#         self.assertEqual(actual, expected)
#
#     def test_meetings_stay_separate(self):
#         actual = merge_ranges([(1, 3), (4, 8)])
#         expected = [(1, 3), (4, 8)]
#         self.assertEqual(actual, expected)
#
#     def test_multiple_merged_meetings(self):
#         actual = merge_ranges([(1, 4), (2, 5), (5, 8)])
#         expected = [(1, 8)]
#         self.assertEqual(actual, expected)
#
#     def test_meetings_not_sorted(self):
#         actual = merge_ranges([(5, 8), (1, 4), (6, 8)])
#         expected = [(1, 4), (5, 8)]
#         self.assertEqual(actual, expected)
#
#     def test_one_long_meeting_contains_smaller_meetings(self):
#         actual = merge_ranges([(1, 10), (2, 5), (6, 8), (9, 10), (10, 12)])
#         expected = [(1, 12)]
#         self.assertEqual(actual, expected)
#
#     def test_sample_input(self):
#         actual = merge_ranges([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)])
#         expected = [(0, 1), (3, 8), (9, 12)]
#         self.assertEqual(actual, expected)
#
#
# unittest.main(verbosity=2)