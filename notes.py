import re

def multi_re_find(patterns,phrase):
    for pat in patterns:
        print("Searching for pattern {}".format(pat))
        print(re.findall(pat,phrase))
        print('\n')


test_phrase = 'This is a string with numbers 12312 and a symbol #hashtag'

# where s is followed by one or more s and/or one or more d
# test_patterns = ['s[sd]+']

# split any where punctuation marks like !.? are found / remove the punctuation
# test_patterns = ['[^!.?]+']

# return lower case characters
#test_patterns = ['[a-z]+']

# return upper case characters
# test_patterns = ['[A-Z]+']

# return digits
# test_patterns = [r'\d+']

# # return non-digits
# test_patterns = [r'\D+']

# # return whitespace
# test_patterns = [r'\s+']

# # return non-whitespace
# test_patterns = [r'\S+']

# # return a list of alphanumeric characters
# test_patterns = [r'\w+']

# return a list of non-alphanumeric characters
test_patterns = [r'\W+']

multi_re_find(test_patterns,test_phrase)
