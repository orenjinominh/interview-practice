import unittest


# flight_length: an integer representing the length of the flight in minutes
# movie_lengths: a list of integers representing the length of the movies in minutes
# returns a boolean indicating if there are two different movies that add up to the length of the flight
# (assume passengers will watch exactly two movies)

# My initial approach was to use a set, but I was incorrectly thinking it worked like a multiset / collections.Counter
# I then did a really terrible dictionary implementation
# Here is the ~correct~ set implementation. I didn't think of checking as we *grow* our set, instead of checking as we
# pop items. This seems like a great way to check permutations of items against each other with a lot of potential uses.
def can_two_movies_fill_flight(movie_lengths, flight_length):

    # create a set containing the number of movies of each length. As we add movies, look up if any previously examined
    # movie has the required length (doing it this way prevents us from accidentally comparing a movie against itself)
    movie_lengths_set = set()
    for m in movie_lengths:
        if (flight_length - m) in movie_lengths_set:
            return True
        movie_lengths_set.add(m)

    return False


#
# # Tests
#
# class Test(unittest.TestCase):
#
#     def test_short_flight(self):
#         result = can_two_movies_fill_flight([2, 4], 1)
#         self.assertFalse(result)
#
#     def test_long_flight(self):
#         result = can_two_movies_fill_flight([2, 4], 6)
#         self.assertTrue(result)
#
#     def test_one_movie_half_flight_length(self):
#         result = can_two_movies_fill_flight([3, 8], 6)
#         self.assertFalse(result)
#
#     def test_two_movies_half_flight_length(self):
#         result = can_two_movies_fill_flight([3, 8, 3], 6)
#         self.assertTrue(result)
#
#     def test_lots_of_possible_pairs(self):
#         result = can_two_movies_fill_flight([1, 2, 3, 4, 5, 6], 7)
#         self.assertTrue(result)
#
#     def test_not_using_first_movie(self):
#         result = can_two_movies_fill_flight([4, 3, 2], 5)
#         self.assertTrue(result)
#
#     def test_multiple_movies_shorter_than_flight(self):
#         result = can_two_movies_fill_flight([5, 6, 7, 8], 9)
#         self.assertFalse(result)
#
#     def test_only_one_movie(self):
#         result = can_two_movies_fill_flight([6], 6)
#         self.assertFalse(result)
#
#     def test_no_movies(self):
#         result = can_two_movies_fill_flight([], 2)
#         self.assertFalse(result)
#
#
# unittest.main(verbosity=2)