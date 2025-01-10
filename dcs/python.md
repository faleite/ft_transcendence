## Python

> [To be continued...](https://plataforma.dev.pro.br/26401-01-python-birds/695638-atributo-de-classe) \
> try use module in other file...

### Basics
- `dir()` List all the attributes of an object
- `help()` Get help on a function
- `type()` Get the type of an object
- `list` Uma lista é uma coleção ordenada e mutável de itens
  - ```python
	list = [1, 2, 3] # Create a list
	list.append(4) # Add an element to the end of the list
	list.remove(2) # Remove the first occurrence of an element
	list.pop(0) # Remove the element at the specified index
	list.index(3) # Get the index of the first occurrence of an element
	list.count(3) # Count the number of occurrences of an element
	list.sort() # Sort the list
	list.reverse() # Reverse the list
	list.clear() # Remove all elements from the list
	list.copy() # Return a shallow copy of the list
	```
- `range()` # Generate a sequence of numbers
  - ```python
	range(5) # [0, 1, 2, 3, 4]
	range(1, 5) # [1, 2, 3, 4]
	range(1, 5, 2) # [1, 3]
	```
- `enumerate()` # Get the index and value of each element in a list
  - ```python
	for index, value in enumerate(['a', 'b', 'c']):
		print(index, value)
	```
- `tuple` Uma tupla é uma coleção ordenada e imutável de itens
  - ```python
	tuple = (1, 2, 3) # Create a tuple
	```
- Acesso, Tamanho e Fatiamento
  - ```python
	list = [1, 2, 3]
	list[0] # 1
	list[-1] # 3
	list[1:3] # [2, 3]
	```
- `for` loop
  - ```python
	for i in range(5):
		print(i)
	```
  - ```python
  	for i, value in enumerate(['a', 'b', 'c']):
		print(i, value);
	```
- `dict` (map/hash_table) Um dicionário é uma coleção desordenada, mutável e indexada de itens
  - ```python
	dict = {'key1': 'value1', 'key2': 'value2'}
	dict['key1'] # 'value1'
	dict['key3'] = 'value3' # Add a new item
	dict.pop('key2') # Remove an item
	del dict['key1'] # Remove an item
	```
  - ```python
    dict = {'key1': 'value1', 'key2': 'value2'}
	for key, value in dict.items():
		print(key, value)
	```
  - ```python
	dict = {'key1': 'value1', 'key2': 'value2'}
	for key in dict.keys():
		print(key)
	```
  - ```python
	dict = {'key1': 'value1', 'key2': 'value2'}
	for value in dict.values():
		print(value)
	```
  - ```python
	dict = {'key1': 'value1', 'key2': 'value2'}
	dict.get('key1') # 'value1'
	dict.get('key3', 'default') # 'default'
	```
  - ```python
    dict = {'key1': 'value1', 'key2': 'value2'}
	'key1' in dict # True
	# in can also be used with lists and tuples
	```

### Functions
#### function with no arguments
- `def` # Define a function
- ```python
  def hello_world():
  	return 'Hello World'
  type(hello_world) # <class 'function'>
  ```
- ```python
  def hello_world():
  	pass
  result = hello_world()
  tyupe(result) # <class 'NoneType'> # null
  print(result) # None
  ```
#### function with arguments
- ```python
  def hello_world(name):
  	print('Hello', name)
  ```
- ```python
  def hello(name, lastname):
  	return f'Hello {name} {lastname}'
  hello('John', 'Doe') # 'Hello John Doe'
  ```
- ```python
  def hello(name, lastname='Doe'): # lastname is a default argument
  	return f'Hello {name} {lastname}'
  hello('John') # 'Hello John Doe'
  hello('John', 'Smith') # 'Hello John Smith'
  hello(lastname='Smith', name='John') # 'Hello John Smith'
  ```
#### function with variable number of arguments
- ```python
  def sum(*args):
  	total = 0
  	for arg in args:
  		total += arg
  	return total
  sum(1, 2, 3) # 6
  type(args) # <class 'tuple'>
  ```
#### function with keyword arguments
- ```python
  def hello(**kwargs):
  	print('Hello', kwargs['name'])
  hello(name='John') # 'Hello John'
  type(kwargs) # <class 'dict'>
  ```
#### function with variable number of keyword arguments	
- ```python
  def hello(**kwargs):
  	print('Hello', kwargs['name'], kwargs['lastname'])
  hello(name='John', lastname='Doe') # 'Hello John Doe'
  ```
#### function with all types of arguments
- ```python
  def hello(name, *args, **kwargs):
  	print('Hello', name)
  	for arg in args:
  		print(arg)
  	for key, value in kwargs.items():
  		print(key, value)
  hello('John', 'Doe', 'Smith', lastname='Johnson', age=30)
  # Hello John
  # Doe
  # Smith
  # lastname Johnson
  # age 30
  ```
#### unpacking arguments
- ```python
  args = [1, 2, 3]
  kwargs = {'name': 'John', 'lastname': 'Doe'}
  def hello(*args, **kwargs):
  	print(args)
	print(kwargs)
  hello(*args, **kwargs)
  # (1, 2, 3)
  # {'name': 'John', 'lastname': 'Doe'}
  hello(args, kwargs)
  # ([1, 2, 3], {'name': 'John', 'lastname': 'Doe'})
  # {}
  ```
#### destructuring
- ```python
  def hello():
  	return 'John', 'Doe'
  name, lastname = hello()
  name # 'John'
  lastname # 'Doe'
  ```

### Modules
- `module` math.py
  - ```python
	def sqrt(number):
		return number ** 0.5
	
	if __name__ == '__main__': # Run the code only if the module is executed as the main program
		print(sqrt(16))
	```
- `import` # Import a module
- ```python
  import math
  math.sqrt(16) # 4.0
  ```

  ### [Classes](../src/oo/pessoa.py)
  