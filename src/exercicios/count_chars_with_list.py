def count_char(str):
	""" Conta a quantidade de caracteres em uma string
	
		Ex: 
		>>> count_char('abc')
		>>> a: 1
		>>> b: 1
		>>> c: 1
		>>> count_char('abcabc')
		>>> a: 2
		>>> b: 2
		>>> c: 2

		:param str: String a ser contada

	"""
	char_ordened = sorted(str)
	char_prev = char_ordened[0]
	count = 1

	for char in char_ordened[1:]:
		if char == char_prev:
			count += 1
		else:
			print(f'{char_prev}: {count}')
			char_prev = char
			count = 1
	print(f'{char_prev}: {count}')

if __name__ == '__main__':
	count_char('abc')
	print()
	count_char('abcabc')
	
