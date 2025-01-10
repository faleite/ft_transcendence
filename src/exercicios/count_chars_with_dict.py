def count_char(str):
	""" Conta a quantidade de caracteres em uma string
	
		Ex: 
		>>> count_char('abc')
		>>> {'a': 1, 'b': 1, 'c': 1}
		>>> count_char('abcabc')
		>>> {'a': 2, 'b': 2, 'c': 2}

		:param str: String a ser contada

	"""

	result = {}

	for char in  str:
		result[char] = result.get(char, 0) + 1
	
	return (result)

if __name__ == '__main__':
	print(count_char('abc'))
	print()
	print(count_char('abcabc'))
	
